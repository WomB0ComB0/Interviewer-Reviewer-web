// Reinstalled whenever the file is changed and saved
self.addEventListener('install', evt => {
    console.log('Service Worker: installed');
});

// Add assets to the cache
const cacheName = 'v1';
const cacheAssets = [
    // 'index.html',
    // 'about.html',
    // '/css/style.css',
    // '/js/main.js'
];

// Activate service worker
self.addEventListener('activate', evt => {
    console.log('Service Worker: activated');
        // Remove unwanted caches
        evt.waitUntil(
            caches.keys().then(keys => {
                return Promise.all(keys
                    .filter(key => key !== cacheName)
                    .map(key => caches.delete(key))
                );
            })
        );
    }
);

// Call fetch event
self.addEventListener('fetch', evt => {
    console.log('Service Worker: fetching');
    evt.respondWith(
        fetch(evt.request).catch(() => caches.match(evt.request))
    );
});

// Call install event
self.addEventListener('install', evt => {
    console.log('Service Worker: installed');
    evt.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: caching files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});