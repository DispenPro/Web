const CACHE_NAME = 'dispenpro-asturias-v1.2';
const urlsToCache = [
    '/',
    '/css/styles.css',
    '/js/script.js',
    '/js/lazy-loading.js',
    '/paginas/Dispenpro-catalogo.html',
    '/paginas/servicios/oviedo.html',
    '/paginas/servicios/gijon.html',
    '/paginas/servicios/aviles.html',
    '/img/icon.ico',
    // Añadir imágenes críticas aquí
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache abierto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptar peticiones
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - devolver respuesta
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function(response) {
                        // Verificar si la respuesta es válida
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clonar la respuesta
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

// Limpiar cache viejo
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});