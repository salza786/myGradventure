using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Gradventure.Startup))]
namespace Gradventure
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
