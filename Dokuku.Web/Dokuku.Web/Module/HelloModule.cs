using Nancy;

namespace Dokuku.Web.Module
{
    public class HelloModule : NancyModule
    {
        public HelloModule()
        {
            Get["/"] = parameters => { return View["index"]; };
            Get["/hello/{name}"] = parameters =>
            {
                return "Hello " + parameters.name;
            };
        }
    }
}