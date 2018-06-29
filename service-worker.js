/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","de6af67d59f866ef00f9dba3c477c407"],["assets/css/modules/_all.scss","5aa40b1944307c3b20ba0b319e56e66f"],["assets/css/modules/_mixins.scss","b3dc753c14a093a3c5499c07bc65d48e"],["assets/css/modules/_variables.scss","c2d47a3c960d5e7c8f5ff75558eec7eb"],["assets/css/old_style.css","a6db820605371872adfc42d4910a9304"],["assets/css/partials/_about.scss","02d3592937da678c441d00a0deaffc3d"],["assets/css/partials/_all.scss","1ea3cd235b9f2629e3a92e219c72361e"],["assets/css/partials/_contact.scss","3ebfed3ea82bb9e00b5a49142bf80d5b"],["assets/css/partials/_disclaimer.scss","08cbe34a210b5394b2a71e6141e8ef8b"],["assets/css/partials/_faq.scss","238f09e9daae9cf3b67eab4540e334e6"],["assets/css/partials/_footer.scss","f440ec092154ef6abeabdf292e8980a6"],["assets/css/partials/_header.scss","025a324da1c7b60de357d2b7ce66ae22"],["assets/css/partials/_interstice.scss","5c5b8869c33e4273a27ad19cad4bde6a"],["assets/css/partials/_main.scss","ec3084b63f371c7254588f62f51a3b80"],["assets/css/partials/_navbar.scss","192da0e1eadeb4d80b6ed857b9350db4"],["assets/css/partials/_news.scss","289077a6ada070b3dd54a2fa07df6542"],["assets/css/partials/_show.scss","2f385af2441122c48a85122efa1f9ad7"],["assets/css/style.css","ff1ddd1ab12f5493b66cc0b5b182e471"],["assets/css/style.css.map","3907eec7f9e0d32e12de2416a72293d0"],["assets/css/style.min.css","44235ba0403a99b68a4043c996087220"],["assets/css/style.min.css.map","794014f5fd39451e867470bc89a407ba"],["assets/css/style.scss","3e9b005b0a0c1370f9dbcb93cb631dbf"],["assets/css/vendors/bootstrap-grid.css","5ab32241c472addf14a92d74134eaf1e"],["assets/css/vendors/bootstrap-grid.css.map","622b296beb2afca293e90ab5ba6db14f"],["assets/css/vendors/bootstrap-grid.min.css","e892a92ad5a2e8e5ebc5c2a07f74ee3b"],["assets/css/vendors/bootstrap-grid.min.css.map","a79533cec9980bfa1d99928dd3a81d53"],["assets/css/vendors/bootstrap-reboot.css","bed792ba52e4aed59a5804afbd0d3621"],["assets/css/vendors/bootstrap-reboot.css.map","196fde56f0710e83886b21f5c7ee389e"],["assets/css/vendors/bootstrap-reboot.min.css","2283ad1f0381dbe695fb5f7406d254af"],["assets/css/vendors/bootstrap-reboot.min.css.map","dd0692f26351a6c9ef99e9b342a7da6b"],["assets/css/vendors/bootstrap.css","609508fcdcdb45f59b77da33b405edbc"],["assets/css/vendors/bootstrap.css.map","7f22dc40aa22dc514eaf73c8d619e8bd"],["assets/css/vendors/bootstrap.min.css","e59aa29ac4a3d18d092f6ba813ae1997"],["assets/css/vendors/bootstrap.min.css.map","ea6c3c97d126f9996d7cc206f2df625b"],["assets/img/logo_fondation_roi_baudouin.jpg","f1f43961388618f1f19ebfbf40c0a9a6"],["assets/img/logo_repair_cafe.jpg","8069044721af48a8ad3bce9fe70da1cf"],["assets/img/photo_1.jpg","fdd6fb020835b2ff2820fff92951091c"],["assets/img/photo_1_bluish.jpg","c6fe330bb7f85d9376e7e8e3eab49ef9"],["assets/img/photo_2.jpg","5b65bb4a0c8f0b86f2ce337d00c6c519"],["assets/img/photo_2_bluish.jpg","ac8a2b3e4ed52481b356a74ffa60379d"],["assets/img/photo_3.jpg","b73288d36f87339dc05719cc8b484adb"],["assets/img/photo_3_bluish.jpg","4df0240d3533cc35196395974d113455"],["assets/img/video_preview.png","66d01601f974a26ffae0c7ab41811c1a"],["assets/js/script.js","1610a870e9bfe419cd4e487e47d64623"],["favicon.ico","3fe7c991cce4210a2ac2bdfe7d8f10e8"],["index.html","2f2a2570662b6dbb7122106f64007a5c"],["mk-rc-desktop-c.pdf","a23ecb62aa0e92c742fef7778ebe69d5"],["mk-rc-mobile-c.pdf","5263c7491985003d1463de93ab15b285"],["rsc/mk-rc-charte.pdf","ca8f2dc44b0a4a89f3b3dc291233873c"],["rsc/mk-rc-desktop-c2.pdf","a9f0c570bd0647314317f78a1c0ccd21"],["rsc/mk-rc-mobile-c2.pdf","5263c7491985003d1463de93ab15b285"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







