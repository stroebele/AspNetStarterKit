using Ninject.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StarterKit.Controllers
{
    [RoutePrefix("api/Sample")]
    public class SampleController : ApiController
    {
        ISample _sampleObj;
        ILogger _logger; 
        public SampleController(ISample sampleObj, ILogger logger)
        {
            _sampleObj = sampleObj;
            _logger = logger;
            
        }
        [AllowAnonymous]
        public IHttpActionResult Get()
        {
            _logger.Debug("Hello world");
            return Ok(_sampleObj.GetData());
        }
 
    }

    public interface ISample
    {
        string GetData();
    }

    public class SampleObj: ISample
    {

        public string GetData()
        {
            return "Sample Obj reporting in";
        }
    }
 
}
