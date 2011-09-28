using Nancy;

namespace Dokuku.Web.Module
{
    public class AppModule:NancyModule
    {
        public AppModule()
            : base("/app")
        {
            Get[@"/{name}"] = x =>
            {
                return Response.AsJs(string.Format("app/{0}", (string)x.name));
            };
            
        }
    
    }
}