// يخزّن ملفات التطبيق عشان يشتغل بدون إنترنت.
// ملفات التطبيق: يجيب الأحدث من النت أولًا، ولو ما فيه نت يستخدم النسخة المخزّنة
// (يعني أي تعديل على app.js يوصل تلقائيًا بدون ما تغيّر شي هنا).
// اسم مخزن مستقل لكل مجلد (كل عميل)، عشان ما تتداخل النسخ
const CACHE = 'huroof-v1-' + self.registration.scope;
const FILES = ['./', './index.html', './app.js', './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // الخط العربي من Google Fonts: من المخزّن أولًا
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
      }))
    );
    return;
  }

  // ملفات التطبيق: من النت أولًا ثم المخزّن
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
    );
  }
});
