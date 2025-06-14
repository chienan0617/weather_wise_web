'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8833bf75a3c54f38944e60fa31f80634",
".git/config": "b63108c59da281657a6940a5dc882ae3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3e1cf7877fa31ef4296fa0a722774415",
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
".git/index": "c8ffcf9db6669edc08c0107de6f4fadc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a318a690fc316095300038308559ae3",
".git/logs/refs/heads/gh-pages": "4756222ba171b602a00d323533d0c75a",
".git/logs/refs/remotes/origin/gh-pages": "42ecadcb19c083ee08bdec7c0365af92",
".git/logs/refs/remotes/origin/web": "259cee30cdbc9144e1053085a7098ac9",
".git/objects/00/4381fdc3f91a44d794c8c4a6e4644a91e564a3": "d89cdaeb422f205df8bb6b4267834bc5",
".git/objects/02/90cee2e8968989abd807a73c331c9f95a8ec2e": "9ccf44c7f179182dc1974f57475551ea",
".git/objects/02/958849910f88ace4b503c29b1cc03862049d37": "0ed4138ccd906355d1856a3bdac0bbdd",
".git/objects/04/bd6f18fd1c31852755a0ec479c1e21471e2ae1": "3717b6564a88fff6c71930795997abfd",
".git/objects/06/cf2d48e9a807850a5db154d7837a563535a051": "d58e04dd52ee3cf2a0a8c059a4d78152",
".git/objects/07/f8c32248357a4dc91970db35e67e953ebc128b": "27650be7660d8dcc04756a9b7527a4f1",
".git/objects/08/1899279f37dd3797396c92b96f2fac1e14d84b": "a6c6ce48d5c1f8fc7ffb04d56d1c312e",
".git/objects/08/794466ff7c5224aecd5594f69d7237b572e257": "129fd1b2de74fea1a2eaa06e1e53500a",
".git/objects/09/9aec95551736ef9729a6cf9968f3e09f5b9d96": "4effe96b2bb62648cd61c7aa6bd2c36e",
".git/objects/09/d4da66d08839d31163311d6977df2d57221fd9": "fd9246fa9d7a494e9184f71196b67369",
".git/objects/0c/334a1cb100b9698da6cc28b9386eda2cb156fa": "d2face1aecbf9bfd62cbd53f30c36d84",
".git/objects/0d/14ec73b6df727ddf452bed13fc9ad128a9a8af": "2b56b08501f622889a40ad1f0efceb3f",
".git/objects/0d/5da758e1534a70307221834dff601bbf24228a": "47cb11bf94aac7ad6cded1504927d351",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/0f/50c1b7f314360c059dec4a2707f063f4f55f4e": "70a4f508702c886e4ac9b6b84f780ef8",
".git/objects/10/5ba600bcdca856940d2640e31ff500ae97825b": "931091729cb6e1c953bd6352cf89010a",
".git/objects/13/4be8c874b1fc418ee8e8da75b60532891dd995": "917fbeb5328e4a1386fbb1a2623f2368",
".git/objects/14/0186c9a5d444cbe4834a76f5b8e113aa3f9dfc": "8f04d82e6a62f130d0928622119009e1",
".git/objects/15/83d4d546221bfb7f9411b25ad0357263338f1d": "7e05e5d37b57512ff0c78c4ca01afce3",
".git/objects/17/f07185dcd4f83bc825c00d7588d843bc61db14": "feb0e5172cb29d1eb743f61d4a62ac97",
".git/objects/18/251bad27f0b170f3b222895335733f756972ef": "856c30e3023131a735d5ec163dba8e0d",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/18/a993ef0f26b9f6d6d4f9cce569c5e2f116ddf6": "5ae2efefb070c48ce90f47131a911b1c",
".git/objects/19/0a85dbebe4971762a5d49cb564d5ab9f36bafe": "e1875b9cd1233c8f27a63d365d4fe8a8",
".git/objects/19/c315744e9821a988ec557fea5f4d158bc51e4d": "8542dc011e4a2a1744fa0e676de3f78e",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/18a4958bfd54bad6d755c2341bde76e39b5d1a": "6457218f47a2a56355fbdb5a8ee51d58",
".git/objects/20/1008fe37cc60ffd1c07591474a6981ac6589f2": "ac626bf498622894e06dd9d7002ab3cd",
".git/objects/21/7193a7ab22545d4aa4690fb13b1f8a314002f6": "6157f15677d516e09f730048992518cd",
".git/objects/22/76f8fab77abc2983b857b0000ff753b1c941d0": "83050418dd34e39335ff731430685d81",
".git/objects/23/d12589c655c5336dd69a367ba0f02e6bfdb903": "d11536847ee2483f7f19072bef3e8c16",
".git/objects/27/8dfd98d0a6536e2bf0e6d3d6ba49835bf2cb12": "ed4158e29d18c95b21c670ead30c8ee9",
".git/objects/28/69e159af06533bc4e472a30ae920e58b36d27c": "62929a286219bc6191d985dafc22595f",
".git/objects/2a/9efe91f61183f10e2216e1bef51e2d1455984f": "82c3e471086817d095cb7dafe6031e86",
".git/objects/2c/6b25a82ef7a8637cac7178f9bcd480d3de13cc": "b076ec7cccc9369944da299d67776678",
".git/objects/2d/254f0e148798aa6f249c286b6edabf959c32ee": "b403b0f6fe29478b04917b1209a0a3fd",
".git/objects/2d/f6f2ad9f98e39aa840e3a3a53e03217ca7f9ab": "32590f4c935d8426292cd2a2febda635",
".git/objects/32/9aaa052c931ee322af700663b0c203f8978d62": "4f85050ab72fcf06975a975b9e3e0883",
".git/objects/32/a9816305bce900971ae4b727c55db2466b00f5": "5ac08f53e0818529d2454d173053681d",
".git/objects/32/e326b7cbd9cd536471362b02e2155d131d2584": "211e1cca2d19c10931c7aee3387fbf0b",
".git/objects/34/af4ed5ea35cd52008aa67910a72d057341d402": "92dd49264cce1d77194cdf728af8c54d",
".git/objects/34/b39ecefcc90731b412f3c62ac483b2e958913e": "fb6c7a2de19bc2ae09378adbf17d02c4",
".git/objects/34/cb8cc43d7e74a1b90cf81c333a8e90b3ac761e": "5ba7228e002ed018f4c0a22216f02597",
".git/objects/35/043b86195e55d3d68b99730e0b21e23b8ead4e": "488f89fd9572ee810915e766d47ba744",
".git/objects/36/181b298a119ee72bb851d706f3ec54efad3a79": "b3e480297e62aa70b7eca9e154e5f168",
".git/objects/36/996d7d4f2d03de86510efe146238c4a8f2bdf6": "c768435c5d0b750411d8295e785390cf",
".git/objects/37/25bdec9478e82dbf516dd84785c464e01fa2d1": "7e228e2afbe5c9a8cd9663c7d8530033",
".git/objects/38/3d060ae5e5223f96ae59257bf85d4e4ba2271e": "d6d20cfd019571e6afed6f14ba2d8860",
".git/objects/3a/fef28a943926c443a0cd16d85523c5c95eb142": "b76df56ab8b20743478de9f738922c79",
".git/objects/3c/a055b2c9ceab28cf2ff5cd067a531b31dd04c1": "81fbf776bd22ceb08e0fe95a2a9b14b0",
".git/objects/3d/b33b57ffa2dedc311185bedbbdc5359ddd19cf": "f9ca015835bea78a3e46833b986fdca6",
".git/objects/3e/269d325bbdb051dd5f6d6eaa2514704031e707": "e06ed2e36b89ed14a941d33cf8bd6395",
".git/objects/41/52d48a912bea9698ced233da8e0e4e678cea4d": "83b69ecfb7ca5a87fa2b9dbaac4dcdc3",
".git/objects/41/75bb9b395b23d321f2a30767b95d5c6bc841e6": "d72a43a86b30efbc2fcd75a22c2afe46",
".git/objects/42/de25f446cd0af5e78d0d8574435f47ce37a95c": "0cfb3dea8fa61404d3d8698b04c6a5d3",
".git/objects/47/eae11c85a7859b3746cc40f1dc97d46d1251f3": "f53643b9bb38ced8360b2ba9bc927522",
".git/objects/48/9f55b001b9c4c53468b1934411037c4f140215": "1bfc0b895f92970dfdfdb5ef4ffc2c32",
".git/objects/49/91d4c1082bec924b8a65e6c15587a9117ecacf": "c598adad5516e1f1252c373c58c387f6",
".git/objects/4a/404bb0aa1df197cefa404bdeff54181671e25d": "86ad37c6fd8a6d8b6e47ac97be75fa7b",
".git/objects/4a/837d6006e4a7a1e655393dd551eb6edd0c9732": "2113d9cea88370079b763a8783a8442f",
".git/objects/4a/f60abbd5f0f56f80acf4d63d63c07056b05504": "0995d7d4ef22ab2050ac2558818a78b3",
".git/objects/4b/32cd7d21dd361fe0c554deaa7ce0bcee9a3bc2": "1f04e98b9227970ffa01b655a7456efc",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/fba8aaf6c0ae0d634f81f59f7627b86496f13b": "1aa30283a988a172cd307bf5699a9349",
".git/objects/4e/3ed3afbeb4c54bc1608041d621c79961cf9edd": "a19c5ba7eb217b84013ec5859ff6af3a",
".git/objects/50/c329fea0b3d4b7555a4a94d31a84a88e8ac156": "674eb2ceda000cd1854bd7b6e3ac2850",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/60f94cb952ffd87897fd7cb940ef27c7783326": "4147c303d796fcf7d86ccf534db99872",
".git/objects/53/9d7df969c0f9b1ec69709ba82efa29cd842ee6": "e5e6e745d59cd85c8e831019650359a7",
".git/objects/56/0994b30b2916a5807e16a26cbd5ca262875c13": "b38f7f486871973635090e824a80cd63",
".git/objects/58/646198acd862e2fdc860c343a48966f85f4c34": "967b5bc1d05b76dc6dbd106deb28b6e1",
".git/objects/5a/6b2b7f3a376045441165fadc6c301656c8b8a4": "c4dff684d1d4ea69be743b2ebe3a867e",
".git/objects/5a/dd3640713995046438eb36c3a94162d1d5f4d8": "ba154a1d3a0a9a66ca6d72569f32b91f",
".git/objects/5b/2167a522c1195f7d9c00b8ad705a5052d3d26d": "ab4644989fa1fdeef8d3c538f6e226ba",
".git/objects/62/5cc7c1c56c1b4420d2b203b854708650540ed7": "ae7ba2bffc7f1b8ace1b28c67ebc0865",
".git/objects/65/241f3e4f73ebb9f4b59e53f19c45c20d59b81e": "23b4d5d843e55c54a0b96a179c23a794",
".git/objects/66/8772d24b4b96e3bf34808e232f57e3cf5be5b9": "08c3f8d6ac67d24fa25a021d76552dd6",
".git/objects/67/04825a3af516e6d9c4edfe7f881f4dd65b0542": "776839c895169885f6a4ee48be3da423",
".git/objects/68/1e3a1139f6402390fab7831be0fffe1428ff8c": "0d3bf766b61e52810052c35fa93ebd88",
".git/objects/69/dd085767a08895d6cc768f2ea356a2d9a3a602": "cf6e6b65d1428458fd4c5ec5b0310b62",
".git/objects/6a/55e796c587adfc0e2958e55d673edad3354e73": "96b9c6da42eddd936ba7562ed792af59",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/4fd6377382134421b604edcffad9ac74f50174": "fde1c49731dc4291d13e0213e577ee79",
".git/objects/70/0250b8faaaad8283afe7108de8998a22dd9dba": "ea89bc4073df4aab25c9daddb8ecb5db",
".git/objects/70/727da2c0ef5f4f2eaad59cdf3c179bb7a4cd92": "5dbe639ca23b577a81f9d819dbf186f8",
".git/objects/70/826ad918c8768ae7a387fc9fe5397b6a681778": "7f63584ae8cdc46c08d156926ec12bf5",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/6fd11ac44c1f61d41732f930f8c8f4aeb075b3": "f8bda703e0bbd307c9390a31d0add281",
".git/objects/72/9071653f942cf44544d7d8d7544a18b19d1b6a": "3c27de9203d7c58ce60c2a707646274c",
".git/objects/73/316bb27cbcc55c0753bb961dafd97ac2e2c524": "a31213de851ccfbe356b61a9cc5f19e5",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/1b743f9d37c76fffb97dc70fbf63880a1a0066": "9f0a0b4c9119672fd87e5df69674ca0f",
".git/objects/77/4e95d7bc67ad76307d88fd327f6e62b2393847": "9b66ab32dd676d49d5593b9a0416fac4",
".git/objects/79/c8e05fdd9c00fc3d0ce7ea64b20fcb29931746": "39f9d3970442d2110465df5aef554268",
".git/objects/7c/303348e885900ed7f0cb9c9ff7c73b5e77344a": "ae86ea42c9adc006ff5265ea3159ec60",
".git/objects/7d/fc888990086cf206c628594e95df03eac1cc89": "757d146315a8d26b5bdfbad1b2013c10",
".git/objects/7e/a26d8282e05c9a6ca9820e058e49d51ab557d0": "fc79217939234258e04f356824c726a2",
".git/objects/7e/f1d37752b417406a36cb35f1cff83650c51a80": "a5d1284480b81a2bce0085b0c818a812",
".git/objects/7f/8f15dd2376f62b406b899d0c505d9ae71f3386": "2632033e0228b7f9872668d269aa96e8",
".git/objects/7f/9ea414a63d2f0dad6edce7e7176ce948ccb73f": "6f6d48fbdf263299337f3d85d567ec87",
".git/objects/81/8c25680053ecf0d2401be24de857a4408e0b8b": "330f73583d9fb4dc9cc1b6395d7740a4",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/83/8823b831d6cb10b5d629cbd30f97a70491e8b5": "0d7a222c40efd9fe592cf94d97c0d463",
".git/objects/84/4b500f8e4282ff8c4262f0d7de076073024fce": "7e04725290db61be9739f8f35725d4f7",
".git/objects/86/99620cf3d30f308e328e0b3e3dd212163382bc": "1fb9df95498ed3ca85ef2922906e1b29",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4b01eeaed7ae1b616bb37828d379a2bcae3ae1": "c7c5ac63122d112598c275233b9d7073",
".git/objects/89/875104621d6305e25e31fa7a3b794f1a6f3b97": "6b073c0249615461add12af1622ada1e",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/00cc7d98a0aadff2588e47cf22f9c59ea13c8d": "25f94b574596f726dd17ba064af49b99",
".git/objects/8d/7e2853216ff79a5ed7487c0a2376c9ed5c9dac": "40eb2cbcd495d7f12c6e32e80d0939ac",
".git/objects/8d/f469a3bf255af32a5454220ba079a5fe5728f3": "6ade3fd66afbcb76e67f9e80382764b2",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/b7f4c82b08dd372347acd97880293bbabf421e": "fd833e9fc7a0619c2ff5c582a6d80995",
".git/objects/8f/d8831bba1eee1cd09bc73a75b3147f9a9802dd": "4ef622ed10d8edad0933e0a2d4cb77fe",
".git/objects/90/246c7634968da7579fcc803ac83306037290ad": "c704aee23ae5f66e7fcc49f3c1d252a0",
".git/objects/90/4095d61a0db95b7dd1ef44da59201241202cab": "a72e8caeea0fff7b0681886e1a8c6548",
".git/objects/91/38e643ee5ffea9b16d0a537daf992a8e5c8822": "196d9a5fcb21df1b7b409449ec445b3a",
".git/objects/93/8c78a722b25e44be6983af78fa01f464785893": "f78e2cb1d7bbc59b830ba2d9fb68af5c",
".git/objects/95/8a38cc2f937fc4743165ebfc8b81cbfe1d497d": "784444aff9a23c3aaa2934b82a1aaa3e",
".git/objects/97/27dc340bdcda644f9d092c59ed2b98a44f9f13": "5ce2edc7e6a725ef2f688d128514f2cf",
".git/objects/99/988c8cd8ebf43ddef6acdb12091af4cb3cad7b": "1dbfbf7540f90458baf241fc28e89b8a",
".git/objects/9a/d06bc18f5230544bff9545526cb3b2d30fe991": "86b874ebe4e0a2f80493dc496ebe8ac0",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/ab033cff0cb59090f0fc62108537dab54c1f2e": "ef22b010436c5e8f631932cc417551c3",
".git/objects/9f/26d098ba0669702866fc08811707e406138559": "153f21762d35f2e40c12baddffccd287",
".git/objects/a0/550f68181b3982f3d1cd8b728ba777804b3259": "9d4da628df042b3e1f7faf6a826dedb2",
".git/objects/a0/94bffa310e3cdeaced19a333a322f183f579cf": "24a9c92ca57a9976c29aa32f8a87d8b4",
".git/objects/a0/a354814e265c750761db2b6b68ac5916ecf03a": "3235a8922dd440acb5eb57846beaf289",
".git/objects/a3/12990791753c36b9dbfd2f23a35a09f551fd71": "62c08219da82a2f0f7b2c3450e29030e",
".git/objects/a3/d579a4a44edce8dff0bb9d81f827c3f05edc2e": "9811041218c056921625581d7653d84a",
".git/objects/a9/828e7343af63fe6cffa7b1eec957ed29a1b09f": "a02ae5612773e403beedfb4d8b918af9",
".git/objects/aa/aa746c8f2e1e4bbd83dc60e1ef90fd0fa49d92": "a109d86b5ae9a5eceabed7333ffb486d",
".git/objects/aa/acea03b11e715b6222167d9781d88a7409c1cc": "634b9bddca4855d090bc8982fd441964",
".git/objects/ad/184ecf7d07177c9003c653e32a149e31a0f045": "1c56734cd5a8426fe940164d3af5028e",
".git/objects/ad/9bba6a68ce424234dec843153b1b56f58679f4": "6684e1acbc1204b1152fa7c83d47df59",
".git/objects/ad/e764f54ec71439e3334b8cbfac1fe033d20fea": "a3b640814bd8c7589963b321b90fab4d",
".git/objects/af/037e13eb128d492443e27e0f684e47b2df796f": "f7c2a0c0f2b80d813f98a736cebd310d",
".git/objects/af/c36a6fd0984e94efc032d558d6203a34af0fda": "78644eca6ccbc97b25622002b4f7fcee",
".git/objects/b1/41708946ead2aa947eddc5462524aeef59b49d": "940a06fe3a65d1d16a323cbd5fb260e8",
".git/objects/b1/6beea02cdc763cb7945bb86cfcb5ec9ca2ab00": "a543b0fd1a32fd165bbe51b5d5b48481",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a02f7aa4b10f6490c6c5a69c83be2c28840459": "3ca92113e8a4e0503420edad643844f7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/63b5d721c0976a80b6a1bba26845760f32caf7": "45619b8882b05bc68a8813c6ad95c2a7",
".git/objects/ba/f9f10b3a17368b76e65efa49586e6b7ed49ce7": "c8ebe01a7b43dee4ceb687496ad9bbf2",
".git/objects/bc/c34fedc3ff301ff6a07ebf7c538349664c652a": "336c513b09fb480388bcd4a6bb81576a",
".git/objects/bd/5b50cf4be58f46e0fca2eb6613f690720a5fda": "6c7f7a73a67e15d5dbcbfd341695f0f0",
".git/objects/bd/cba3c24955c93c0b81a736d8e4e5d0f297e005": "0df079518f0492845b31aa4a7c0d0131",
".git/objects/be/1fced35c72cd1f7f80d22aa030aa765447a679": "ccf6e8005000af593dd04814fb91688d",
".git/objects/be/dca1297f6726ea5bbd4ac4ac297389fe8f3acb": "589ea98613f1ff47038cfea7f6f34057",
".git/objects/c0/46c688b0fef30bc207b28437d7c76015a291ef": "94b14ed1ff33c824e6f3c45526d854e8",
".git/objects/c2/5d23296375a5e7afbf6dad0c43d5315bd94952": "6ea0d8072448108a4cd3e42980d77af5",
".git/objects/c3/19aa1e7eeb65532cdb3a5e8339310f5f7a02b9": "3f41dd6d6040e6bde333f51280c22772",
".git/objects/c3/2a5d930f7ec7a2c28be58bffdfb70d586f8bfc": "b39c0c985ea0afcbd023c319630ee735",
".git/objects/c3/f2e61245085de2134f446464d9a35b7f4c3ee8": "76769779f247ac236ac2fa8af21ba73f",
".git/objects/c4/b573612f7a6dfbeefdfdaeba8ca6854d93fbf1": "c82d52dc8f41eeee617c9d7272a26989",
".git/objects/c5/24b4d4c24ab08196700654a7d3c3aacf688936": "33fccb7ec4e70b509ada6c393d499719",
".git/objects/c5/35443fb4f64731e3e4456e3301cdb0cbd2cb6d": "b59c0fa6f09b9cb69334fac85f800d1d",
".git/objects/c5/bbd15d50f75ee697390a2b213f5dafd94d89f8": "09ebf2c4530a3328b5770eb0f4d9a348",
".git/objects/c6/a116764b0863b33c68733c1dd1cbf1e2cb1073": "9ab7bedb702e2a2b90f18a71e44c2bc3",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/aa38029ce48b1e5648ebb1f4902de6ab137725": "c28c572e1bc803f12d0ad4ecfd0e5093",
".git/objects/cb/0e47933caca73ea43caaafe9694bb27fe81130": "8a0cc29d153246693590842abbc37733",
".git/objects/cd/4e5b3d5615183f48e280be16cb7743132c5e4c": "f80e9a22353759b7f346086c2ce89ab2",
".git/objects/cd/841ec56533563c177583514b246e94c5a72979": "01ddd19c1f57d897e917ddd1159edf71",
".git/objects/ce/4025c309780f971d720455eb9cb474517ec893": "eacfcf422d6572012ecbf2038662ee09",
".git/objects/d2/7751d6214c28ba55369c32b34ec582a6e0b9aa": "0d040a13e1a50850c6c6ba9edcd3c4d5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/49ff9c692fdd5d6fadf8923a81ecc8ee7c5e52": "606630ff7be9c3c93e42b41f68530d59",
".git/objects/d5/d623c9342518d22ac86bae4e104d2e41d4d3c4": "6d348f3b73098e58a5d87a16dbeec544",
".git/objects/d6/034ed7cc00dd2a7358120950e50729830461fe": "330d0d65b1dfbe2ab694f60b3a4dae11",
".git/objects/d6/71faf8fdda5e8714c7c39af41f507bbbca9522": "10cf0a642c8c0ff900c1ea0f8e54a30e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/d9/7b678f0ccdbdb1a63cd6edaadbe01ee02ffb9b": "abea0cf66068b8dbc86a25802149b523",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/5be2c12107e05557958b396caaf540e23d99e2": "fd9e895b8b83a515aff7b261bc49e269",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/a808a2b61bfe3a3de5198782955a7276432cf9": "2fc07bb4d7a47a9cd10a9282b10bed8a",
".git/objects/e3/4102863e546c5227c33e36afc7bcf3757e15c3": "3a94df63f49a033d7095d1537f1b0a69",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/e5/b04d414898ec994fe88df147c819528730a63b": "4f14df4a8ff8e97e918cdb5be59ba80a",
".git/objects/e5/eae6871f99325cd793e47ce5dac6c7b9339b59": "e41364ab445f9e45c119ac21df21165b",
".git/objects/e6/91710dcf2ebfc8f441a2837be07bd45d84fc2a": "df873170299246b837f7a2a41c87b9c8",
".git/objects/e7/a25259f659411c2e5af0c933a066a6b16ff0ad": "4417ca8cfc902b81443e89fb0cb63da9",
".git/objects/e7/ac062cab8f22d71ac4add1deb87a45d63421f6": "4edeb74ee1b439d82f9ce629ae8269b5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/f414d902433eb5e479102517662cdcbc1c9e6e": "2f2dc71b1984c5616fbad42a37d70695",
".git/objects/ea/608d898393f0ca9216e50ee6edda7433a81086": "77626ccedd901245148595d7420f1d93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ee8d2e10affefb387108b6c6e2d7fe9b028206": "3634f667d62af1d9901148258d074848",
".git/objects/ed/b358b51a9388b016bd5dc897d5ebe519b8622d": "439606575cc3ec4acbc18555b4766cd6",
".git/objects/ed/c139e99849517362af8dd16646f136ca8bae2e": "4b30ae129cbe554441ace5e276e0df0a",
".git/objects/ed/d32b0323e103525478df5d4134396344b651d1": "d21c57947822372bcf5f682b7bf0a20f",
".git/objects/ef/87ebff1346d4b3b95cd1b519bc2dd9b4e8101c": "95e25ccecddf18dc87393863396b9787",
".git/objects/ef/9297c1794c161c4b7a1e3aefcc743da42da09d": "602644c9e3f6fc08459d1e9cc8c7adf9",
".git/objects/f0/24ab787270952bdf5c15a1882741034406f7e4": "f160e89cbeb4dc3820f6c5b1bc170e00",
".git/objects/f0/38ebeec5ff158c60634d1571cf4b2bb34bb77e": "7c25ded75f5229b95a657eb78393811f",
".git/objects/f1/d10d52588713362ddd88d129671b80175abf6b": "7bb265445af305f196cdd04cdc0cd606",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/310cfbb1893ddd45b103e4980970d45f5886b8": "20b85073f89e8ba62145ed489e042ec2",
".git/objects/f5/230ad4f32693674185a39125a17a428e85b344": "ee4f22dcbda8052149ed756591790d8b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/0bf000fcd5ae40cebad110d5c915c6e2356c0f": "af7e2c56ac387c7b0c524c1887c671b6",
".git/objects/f7/ce0c16233a6695e717e73ffe3c944442e4f62b": "10f04caf9013247b7e569cffbcb28ad6",
".git/objects/fc/5b64dc1894490ecd560d974809a4e714d45d04": "54f1ef0d0409fe913568bbc6c0cec29d",
".git/refs/heads/gh-pages": "74e486eae5d559bb886091494024c98a",
".git/refs/remotes/origin/gh-pages": "74e486eae5d559bb886091494024c98a",
".git/refs/remotes/origin/web": "31187e0791453a0ce5f8f085f75c946f",
"assets/AssetManifest.bin": "e3fd89735ffd4db94a85c87654478303",
"assets/AssetManifest.bin.json": "8f0b6855b112c022c35d02bd9d216bf8",
"assets/AssetManifest.json": "c7d9d6cb3c2556667797b0da2cfbe4af",
"assets/assets/city/world_cities.json": "8d73cca9e6daad65e4e4904ac63dedd9",
"assets/assets/document/weather.json": "7d2e5816730616e1bb15dd1c480a428d",
"assets/assets/document/weather_icon.json": "0b2db7ddceea3af3c88e740dc146d064",
"assets/assets/document/word.json": "971fa10ee645b725bcd5104c6098ae0a",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
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
"assets/fonts/MaterialIcons-Regular.otf": "48de811c8014bdc67ec898b209a7f400",
"assets/NOTICES": "76465c3a2ce63a12b62a3d7cf409e374",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "87def514a37a6687a554175945fb7fc3",
"icons/Icon-192.png": "8bce5063fa85a3645f6bd4dc38bc4c38",
"icons/Icon-maskable-192.png": "8bce5063fa85a3645f6bd4dc38bc4c38",
"icons/Icon-maskable-512.png": "5a186fd5b6d2f84102927fd228b7d788",
"index.html": "313bfab06241e4da45b6da4cfd254d4e",
"/": "313bfab06241e4da45b6da4cfd254d4e",
"main.dart.js": "0c5e76c4ee7cc9f7c46fa2968efbdf12",
"manifest.json": "327f7237a93778528b81afde1f86deae",
"splash/img/dark-1x.png": "3bf74bc9be19877dd39d6ac0da1bed41",
"splash/img/dark-2x.png": "539d41a589477b40cdd83c0744e3762c",
"splash/img/dark-3x.png": "b6d2342aaefabdb071a3af46dcf154f8",
"splash/img/dark-4x.png": "1337ce98a51a33240c2481e999013fbc",
"splash/img/light-1x.png": "3bf74bc9be19877dd39d6ac0da1bed41",
"splash/img/light-2x.png": "539d41a589477b40cdd83c0744e3762c",
"splash/img/light-3x.png": "b6d2342aaefabdb071a3af46dcf154f8",
"splash/img/light-4x.png": "1337ce98a51a33240c2481e999013fbc",
"version.json": "8817c8e606c2402b7143edda8fc7a59f"};
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
