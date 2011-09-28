using Nancy;

namespace Dokuku.Web.Module
{
    public class CssModule:NancyModule
    {
        public CssModule()
            : base("/stylesheets")
        {
            Get[@"/styles.css"] = x =>
            {
                return Response.AsCss(string.Format("stylesheets/styles.css"));
            };
        }
    }
}