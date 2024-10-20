const CACHE_NAME = 'v1';  // 캐시 이름
const CACHE_ASSETS = [
  '/assets/assets/images/class/a_pacemaker_rhythm.png',
  '/assets/assets/images/class/accelerated_idioventricular_rhythm.png',
  // 다른 파일 경로들도 여기에 추가하세요.
];

// 설치 이벤트: 캐시할 파일들을 저장
self.addEventListener('install', (event) => {
  self.skipWaiting();  // 새로운 Service Worker를 바로 활성화
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(CACHE_ASSETS)
        .then(() => console.log('All files cached successfully'))
        .catch((error) => console.error('Failed to cache some files:', error));
    })
  );
});

// 활성화 이벤트: 이전 캐시를 삭제하고 새로운 캐시를 사용
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
});

// fetch 이벤트: 캐시된 파일이 있으면 제공하고, 없으면 네트워크에서 가져옴
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
