/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0xcert-framework.svg",
    "revision": "82d69102af8178f89d620d53a8dd46e1"
  },
  {
    "url": "0xcert-logo.svg",
    "revision": "780242d9a166ea4703aa89253b275583"
  },
  {
    "url": "404.html",
    "revision": "b81295385571ff03faee63a53345a0e1"
  },
  {
    "url": "api/api/certification.html",
    "revision": "536f5c8662a18341cb5de07540dbd86a"
  },
  {
    "url": "api/api/client.html",
    "revision": "bd417d03767ed54c8acf29a071a67093"
  },
  {
    "url": "api/api/rest.html",
    "revision": "6f0a53c5533fbc604943b2d505921823"
  },
  {
    "url": "api/guides/asset-ledger-deployment.html",
    "revision": "5138f548bca43e1ec8f1f6cd4b9c706b"
  },
  {
    "url": "api/guides/certification.html",
    "revision": "c6cca360a8e57e6a34e0ac93975ea559"
  },
  {
    "url": "api/guides/destroy-asset.html",
    "revision": "cae125196f1f49af1a39bba6e52d6e4b"
  },
  {
    "url": "api/guides/installation.html",
    "revision": "45c2af5f60398f8dc83493c677c0bfc6"
  },
  {
    "url": "api/guides/issue-asset.html",
    "revision": "6ed40ca9ec02f6b594727c9caeee3d3c"
  },
  {
    "url": "api/guides/providers.html",
    "revision": "3b805c37e8c96536ee5ead55bb5bc6f2"
  },
  {
    "url": "api/guides/set-asset-ledger-abilities.html",
    "revision": "42c7a4ab8293e71b0ce86deaf8733329"
  },
  {
    "url": "api/guides/transfer-asset.html",
    "revision": "12a44dc7b87a6bfcafe787850a8effff"
  },
  {
    "url": "api/guides/transfer-value.html",
    "revision": "b30e2294a4788863b953752e43fefb1a"
  },
  {
    "url": "api/guides/update-asset-imprint.html",
    "revision": "41834f84001dabfef76b32a9a05ffc9d"
  },
  {
    "url": "api/index.html",
    "revision": "8b1c3104038942d0a97c73509dc46a60"
  },
  {
    "url": "api/introduction/dashboard.html",
    "revision": "beda3bb4c4d917260d6dfb21a2abc816"
  },
  {
    "url": "api/introduction/get-credits.html",
    "revision": "95570e072055c3d2c3d0af1db3415a40"
  },
  {
    "url": "api/introduction/how-it-works.html",
    "revision": "d8e15a76a3046e90cfc43e66fef8e8f7"
  },
  {
    "url": "api/introduction/overview.html",
    "revision": "b53e419aefed9c720005c8433621c0bb"
  },
  {
    "url": "api/schemas/86-base-asset-schema.html",
    "revision": "f5dc89029a23f6fe900cad35ef20e7ed"
  },
  {
    "url": "api/schemas/87-asset-evidence-schema.html",
    "revision": "d921cd4918064431a2ec86ade75a29c2"
  },
  {
    "url": "api/schemas/88-crypto-collectible-schema.html",
    "revision": "369f62c700e9ec6807c92c310750f0ac"
  },
  {
    "url": "api/schemas/xcert-schema.html",
    "revision": "49ef17ab77bba86dda80f72b5a7ec0f1"
  },
  {
    "url": "assets/css/0.styles.6165d2dd.css",
    "revision": "e0a7f2a287fbce45cd134b97071f8b4f"
  },
  {
    "url": "assets/img/atomic-swap.33e9e009.svg",
    "revision": "33e9e009fd08bc8d33037e7612c718bf"
  },
  {
    "url": "assets/img/certification.31c7b71d.svg",
    "revision": "31c7b71d4c8fd6a766c108d2ff494226"
  },
  {
    "url": "assets/img/conflicts-explained.c37f02a2.svg",
    "revision": "c37f02a29cb1699937146a8acb6fdce4"
  },
  {
    "url": "assets/img/exposed-part.5e486307.svg",
    "revision": "5e48630774daf3592db57d1454aa3b08"
  },
  {
    "url": "assets/img/no-conflicting-proogs.a3213736.svg",
    "revision": "a32137363710f3ee693cbd9c072ae3a4"
  },
  {
    "url": "assets/img/notarized.e62f8d82.svg",
    "revision": "e62f8d828e030c82db405054e14d705f"
  },
  {
    "url": "assets/img/part-proved.c1187f5f.svg",
    "revision": "c1187f5f1951d21e14a64ee515e22217"
  },
  {
    "url": "assets/img/scheme_1.4b756bc1.svg",
    "revision": "4b756bc1575b7bdb18b62f706659a2a9"
  },
  {
    "url": "assets/img/scheme_1.4e83c37f.svg",
    "revision": "4e83c37fa32170bfa902024b974ce4a4"
  },
  {
    "url": "assets/img/scheme_2.1806743d.svg",
    "revision": "1806743d3971430f0c0c5bd6b2641fd2"
  },
  {
    "url": "assets/img/scheme_3.6fecffe4.svg",
    "revision": "6fecffe4ee3161e49c44902379f6691f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zero-info.eab30f82.svg",
    "revision": "eab30f82996642dc34cfefcc90e61222"
  },
  {
    "url": "assets/js/10.22a89f6c.js",
    "revision": "d095528a3c0fb69178db17451f53ebdc"
  },
  {
    "url": "assets/js/11.db1393d5.js",
    "revision": "39fdb528367e28e3480af461e456da99"
  },
  {
    "url": "assets/js/12.fd4a12c2.js",
    "revision": "9f98831259fc8c0e7e8b42b8c41dcfe0"
  },
  {
    "url": "assets/js/13.558557aa.js",
    "revision": "77f631323e6febb41e911ea6709b5e2e"
  },
  {
    "url": "assets/js/14.3c4a935d.js",
    "revision": "cce0cc3a0fb44c2ed3b0d3f0f70fb2da"
  },
  {
    "url": "assets/js/15.7e4acda1.js",
    "revision": "f6597249c9a6daf1d77767dc3cfbf9f5"
  },
  {
    "url": "assets/js/16.44f57877.js",
    "revision": "65464064eac2ffc100b05bcb9bb23c73"
  },
  {
    "url": "assets/js/17.f8f9f6b1.js",
    "revision": "e0902f944ee3f11c531583d1084b8629"
  },
  {
    "url": "assets/js/18.9308e8f4.js",
    "revision": "624bd98b6b367f5ad5f06d37e7a17654"
  },
  {
    "url": "assets/js/19.ed3d0d6a.js",
    "revision": "e58b568bccf429dd7294f101aeb69bb6"
  },
  {
    "url": "assets/js/2.95c200d6.js",
    "revision": "acc533200ad7381767ab98118f5c98f5"
  },
  {
    "url": "assets/js/20.d80f294e.js",
    "revision": "8c491bae0ff62310ab1afa77f65ca407"
  },
  {
    "url": "assets/js/21.a40bcbc6.js",
    "revision": "46669b539db78ff3fa06e56b030f3746"
  },
  {
    "url": "assets/js/22.bf1426e5.js",
    "revision": "32f21806631316cc51f6230a251ad8b4"
  },
  {
    "url": "assets/js/23.c93a5ac2.js",
    "revision": "750d9a7cb79b7839fdd5f68adcce1090"
  },
  {
    "url": "assets/js/24.802d011b.js",
    "revision": "ae62b7432b5a367d472807a567c7d8bc"
  },
  {
    "url": "assets/js/25.a04ca984.js",
    "revision": "5a83499d9eccd006be997cb59da3b985"
  },
  {
    "url": "assets/js/26.1f86b430.js",
    "revision": "0e97022862bad66a2c13888288a3f69a"
  },
  {
    "url": "assets/js/27.4b20153a.js",
    "revision": "25f27cfa655ba726ac1d129b23b8c631"
  },
  {
    "url": "assets/js/28.ee969f84.js",
    "revision": "91d775204426bef0731d7e84148e1831"
  },
  {
    "url": "assets/js/29.37022e22.js",
    "revision": "9f66141985bae7b4a4f3e5d5a87ab385"
  },
  {
    "url": "assets/js/3.f429a402.js",
    "revision": "412944ce04ddbf98b82a97f4d0752590"
  },
  {
    "url": "assets/js/30.a0fb9c1f.js",
    "revision": "92ad0cc1cddbbeb65bf1b3009cb941a4"
  },
  {
    "url": "assets/js/31.8b8d8e37.js",
    "revision": "7aad84cc533e614fa447228a6cac51f4"
  },
  {
    "url": "assets/js/32.1f3d55d1.js",
    "revision": "61edd8f8b1793be0e77a35f235f67687"
  },
  {
    "url": "assets/js/33.cad1cbbd.js",
    "revision": "4fa8aac6e40090823b29e0318f600d48"
  },
  {
    "url": "assets/js/34.450619e4.js",
    "revision": "f9f80aa8d931f83c8a3c48111c5173ad"
  },
  {
    "url": "assets/js/35.e378a6a1.js",
    "revision": "ffd5645e0c256d81325552129aaf66a1"
  },
  {
    "url": "assets/js/36.8a78cc62.js",
    "revision": "d540dffecab191b577551347b6e02cb2"
  },
  {
    "url": "assets/js/37.bb47e59d.js",
    "revision": "778a24356b38610a5ef0257564a4461f"
  },
  {
    "url": "assets/js/38.c85e2144.js",
    "revision": "4864f9c10caced5973df4ec11da71763"
  },
  {
    "url": "assets/js/39.1b821a69.js",
    "revision": "03897f5cbfc9f4a0fee3425b0126fea3"
  },
  {
    "url": "assets/js/4.826d6c32.js",
    "revision": "72ecba04d24c96dfb2336bb7d56eb0db"
  },
  {
    "url": "assets/js/40.20fa9632.js",
    "revision": "276bff861d2ba8aa2e422781960b57e0"
  },
  {
    "url": "assets/js/41.c5ccbd74.js",
    "revision": "209ec0b1655a83dd3be805328be76f4c"
  },
  {
    "url": "assets/js/42.3a1436eb.js",
    "revision": "51c0018d646732c1fe647369832c801f"
  },
  {
    "url": "assets/js/43.8651a56b.js",
    "revision": "ab2425d743c5a973fcbe1a3fdfce2194"
  },
  {
    "url": "assets/js/44.6749744e.js",
    "revision": "2a43cacfdf2211b7976f4b51baf746d7"
  },
  {
    "url": "assets/js/45.8504225f.js",
    "revision": "08ba3f93a0cdc8a2ac106641b8bec848"
  },
  {
    "url": "assets/js/46.11079c2e.js",
    "revision": "fbb9e89613d8a736aceffd28b69fd0a1"
  },
  {
    "url": "assets/js/47.05733c60.js",
    "revision": "093243d40b97881b7f85d6fda2d171e5"
  },
  {
    "url": "assets/js/48.c563ed9f.js",
    "revision": "77cb1a58e5f621215263f0cfdb95c8fb"
  },
  {
    "url": "assets/js/49.4754d6c0.js",
    "revision": "1c5a762f5f909111dd9cbee60a5f5e8c"
  },
  {
    "url": "assets/js/5.69f3b40f.js",
    "revision": "48c54d4e84cab9bf48deb0dfac962953"
  },
  {
    "url": "assets/js/50.8bb28c48.js",
    "revision": "2c1f7a1d8c7b2e35600a1c94548057a3"
  },
  {
    "url": "assets/js/51.d29fd706.js",
    "revision": "bcd2caa3dd4dd8c6acc81b7fdb25c102"
  },
  {
    "url": "assets/js/52.dbdad588.js",
    "revision": "792c849071771a2f7b676222c37fcdc0"
  },
  {
    "url": "assets/js/53.fe7c22d3.js",
    "revision": "a5fa4d7f28dd3c870725559f7a25e22c"
  },
  {
    "url": "assets/js/54.e2086642.js",
    "revision": "0be03ec11b5c58ed030666c71b0d666e"
  },
  {
    "url": "assets/js/55.9bbd7037.js",
    "revision": "4027897042d856554a200a4ed09afcc9"
  },
  {
    "url": "assets/js/56.743e9df3.js",
    "revision": "d7f72a63da9e28a3d8c27a4fac94622a"
  },
  {
    "url": "assets/js/57.1d0d0a0a.js",
    "revision": "03acf327d598b5b3ed8e6b049611abb6"
  },
  {
    "url": "assets/js/58.bdb457c4.js",
    "revision": "722d07362ee420e469c59abb6f7f47d3"
  },
  {
    "url": "assets/js/59.5daf2391.js",
    "revision": "4b1db55881702bf806ff247f6e75961f"
  },
  {
    "url": "assets/js/6.eda45369.js",
    "revision": "b27a308cdd4b6eea481ee11d01c57a76"
  },
  {
    "url": "assets/js/60.12e53be3.js",
    "revision": "e1e3da640be4809265a2a520f16bdb4e"
  },
  {
    "url": "assets/js/61.a4fb1d1f.js",
    "revision": "28a089751c5a2e1d8d725cb97d0f47a5"
  },
  {
    "url": "assets/js/62.4a4e8249.js",
    "revision": "5704a023f1fe367db99dd74a45f3dff4"
  },
  {
    "url": "assets/js/63.82c26256.js",
    "revision": "9c7ca7319c1d450040377dc823c86b9c"
  },
  {
    "url": "assets/js/64.28e98b11.js",
    "revision": "aecdaf09afee63fe976baaedee84935c"
  },
  {
    "url": "assets/js/65.d8c18a2f.js",
    "revision": "fa1e58254a860233f73b332630b4984f"
  },
  {
    "url": "assets/js/66.16e6f8c4.js",
    "revision": "35c93c9af50a6c97b6dff6a2139f58b1"
  },
  {
    "url": "assets/js/67.5742f162.js",
    "revision": "3e1a37cc7cd6e12ffcab8578506163e8"
  },
  {
    "url": "assets/js/68.5dbfbeee.js",
    "revision": "0579a6e06152bbb15ccd0f93b1c1eb96"
  },
  {
    "url": "assets/js/69.9d56939f.js",
    "revision": "15b850ff3cd66d10714ded249f80fda4"
  },
  {
    "url": "assets/js/7.b5c957b5.js",
    "revision": "557f0dbeb06d9671b7b0b8408b1165d7"
  },
  {
    "url": "assets/js/70.76de50fd.js",
    "revision": "adb81abacda26fc2da89c2ffd27605ea"
  },
  {
    "url": "assets/js/71.d49caf43.js",
    "revision": "c05b1fae78e5808883f7fa6b4c187d6a"
  },
  {
    "url": "assets/js/72.f33a529d.js",
    "revision": "d24653495db623d5d1f73763a33cc3a5"
  },
  {
    "url": "assets/js/8.51337334.js",
    "revision": "f7fb4d0574f7284013412ddffc2fb478"
  },
  {
    "url": "assets/js/9.9d31c18c.js",
    "revision": "4d936b02bdfd724f1a2f0e94057dc7cd"
  },
  {
    "url": "assets/js/app.750e703a.js",
    "revision": "6867b92f3bb8628628c20065133e3c9b"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "c7764e9d457fb99c8059a58b0daec35b"
  },
  {
    "url": "ethereum.png",
    "revision": "e87ef377b6298693af14e868e7bd9d54"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "framework/v1/api/core.html",
    "revision": "6cfb099f92119aeb4aa671143d9e2b8a"
  },
  {
    "url": "framework/v1/api/ethereum.html",
    "revision": "d9aecd551f633db774af4fd858037b63"
  },
  {
    "url": "framework/v1/api/wanchain.html",
    "revision": "82c41b6a0c71f03399f7820be4337a3c"
  },
  {
    "url": "framework/v1/guide/about-assets.html",
    "revision": "55dc23ff7e22accb1a534959f84e4b74"
  },
  {
    "url": "framework/v1/guide/about-cryptocurrency.html",
    "revision": "1a28f3279b37984efe87d132815d7514"
  },
  {
    "url": "framework/v1/guide/asset-management.html",
    "revision": "12efcc96b472f210686a8ae4ebffe66d"
  },
  {
    "url": "framework/v1/guide/atomic-orders.html",
    "revision": "bd9be2e7dd94e8fda1b03a7802f9c82b"
  },
  {
    "url": "framework/v1/guide/certification.html",
    "revision": "d9f32f8465a558ee511cb59e2cae1d77"
  },
  {
    "url": "framework/v1/guide/communication.html",
    "revision": "a83b2a623d95418d51b6d340cd1dccc0"
  },
  {
    "url": "framework/v1/guide/getting-started.html",
    "revision": "0ddc5bd8f8731ce0a3364b1fbc92ddb8"
  },
  {
    "url": "framework/v1/guide/introduction.html",
    "revision": "bb8a7b2834f744a423314b3630688565"
  },
  {
    "url": "framework/v1/guide/threat-models.html",
    "revision": "e6c0bdef0ff5a64ac9ff5c6b131905f2"
  },
  {
    "url": "framework/v1/guide/using-providers.html",
    "revision": "ecb13b15cdb8777d43bec61b45bbf975"
  },
  {
    "url": "framework/v1/guide/value-management.html",
    "revision": "04a9e13b818d843d74c908e9edda769d"
  },
  {
    "url": "framework/v1/index.html",
    "revision": "528c7e9e7dfc3a8fb24f8571f3cbc9bf"
  },
  {
    "url": "framework/v1/plugins/vuejs.html",
    "revision": "33306dcb01bfaa3e179f2a9aff1e4b89"
  },
  {
    "url": "framework/v2/api/0xcertapi-client.html",
    "revision": "2af51225d6c5abc2c79131aebe23e90b"
  },
  {
    "url": "framework/v2/api/certification.html",
    "revision": "c911a8a619d3875aeb4ef343848da6fa"
  },
  {
    "url": "framework/v2/api/ethereum-connectors.html",
    "revision": "0872011fe0f9d8bdd3943ca06a8abe80"
  },
  {
    "url": "framework/v2/api/vuejs-plugin.html",
    "revision": "6e2f81c464bc9e3523e99b94dedad965"
  },
  {
    "url": "framework/v2/api/wanchain-connectors.html",
    "revision": "fa2f8ff7dfdcbd52ebc0231c14379ec9"
  },
  {
    "url": "framework/v2/guides/asset-management.html",
    "revision": "abf3b39486846a1bf09f8c8b09bfc828"
  },
  {
    "url": "framework/v2/guides/atomic-actions.html",
    "revision": "e41a52a13b986b38bd3cd20bca10ebef"
  },
  {
    "url": "framework/v2/guides/atomic-deployments.html",
    "revision": "2ed625468c4df20c739d5ed9dd89d66c"
  },
  {
    "url": "framework/v2/guides/certification.html",
    "revision": "ed5a94d1ff0416a831ae003fd1db98c7"
  },
  {
    "url": "framework/v2/guides/communication.html",
    "revision": "998d52fafb8baae862f8cc5f38000ff1"
  },
  {
    "url": "framework/v2/guides/providers.html",
    "revision": "d49e530ac27fb5ee458aa391a8e285a3"
  },
  {
    "url": "framework/v2/guides/value-management.html",
    "revision": "255d6d0ba56dcf1def48a58da23cc1e2"
  },
  {
    "url": "framework/v2/index.html",
    "revision": "7afe3287fa6d0e498469bdb6d1ef750e"
  },
  {
    "url": "framework/v2/introduction/0xcert-tokens.html",
    "revision": "b81353e3f8ca0b581c540ba0fe894ca2"
  },
  {
    "url": "framework/v2/introduction/atomic-transactions.html",
    "revision": "1f7ff0fa884bde32c8685a9505b21e6d"
  },
  {
    "url": "framework/v2/introduction/authenticity.html",
    "revision": "1d526b1892dbce30f058d9b8f3898b89"
  },
  {
    "url": "framework/v2/introduction/fungible-values.html",
    "revision": "8b2d3516520ad580ce0d9e16bc731bd6"
  },
  {
    "url": "framework/v2/introduction/getting-started.html",
    "revision": "519731bd7188c66f75473fcb160db969"
  },
  {
    "url": "framework/v2/introduction/interoperability.html",
    "revision": "ba2056675c9aebb507a9c96fdf8c5d50"
  },
  {
    "url": "framework/v2/introduction/non-fungible-assets.html",
    "revision": "bc2b3b1231b49a988ad4f4e699b9bd77"
  },
  {
    "url": "framework/v2/introduction/threat-models.html",
    "revision": "7e1f3a22fa7d5d4d473e40c005b4f6e7"
  },
  {
    "url": "framework/v2/schemas/86-base-asset-schema.html",
    "revision": "37922c1ee88c3f91071064d778af9c34"
  },
  {
    "url": "framework/v2/schemas/87-asset-evidence-schema.html",
    "revision": "7aeafb26658ba3b8282fb2d2fae1dec8"
  },
  {
    "url": "framework/v2/schemas/88-crypto-collectible-schema.html",
    "revision": "10162e5f16f2701b505b7660dcd62cba"
  },
  {
    "url": "framework/v2/schemas/xcert-schema.html",
    "revision": "66d34d4931bf2998a15ef4e610971f9c"
  },
  {
    "url": "hero-image.svg",
    "revision": "7a23f7cc21f915a46ce92c59b8984d3b"
  },
  {
    "url": "index.html",
    "revision": "5e27f4bc3e87a2f94b002c3308b5c5ea"
  },
  {
    "url": "logo_0xcert.svg",
    "revision": "1b51dc3973753349a7c9c72a4c37fb3a"
  },
  {
    "url": "logo_alliance.svg",
    "revision": "077c3f0fc6e4955815f8e9d7d4d53e61"
  },
  {
    "url": "logo_swapmarket.svg",
    "revision": "c14ff3d5b6d2ccb8bbcbcb63dbed8d15"
  },
  {
    "url": "logo_validator.svg",
    "revision": "f6b907c537d8075d30fc24a49d9dcf66"
  },
  {
    "url": "wanchain.png",
    "revision": "c3256bc210ca559021a431d950d3fb3b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
