const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";
const cacheAssets = [
    // Storing the request URLS <-- use relative path, add assets to the cache
    "/",
    "https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    // Icons
    "fallback.html",
    "404.html",
    "index.html",
    // 'about.html',
    // '/css/style.css',
    // '/js/main.js'
];
self.addEventListener("install", evt => { // Reinstalled whenever the file is changed and saved
    console.log("Service Worker: installed");
});
writeToConsole = false; //for debugging
consoleLog = function (message) {
    if (writeToConsole) {
        console.log(message);
    }
};
const limitCacheSize = (name, size) => { // limit caches 
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};
self.addEventListener("activate", evt => { // Activate service worker
    // console.log("Service Worker: activated");
        evt.waitUntil( // Remove unwanted caches
            caches.keys().then(keys => {
                // console.log(keys);
                return Promise.all(keys
                    .filter(key => key !== staticCacheName && dynamicCacheName)
                    .map(key => caches.delete(key))
                );
            })
        );
    }
);
self.addEventListener("fetch", evt => { // Call fetch event
    // console.log('Service Worker: fetching');
    evt.respondWith(
    //     fetch(evt.request).catch(() => caches.match(evt.request))
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes =>  {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCacheName, 15); // Limit cache size
                    return fetchRes;
                });
            });
            // Change the match later
        }).catch(() => {
            if(evt.request.url.indexOf(".html") > -1){ // Check if it's a html file <-- can also check other types
                return caches.match("fallback.html");
            } // Check if it's a png and other resource types
        })
    );
});
self.addEventListener("install", evt => { // Call install event
    // console.log("Service Worker: installed");
    evt.waitUntil(
        caches
            .open(staticCacheName)
            .then(cache => {
                // console.log("Service Worker: caching files");
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});