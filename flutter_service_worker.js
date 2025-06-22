'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "00917c601595e34d835bc06842ff01ee",
".git/config": "66dd5ffa0a197515df0cff32f41eabfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1e6f46102e35909c9cdd6b04da776804",
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
".git/index": "c3ce886aaf42c330f26bccdb9b9b90bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e41aa11c1315c91cac77f7df411ea821",
".git/logs/refs/heads/gh-pages": "e41aa11c1315c91cac77f7df411ea821",
".git/logs/refs/remotes/origin/gh-pages": "ac32d5981a53623224a8ea0d6acf7f5a",
".git/logs/refs/remotes/origin/HEAD": "48104302805cbf2d2b83af2c2cf0a46a",
".git/logs/refs/remotes/origin/main": "92919a4dc486005e8f06763922c11a6c",
".git/logs/refs/remotes/origin/master": "42d613704c907e1e4ce876e42f5446bd",
".git/logs/refs/remotes/origin/web": "9b93f471a2eb19209b464a90ed0f75a0",
".git/objects/02/0f380fcd28dd14059b9ba1343d4e844bbbc185": "77e836f40ff9c51abf21fa91f20cfef8",
".git/objects/02/3e07da59157695ec9284f99aa50b306acf8ad9": "be6567f1f7eb27d16a76fca122dc3738",
".git/objects/02/c9161c7e81cc5e02128227281cf430d6847f9d": "571a9222720257fa817f4fdb56435a4b",
".git/objects/03/0346dec55507ca63c074974eebfab9912626ed": "cd9774ee92ee642b99328a5d8567a6cf",
".git/objects/03/88755be798ad2d8b41dd588761e81339cdf2a7": "4b271fc1a59d89411e5f0a0150e1786b",
".git/objects/03/a0c6ab73550d55f08e71492fe4daf0ec7de020": "e041d60ceeda71bb52d20058fadb0adc",
".git/objects/06/275396423a0ed9f82bc4ec62666767787c98f1": "1dd9c33852b6226cabd039b72b60ba33",
".git/objects/08/572fd43b0bd0d6f71653659fc62814e001724e": "c3a8fe3cf0862fa85911d9936d6668f4",
".git/objects/08/916fc982d575320916cf80c3e51fb5e49d277a": "44d09906b948c23f94eacf12285c16fc",
".git/objects/0a/57264b9b31742512c5fca17b9142450a8f3cfb": "e8c8991c9b57c60d1ad7fe916a40f7b5",
".git/objects/0b/c4a86c6e7c88832d3a8e8462b0c084ffcbb4d3": "93fb54c08c8d4a807e1a30980bad4ae4",
".git/objects/0f/abcd601459875afbdc746843bef9dd94b5f62c": "034b3c8bf68fc8014781986df3661a0a",
".git/objects/12/74905b28c3685c1b604cec482bc58bfd7edc08": "a2d949c98d3af72e876996dc30ab89d5",
".git/objects/17/9c12127ad418aefbded241263654052e29d0fa": "c8ae7c9236ff1bcd364eae868443a60e",
".git/objects/17/a897c40de052fb67df07ac2b6ea5a6ceae782d": "47b65dbf7b798b6136acf0f5987b91e9",
".git/objects/1a/68df3ee3347d9b1acae21e2900f4db73c27d7c": "55e30c9be154e3ba44fbd2b9d81bc837",
".git/objects/1b/fbb8013fd153659a4e6fd11a05ec75c009688b": "cf76ccdbfb99ee1d2fa1ca31c816f93e",
".git/objects/1c/5cab1cb96852a006a8db1435290576594278d4": "9fcbf68523b87f2bd66a7e2c59ef1e66",
".git/objects/22/8c3b2b9261b3f4469c21690c7077568f42da45": "b59c62f4e87f6192bae93ece7e5f8b26",
".git/objects/28/01ba2e0a49dfe5adc5e4f6e7db274c6fcefc7e": "c1654dbb4137d14cab9be3c4d224408f",
".git/objects/29/90f34df4d854af06ddcc653d0fbf9d4f75f2c7": "7d27a8945a8dea1810d75476f25eae02",
".git/objects/2a/4e207f95015fd2f2aecdb41f60701388a1685d": "2dbfae2a598af5a9fd8eb3cdc7673fc4",
".git/objects/2d/2c4f789f54422cd937029e7bceb1342394771e": "8feba0f84016d23eda30b15ec9650b9f",
".git/objects/2d/445051658b031ba246b0ecf9a0db6c5a41354e": "2b1c50aedb50171ebd4a0a481986ceb1",
".git/objects/31/e33fe34dcdf2250423652b942df9ab8f1bf4ae": "10462f315914ff12dea072dbc7691451",
".git/objects/32/7f7fc3ec4735ec10d474e336aa9e32d6f4e432": "dfbb17dd8503421788812fd4f6a0e957",
".git/objects/34/0c4746bca96fc8ff14400df03315442fba09c7": "45cebfb3d343dfe07066f18d6b8cf77d",
".git/objects/35/08468e5f11f976c115ca9c667043563e2f05d5": "03fd885ef461dc8e146c34a544984235",
".git/objects/35/ca2bab5373e18bdb9625e9bdd5e1acc4d0532c": "f52ef7edfb4816cff73f07c2f0a33d0a",
".git/objects/38/c43af4b00bfcda4cacbb3aa586507691ab3d5f": "c901419bf99021b63c4d7b4036900c7c",
".git/objects/38/cd0346e1701eb0487ab82b7543d79605829ad9": "7c586aeb1304208cc642e95ad2a8ce5a",
".git/objects/39/99eb201822156aa8847d2c4ee06befcd0a65e7": "01267c5af54e7ce6ee4f9d540aef906d",
".git/objects/39/d7089ce7d4546768ab666ae6ead96f0e275222": "4e84be0b97cf02d41db7d8d8bffd44bf",
".git/objects/3b/0a0548278f3fe109e1e77a3e193c6397a12406": "4cc4a0db7aa1c23c8491bdaa5cfaff39",
".git/objects/3b/efc4c678667c9c1bd2af6597bc2d3dfb4d76ec": "48eb0ebaa1b99cf0acd080310811cba2",
".git/objects/3e/40ff4c92418b3f21f3791eb3cba307bd522eb0": "8548b79444c1fc98ae3b5a051fb63e3c",
".git/objects/3f/964cd31552cb5e572dc89ebfba33b68601f100": "c8a02c669dc2102913b4741e48e54ed1",
".git/objects/3f/d81247af956e5bfc5aede63e40fe61c5fccf2a": "d5a05c294fc054524d3bc6065a5dc319",
".git/objects/40/df397e7214e32cb4db4a17e56c6028b845e0ec": "79a494eb4e27ac43a8eabf7195d894ff",
".git/objects/43/2c2df634ae16a6874adfde913d65ad985d05e4": "974205b08608f1d0fce1bd207fe09c56",
".git/objects/43/bf9793e960ca5e447960aaa8129ce2b41f8f32": "24deafc1c4487c7b996f0810fdb41ecb",
".git/objects/44/c1350cc10bc0157c29665965d2c1d250e3e554": "15751bf415432aa0a69811a3d60f7cfd",
".git/objects/45/1bb2ccb5622e2c22eae3cc67f7ce3e362268a9": "142eb94a58123f63c66c733fe159a24f",
".git/objects/45/9333a9c525e393b8be88eb07d56f15f447bbe4": "ce0ab887f0ba15ceb5cfa3444fee73c7",
".git/objects/46/0f62e5f12cdc127b420cff6fbe4af0b79a9fc6": "5e4075123ae37cd38aea8713f03139fe",
".git/objects/46/cf076f9222363dffdb7293a4d2736c506073a0": "28b5b5529e40980735c3df389b46f516",
".git/objects/48/01618745c64736bd747de74123900436cfdc7b": "410d7eee6e3e8fb6e00023d7f0ad1aa9",
".git/objects/4a/7d313fa2c4b30a8f377150404bb1b1c898a678": "98b99c09a0b24d985fdda0800e439f32",
".git/objects/4f/1e1555f2ed746ef53a2ada292ea83534c7ff91": "8e8c51f85b542818235291e0c114974e",
".git/objects/50/c0fbbb221f997883c67a070dcec799d9cfd4b8": "f0ed45f11c782062f93502050b054736",
".git/objects/51/92b16de465827a90206d03015f28b40e0e2da8": "77b26714548d38e207012ef39ebb8d6e",
".git/objects/52/148716c33b1aba221740df63b415af8fc36783": "d4a2d77b624841239f30f2fa1a43589c",
".git/objects/56/3e28f7fb9138d94d008eab94f9d248cac77009": "9408f5f427c21788883d358921de1332",
".git/objects/57/e9be549a922bc48a28ba719c5090c0e00da45c": "f93b8c6541b4f835381769f80073b386",
".git/objects/5a/0ce3bee804e8b675f9a0d730c4eb411d15771c": "580bc84ade64a061cf4b835dc40b96c0",
".git/objects/5c/1c4381e840a53dd5e1c1581deb4356c53da605": "341386e19843b62fe0254b3bbb903911",
".git/objects/5d/2d81679c087fd7697faf2f31bd372220eb6128": "dc98956d485165b49d196959c9e90687",
".git/objects/5e/a30550aaacbff06ac4a91cb156248c7dd4afa0": "70ceecac35b3a4fdd2956f0905d649e7",
".git/objects/60/fe751a08f4535fb5c3492fcd7d29797c6d36ea": "fc5d41066016ae18a64fab1b5eb60837",
".git/objects/62/0aa79af1cb6090f82b1317c20dd00ecdd9982e": "6d4c8abb285609394bae90c0e5d18c3e",
".git/objects/62/4a5be38a50dde3a8a137658f2d09d343c23530": "7717fcf3c17c32239c3c5e39c501aacb",
".git/objects/62/a0be0c91eb6ae51754bbef831f1000bf8edd5a": "e35f48eaa59c17725877a79d723e1fb4",
".git/objects/64/771391355c508f52fee75dea37695f6894ed0a": "bf9dcb667974d2e0ec72b729487ca434",
".git/objects/67/301088891f8131cdcb20cc3eb35284bde78302": "d0d5e0e63e1d1b1312d41988875a1a64",
".git/objects/67/7134d859f6cdd6f74d453a33013564c9fbf7ed": "acda2644590b92dae8d2c419dc9ab2a1",
".git/objects/69/2f9a19bd5f973a924713c9ae06ea4b2ca10792": "0bd55d4d63a0e6b1e0ac6f6860726657",
".git/objects/6b/968c675dfc3e6ed6b8ce236d9abcbabd8d4c43": "2a0cfe8a0e5246468faaaa3649718714",
".git/objects/6c/55143b27216d6eb54d1181f63110761797072d": "d3cafec09514935b20b1811e8f88ec37",
".git/objects/6d/ef2add1f6c1d648bb580f894dc2c894a5fad9e": "37e96cbfeedc36777ab233fbccc3b113",
".git/objects/6d/efac69728798a701dd85820d4d22c68870ea30": "e931638fdf95c844179f82b625576601",
".git/objects/6f/17458ca4dffee7deb935720df02fcaf036c577": "938083aabd4b9ad9162d07bdd5a45573",
".git/objects/6f/c6e63ca15a7d508ef55e1792222beeb3911a79": "45b9e9594148690b9a5c802aa880b2d0",
".git/objects/71/13fa6af185728b8cec9451941fa6fb66e5b987": "a1109ba4eab80b0659a3f1fa432cfc77",
".git/objects/73/74a4a4f5eead4d0a696611ee229c261b6815b9": "1dea1c25dd58e12ea45c9a498d6019df",
".git/objects/77/6d8b7f919b39bf9c05e55d953824c30ffeabf2": "e4f702583724b42bc879be9897bba2ad",
".git/objects/77/9ce74d3275f757deea6da60004f7290f569da3": "42cbdb4f0d4b0832f61d2e138f30c176",
".git/objects/7a/13e32c723121bc3e4164dfa9d84e1407f77b4c": "3dc97bdfad64afe1b40438dd16c388b8",
".git/objects/7a/360a227bbfc806c7dcac5eb173921520128de1": "8372b4798e497bcdc3609df17780d729",
".git/objects/7e/8130af35ae890be6a0f7719e1466611c3bd832": "11e8439c541099317c10a0c464319695",
".git/objects/7e/c54780a3c619ffbd0a63869c2112add06e2db2": "1429862e726976cb00e3d69811cd59d5",
".git/objects/80/19d76ef8157042a6caacc85be1617618759454": "3444a0350f21caf56407de3784e69059",
".git/objects/81/f569f79293a011a399736f12263d2035da5af7": "d1363429d6860130dddb75231e4d6655",
".git/objects/83/29d9f23d43918595e9683f3f74689d70ab3796": "a275291f8e6f7b23d89123959c2a595e",
".git/objects/85/a77e580d06d25c7eaa82fe810736113eca6b04": "81a7773fd1161fc2d4452fa265cb5a09",
".git/objects/85/d94ad6c340ef6247bf1b8762a6dcb7f766467f": "11dbaae2bc1d66c1a5087ece10b563ae",
".git/objects/85/ec61c3d0e4031735b6e3b1fea923428d90098e": "81a7a38747bd247a57837c3ffac68737",
".git/objects/87/a5721ca342a93c5fd545738c328d6221059e03": "547b6d27a58fd5f48ca35133ba62ba17",
".git/objects/88/7aa44b94e14f5f6c9b040c899448f31b2289c0": "d7f28ec05cc18dd7f219849ca8b73385",
".git/objects/8a/3fcaf475d5468d0a2d403969c0db47b9bcc4f2": "e8b3065a97b2975b19922e93f6d3a8db",
".git/objects/8a/ab641481222e60dd362b8d36e07edb287aafb9": "3d60dc25940e4f2ee32cc112063907be",
".git/objects/8b/bfa446335a59c2209895089e30406d7577acc4": "84cbdbd40f1c47acf6dc4b20cb76d2b5",
".git/objects/8b/dcb344271495d77907027f70dea40e93d8afdb": "0247242fa02c6dd2fa045493f6410b7a",
".git/objects/8c/cba9a9219333dd91803c75fcb17bf03d3d1ce8": "a3ec3d119d8ec4fca4f71eb561de0b29",
".git/objects/8c/e36f51f937d1118351291eef1281fb5cf2b281": "e9ad1922d257a64c9ded1d240b7a71e2",
".git/objects/8e/81c85149d0149439b709db8f37c8fbf0de5e59": "1dde53d9faa6482896280b5aa976b687",
".git/objects/93/34dc311d428227051ddf477f1d9b4e5a60e1ff": "ed1a5d7ac2a1e127e252059a73f1c4c0",
".git/objects/94/0feaf8fd36ca2646956aa842e8bf6a66e57b11": "38af75888abda07e0fed65720b6b2ae3",
".git/objects/94/45cdca85fb01454e4da65486515d8255b6b3a6": "8ba0fcd267f4a0512b2e4f49b271aff0",
".git/objects/96/b47b219fbd047ea8962bb7d2c852f10130df56": "eec863d174307016f408da3ff730c6ec",
".git/objects/97/80d69ef8e4f85f2b892e033a0303659ab1d2cc": "5085286b80a6f008ff3c0caad77cc402",
".git/objects/9a/efd82d70cbe67e37346d99da3a266ad6fa91ee": "80579d962818a60bdd204cf7008d2d23",
".git/objects/9b/84da6cad6669e5f4de3cef6e7a081bb3398991": "d650599ea4eb68034e3f718aae37ba79",
".git/objects/9c/da3d46d0fb8122e5eb0f499e8ff63f1afebfb6": "fa42edd45b2e22238f40f326478cedc8",
".git/objects/9e/823181cbada5394df9265f828df15f9a75f668": "3948fc16600812e3befb483a36f4fdd3",
".git/objects/a1/8eb5d3df03e53558297587101915212f0913ed": "c9653f7ee8f2ef2071975764ee341293",
".git/objects/a3/bcbb11c595cc3e8eeb07acd128dedfc337ae06": "5aae08bb7303d7847a9e49fb5fdbdf58",
".git/objects/a5/6ab4d3ef79a83f402594a014dc8f0f8532e6ea": "5c44840839311d2a79bcab80df4f10c0",
".git/objects/a5/ae99ac0c25490ae90e62ec262556b74ab4e08e": "c9baf9ab71296c582bcc50e9420b5292",
".git/objects/a9/2adfcefc2078e09dada65a5b67ea2a28023ba5": "ec0312a929726a6e61bd79d0b9b54e5f",
".git/objects/aa/24bad9baed0da3e5390b5718852176054536d5": "1d1279a95f9390476688b04a37659055",
".git/objects/aa/53ab26ff1b6fdb354c3b82cec7a9e6c1abefff": "d8b2ebb55c3d75eeda4591e84a5f02f2",
".git/objects/ab/4c3c11cbcd7d2dfb5661aed4fbea486d911b40": "3b0fe354e02a33d1f28b5664c1db93b8",
".git/objects/ac/24069deb38f3d5a735a414650de5d8c3697cac": "73a1e1530bef53df3d16dd81961f28a4",
".git/objects/ac/9e49b0c3421d59147709bd46c6916742148da0": "be899e92deb582d774056b20ceec4886",
".git/objects/b0/a09d4cd34a69bfa7aa114232028cdc16512f01": "523e6424d2bdd091c5c9adea9e939e4d",
".git/objects/b3/647cdac7a8eb8e7fe74ddaec2b918290f228e1": "4bde20c3ea69103de1e21c5c7d54c66d",
".git/objects/b3/fc595e8d7532933367ab64ab69a5e30faaee79": "531361a3dac7ed0d5c1998d7be923f20",
".git/objects/b6/a511888974aad435f1223eedbf7680b62b2464": "4115ba14e1851959718a232b1251c323",
".git/objects/b7/a57356cc9d2960dd4fd6a18f029b6d3449aad1": "f74cf0f80500e29135438bfa01460b85",
".git/objects/b8/69fa2c047d58d837c43bacef59028844714342": "ec52615da73f730ae8ca0c359786a845",
".git/objects/b9/9166c4960a40d2e2d1d6233e5106ae5b7900d1": "bffd4339dacd04d42c19fb06b71e574d",
".git/objects/bc/a784a35176a4be4296a7dba8d4a77657c491a8": "8d7248f663d8501eef40b90b4c6cf858",
".git/objects/bd/b98534835294ddaa82fee9036c0b42c51743ba": "76e47f60f5e1d07dd364135ef2698035",
".git/objects/bf/62158ecac179a8e7faf9a945cec2ee9a9bb402": "5e27e6b9e04a38aba0d51042251bf064",
".git/objects/c1/90ff0549dd7b471d4dd87e28e092d0bb49db39": "e935e61b4f9b064b27dd6b0689a0d3ba",
".git/objects/c2/80ee5382a05aee4279a97d032b7cde8ece38a5": "3e39561b9db882e4b3d6427b5c829c25",
".git/objects/c4/21eb2dcdeb44fe18b95aa2482412c5bd45ab81": "f323b5547f807f8383da204a57b8eff6",
".git/objects/ca/880d0303b1e87f7aa2e56ca4a5d65d127e3ec7": "d857f3fed04db567ef917b00c63341f8",
".git/objects/ca/c2521072bfa7e6702e2851fb33a93004db6501": "5fd3d1b3088e6a6db89f53b4f4c93dc8",
".git/objects/cd/0e1603d03536bcae2b844cec91482a25b38f28": "bd5faa5ab42ef8c16b2141c3f19384c0",
".git/objects/cd/f3afff3c19f029561c9eb2a4a48234694d73eb": "26ebe49177226be9d7156f0ac30bb8fc",
".git/objects/cf/cb3034959aaee89d8eb6b64f8070351f1789fa": "92e51cdb012235a6a32eff651c6ebd62",
".git/objects/d1/2e960d30f9800ffa131eacfad22c1b580a4425": "28da2aa82e42bb8edf6c7c5d3da90b42",
".git/objects/d1/58181797c217c9a656823d93dcc4fe2f862ddf": "94b5a866e518b5bad63ea0b2578bd60f",
".git/objects/d1/704d5f7e1b633372191c08676c3e7ea26444fe": "d1458b5854cf6e5945dfc2f87b0b5107",
".git/objects/d5/17ce0e4469c4b722bc8b655a153ac69da1095f": "970ec608d4972a39fb5b99e7c746e1b6",
".git/objects/d5/e39d4856f7d7656ddc60189d4f618da2b2e315": "fcb38290f4628b0c039523a5e5da1113",
".git/objects/d8/c5fd6f6f0ca90cbefe57adb3088b57e666e226": "6b8dd09054578fcf291ba9158d47ed15",
".git/objects/d9/642ea671dd5815fa400a9b740258cdfc117004": "3275862259a49544781087660bf52ba1",
".git/objects/dc/3787a514ae61cfd93359ab1b17c26c6afc6480": "4277bc9a2ecd5aed971de3a748481d2f",
".git/objects/dd/11f2bf444630dba40442891bfb78d86fa2cc9d": "a307499ec58326d7c6eee92ee40b2343",
".git/objects/de/60641472dddeb1629298f1a970564f65664822": "b5e7bf546ffc6e327f8e0d0aa70bfbfe",
".git/objects/df/f023e48035e8e4c8cf3dbe68a80e340f70a11c": "cf395cf08881276b0cd14e453575b67e",
".git/objects/e1/2148d1d31d7afe43f9f8f289733ca8957aef11": "1f9a4221cce0c97ff4e0ad18d357cd3f",
".git/objects/e2/87d0862611e113093f1ad96fd1e9951f5c474d": "8b62ba6b2ad17768d7379512d30b2e67",
".git/objects/e2/b48b3001fd89eaed3f0cf75b9375728a170815": "da71906cc296fd5883f32bf7098be7d1",
".git/objects/e5/838f2b5db2a9eb37b57e1c8d0dc8ff8a23afc8": "d7020475c8a02c48254d425f2f3da3f5",
".git/objects/e5/de3bc28f126171de9de2b9f00e2d01cf6cbdfb": "9c3266a607049186d50ebaf08f42cb02",
".git/objects/e6/939dbd3b284d0e0a495d95fb8f435654f94dc0": "07f7f09fc7775987cd472ddac1eea39c",
".git/objects/e8/ca4845fff659eacb46b81581e7d6af096289ee": "77ea7d4d4fba830edaaeb666061ecefb",
".git/objects/ea/497f4f00030b3bdfd78a206a6459444e0c9be4": "2b9c7d90a3622d0c04d3d8110f87f041",
".git/objects/ea/fdfa395674e4737056666311f58df92ccdf1a3": "47b9c8d19f2909f98003fffc0b679a23",
".git/objects/ed/8d51a2a98fac770c0f0e4e360efd91495d27dc": "72fdf243334da53fc98450b310c4b937",
".git/objects/ed/e826ef0309c731f2e3867347fc9b30caf09150": "5ed0cbbdb591516d9765a26c8d699c06",
".git/objects/ee/439d44b2aa6fbc88610346927a350b91770485": "94b640fb5b4997ad1be9206af9583d8d",
".git/objects/f0/a8de0e14d6bb0e9213319141139fdc1409a2f1": "1b9203ce31954386937b31d69d107513",
".git/objects/f1/bd7d654016db4863fb871f3176488c18a9d598": "8aa72e465280655263a50ecc2e6bf49b",
".git/objects/f1/ed75009c54c608d0f3560b3dc5931115c424a9": "79644d980f35713af2cf64fcae2b82c3",
".git/objects/f2/0322b71db918846dd1924c8a994f67714629d6": "5396b41d9ffbd00d71252885c20d84eb",
".git/objects/f3/18d027e9d60c4260b1a4d8d0462872224e8db9": "a0a670cd54e9ea7e6536a16c6d062770",
".git/objects/f5/41d2125470f841bb09986c6b23c69beb955ad3": "da25f7a7bce14270d9f615b25ddcc48e",
".git/objects/f6/645697ecfc07e1f71a63d078a3aa8272d0a9d4": "f07b7146b1bd730901cd979f7f6a860d",
".git/objects/f6/d1bb057110b6a9389d503ffbddc0390f5bbf06": "ea5f9bbf7e0b39d7b3e87e1676095d79",
".git/objects/f7/76db0c227e4a6fd53261408ad4f84440948cb6": "da1a313dae7a1ba9da4692cd05fb9be2",
".git/objects/f8/4770b7f4a696986a63edb8f41f93ce0bd1d324": "4343fd0f87efd6a9336c23999d9d5ebe",
".git/objects/f9/de6fa7054437d9340e212a6524c909ae598edc": "647e40f1bf36db54e2a78ed88311a486",
".git/objects/fa/2733c549800c16a6b5de7eb2d013a449a8e6b8": "9604a075221ecc4443219d17ca2b4a55",
".git/objects/fa/340a4779164cbe42e2097119ff3fcb7fae7c81": "39169f39bd65c4e0131e385a8b01094f",
".git/objects/fa/ffebea89016d294b2fc589891a5c2f761d2ab4": "e2eb43f8bcb03efad3cb80129fe06440",
".git/objects/fc/389c3ed8c019a33e5e9e7ea8f070e4ab45272d": "faee72e37ff8fc9de9fda005a5fb78e6",
".git/objects/ff/bb2999e95e3e7968f304130101fe36a417d09a": "2498aaa5e2ec9fce7d6daebfe310e535",
".git/objects/pack/pack-c14b1f48427afce583c12ce7363a04b24d2a2cd8.idx": "47d848b79c7142c5de02863a2589d71a",
".git/objects/pack/pack-c14b1f48427afce583c12ce7363a04b24d2a2cd8.pack": "0216b1b493ad4a28115c1fc9f1d9dd6d",
".git/objects/pack/pack-c14b1f48427afce583c12ce7363a04b24d2a2cd8.rev": "dfe600e5f6fcf0194e63848997c0e4d1",
".git/ORIG_HEAD": "98aee95c5a825d58611a0b8e0af22487",
".git/packed-refs": "f72d41b0ad96a7fe90119ce3bd5d9a93",
".git/refs/heads/gh-pages": "f45330bce500be1e4566d1777eccbec6",
".git/refs/remotes/origin/gh-pages": "f45330bce500be1e4566d1777eccbec6",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
".git/refs/remotes/origin/main": "3fc567b1bb84d5e04a7f17fd3e1a6cee",
".git/refs/remotes/origin/master": "3ecc6c06cbab8afdc1ee241fead51dff",
".git/refs/remotes/origin/web": "31187e0791453a0ce5f8f085f75c946f",
"assets/AssetManifest.bin": "f6d85250f95a3365f9e93a21d0390346",
"assets/AssetManifest.bin.json": "9dc15a07aab35570ea8e5b047b5fb170",
"assets/AssetManifest.json": "e4415d526d9695806db4401aae3ddc7a",
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
"assets/fonts/MaterialIcons-Regular.otf": "2784fb5ef9ccd7b353c3558e59f69fdc",
"assets/NOTICES": "d592d3fc7ec8e4f88e6e81cb7f4687f3",
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
"download.css": "5e479118f797a24d84a79b903a3da96c",
"download.js": "569528efcae818e9555f5d1a4f65bfa7",
"favicon.png": "bd4483daac757488cd19fa1ef5706e17",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d9fa4d36f6b2da1074a2ebe743592a5d",
"icons/Icon-192.png": "582b9a664bdf6fe6894d3070d9c925bc",
"icons/Icon-512.png": "d09972499cfd94ff64c8931556717f39",
"icons/Icon-maskable-192.png": "582b9a664bdf6fe6894d3070d9c925bc",
"icons/Icon-maskable-512.png": "d09972499cfd94ff64c8931556717f39",
"icons/icon.png": "fddc0f19feec8c4c0695e25a9e764e2a",
"index.html": "14f2345c2c312a2880f43781041f11f4",
"/": "14f2345c2c312a2880f43781041f11f4",
"main.dart.js": "35c0980b2f77a920f6b34c14430cd290",
"manifest.json": "6f317e8616567466e0a30e12e97d0c62",
"README.md": "f98b27cf5bd46874aa2fb227f729d4e8",
"screen.css": "edeeb7220f225c250659d6314c348288",
"splash/img/dark-1x.png": "3c0a89cda0ea3daaf65411db596b7fa4",
"splash/img/dark-2x.png": "c9adf95d40c5346da10c74b6c053f435",
"splash/img/dark-3x.png": "06fefcd4044b42d7cb015ae3e5ef565b",
"splash/img/dark-4x.png": "fd002dafb4c3d6bcd4307970d7c64cb9",
"splash/img/light-1x.png": "3c0a89cda0ea3daaf65411db596b7fa4",
"splash/img/light-2x.png": "c9adf95d40c5346da10c74b6c053f435",
"splash/img/light-3x.png": "06fefcd4044b42d7cb015ae3e5ef565b",
"splash/img/light-4x.png": "fd002dafb4c3d6bcd4307970d7c64cb9",
"version.json": "d69159340f6d5b25bb3c6ddbaab175a8"};
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
