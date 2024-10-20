const CACHE_NAME = 'v2';  // 캐시 이름을 새로운 버전으로 변경
const CACHE_ASSETS = [
  '/assets/assets/images/class/a_pacemaker_rhythm.png',
  '/assets/assets/images/class/accelerated_idioventricular_rhythm.png',
  // 다른 파일 경로들 추가...
];

self.addEventListener('install', (event) => {
  self.skipWaiting();  // Service Worker를 즉시 활성화
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return Promise.all(
        CACHE_ASSETS.map((url) => {
          return fetch(url).then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch ' + url + ': ' + response.status);
            }
            return cache.put(url, response);
          }).catch((error) => {
            console.error('Failed to cache file:', url, error);
          });
        })
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();  // 활성화 후 즉시 컨트롤
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
