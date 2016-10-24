using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Gradventure.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Gradventure()
        {
            ViewBag.Message = "Your gradventure page.";

            return View();
        }

        public ActionResult Question1()
        {
            ViewBag.Message = "Your gradventure page.";

            return View();
        }

        public ActionResult Question2()
        {
            ViewBag.Message = "Your gradventure page.";

            return View();
        }

        public ActionResult Question3()
        {
            ViewBag.Message = "Your gradventure page.";

            return View();
        }

        public ActionResult Question4()
        {
            ViewBag.Message = "Your gradventure page.";

            return View();
        }

        public ActionResult Question5()
        {
            ViewBag.Message = "Your gradventure page.";

            return View();
        }
    }
}