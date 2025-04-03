self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('moon&moss-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/sw.js',
                // '/assets/personaje.png',
                // '/assets/ropa1.png',
                // '/assets/ropa2.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
