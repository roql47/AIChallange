const CACHE_NAME = 'v1';  // 캐시 이름
const CACHE_ASSETS = [
  // 캐시할 파일들의 URL을 추가
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/drug/adenosine.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/drug/amiodarone.png',
  // 필요한 다른 이미지 추가
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_ASSETS);  // 캐시할 파일 추가
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);  // 캐시에서 응답 반환 또는 네트워크 요청
    })
  );
});
