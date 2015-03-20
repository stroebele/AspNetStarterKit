using System;
using System.Linq;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using Ninject;
using System.Reflection;
using StarterKit.Api.App_Start;
using Microsoft.Owin.StaticFiles;
using Microsoft.Owin.FileSystems;
using Thinktecture.IdentityServer.AccessTokenValidation;
using Tsl.AuthorizationManager;
using System.Collections.Generic;
using Tsl.ConfigReader;

namespace StarterKit.Api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureOAuth(app);
            HttpConfiguration config = new HttpConfiguration();
            config.Filters.Add(new UnhandledExceptionsLogger());
            WebApiConfig.Register(config);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            NinjectConfig.SetupNinjectMiddlewareAndWebApi(app, config);
            app.UseWebApi(config);
            app.UseStaticFiles();

        }
        
        public void ConfigureOAuth(IAppBuilder app)
        {
            app.UseResourceAuthorization(new AuthorizationManager(new MyResourceClaimRepo(),null));
            var config = new ConfigFileSectionReader("dataProviders");

            app.UseIdentityServerBearerTokenAuthentication(
            new IdentityServerBearerTokenAuthenticationOptions
            {
                Authority = config.GetItem("Authority"),
                RequiredScopes = new[] { config.GetItem("RequiredScopes") }
            });
        }
    }


    public class MyResourceClaimRepo : IResourceClaimRepo
    {
        public IEnumerable<AuthorizationData.ClaimData> GetClaims(string resourceName, string actionName)
        {
            var adminClaims = new AuthorizationData.ClaimData[]
                    {
                        new AuthorizationData.ClaimData("company", "TSL"),
                        //new AuthorizationData.ClaimData("role", "TestRole")
                    };


            var allResourceClaims = new AuthorizationData[]
            {
                new AuthorizationData()
                {
                    ResourceName = "UserInfoLock",
                    ActionName = "Write",
                    AllowedClaims = adminClaims
                },
                new AuthorizationData()
                {
                    ResourceName = "SteamshipEmail",
                    ActionName = "Read",
                    AllowedClaims = adminClaims
                },
                new AuthorizationData()
                {
                    ResourceName = "BookingQueue",
                    ActionName = "Read",
                    AllowedClaims = adminClaims
                },
                new AuthorizationData()
                {
                    ResourceName = "RequestStatus",
                    ActionName = "Write",
                    AllowedClaims = adminClaims
                }
            };

            var allowedClaims = allResourceClaims.Where(x => x.ResourceName == resourceName && x.ActionName == actionName).SelectMany(x => x.AllowedClaims);
            return allowedClaims;
        }
    }
}