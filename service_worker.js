const CACHE_NAME = 'v1';
const CACHE_ASSETS = [
  '/assets/assets/images/class/a_pacemaker_rhythm.png',
  '/assets/assets/images/class/accelerated_idioventricular_rhythm.png',
  // 여기에 다른 파일 경로도 추가할 수 있습니다
];

// 설치 이벤트: 캐시할 파일들을 저장
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(CACHE_ASSETS)
        .then(() => console.log('All files cached successfully'))
        .catch((error) => console.error('Failed to cache some files:', error));
    })
  );
});

// 요청에 대한 응답을 캐시에서 제공
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
