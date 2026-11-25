/* BloomQuest offline cache. Bump VERSION whenever any file changes. */
const VERSION = 'bloomquest-v1.0.0';
const FILES = [
  './', './index.html', './manifest.webmanifest', './fonts.css',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png',
  "./fonts/Caveat-700-latin-ext.woff2",  "./fonts/Caveat-700-latin.woff2",  "./fonts/DMSans-500-latin-ext.woff2",  "./fonts/DMSans-500-latin.woff2",  "./fonts/DMSans-700-latin-ext.woff2",  "./fonts/DMSans-700-latin.woff2",  "./fonts/Nunito-400-latin-ext.woff2",  "./fonts/Nunito-400-latin.woff2",  "./fonts/Nunito-600-latin-ext.woff2",  "./fonts/Nunito-600-latin.woff2",  "./fonts/Nunito-700-latin-ext.woff2",  "./fonts/Nunito-700-latin.woff2",  "./fonts/Nunito-800-latin-ext.woff2",  "./fonts/Nunito-800-latin.woff2",
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* cache first: the app never needs the network after the first visit */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, {ignoreSearch: true}).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))
  );
});
