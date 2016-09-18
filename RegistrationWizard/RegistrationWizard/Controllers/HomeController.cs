using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RegistrationWizard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult RegisterMain()
        {
            return PartialView("_MainInfo");
        }
        public PartialViewResult RegisterType()
        {
            return PartialView("_RegisterType");
        }
        public PartialViewResult RegiserAddress()
        {
            return PartialView("_RegiserAddress");
        }
    }
}