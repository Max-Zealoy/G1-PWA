
  // static cache version 1
const STATIC_CACHE = 'static-cache-v1'

// this scope in a worker is called 'self'
self.addEventListener('install', evt => {
console.log('[Service Worker] installing');

  // the service workers behaviour is to sleep when not working.
  // waitUntil() makes sure the worker is awake until this is finished
  evt.waitUntil(installEvent())
})


// add app shell to cache
async function installEvent() {
    let cache = await caches.open(STATIC_CACHE)
    await cache.addAll([
      '/',
      '../index.html',
      '/App.css',
      '/main.jsx'
    ])
  }


  // updated static and dynamic cache to version 2
const STATIC_CACHE = 'static-cache-v2'
const DYNAMIC_CACHE = 'dynamic-cache-v2'

self.addEventListener('activate', evt => {
  evt.waitUntil(activateEvent())
  console.log('[Service Worker] activating');

})

async function activateEvent() {
  // get all caches
  let cacheKeys = await caches.keys()

  // remove old cache
  cacheKeys = cacheKeys.filter(cache => (cache != STATIC_CACHE && cache != DYNAMIC_CACHE))
  await Promise.all(cacheKeys.map(cache => caches.delete(cache)))
}


const DYNAMIC_CACHE = 'dynamic-cache-v2'

self.addEventListener('fetch', evt => {
  // only handle GET
   // default behaviour of a service worker
    // is to sleep between events. 
  if(evt.request.method != 'GET') return

  e.respondWith(onFetch(evt))
})

async function onFetch(evt) {

    if(navigator.onLine) {

  // try to fetch response and cache it
  try {
    let res = await fetch(evt.request)
    let cache = await caches.open(DYNAMIC_CACHE)

    // need to clone the response, else it'll get consumed
    // and cannot be sent back to the client
    if(!evt.request.url.endsWith('.png') && 
    !evt.request.url.endsWith('.jpg') && 
    !evt.request.url.endsWith('.jpeg') && 
    !evt.request.url.endsWith('.gif')) {
    await cache.put(evt.request, res.clone())
 }

    return res
  } 
   catch {
    // if offline, return the cached response
    return await caches.match(evt.request)
  }
}

}