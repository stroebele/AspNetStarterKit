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
        public SampleController(ISample sampleObj)
        {
            _sampleObj = sampleObj;
        }
        //public SampleController()
        //{
        //    _sampleObj = new SampleObj();
        //}
        [AllowAnonymous]
        public IHttpActionResult Get()
        {
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
