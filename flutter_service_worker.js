'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ad1133205c9c6c7b5e6138f79a6f546d",
".git/config": "66dd5ffa0a197515df0cff32f41eabfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b8ce73e1e05c8f57bf97bb890ce2748c",
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
".git/index": "10c8b362f7f525be8526764b91862231",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f81b28fa417fca5611da7f0ba0bdb1e1",
".git/logs/refs/heads/gh-pages": "f81b28fa417fca5611da7f0ba0bdb1e1",
".git/logs/refs/remotes/origin/gh-pages": "f68952bae94d9612a93b4fe57a0cd6cc",
".git/logs/refs/remotes/origin/HEAD": "48104302805cbf2d2b83af2c2cf0a46a",
".git/logs/refs/remotes/origin/main": "92919a4dc486005e8f06763922c11a6c",
".git/logs/refs/remotes/origin/master": "42d613704c907e1e4ce876e42f5446bd",
".git/logs/refs/remotes/origin/web": "9b93f471a2eb19209b464a90ed0f75a0",
".git/objects/06/275396423a0ed9f82bc4ec62666767787c98f1": "1dd9c33852b6226cabd039b72b60ba33",
".git/objects/08/916fc982d575320916cf80c3e51fb5e49d277a": "44d09906b948c23f94eacf12285c16fc",
".git/objects/17/a897c40de052fb67df07ac2b6ea5a6ceae782d": "47b65dbf7b798b6136acf0f5987b91e9",
".git/objects/1a/68df3ee3347d9b1acae21e2900f4db73c27d7c": "55e30c9be154e3ba44fbd2b9d81bc837",
".git/objects/1c/5cab1cb96852a006a8db1435290576594278d4": "9fcbf68523b87f2bd66a7e2c59ef1e66",
".git/objects/2a/4e207f95015fd2f2aecdb41f60701388a1685d": "2dbfae2a598af5a9fd8eb3cdc7673fc4",
".git/objects/2d/2c4f789f54422cd937029e7bceb1342394771e": "8feba0f84016d23eda30b15ec9650b9f",
".git/objects/34/0c4746bca96fc8ff14400df03315442fba09c7": "45cebfb3d343dfe07066f18d6b8cf77d",
".git/objects/35/ca2bab5373e18bdb9625e9bdd5e1acc4d0532c": "f52ef7edfb4816cff73f07c2f0a33d0a",
".git/objects/38/c43af4b00bfcda4cacbb3aa586507691ab3d5f": "c901419bf99021b63c4d7b4036900c7c",
".git/objects/3e/40ff4c92418b3f21f3791eb3cba307bd522eb0": "8548b79444c1fc98ae3b5a051fb63e3c",
".git/objects/3f/d81247af956e5bfc5aede63e40fe61c5fccf2a": "d5a05c294fc054524d3bc6065a5dc319",
".git/objects/46/cf076f9222363dffdb7293a4d2736c506073a0": "28b5b5529e40980735c3df389b46f516",
".git/objects/57/e9be549a922bc48a28ba719c5090c0e00da45c": "f93b8c6541b4f835381769f80073b386",
".git/objects/5c/1c4381e840a53dd5e1c1581deb4356c53da605": "341386e19843b62fe0254b3bbb903911",
".git/objects/62/4a5be38a50dde3a8a137658f2d09d343c23530": "7717fcf3c17c32239c3c5e39c501aacb",
".git/objects/6c/55143b27216d6eb54d1181f63110761797072d": "d3cafec09514935b20b1811e8f88ec37",
".git/objects/6d/ef2add1f6c1d648bb580f894dc2c894a5fad9e": "37e96cbfeedc36777ab233fbccc3b113",
".git/objects/7e/8130af35ae890be6a0f7719e1466611c3bd832": "11e8439c541099317c10a0c464319695",
".git/objects/81/f569f79293a011a399736f12263d2035da5af7": "d1363429d6860130dddb75231e4d6655",
".git/objects/85/a77e580d06d25c7eaa82fe810736113eca6b04": "81a7773fd1161fc2d4452fa265cb5a09",
".git/objects/87/a5721ca342a93c5fd545738c328d6221059e03": "547b6d27a58fd5f48ca35133ba62ba17",
".git/objects/8a/3fcaf475d5468d0a2d403969c0db47b9bcc4f2": "e8b3065a97b2975b19922e93f6d3a8db",
".git/objects/94/45cdca85fb01454e4da65486515d8255b6b3a6": "8ba0fcd267f4a0512b2e4f49b271aff0",
".git/objects/9c/da3d46d0fb8122e5eb0f499e8ff63f1afebfb6": "fa42edd45b2e22238f40f326478cedc8",
".git/objects/9e/823181cbada5394df9265f828df15f9a75f668": "3948fc16600812e3befb483a36f4fdd3",
".git/objects/a1/8eb5d3df03e53558297587101915212f0913ed": "c9653f7ee8f2ef2071975764ee341293",
".git/objects/a3/bcbb11c595cc3e8eeb07acd128dedfc337ae06": "5aae08bb7303d7847a9e49fb5fdbdf58",
".git/objects/a5/6ab4d3ef79a83f402594a014dc8f0f8532e6ea": "5c44840839311d2a79bcab80df4f10c0",
".git/objects/a5/ae99ac0c25490ae90e62ec262556b74ab4e08e": "c9baf9ab71296c582bcc50e9420b5292",
".git/objects/aa/24bad9baed0da3e5390b5718852176054536d5": "1d1279a95f9390476688b04a37659055",
".git/objects/aa/53ab26ff1b6fdb354c3b82cec7a9e6c1abefff": "d8b2ebb55c3d75eeda4591e84a5f02f2",
".git/objects/b0/a09d4cd34a69bfa7aa114232028cdc16512f01": "523e6424d2bdd091c5c9adea9e939e4d",
".git/objects/b3/fc595e8d7532933367ab64ab69a5e30faaee79": "531361a3dac7ed0d5c1998d7be923f20",
".git/objects/c1/90ff0549dd7b471d4dd87e28e092d0bb49db39": "e935e61b4f9b064b27dd6b0689a0d3ba",
".git/objects/ca/880d0303b1e87f7aa2e56ca4a5d65d127e3ec7": "d857f3fed04db567ef917b00c63341f8",
".git/objects/ca/c2521072bfa7e6702e2851fb33a93004db6501": "5fd3d1b3088e6a6db89f53b4f4c93dc8",
".git/objects/d1/58181797c217c9a656823d93dcc4fe2f862ddf": "94b5a866e518b5bad63ea0b2578bd60f",
".git/objects/d5/17ce0e4469c4b722bc8b655a153ac69da1095f": "970ec608d4972a39fb5b99e7c746e1b6",
".git/objects/d8/c5fd6f6f0ca90cbefe57adb3088b57e666e226": "6b8dd09054578fcf291ba9158d47ed15",
".git/objects/dc/3787a514ae61cfd93359ab1b17c26c6afc6480": "4277bc9a2ecd5aed971de3a748481d2f",
".git/objects/e5/838f2b5db2a9eb37b57e1c8d0dc8ff8a23afc8": "d7020475c8a02c48254d425f2f3da3f5",
".git/objects/e8/ca4845fff659eacb46b81581e7d6af096289ee": "77ea7d4d4fba830edaaeb666061ecefb",
".git/objects/ea/497f4f00030b3bdfd78a206a6459444e0c9be4": "2b9c7d90a3622d0c04d3d8110f87f041",
".git/objects/ed/8d51a2a98fac770c0f0e4e360efd91495d27dc": "72fdf243334da53fc98450b310c4b937",
".git/objects/ee/439d44b2aa6fbc88610346927a350b91770485": "94b640fb5b4997ad1be9206af9583d8d",
".git/objects/f1/ed75009c54c608d0f3560b3dc5931115c424a9": "79644d980f35713af2cf64fcae2b82c3",
".git/objects/f2/0322b71db918846dd1924c8a994f67714629d6": "5396b41d9ffbd00d71252885c20d84eb",
".git/objects/f3/18d027e9d60c4260b1a4d8d0462872224e8db9": "a0a670cd54e9ea7e6536a16c6d062770",
".git/objects/f8/4770b7f4a696986a63edb8f41f93ce0bd1d324": "4343fd0f87efd6a9336c23999d9d5ebe",
".git/objects/fa/2733c549800c16a6b5de7eb2d013a449a8e6b8": "9604a075221ecc4443219d17ca2b4a55",
".git/objects/pack/pack-c14b1f48427afce583c12ce7363a04b24d2a2cd8.idx": "47d848b79c7142c5de02863a2589d71a",
".git/objects/pack/pack-c14b1f48427afce583c12ce7363a04b24d2a2cd8.pack": "0216b1b493ad4a28115c1fc9f1d9dd6d",
".git/objects/pack/pack-c14b1f48427afce583c12ce7363a04b24d2a2cd8.rev": "dfe600e5f6fcf0194e63848997c0e4d1",
".git/ORIG_HEAD": "1e312f22c9b790af11ed486292262f1f",
".git/packed-refs": "f72d41b0ad96a7fe90119ce3bd5d9a93",
".git/refs/heads/gh-pages": "5b36c4c28faf1f5131fb279a5a26515f",
".git/refs/remotes/origin/gh-pages": "5b36c4c28faf1f5131fb279a5a26515f",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
".git/refs/remotes/origin/main": "3fc567b1bb84d5e04a7f17fd3e1a6cee",
".git/refs/remotes/origin/master": "3ecc6c06cbab8afdc1ee241fead51dff",
".git/refs/remotes/origin/web": "31187e0791453a0ce5f8f085f75c946f",
"assets/AssetManifest.bin": "e509709aec68a0aebe8dff18a6fff3e4",
"assets/AssetManifest.bin.json": "d52e02e50b7ecefcc7c9f82f052574fe",
"assets/AssetManifest.json": "e226599df856999e5d614020c931a647",
"assets/assets/city/world_cities.json": "8d73cca9e6daad65e4e4904ac63dedd9",
"assets/assets/document/weather.json": "7d2e5816730616e1bb15dd1c480a428d",
"assets/assets/document/weather_icon.json": "0b2db7ddceea3af3c88e740dc146d064",
"assets/assets/document/word.json": "971fa10ee645b725bcd5104c6098ae0a",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/assets/icon/icon.png": "20cbde6abca65c2c14bc1fafca9b7789",
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
"assets/fonts/MaterialIcons-Regular.otf": "dc8ef418b7c03ab49e5a536952c24e8c",
"assets/NOTICES": "3ab49c2cdfd741de90baa519aa5d8ecc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
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
"favicon.png": "bd4483daac757488cd19fa1ef5706e17",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "7105fef5b0d148c82245e8865ad0244a",
"icons/Icon-192.png": "20cbde6abca65c2c14bc1fafca9b7789",
"icons/Icon-512.png": "20cbde6abca65c2c14bc1fafca9b7789",
"icons/Icon-maskable-192.png": "20cbde6abca65c2c14bc1fafca9b7789",
"icons/Icon-maskable-512.png": "20cbde6abca65c2c14bc1fafca9b7789",
"icons/icon.png": "20cbde6abca65c2c14bc1fafca9b7789",
"index.html": "af636939c8c8cc7147252055792991bc",
"/": "af636939c8c8cc7147252055792991bc",
"main.dart.js": "c6632df55e03604f003d1ce4c0a93268",
"manifest.json": "6f317e8616567466e0a30e12e97d0c62",
"README.md": "f98b27cf5bd46874aa2fb227f729d4e8",
"splash/img/dark-1x.png": "1df007c09fdbe861259a489e1bb9d60f",
"splash/img/dark-2x.png": "044899ca96a1ad57d3af5ea63f89aaed",
"splash/img/dark-3x.png": "d6520ae488d7df0142905875dda513f9",
"splash/img/dark-4x.png": "7c68a29bf0f05c9291aa57fc9365734e",
"splash/img/light-1x.png": "1df007c09fdbe861259a489e1bb9d60f",
"splash/img/light-2x.png": "044899ca96a1ad57d3af5ea63f89aaed",
"splash/img/light-3x.png": "d6520ae488d7df0142905875dda513f9",
"splash/img/light-4x.png": "7c68a29bf0f05c9291aa57fc9365734e",
"version.json": "087173a6821301c36a55218f62cb7d4b"};
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
