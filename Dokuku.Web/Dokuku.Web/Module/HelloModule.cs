using Nancy;

namespace Dokuku.Web.Module
{
    public class HelloModule : NancyModule
    {
        public HelloModule()
        {
            Get["/"] = parameters => "Hello World";
            Get["/hello/{name}"] = parameters =>
            {
                return "Hello " + parameters.name;
            };

        }
    }
}