/* PROMAXIS service worker — makes the app open and work with no internet.
   Strategy: the app page is "network first" (you always get the newest version when online,
   and the saved copy when offline); fonts and the Excel library are cached the first time
   they load and reused after that. Google sign-in / Drive calls are never touched. */
const CACHE = 'promaxis-v4.7.1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
const XLSX_URL = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
const CACHEABLE_HOSTS = ['cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e=>{
  e.waitUntil((async()=>{
    const c = await caches.open(CACHE);
    await Promise.all(CORE.map(u=>c.add(u).catch(()=>{})));
    try{ await c.add(new Request(XLSX_URL, {mode:'no-cors'})); }catch(err){}
    self.skipWaiting();
  })());
});
self.addEventListener('activate', e=>{
  e.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.filter(k=>k.indexOf('promaxis-')===0 && k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e=>{
  const req = e.request;
  if(req.method!=='GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin===self.location.origin;
  if(!sameOrigin && CACHEABLE_HOSTS.indexOf(url.hostname)===-1) return;   /* Google sign-in, Drive etc.: straight to the network */
  if(req.mode==='navigate' || (sameOrigin && /\.(html|webmanifest|js)$/.test(url.pathname))){
    e.respondWith((async()=>{
      try{
        const fresh = await fetch(req);
        if(fresh && fresh.ok){ const c = await caches.open(CACHE); c.put(req, fresh.clone()); }
        return fresh;
      }catch(err){
        const hit = await caches.match(req, {ignoreSearch:true}) || await caches.match('./index.html') || await caches.match('./');
        if(hit) return hit;
        throw err;
      }
    })());
    return;
  }
  e.respondWith((async()=>{
    const hit = await caches.match(req);
    const net = fetch(req).then(res=>{ if(res && (res.ok || res.type==='opaque')){ caches.open(CACHE).then(c=>c.put(req, res.clone())); } return res; }).catch(()=>null);
    return hit || (await net) || Response.error();
  })());
});
