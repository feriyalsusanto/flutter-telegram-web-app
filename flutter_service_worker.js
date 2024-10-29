'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0bf7e15b917ab97276fd7ab881f5ccd5",
".git/config": "69c81c76f401413260a7de6c0c1d2232",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ae694b8cebeb77660e83a4bd3e411c78",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "14f6db9c2a11fbb749ebb12d8a143a34",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06523b65594a54e2e509b792b3e35c3c",
".git/logs/refs/heads/main": "564926a7cdd9b9b270c77de34f23a1af",
".git/logs/refs/remotes/origin/main": "446f8e6cbc54f9fca7f1a3a65c69eb4f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/19/c370cbdedd5e0f988e5f0e36496e1e069f0b91": "bafa232924acbeee0045b4342f99bc2e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/29/e68a9d178181d1aa3b79761e5a3efe0254c30c": "3c7e7a3f84bd668f323aa3b1a969ee81",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/39/234ef2929c0dcf15ab23adc0d46772410892aa": "ea25a583e888dba224a7f7df91f15a25",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "75c572f37aa480ec5c2c6dd01c52999c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/3a/d3a7aa464cab64e62baf6fe401efa9b7e9c3e8": "f777417f0f748384d07e07db30bc51d7",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f4bd21272233e9cbbf4112d6f064a4ae",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4d/9ecdf2797e084269132b84afe41dac3f9331db": "31780e2bcd872559079e0b67297f98d1",
".git/objects/4f/0b3db654cdff54a121e63dddf262f8b34a646f": "b0913e8599480fc6ace2866b4ebb5a8b",
".git/objects/51/f41d22aa500b0938168a08f8a96b6f6995656a": "2f61ee9ff37026436dbc812ec666d9af",
".git/objects/52/a9ca4dd5b89171c7a515447ff823fe819f238b": "894f93a530cb39a386332a23a4e44eb9",
".git/objects/58/cbddc31cc6be8d994b0ceb765f74f6fc59c597": "f92b1c3b4087ed876ac63152fd562424",
".git/objects/63/e40c27a849e223c262a080065bc3d43800868d": "323d3d70cad4677063334e588553bb01",
".git/objects/67/02c2b3f7706fbe5630761b7003ab743789539c": "3f1cf92a10edabc4b1cec48592ae8a3f",
".git/objects/67/8da11ff59eb9baaba2ef1c0ae1986ad58fc675": "e486112934f3d6731c87433f9095bbf2",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/7c/d00467907f0bb7d5100c8206b1f345259f7615": "58aaab9f213aab424649920e03fb8a7c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/84/7b69effe9230832b6ee784d6bd26e2f51cde09": "8e151418decafdf12e13e119ada85c76",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/95/192641c0cebc67dd084749b49d01af6283d040": "749ba7390fab2a3798a8e2d38cdfefa6",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/9b/74767adb6b50bde768222ef79beadb0ca33d7f": "84c2abcc6405051230e82f8c1fd02aa6",
".git/objects/9c/24eca11ca115c8e823311e54a5892763c9c8ee": "b970c8cef05cf4c490ac4a1791d6e2bd",
".git/objects/a5/7e459fffca7776d5205621f52a5b65823e028a": "498ae9948981994e70b5c2ab6152a467",
".git/objects/ad/2a4e468a1c215ab470c56316e48fa76b230b97": "b11e7560f1f7c1341d1629019d20b2e3",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/bd/878cb72abdb4715af9fabc4b136c6e85b2a810": "3a70b7ab180b096bb54f31c7e901bc65",
".git/objects/c4/7148069e0bb0dbe9b965c5f6e92e351235231d": "5878a22fd1541d6cb0ded92c125efa38",
".git/objects/c8/2bf17b3fb3e8481e9976e43e87cd360b7012f6": "2dbabee141a18e86c79a2fbb64f0fadf",
".git/objects/cf/ac29cb33e50170e48cbc445b18c931bdf2569f": "6deef8b0ce14e2f66a5c1e92c52a46b0",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "6cf3aab7645fb18478693de335133497",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d9/21dbb7ee20ff4749b794d00d26e15da4ec8f6b": "bb0b170242a839c64fb7516137a64480",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/dc/33452342f5c087f80af6478ad0ef98976faa5e": "4310fc06de914f4bb3cce54e6dfe3398",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ef/32785a6e3ef53b0f1c6a022ca92c74706e22f9": "0f7f710bf11660ad5a62f440b81c71ae",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/ORIG_HEAD": "10a740723bc925e6ca5233cacda060d9",
".git/refs/heads/main": "10a740723bc925e6ca5233cacda060d9",
".git/refs/remotes/origin/main": "10a740723bc925e6ca5233cacda060d9",
"assets/AssetManifest.bin": "38aa0dcfeac9ac2cdae01368912bd021",
"assets/AssetManifest.bin.json": "95a1f33a7bd627b5f493b1fa0df1d1ff",
"assets/AssetManifest.json": "bb903f8136912207c780476abee54b03",
"assets/assets/broken.jpg": "6a33afbfccb24eb25e4f67da2c091911",
"assets/assets/captain.jpg": "01e988bf853f8c96193f9112a221011a",
"assets/assets/spaceship.png": "027204d9374600bfbe16bc63419e2fbc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "52acc351608b6275da8734de48649e8b",
"assets/NOTICES": "13f24e4ffc8d20d9cd81b6e0a13d61f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "16d09f2a711a213dcfcbf98d04600509",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index%20copy.html": "c031883f46f719a6a1c1512167e0c9e3",
"index.html": "284fc40f7723d0316ed4ba1c7fb14859",
"/": "284fc40f7723d0316ed4ba1c7fb14859",
"main.dart.js": "564ba173255a01a05570398b77d4f8be",
"manifest.json": "f8ed0109a5319e35f8f2ff80061e25c3",
"telegram_web_app.js": "5c2640d59e7e3e8d603d9980570e3dec",
"version.json": "61c586814d8dd4c07339bb8f9bb38e7b"};
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
