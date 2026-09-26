// Suíça em Família — service worker
// Estratégia: network-first (atualizações chegam rápido) com fallback offline (funciona sem sinal).
// Navegação/index: busca na rede com timeout de 3 s e sem cache HTTP; se falhar, usa o cache.
// Para forçar uma atualização nos celulares, basta mudar CACHE_VERSION abaixo.

const CACHE_VERSION = 'suica-v32';
const NET_TIMEOUT_MS = 3000;
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// fetch com timeout: rejeita se a rede demorar mais que `ms`.
function fetchWithTimeout(req, opts, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    fetch(req, opts).then(
      (res) => { clearTimeout(timer); resolve(res); },
      (err) => { clearTimeout(timer); reject(err); }
    );
  });
}

function putInCache(req, res) {
  const copy = res.clone();
  caches.open(CACHE_VERSION).then((c) => c.put(req, copy)).catch(() => {});
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Google Fonts e afins: rede primeiro, cacheia o que der (inclusive respostas opacas).
  // Se a rede falhar, devolve do cache se houver — senão, falha silenciosa.
  if (url.origin !== self.location.origin) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok || res.type === 'opaque') putInCache(req, res);
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  const isNavigation = req.mode === 'navigate' ||
    url.pathname.endsWith('/') || url.pathname.endsWith('/index.html');

  // Navegação/index: network-first com timeout de 3 s e sem cache HTTP.
  if (isNavigation) {
    event.respondWith(
      fetchWithTimeout(req, { cache: 'no-cache' }, NET_TIMEOUT_MS)
        .then((res) => {
          if (res.ok) {
            putInCache(req, res);
            return res;
          }
          return caches.match(req).then((r) => r || caches.match('./index.html')).then((r) => r || res);
        })
        .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // Demais recursos do próprio app: network-first.
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) putInCache(req, res);
        return res;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
  );
});
