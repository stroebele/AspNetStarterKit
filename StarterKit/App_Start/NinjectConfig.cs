using Owin;
using System;
using System.Linq;
using Ninject;
using Ninject.Web.Common.OwinHost;
using Ninject.Web.WebApi.OwinHost;
using System.Web.Http;
using StarterKit.Controllers;

namespace StarterKit
{
    public class NinjectConfig
    {
        public static void SetupNinjectMiddlewareAndWebApi(IAppBuilder app, HttpConfiguration config)
        {
            app.UseNinjectMiddleware(CreateKernel);
            app.UseNinjectWebApi(config);
        }
 
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
 
            CreateBindings(kernel);
            return kernel;
        }
 
        private static void CreateBindings(IKernel kernel)
        {
            kernel.Bind<ISample>().To<SampleObj>();
        }
    }
}