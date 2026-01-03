// Nom du cache
const CACHE_NAME = 'minecraft-like-v1';

// Fichiers à mettre en cache pour jouer hors ligne
const FILES = [
  './',
  './index.html',
  './manifest.json'
];

// Installer le service worker et mettre les fichiers en cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

// Intercepter les requêtes et renvoyer les fichiers en cache si disponible
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
