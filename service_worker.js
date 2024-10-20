const CACHE_NAME = 'v1';  // 캐시 이름
const CACHE_ASSETS = [
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/a_pacemaker_rhythm.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/accelerated_idioventricular_rhythm.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/anterior_fascicular_block.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/anterior_infarction_(lad).png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/aortic_dissection.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/asystole.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/atrial_fibrillation.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/atrial_flutter.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/atrial_premature_contraction.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/avrt.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/brugada_syndrome.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/complete_degree_block.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/early_repolarization_syndrome.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/first_degree_block.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/hyperkalemia.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/inferior_infarction_(rca).png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/junctional_escape_rhythm.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/left_bundle_branch_block.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/left_ventricle_hypertrophy.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/long_qt_syndrome.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/old_mi.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/posterior_fascicular_block.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/right_bundle_branch_block.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/second_degree_block_(mobitz_type_i).png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/second_degree_block_(mobitz_type_ii).png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/septic_shock.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/sinus_bradycardia.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/sinus_rhythm.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/sinus_tachycardia.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/stress_induced_cmp.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/svt.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/trifascicular_block.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/ventricular_fibrillation.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/ventricular_premature_contraction.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/ventricular_tachycardia.png',
  'https://raw.githubusercontent.com/roql47/AIChallange/master/assets/assets/images/class/wellens_syndrome.png'
];

// 설치 이벤트: 캐시할 파일들을 저장
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(CACHE_ASSETS);  // 캐시할 파일 추가
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
