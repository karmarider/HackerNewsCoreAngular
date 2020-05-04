using HackerNewsCoreAngular.Controllers;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Net.Http;
using Xunit;

namespace HackerNewsCoreAngularXUnitTests
{
    public class LatestStoriesControllerUnitTests
    {
        private static HttpClient client = new HttpClient();
        private IMemoryCache cache;

        private IMemoryCache GetSystemUnderTest()
        {
            var services = new ServiceCollection();
            services.AddMemoryCache();
            var serviceProvider = services.BuildServiceProvider();

            var memoryCache = serviceProvider.GetService<IMemoryCache>();
            return memoryCache;
        }

        [Fact]
        public async void LatestStoriesControllerUnitTestAsync()
        {
            var cache = GetSystemUnderTest();
            var controller = new LatestStoriesController(cache);

            var response = await controller.GetAsync("");

            Assert.True(response.Count() == 500);
        }
    }
}
