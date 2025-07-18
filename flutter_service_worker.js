'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "44804248593b6042c8bb6c3383d8551b",
"assets/AssetManifest.bin.json": "2e2e69f2608264bb59749b716af0dbd7",
"assets/AssetManifest.json": "78648ebcaf881fec3b39d2f5562c3f3c",
"assets/assets/icon/AddressProfileIcon.png": "f9f9004192b48949c174c588f48fafa7",
"assets/assets/icon/BackIcon.png": "b292f226dcdd04dbe276a30fa519c119",
"assets/assets/icon/CupomIcon.png": "91d7c75000bfbe88ffbd5fd7ffde4969",
"assets/assets/icon/DoctorIcon.png": "ecb2e7e64a156a4c313e5fff510de75e",
"assets/assets/icon/DoctorProfileIcon.png": "f02756faf16048cb2cece16d9272ec8b",
"assets/assets/icon/DocumentsProfileIcon.png": "38a3fb84436809054a6975870f019081",
"assets/assets/icon/EditIcon.png": "28f1e58a9bb8f776e6d06926fb6dd0bb",
"assets/assets/icon/FavoritesProfileIcon.png": "c763d0fd3a4548c88e864dcf791b83fe",
"assets/assets/icon/HomeIcon.png": "d68fa34ad89665a0406099eec2b7e8b9",
"assets/assets/icon/OrderIcon.png": "83028022f85579a9113348fe9eac476b",
"assets/assets/icon/OrderProfileIcon.png": "fc28bef00d9106e7cef7ac648d369725",
"assets/assets/icon/PaymentProfileIcon.png": "13754e569e12aac83bbfaf78de97d176",
"assets/assets/icon/PdfIcon.png": "29c944eb01d3038decf042fe79893ad4",
"assets/assets/icon/ProfileIcon.png": "12786fca048a0c7fe4c545b58f9cb2c7",
"assets/assets/icon/Search.png": "a1e514829cf54f7fd90fd0a0eaa581ee",
"assets/assets/icon/ShoppingIcon.png": "87d1f22ac87b316e6c0f91bb25f4409c",
"assets/assets/icon/UserIcon.png": "c7e8487fb6460a3cdb2f6c9a1ac2c6b1",
"assets/assets/icon/whatsapp.png": "1bcf7c5585e5f2971eb19808425861ca",
"assets/assets/images/cbd-full-spectrum-tincture-10000mg.jpg": "d3cc736dcf44a1190cace6b89e140861",
"assets/assets/images/cbd-natural-tintcture-3000mg.jpg": "20f79f1816cedbc434e0b77b3e8239a3",
"assets/assets/images/cbd-pain-cream-menthol.jpg": "7621d4ee1f3ac8a619f8a4d1156b8c8d",
"assets/assets/images/cbd-pain-stick-bundle.jpg": "176e8e24767a38b51706263a8fa52029",
"assets/assets/images/cbd-peppermint-tincture-6000mg.jpg": "d30838c22787560a82322c7152cdfe72",
"assets/assets/images/cbd-peppermint-tintcture-1000mg.jpg": "3ddb0fd236d4ad5a96e26d783e022cdf",
"assets/assets/images/cbd-peppermint-tintcture-3000mg.jpg": "e106da6f16f5c178a22547d321c1a8e5",
"assets/assets/images/cbd-salve-pain-management.jpg": "faea1fa780383270dc8c25833302117b",
"assets/assets/images/cbda-cbga-out.jpg": "6fe7a114bee71c8ad75f8253069a824b",
"assets/assets/images/cdb-menthol-lotion.jpg": "c072cce11904b3e80117683e295478d8",
"assets/assets/images/end.png": "53067c3529ae14d680c0e7dcde82ceb2",
"assets/assets/images/form.png": "d13c84af104a343f65e17aca97f5a2b6",
"assets/assets/images/fruit-puch-gummies-out-1.jpg": "a3536fd28e2ec05d4c3f3a218acf245d",
"assets/assets/images/hibiscus-berry-out.jpg": "e9cd55a099cf81127a83e12b6906ba8b",
"assets/assets/images/ident.png": "d1aadc389de142ec3747f624d35ce142",
"assets/assets/images/image001.jpg": "ff51f008fc29c5b5e159b48eabac5ae2",
"assets/assets/images/img.png": "86fff493fd18e51c625ccb1d0eb0cd99",
"assets/assets/images/img_1.png": "5e365a8f477bf1686202483aeefc25c7",
"assets/assets/images/maisverde.jpeg": "33d673273c080aef45f89347322eb150",
"assets/assets/images/MAX_6385-1-min-scaled-e1630620356491.jpg": "4f36b9b29d9919ed0ca659eb0e5063af",
"assets/assets/images/receita.png": "d1e331ea35370f67dc433a7196b9c64f",
"assets/assets/images/strawberry-gummies-out.jpg": "cea28b2d5b184c0060fad23b4711b488",
"assets/assets/images/tinctures-file-attrum.png": "2bd4918d6603db937203ae31682085e9",
"assets/assets/images/Watermelon-Gummy-Label-label-mockup-1.jpg": "a6b3b84c7d8d5452e81d3be3178188c7",
"assets/assets/loading/1.png": "705f3c59e9ffbd8a6ac2f3ff8ebb3365",
"assets/assets/loading/10.png": "2f6e04bfe20930a1e37e2e5bf0170fa4",
"assets/assets/loading/11.png": "0f368e3c916f76e89d3d5334ee47ff32",
"assets/assets/loading/12.png": "2b71f9261ad9dfe4948a339ed96ba2c4",
"assets/assets/loading/2.png": "f99d296515be4cc6a73c126b3a890178",
"assets/assets/loading/3.png": "46ee19d4653bff54e2c04c33ea039933",
"assets/assets/loading/4.png": "f3787803c0092f17b4495d5c175b1075",
"assets/assets/loading/5.png": "b934d055d98cbf024b3159734564020c",
"assets/assets/loading/6.png": "263416ccc911167661302cab19839765",
"assets/assets/loading/7.png": "589942b7f5a54f73c07bdc7a60369afe",
"assets/assets/loading/8.png": "8eef9c222ab7062644c4264350e2d4e6",
"assets/assets/loading/9.png": "0a17807a4366aa0bd4d4803820aef7ea",
"assets/assets/questionary/ansiedade.jpeg": "4eb73391d408fab77584ae52446f87e6",
"assets/assets/questionary/cansado.jpeg": "dbe0fa3d2bbc3d1cb5b91ad446e1e84f",
"assets/assets/questionary/dor.jpeg": "2bf6eeb91833655836ca48b3bdb806e0",
"assets/assets/questionary/feliz.jpeg": "467fc02d0c4eb20142d258db19edb73d",
"assets/assets/questionary/humor.jpeg": "215484f042f54897f8e16295ce1ef29e",
"assets/assets/questionary/inseguro.jpeg": "513b11f28af6fd7c32c4dd14273d4320",
"assets/assets/questionary/nervoso.jpeg": "ea7a86c068d29d2a165da546fb4b74c6",
"assets/assets/questionary/pensativo.jpeg": "2023e35c1a0e4778cb5f2d4f9a9c0e47",
"assets/assets/questionary/pinguim_front.png": "4f9de6493e27147eb9ce9b67ddda33c6",
"assets/assets/questionary/preocupado.jpeg": "7fe54f0dbd5c55817758f4ca61c284e3",
"assets/assets/questionary/sono.jpeg": "9a8ca440defdee3bea7747d71c06f977",
"assets/assets/questionary/stressado.jpeg": "3339bceaa3c2663391eb265a78a5a84d",
"assets/assets/questionary/triste.jpeg": "df1306e259e70900807a0c2c050157ad",
"assets/assets/test/comprovante.jpg": "cb923ae2f8fb83eb951f652ac7f42eb2",
"assets/assets/test/receita.jpg": "1907f031ba861b2181337fae8adc053a",
"assets/assets/test/teste.pdf": "d5b798be427f27236fce9c2b8da6a144",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aba4aea3d12c4158d306712f36b6577c",
"assets/NOTICES": "08af0e09817e30a2ed4e97ad2afff0cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7eeb6ba765f95748074424cfb70b3995",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a81cb429e9e2322a95d178b9d39df964",
"icons/2-512.png": "ab5721a56767d226683a3f91cb5ac271",
"icons/2.png": "aaff681acfc2bd167f3b5163b5c9006c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "66980c1ece17dacdff3e6d030bda4d88",
"/": "66980c1ece17dacdff3e6d030bda4d88",
"index.html.bak": "b3b84f57b35203fc4512c65bf3769285",
"index.html.bak.bak": "3e535929400925ce1c3fa52b58021b7c",
"main.dart.js": "a857071472075a6fdf54d02ff18a15d4",
"manifest.json": "b34a2743e7cfb629c5bd05db8a1063a9",
"version.json": "99eeaccf58ea55e48740054eed75bba2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
