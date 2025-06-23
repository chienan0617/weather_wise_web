'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "caac212e91023fb89784fc00600e75e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "be4ca1f8b5200dd0ebb19a33acd7c685",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "84c2e6d2b43815136d1fafd0dc00035b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5de37510414da72d3f98627bce799a9b",
".git/logs/refs/heads/gh-pages": "5de37510414da72d3f98627bce799a9b",
".git/logs/refs/remotes/origin/gh-pages": "75859048c0c9f049e1e7ea42fc42c5bc",
".git/logs/refs/remotes/origin/gh-pages-html": "7aa0312c34416a0d1142315e73edfb39",
".git/logs/refs/remotes/origin/HEAD": "4535d0a6034fe553d04a54672a06a2d6",
".git/objects/00/d2b7a2e47a39cc0707cc1eee5871c0ff26d136": "bd4779625aed96aca00d1efb05cafb66",
".git/objects/02/1913d0b2b9a6789115c25c0f3a6bff392f8350": "d1c620b5b2d269c37847c4d775c35025",
".git/objects/02/acdfc3bce2a097f30611c9e806f6d156daa3b5": "7d20c1b5261635f2d1f1a78020c0b4b9",
".git/objects/03/41f90d3f4ada17ffd2ea8e113b8d4f7f8d471f": "bad037a3b89822fcee99e6e4d351a1f7",
".git/objects/03/801e775ac230a97c093349fa48c7a3013d1e9b": "708101728accae7f9f149fa7a71484d1",
".git/objects/06/db2ff5ca2cc9ded2824eed21c8cb49ab9edea3": "9e4b192f2f9005194b1e9a5bb05eb913",
".git/objects/07/74512b1ab25ce080bb6b3aaedfa7d35d865e9f": "aadadbb63ddc79ea10f29ae2e130db64",
".git/objects/1c/645092095fc90b5b620af28a7c43a3bcf8a5fe": "c8e6645919f69f4e1bd5418f6c5a68fd",
".git/objects/1d/778cf0f2ef0fff7783c3411a82d737b5a3a543": "69c97c34023b85dce8e435d709e5bae5",
".git/objects/1d/e3ba2da2b55031acc85ba4f9ddb728188ef399": "bb40fd47c685be829ac45a41a58e9a9b",
".git/objects/21/8d6a1c68c2bf97a36198db4c688fd9e81eaacc": "c96b05fcca1c680b6c7e6ccbf3c2f42d",
".git/objects/28/8323e534b245113c9bd7c7a0e0eedd5dd0ce44": "86217035adc95d3335c4e22116417ea7",
".git/objects/31/960f0d3806f587251f192335157587a2617ae7": "7976c446b8cc7ccfb308c6f9319f05b4",
".git/objects/35/a75c66b6be8e6646fe3f84b408ebd92f900943": "ad24ce1c4a77b91b1698f69b0ab56eae",
".git/objects/3b/02eee0bba443504db5e92acd42b4796a212268": "9038171730fde16cb35637a49023f710",
".git/objects/3e/8503b725072a7f1161e62241aff5764a24630c": "3a335fafbb1aad52d6f72bbb456df958",
".git/objects/41/ccbf8246944427b85e82573357aff254de1d19": "bb217aad782e96ebe7b2de430051ad93",
".git/objects/44/4ad6589f41dae18899b2661f09582399005156": "9264827a0f6b69bf48cc346ac266d782",
".git/objects/45/8b70dd626c28497ed86ff18497a0f3167af649": "d7f17617ee3ff7d7eec1da64fe11f078",
".git/objects/4a/026fe13e7a0f761c0ca01d13c102566d079dbe": "b99db3691d0a75c38af1fbd32f7c8726",
".git/objects/4e/808fc4fa1054ea1db7c1ef03846b3513c77b5f": "a96b78bc6b208dd631b156edc66dc058",
".git/objects/4f/22536993bbfa3756b7922e84b51b03e4ee7d9c": "a07e08061613011cfe1b5b2ba92cc284",
".git/objects/51/bc670e2a7c484e628b5ffffac8e22fc40d9d60": "0cc9be029bc060e074e1d885555f80d2",
".git/objects/55/e29148e22f55a77137ca690a9251d76134dcab": "ebe184f2380cf710520b53199ae60423",
".git/objects/57/1232632da0ae64cee1f091f8d1d8b12a8c1b8d": "78dae83bc21bbc858e1d154f07e8a2ef",
".git/objects/5c/4d003afefb08d15882d1864b2c884339496ad7": "60c63115e15b3ee21f744bff8004fd84",
".git/objects/60/6aaed7dab2f19170e1695aaf16d20e338790fa": "04c19346b136600e960824ab7a6651b7",
".git/objects/65/d3cd30c6a0fb63423d456435908b1729017248": "7dd79b92aadd29d57930d3fdc1e7c9de",
".git/objects/69/8b508856e7b1d0a334591493eec65fa1528436": "560fd2c25392572b347e9d8b18d76527",
".git/objects/6a/1d4db806094ac19b1f88e5d9a4c9bd35771f35": "5e01244d39f3f208ac7fc7352ebeff42",
".git/objects/6a/e90630e4f37cd81d5e8c23ed94563ef63d2c09": "641977eec19dd9e08d1e10b328a61efa",
".git/objects/6d/263285d16408aa7eda31881c85e1b597001abb": "1ec1cf83301ca0603d61783bbb940ada",
".git/objects/75/1342c88361e4c70cf8d48cb38bb58b9881747b": "b270de299d09b3cc1d8e529cced16850",
".git/objects/80/17f25f2204c58007ccb424b542d9ae62ab413c": "846e0df6ba950c7e382eaabfafd3be14",
".git/objects/85/c81ec7f4d9fefdeb157561c45bd8f97704bf54": "f8c2e4531f9c9bb5e55750e7286c92b6",
".git/objects/92/2b1b843b7b6fdc29ed5568388d4394f4c4257a": "9dc24b4f57a7adc1b50dfc4a90424b4b",
".git/objects/97/69d8df0b8a599d0192761b627fd52ba404e71c": "8ca2eabc58a030e078faff3eda5ad111",
".git/objects/a1/60a899c83e9784399eda57cb0538132725901e": "8b97c5681c30d8080e1c816ec25541e1",
".git/objects/a4/253f7705c4939b486d43aa4e47b596a2ad4a0c": "89a2d9d5db70d03fbd79c1662d2de44e",
".git/objects/ab/e6e769393e3b7e14ffab714707c1586a374cca": "15e3cadb1b1f5b69ed70e02545b3819f",
".git/objects/ad/6bd34cc5e5b60169273a1d9ff2d5b74162d9d4": "881be3cd0eab0baeeef7ec870959384f",
".git/objects/b0/14016e7e5374e0bef229d0ebe0d70564243e38": "cf8cb9cb5474e3b2d2b0741134fd7f05",
".git/objects/b5/9b89f1d155cbe2954ecbbb650e3cb1c3c73313": "64e1edd9c306377f1ccb82a21aa9516c",
".git/objects/b6/8b1dba7f33e5c3b57b002fed279722745a9c54": "a1fbed4ef55efd414ce1223f622fc2e6",
".git/objects/bb/c841c51945b24c1efc8fc642b8e7222ae38e85": "dca945e4c971b855b80c1cbd9e0a9fa1",
".git/objects/bc/7e1c9b39ea136c216960b5eb53a40f58596aa7": "44070c1ee8099554ff27bba71ea2d7de",
".git/objects/bf/dc5b86797e6f3e9ba4ec68c39d166a6cc1befe": "119501ef31fd3be8885490e22dde5f4a",
".git/objects/c4/248eeeeb6f69551ecb7674941c27754fc5b1dc": "e73081d124364ce6c20a03285c472a11",
".git/objects/d0/ef611aef7754e332fac5d7e5f278c38f5299bf": "72a6226a1c5a9a846c09f00cf5d36435",
".git/objects/d2/9e9143e9421cd21ba9dc07b74776e8930237db": "9b61dce59dda1c982c0c8db29bc9ba75",
".git/objects/d7/37c117eab78ef0edca8a11edd68d18b05c3c35": "6f9980824d033ebdc4ce695dabfa875d",
".git/objects/d8/3e84602f6e90d95ff802f4afdbce99738b0f2a": "127983329ce0ea5fffbad08f84798279",
".git/objects/df/11b84b99780144f5a51866b112738ef33ad1cb": "07a4c0720f91d2c379fa998e16e34834",
".git/objects/e4/87ce210963e1dd56c1e735d4ddf5ad16e8e924": "6a15c31d946bdcb222748fff7ce94733",
".git/objects/e7/e463083fb5ae0b3591a8d4b23498a9368302a5": "8b61d3831832277ba05a85d6aead3bf8",
".git/objects/ee/b189a5baa66369c8735b5ccd572f1a54726c12": "5b9682b6528cf498fa9a6e6038a6780a",
".git/objects/f0/b4bc628117a492c2fa81fb69836f16d6b2213c": "c2f7ddfd0b3a6ea0510ef33d608901f2",
".git/objects/fb/0a57b529f10ca16b3d5f4926eed0a3cd9dc430": "a57f0176efebcddadaaa080eece85dc0",
".git/objects/ff/bf800ad84c4a0cf32d4276fa08f2de313379db": "16e7b9a58de64ba1416a2a7af2f80faa",
".git/objects/pack/pack-577cf6554402eb1916cd5126bfab438a9b3be667.idx": "8df29c54d4658fbdaac1549c8831047d",
".git/objects/pack/pack-577cf6554402eb1916cd5126bfab438a9b3be667.pack": "edddc8b85cee13714bbd1b8f110a1b66",
".git/objects/pack/pack-577cf6554402eb1916cd5126bfab438a9b3be667.rev": "4c9b6f2207aea3b1af212672bd5f8d26",
".git/objects/pack/pack-bc4c1064387764bd4daad4231ea996acc0657eb2.idx": "445d62bd52e162f021987d8747a5f94d",
".git/objects/pack/pack-bc4c1064387764bd4daad4231ea996acc0657eb2.pack": "1b60726281177e41436ef712b596ae30",
".git/objects/pack/pack-bc4c1064387764bd4daad4231ea996acc0657eb2.rev": "3b713b2079e67fc27c4002d7030b5346",
".git/packed-refs": "55877f4c8736f3cc34beb5215086c4a1",
".git/refs/heads/gh-pages": "fa852a763e2af7a223342a7b326a873f",
".git/refs/remotes/origin/gh-pages": "fa852a763e2af7a223342a7b326a873f",
".git/refs/remotes/origin/gh-pages-html": "64b585de082522e6e5404b246ab1896e",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
"assets/AssetManifest.bin": "aff2719069b13723a399c0d4e95e7a5e",
"assets/AssetManifest.bin.json": "42cd7f8cc9461a752b247d153869c579",
"assets/AssetManifest.json": "a526cfba75d5a4f36401fbbed8206914",
"assets/assets/city/world_cities.json": "8d73cca9e6daad65e4e4904ac63dedd9",
"assets/assets/document/weather.json": "7d2e5816730616e1bb15dd1c480a428d",
"assets/assets/document/weather_icon.json": "0b2db7ddceea3af3c88e740dc146d064",
"assets/assets/document/word.json": "13ccd10f4780315801e54622b8c2cb8a",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/assets/icon/icon.png": "fddc0f19feec8c4c0695e25a9e764e2a",
"assets/assets/image/background/wi_10.webp": "ae8c6de1aaffe5a937a17c18b471b126",
"assets/assets/image/background/wi_100.webp": "9bcb11f4bb8c73a4c987cdcb915c8711",
"assets/assets/image/background/wi_101.webp": "56eba47a03a3abfc43ac41332be8978c",
"assets/assets/image/background/wi_102.webp": "0c4385e1263fa0684056fbb602c7f92e",
"assets/assets/image/background/wi_103.webp": "d6bcbd44750227038f2d0f5f1812f790",
"assets/assets/image/background/wi_104.webp": "56eba47a03a3abfc43ac41332be8978c",
"assets/assets/image/background/wi_105.webp": "43174989d31b57ad0eaabb9f2ade9cb6",
"assets/assets/image/background/wi_106.webp": "a899ef17254acfabc0b91d6c42a70501",
"assets/assets/image/background/wi_107.webp": "f55dea122e88c2e112c52a025b1d69d6",
"assets/assets/image/background/wi_108.webp": "046c4ba072b8c99d5d7a092c472c4eaa",
"assets/assets/image/background/wi_109.webp": "8938b1fb49b26de25d1468c02a24bb8e",
"assets/assets/image/background/wi_11.webp": "a8b266ecb88c04fc568add56389aa1d5",
"assets/assets/image/background/wi_110.webp": "845ff971f2ee56e331a7cb02a167962e",
"assets/assets/image/background/wi_111.webp": "cc4ac7a62bbedca81469fd79fb43cc7a",
"assets/assets/image/background/wi_113.webp": "d9c9a30474eb18b2c9cca752907c8af5",
"assets/assets/image/background/wi_114.webp": "42406cb8a8b644bd6e97a74728e57c2c",
"assets/assets/image/background/wi_115.webp": "2ad6bda927ec20c025dfe5d11b65c974",
"assets/assets/image/background/wi_116.webp": "470149cd7e43a6a72bca3703adeaebed",
"assets/assets/image/background/wi_117.webp": "e002c95297e097b680dd8765398d55e6",
"assets/assets/image/background/wi_118.webp": "be3a06801e4829b8250c1f1f5f4b9f6f",
"assets/assets/image/background/wi_119.webp": "cb166e807cf1aeb1694735fdc80e4d66",
"assets/assets/image/background/wi_12.webp": "c538e517b062ec8ea99f84f10a4d9191",
"assets/assets/image/background/wi_121.webp": "85212658f230459c4647b4fc2b5c43f9",
"assets/assets/image/background/wi_122.webp": "ce1b70fce7fd6641aa3f603f97733d39",
"assets/assets/image/background/wi_123.webp": "2590ca6060c2f36271dac42ec2cc1b26",
"assets/assets/image/background/wi_16.webp": "cc13e9fe576c8c83a35efa8f1dca0b49",
"assets/assets/image/background/wi_17.webp": "2a266e52c5fee3c632fe65a282be4259",
"assets/assets/image/background/wi_18.webp": "32fb9febcc4e8cfe490822149a25f18d",
"assets/assets/image/background/wi_19.webp": "c9bc15b50f1c84a4a985214d1640d9ad",
"assets/assets/image/background/wi_21.jpg": "1864ed306b9d987780a3c66f8116cb22",
"assets/assets/image/background/wi_22.jpg": "cafb481742be2107ace4074946644288",
"assets/assets/image/background/wi_25.jpg": "9a299572316be0b776ee208bf219ff42",
"assets/assets/image/background/wi_26.jpg": "34accd950f1b082b449539f9be94c7a1",
"assets/assets/image/background/wi_27.jpg": "9cfac9bae3d55b0995a083cd98ac71df",
"assets/assets/image/background/wi_27.webp": "bd702903f84717b32e1c9a721c95761f",
"assets/assets/image/background/wi_28.webp": "a8ff5bc825c1e0413f21c9ccccf8b57d",
"assets/assets/image/background/wi_29.webp": "f854e9915275ee6b58d4d951ecfcc102",
"assets/assets/image/background/wi_30.webp": "74c603d543104b329b3414dee30a155b",
"assets/assets/image/background/wi_31.webp": "9117c531c3ec02a49ee3eceedce966bf",
"assets/assets/image/background/wi_32.webp": "ce1c9521a280e24b1e79a72fdec8304b",
"assets/assets/image/background/wi_33.webp": "9eb5ae7dff1d20e244ec0eec97eed02a",
"assets/assets/image/background/wi_34.webp": "7488bbf353a65073f6c8e2477dad56a5",
"assets/assets/image/background/wi_35.webp": "21c6e3d58150a47c704d1452cf7143b4",
"assets/assets/image/background/wi_36.webp": "b12a0bd7cb6d527688c9ab648e11953a",
"assets/assets/image/background/wi_37.webp": "aa41b0e6b5159ae3c541edb800c63d7d",
"assets/assets/image/background/wi_38.webp": "b0d4d5ab58193efe799132a24a4c8fbd",
"assets/assets/image/background/wi_39.webp": "a930bc40572c23b23ab01e18376c8feb",
"assets/assets/image/background/wi_40.webp": "96a44f464a8974198ba220cac01dee01",
"assets/assets/image/background/wi_41.webp": "776013d131da045352e537b3cfc41c26",
"assets/assets/image/background/wi_42.webp": "30f1d3ce82a0c20cdf2d6309e48db377",
"assets/assets/image/background/wi_43.png": "6c8344a5f8aa138d855bf98552e3058b",
"assets/assets/image/background/wi_43.webp": "6c8344a5f8aa138d855bf98552e3058b",
"assets/assets/image/background/wi_44.webp": "f2530a8df64dfbb8142f15f812318d1e",
"assets/assets/image/background/wi_46.webp": "0a451a8fbfe5026dc8207ad99548a3a6",
"assets/assets/image/background/wi_47.webp": "3fc57f89b24d9a8e3e370e069ca02a75",
"assets/assets/image/background/wi_49.webp": "fd696dc8d55c8d4081e41c7fac510057",
"assets/assets/image/background/wi_5.webp": "ef80e73ef3079f56b58215d961cb6b9f",
"assets/assets/image/background/wi_50.webp": "d13d977f027436f52f24247eec1d8f00",
"assets/assets/image/background/wi_51.webp": "46db1d19da9236df6d834901b255a4d3",
"assets/assets/image/background/wi_52.webp": "f0db68198c66554dbf5ce0b27553b3ba",
"assets/assets/image/background/wi_53.webp": "abdc2bf31d2906c317d73254eb0429ae",
"assets/assets/image/background/wi_55.webp": "7e6c5e7fcbef18a43deae53214bbac38",
"assets/assets/image/background/wi_56.webp": "fb546316d48e06c830a9799a35a62ebe",
"assets/assets/image/background/wi_57.webp": "bbae94ca089580f2425439b57a98dd1b",
"assets/assets/image/background/wi_58.webp": "b88f39bb3322ca19477c3f17e20731f7",
"assets/assets/image/background/wi_6.webp": "e5d68328d65b4d771dd71edc7206fbf6",
"assets/assets/image/background/wi_60.webp": "799c253f76b820b271589473bd937a92",
"assets/assets/image/background/wi_61.webp": "3401598dcb8237e48956854d160e1e11",
"assets/assets/image/background/wi_62.webp": "bf65f481d0bd1f694e3737ac858dc30e",
"assets/assets/image/background/wi_63.webp": "27f0ccce94a2bc19c1aa62307251908f",
"assets/assets/image/background/wi_64.webp": "12f63f446a8a6d6877bb7d3944d2a838",
"assets/assets/image/background/wi_65.webp": "66fe4e69088ae974ec8d7b1c75586260",
"assets/assets/image/background/wi_66.webp": "8867064c0ac6390b1b07f086b3e00c5e",
"assets/assets/image/background/wi_68.webp": "32713b14f42d6606757cfeaa0ef3104a",
"assets/assets/image/background/wi_69.webp": "33fa302e221c9d561b404b345f3175ab",
"assets/assets/image/background/wi_7.webp": "7025d5b720286f280c20fb908ce024d6",
"assets/assets/image/background/wi_70.webp": "1cfebd9177d8135041f685e2875c396f",
"assets/assets/image/background/wi_71.webp": "ee510d26171b9bdb0365e169d99899d1",
"assets/assets/image/background/wi_72.webp": "5ff2d37eb2a2d71baead17a10caa813d",
"assets/assets/image/background/wi_73.webp": "31fff4012cec65a285cf8552a9d05288",
"assets/assets/image/background/wi_74.webp": "b1c2ff478e1267ccc9c25b6ff38e24ec",
"assets/assets/image/background/wi_75.webp": "5617ca59d54902fe6109cb0d850bc4b5",
"assets/assets/image/background/wi_76.webp": "c3dbf60d99a0c72994995bcc4f27d1ab",
"assets/assets/image/background/wi_77.webp": "12b5f867fcbe109f61283b3a14255fb5",
"assets/assets/image/background/wi_78.webp": "daabb5b8024f57ff70c7337e397c8e7b",
"assets/assets/image/background/wi_79.webp": "6c5a1f8e26a77793d101d1aeefa2d19d",
"assets/assets/image/background/wi_8.webp": "a60dcc879b1440c57219baeb619850db",
"assets/assets/image/background/wi_80.webp": "301e5e5b4ca096580b4f5cd00386ec3f",
"assets/assets/image/background/wi_81.webp": "e6c2575be15ea9a350d37c018325f4e1",
"assets/assets/image/background/wi_82.webp": "40b79b73c9f75d42679cd87e2433587a",
"assets/assets/image/background/wi_83.webp": "f47ebdbb2f21032bba99456d4a90b9e4",
"assets/assets/image/background/wi_85.webp": "2e3990d556a00986c1c78bb26e61e087",
"assets/assets/image/background/wi_86.webp": "2cd099c29e4a3ab761ee9ec496c38948",
"assets/assets/image/background/wi_87.webp": "a817c2a87b54153db0ccc9aca3b1faa6",
"assets/assets/image/background/wi_88.webp": "4c30b3e53ec784731912588d101487c7",
"assets/assets/image/background/wi_92.webp": "cd61e5d478a4e4d4dd32c6bd8cdf1328",
"assets/assets/image/background/wi_93.webp": "c8f2cbfe21110b22144dc52196b633f8",
"assets/assets/image/background/wi_94.webp": "7757cc70092b1d3f7f3dda13ed9b1a44",
"assets/assets/image/background/wi_96.webp": "5f57bf98476e8d28d63874f35aca0426",
"assets/assets/image/background/wi_97.webp": "495004e3ab0a44a0a871a49e02766f13",
"assets/assets/image/background/wi_98.webp": "152ad88af1cc8d468f0d73eff347d220",
"assets/assets/image/background/wi_99.webp": "6925bf9d1b71ece8560a6081200b428a",
"assets/assets/image/logo_cas.webp": "4539a49a3d929265143537c6d8e4ac8d",
"assets/assets/image/symbolize/error.svg": "8db75780056c369f3f221f5b0277c0c9",
"assets/assets/weather/clear-day.svg": "620565beb6e1d65bbb2584ea47033c9c",
"assets/assets/weather/clear-night.svg": "1f28dbb6e91fb84dec3861b147bc4d81",
"assets/assets/weather/cloudy.svg": "0041294579b33d7b0317d037addccea2",
"assets/assets/weather/drizzle.svg": "41a751fbecf0ff7f0b64b47528a3b385",
"assets/assets/weather/extreme-rain.svg": "c1f2ff1607b5d6744608924f6cf2d282",
"assets/assets/weather/extreme-sleet.svg": "f1f0a46f4189f058c1af32133266272d",
"assets/assets/weather/extreme-snow.svg": "5b62854020f9f9a753decb85467f6d7b",
"assets/assets/weather/fog-day.svg": "e57404264d2b988396dbf8679227c899",
"assets/assets/weather/fog-night.svg": "cd7908d1a8001356855bfbfad947c5f1",
"assets/assets/weather/fog.svg": "e4b25c917df244a9cb59a3e8f6e2fe3c",
"assets/assets/weather/mist.svg": "bed9a0f650154f49c543a572a10c70f9",
"assets/assets/weather/overcast-day-drizzle.svg": "546494c5b1d9ef8fa813daf8872b06b6",
"assets/assets/weather/overcast-day-rain.svg": "6a5185fc34216336248d775b6ecdf658",
"assets/assets/weather/overcast-day-snow.svg": "79d47c5d052dee79de3013cb3b9231a2",
"assets/assets/weather/overcast-night-drizzle.svg": "ef2683c047d6f9dbc4963e3c52b51d48",
"assets/assets/weather/overcast-night-rain.svg": "cdd12ace9af2ee9792eade6f0bcfa95b",
"assets/assets/weather/overcast-night-snow.svg": "b09ad66d0e928b2031ea3936ecdd5e7e",
"assets/assets/weather/overcast-rain.svg": "5fa1f5eb07e208c669171f083093f6d9",
"assets/assets/weather/overcast-sleet.svg": "fa57cf942d72daa23a9eb19695714042",
"assets/assets/weather/overcast-snow.svg": "f9e191b4eb14b00be3babcdc54aa0c51",
"assets/assets/weather/overcast.svg": "a7fab4663dcded0d7eec830eb3cb8270",
"assets/assets/weather/partly-cloudy-day.svg": "8dd8a6d42c96ef6d4cbc5bed4747db87",
"assets/assets/weather/partly-cloudy-night-rain.svg": "c2a35382f4c2b210204a1cf0f385325e",
"assets/assets/weather/partly-cloudy-night.svg": "3bcac62f551cc811f7ce9ea8a95dc602",
"assets/assets/weather/rain.svg": "850291f9bbc2e673471b0e80ad2ddf39",
"assets/assets/weather/sleet.svg": "1c792557c60febe9c7c171864dc3be6e",
"assets/assets/weather/smoke.svg": "3ccbe9c1ccdf0218543a7f26c68dc82c",
"assets/assets/weather/snow.svg": "5bd529c7717278545d9f75c52b84b15f",
"assets/assets/weather/snowflake.svg": "d156b7b0791bcf01366e7a4824633db1",
"assets/assets/weather/thunderstorms-day-extreme-snow.svg": "61e3d5d5e37bd1edd3acf2855d84b240",
"assets/assets/weather/thunderstorms-day-extreme.svg": "33c29b36e5c3070175ff5f2fdfa5d243",
"assets/assets/weather/thunderstorms-extreme-rain.svg": "e066c4ff2323dcefe0ade47f302b974d",
"assets/assets/weather/thunderstorms-extreme-snow.svg": "bef8bf950db87b39c65de71225c549b1",
"assets/assets/weather/thunderstorms-night-extreme-snow.svg": "7c617810937872f81bf0e19293a6fcd1",
"assets/assets/weather/thunderstorms-night-extreme.svg": "e6162f5ceae4dac3231a321ad22ec7de",
"assets/assets/weather/thunderstorms-rain.svg": "f38f5a013188e20b3172ba3e589254ce",
"assets/assets/weather/thunderstorms-snow.svg": "1dea42748241391fc910ad715af53463",
"assets/assets/weather/wind-snow.svg": "bfea43b56dee9955baaba2eb97f9313a",
"assets/FontManifest.json": "de07fb01839b41ff6549bbd58fb43bce",
"assets/fonts/MaterialIcons-Regular.otf": "94df6477abadf55688d30d92775326a3",
"assets/NOTICES": "4443439b2f548736efac2ebc869dc283",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "1d48021f2a0455466f86649b4e828a69",
"assets/packages/flutter_osm_web/src/asset/map.js": "9ca74acd5f94ced7366fa719168d7b51",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "8ac7e3bf937ae11469e21265b15709eb",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
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
"favicon.png": "d67092920a63a6671ef960d236b1e81e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0de9094100ed9eb108cb345ddbf3109e",
"icons/Icon-192.png": "0f7b676b471816138847737b134a5863",
"icons/Icon-512.png": "c9adf95d40c5346da10c74b6c053f435",
"icons/Icon-maskable-192.png": "0f7b676b471816138847737b134a5863",
"icons/Icon-maskable-512.png": "c9adf95d40c5346da10c74b6c053f435",
"icons/icon.png": "fddc0f19feec8c4c0695e25a9e764e2a",
"index.html": "2f17c391a77d503c21943e929107e880",
"/": "2f17c391a77d503c21943e929107e880",
"main.dart.js": "df8855af75b1d5322ea307c078af6102",
"manifest.json": "d45fb6024682d7820286fa67d362c776",
"splash/img/dark-1x.png": "f7d5ef888904faa9552aabad0210f9d4",
"splash/img/dark-2x.png": "1c0292ab296ba6a1b7fb2f102ba9e84a",
"splash/img/dark-3x.png": "556c9ca8b55bd86017e397d6b7747480",
"splash/img/dark-4x.png": "bcc70b160ef4c84079728525787cc700",
"splash/img/light-1x.png": "f7d5ef888904faa9552aabad0210f9d4",
"splash/img/light-2x.png": "1c0292ab296ba6a1b7fb2f102ba9e84a",
"splash/img/light-3x.png": "556c9ca8b55bd86017e397d6b7747480",
"splash/img/light-4x.png": "bcc70b160ef4c84079728525787cc700",
"version.json": "c71b5c3ad118ab459e7662e4c9fd9d6c"};
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
