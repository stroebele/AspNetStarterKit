using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;
using NLog;
using Newtonsoft.Json;
using System.Text;

namespace StarterKit.App_Start
{
    public class UnhandledExceptionsLogger : ExceptionFilterAttribute
    {
        readonly NLog.Logger _logger;

        public UnhandledExceptionsLogger()
        {
            _logger = LogManager.GetCurrentClassLogger();
        }

        public override void OnException(HttpActionExecutedContext context)
        {

            StringBuilder sb = new StringBuilder();
            sb = sb.AppendFormat("Top level exception doing a {0} to url {1}", context.Request.Method, context.Request.RequestUri);

                
            _logger.FatalException(sb.ToString(), context.Exception);
        }

        

       
    }
}