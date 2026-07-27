'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "90395ec5f243b09c2fc5c85db93fb50b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "e1e67843bc5c376394482f89f871a257",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "1d9df62f68a881518e62dbf09870eaf3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6640524880897e8e4096e776dc11b1b3",
".git/logs/refs/heads/main": "8369571a8ab2489ef2f0c87fae2d9d2e",
".git/logs/refs/remotes/origin/main": "d8e18b1627df56be253c40fe3e011ef7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/841a7c24a1a68a962b85cbbd8574957df6b28e": "4b2473ecbda463e110337f1530299cf4",
".git/objects/11/c85f7e3dda36b86b8f3f94867e7da44b61d47c": "666eb7d0a90f6d12e44661eb64c7a712",
".git/objects/17/8e9cc5f3cb987f8f38995afee8a09962647595": "4b376853e69cde966e0fe3bc1e0c476b",
".git/objects/18/f2a8694d06369fe96dc4de173a761dbb0d3b9f": "c6f3a48577a1c6c96462961dd883495a",
".git/objects/1a/3080d78bb12a919492e8a614f8dc10696b83dc": "b58a6efef2ec65904670cd4540893048",
".git/objects/2f/5c78eddfc90d3b42d42798812303649903af70": "4b18d109e5dda1f746d24d280cb97b79",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/18811bae730d066ba802cf3bee960d537e3463": "06d4147dc7c6954e906aaca6690b4fd8",
".git/objects/48/3e87c1c76ef89eaa812efe99727971f56f41ca": "fff158e8dd7e8aa535dd9bb1b1ff9414",
".git/objects/54/f5181edc67610206a8875c37a33f8b3ec7ff7a": "27643be0923b6c7aab2249be62f119da",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/55/bc47f1099944517d037ed9263c026381723b8b": "32998d163a976fddaf5c8f53651e5d3a",
".git/objects/5f/bdbaeaea2e62a0277821d6c2081d94e29f51e5": "6db9f5e1a7b860f65bd0899372ccd0a8",
".git/objects/62/4c6800529a662f49d1ba744c9bb8b36de494ba": "1ebe8201c439bfaa0aa33f52428c4d13",
".git/objects/68/b313017437f1cd9a8405d018577134890818f4": "0fb6d9875d83073f5df6c59e509ef205",
".git/objects/6a/d9ca7bf0936c95484c505a2ad1afaf72b28060": "fac06a4b5d02fd543b6ba34e3043335a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/fd9dc9fad3c6839ee19cd0bf20f4cb37cf07a8": "edbe204dd0f05e106351b887636706f9",
".git/objects/7f/ab373f38c1a73543756932501605a7c0b6a643": "9f5f012275d6d1b61d57a0fb9da47d34",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/34b4bc4ba61059dfb067adf026a390c6991254": "43bc07dd96a35fcfcd2870dacb96ef56",
".git/objects/87/c65abc735b7d82aec7877a1deb61c6dcdfbde5": "9a254e42363575dc42a65551deaaf2b4",
".git/objects/8a/cda3b814f71435954016af9b350026b54b4f32": "3fba918ee010ad68f1d14a84d1515a29",
".git/objects/8e/c6fb8ccb6168bcbcd4c84ac1ba296327e4e770": "84baf7f36bba0ca272f7aa4c1b6a6e4b",
".git/objects/90/3d249d4181440f675f935af7e101be00e5a2a8": "d13906f86e676490ee443c3a1dc2b9ba",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57585599cc22198b155f80fd82c5c14de7cb0a": "43f9e7fb9af3e20d540c8d593fa6e6c8",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/79c2f27f295d706b518e8e30d23c25c76b99e3": "c5c6c76ce85b2b91964166f8e3825efe",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/430e6e380b5a0fa4093f05fada223459bb4c25": "c85121f2471e6b50a420794e164fc37c",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/f5845286c38099759ea32a6857411818c0792f": "5abf8d0535605f2cf11a9d61c925e4a3",
".git/objects/d9/1d912a23a7193389191264656bee834a7ff372": "68e7f47a8db7de2d4a9559604e6e0544",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e5/f6ab723538852d7f0086cb9300eee95208ce32": "2eca28e584fe8920786f0e6ea3b8d4d4",
".git/objects/fc/d690378370677e50112cad26daa105c150c98a": "d1c36834ac63f224a570c54a852bd99f",
".git/refs/heads/main": "8aa9b67df328002b8922b44459904d20",
".git/refs/remotes/origin/main": "8aa9b67df328002b8922b44459904d20",
"assets/AssetManifest.bin": "5645d6a5c999a03ea7c651e0aecd5e78",
"assets/AssetManifest.bin.json": "bb71d13de2b4b0a3d57e78eea5af2f51",
"assets/AssetManifest.json": "8340728fcb2251bb90d244c9e187b78e",
"assets/FontManifest.json": "65f94acffb0ac2ee75d87cb32190e494",
"assets/NOTICES": "30ff6eb96367ae852119bd36bb4d0086",
"assets/fonts/MaterialIcons-Regular.otf": "8b6e63e0435110c19763a20eaf641a70",
"assets/packages/lucide_icons/assets/lucide.ttf": "f9ba0b4172a0beabfecd5857b55dfe72",
"assets/shaders/ink_sparkle.frag": "30ff9453813ec3be2f3721cace85cc9f",
"assets/shaders/ink_sparkle.frag.spirv.temp": "f283df9d6d0d765978b763ff21c884c8",
"assets/shaders/ink_sparkle.frag.temp": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
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
"canvaskit/skwasm_heavy.js.symbols": "455930e12e6ef2d961627fe6f0c0cd0c",
"canvaskit/skwasm_heavy.wasm": "f22698a773ef756eff818039e37be5c3",
"canvaskit/wimp.js": "40195751139ab9e4b7c62b19c420f63b",
"canvaskit/wimp.js.symbols": "e9ac11318ebff9b7ad24ca7841f69b3f",
"canvaskit/wimp.wasm": "9242e201530449825b5645ed3d5af22c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0a9008c0ef75f0c29dc7350da48fabbb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "baa814c96b7439caaa1883e24e7b5ff0",
"/": "baa814c96b7439caaa1883e24e7b5ff0",
"main.dart.js": "24b1e364d37ffe59ab3bf1c24b2c1923",
"manifest.json": "9657cab228b670d629d614e2fc484f63",
"version.json": "b3110da3ccfdcc6205013b3ae89d479d"};
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
