using System;
using System.Linq;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using StarterKit.Auth;
using Ninject;
using System.Reflection;
using StarterKit.App_Start;
using Microsoft.Owin.StaticFiles;
using Microsoft.Owin.FileSystems;

namespace StarterKit
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


            app.UseFileServer(new FileServerOptions()
            {
                RequestPath = new PathString(@"/"),
                FileSystem = new PhysicalFileSystem(@".\www"),
            });
        }
        
        public void ConfigureOAuth(IAppBuilder app)
        {
            OAuthAuthorizationServerOptions oAuthServerOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                Provider = new SimpleAuthorizationServerProvider()
            };

            // Token Generation
            app.UseOAuthAuthorizationServer(oAuthServerOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
           

        }
    }
}