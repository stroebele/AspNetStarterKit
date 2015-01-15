using Ninject.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Security.Claims;

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
        //[Authorize]
       [Authorize(Roles="Trucker")]
         public IHttpActionResult Get()
        {
            _logger.Debug("Hello world");
            return Ok(_sampleObj.GetData());
        }

        [AllowAnonymous]
        [Route("throw")]
        public IHttpActionResult GetThrow()
        {
            throw new NotImplementedException("Ain't nobody got time for that");
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
