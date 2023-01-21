chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var blocked_urls = ["https://www.example1.com", "https://www.example2.com"];
        for (var i = 0; i < blocked_urls.length; i++) {
            if (details.url.indexOf(blocked_urls[i]) != -1) {
                return {cancel: true};
            }
        }
    },
    {urls: ["http://*/*","https://*/*"]}
);
