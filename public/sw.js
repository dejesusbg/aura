const CACHE_NAME = "static-cache";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "index.html",
        "css/main.css",
        "css/monet.css",
        "css/styles.css",
        "css/typography.css",
        "fonts/Excon-Variable.woff2",
        "fonts/Void-Regular.woff2",
        "js/bundle.js",
        "assets/logo.png",
        "assets/favicon.ico",
        "assets/apple-touch-icon.png",
        "manifest.json",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
