using Nancy;

namespace Dokuku.Web.Module
{
    public class SenchaModule:NancyModule
    {
        public SenchaModule()
            : base("/senchalib")
        {
            Get[@"/sencha-touch.js"] = x =>
            {
                return Response.AsJs(string.Format("senchalib/sencha-touch.js"));
            };

            Get[@"/sencha-touch.css"] = x =>
            {
                return Response.AsCss(string.Format("senchalib/sencha-touch.css"));
            };
        }
    }
}