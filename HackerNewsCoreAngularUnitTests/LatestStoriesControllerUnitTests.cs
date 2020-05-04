using System.Net.Http;
using HackerNewsCoreAngular.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Extensions.Caching.Memory;

namespace HackerNewsCoreAngularUnitTests
{
    [TestClass]
    public class LatestStoriesControllerUnitTests
    {
        private static HttpClient client = new HttpClient();
        private IMemoryCache cache;

        [TestMethod]
        public void LatestControllerUnitTest()
        {
            var controller = new LatestStoriesController(cache);

            var response = controller.GetAsync
        }
    }
}
