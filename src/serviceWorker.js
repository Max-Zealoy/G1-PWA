
// this scope in a worker is called 'self' 

self.addEventListener('install', evt => {
  console.log('[Service Worker] installing');

  // activate immediately
  self.skipWaiting()
})

self.addEventListener('activate', evt => {
  console.log('[Service Worker] activating');

  // start 'fetch'-event immediately
  evt.waitUntil(clients.claim())
})

self.addEventListener('fetch', evt => {
  // default behaviour of a service worker
  // is to sleep between events. 

  // to prevent the service worker from sleeping
  // before the fetch-handler is complete
  // we can use the method evt.respondWith(), that
  // keep the worker awake until complete
  evt.respondWith(onFetch(evt))
})

async function onFetch(evt) {
  // if online, fetch response and save to cache
  if(navigator.onLine) {
    // fetch response with the request
    let response = await fetch(evt.request)

    let cache = await caches.open('dynamic-cache')

    // save response to cache, as key/value

    // we must clone the response, else it
    // gets consumed and cannot be returned 
    // to the client

    // don't cache images from this url
    if(!evt.request.url.endsWith('.png') && 
       !evt.request.url.endsWith('.jpg') && 
       !evt.request.url.endsWith('.jpeg') && 
       !evt.request.url.endsWith('.gif')) {
      cache.put(evt.request, response.clone())
    }

    return response
  }

  // if offline, return response from cache
  else {
    return await caches.match(evt.request)
  }
}