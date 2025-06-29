'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eff3482f6e7063e0bebb22c4c024931f",
".git/config": "427da91afe06bf623b490842dbaf5579",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "907076603a549989cb18988c62fa3db9",
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
".git/index": "9b388a5f5e2abb40538226b572901a56",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6fb70f491cf007d7e9e7ce43d59a2645",
".git/logs/refs/heads/gh-pages": "01062d5c382d0581deb91c1dacacafa1",
".git/logs/refs/heads/master": "bf9b2a812794d209a5e927bd35da8a47",
".git/logs/refs/remotes/origin/chienan0617-patch-1": "3449d8b4ede0bdb2e85e0e1e7fcf8816",
".git/logs/refs/remotes/origin/gh-pages": "7903e70eeed66ce39965d45a8c783d98",
".git/logs/refs/remotes/origin/gh-pages-html": "64d15dcb8f38a16fb50f775c6d08ef28",
".git/logs/refs/remotes/origin/main": "778034a1b3a333d6d2ddf04195e9b63e",
".git/logs/refs/remotes/origin/repaired": "b7a9706b58a8b87119716a14840323a4",
".git/logs/refs/remotes/origin/repaired_final": "7a39add626dc52318cce225356045d21",
".git/logs/refs/remotes/origin/temppppp": "50ff306ebfd94e2e1ab6bf9221b20b70",
".git/logs/refs/remotes/origin/Web": "d3fb09f19e7fd86e9e1552ec6fb3497f",
".git/objects/00/4381fdc3f91a44d794c8c4a6e4644a91e564a3": "d89cdaeb422f205df8bb6b4267834bc5",
".git/objects/02/28f596c53ee73b6460512ab1b4dd396c620b92": "edba259a90fb006f26cab59df47c218a",
".git/objects/02/90cee2e8968989abd807a73c331c9f95a8ec2e": "9ccf44c7f179182dc1974f57475551ea",
".git/objects/04/bd6f18fd1c31852755a0ec479c1e21471e2ae1": "3717b6564a88fff6c71930795997abfd",
".git/objects/06/6fce2d1205b48e8b0d0f0746566b4fea34f67e": "3c9c7bf2dffa853400a2145ab1ef5cfc",
".git/objects/06/cf2d48e9a807850a5db154d7837a563535a051": "d58e04dd52ee3cf2a0a8c059a4d78152",
".git/objects/07/f8c32248357a4dc91970db35e67e953ebc128b": "27650be7660d8dcc04756a9b7527a4f1",
".git/objects/08/1899279f37dd3797396c92b96f2fac1e14d84b": "a6c6ce48d5c1f8fc7ffb04d56d1c312e",
".git/objects/08/794466ff7c5224aecd5594f69d7237b572e257": "129fd1b2de74fea1a2eaa06e1e53500a",
".git/objects/08/92a84e674da1baebdd89b2c7303aaac244e5b0": "3209eb50893a20b28b18251efe86def9",
".git/objects/08/e78f3bc9e69dec65f7b82831d5872a6db830ce": "9c45c07739b095754675444efbdd6d6f",
".git/objects/09/9aec95551736ef9729a6cf9968f3e09f5b9d96": "4effe96b2bb62648cd61c7aa6bd2c36e",
".git/objects/09/d4da66d08839d31163311d6977df2d57221fd9": "fd9246fa9d7a494e9184f71196b67369",
".git/objects/09/e8bfcdab4dec51cf2b7c88385736d5819e7e30": "d9a523e4d15550ddf6c15d17f2b30b5d",
".git/objects/0d/14ec73b6df727ddf452bed13fc9ad128a9a8af": "2b56b08501f622889a40ad1f0efceb3f",
".git/objects/0d/5da758e1534a70307221834dff601bbf24228a": "47cb11bf94aac7ad6cded1504927d351",
".git/objects/0d/8b17211bef5af1d5b8ba2de169fb7b4c074c2e": "3ed3c6c1c1339f32ef37c93bc4b46bf6",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/0f/50c1b7f314360c059dec4a2707f063f4f55f4e": "70a4f508702c886e4ac9b6b84f780ef8",
".git/objects/0f/7a472a7e8eb95090375858ec5cd473eb80dd8f": "3b45e5fe9102b69abe834ecaa5efcb7a",
".git/objects/0f/db91a0bb61a38065be02524e6de36a5e6bf78f": "472cd401ab8ad61b689004eb44f0cfdc",
".git/objects/10/5ba600bcdca856940d2640e31ff500ae97825b": "931091729cb6e1c953bd6352cf89010a",
".git/objects/11/2ce189a93c298b792b9a7dbef8311dde0d9edc": "463bd37ff4b4348cf1fa20793711f08a",
".git/objects/12/74905b28c3685c1b604cec482bc58bfd7edc08": "a2d949c98d3af72e876996dc30ab89d5",
".git/objects/13/4be8c874b1fc418ee8e8da75b60532891dd995": "917fbeb5328e4a1386fbb1a2623f2368",
".git/objects/14/0186c9a5d444cbe4834a76f5b8e113aa3f9dfc": "8f04d82e6a62f130d0928622119009e1",
".git/objects/15/83d4d546221bfb7f9411b25ad0357263338f1d": "7e05e5d37b57512ff0c78c4ca01afce3",
".git/objects/15/b7b98d517541d9c163fe222060493dfd2b552d": "b78049f8567f8999db6e0eed04237b3b",
".git/objects/15/db3f0e0b6ecff9609f5ff480c802891bfb126f": "e77a645e40be5061b005008709232892",
".git/objects/16/42ac9b7463ff80b8919698e726a26f67d6e886": "8776286a000375d4113c7d9726a6f453",
".git/objects/16/90d4ef0e6b2161824c762513f01db8809352f5": "21b757e9b4578f3502ca30c73d12fc2b",
".git/objects/17/5a0f0be85a3c55c1c752be497f5010595a65da": "007697f01727b2d0996a69e027ed2f61",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/18/4f93391e20e0340a4b7d7fbc078c740c41408e": "065ab33a6f398aa977256a01a6503a1e",
".git/objects/19/0a85dbebe4971762a5d49cb564d5ab9f36bafe": "e1875b9cd1233c8f27a63d365d4fe8a8",
".git/objects/19/c315744e9821a988ec557fea5f4d158bc51e4d": "8542dc011e4a2a1744fa0e676de3f78e",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/18a4958bfd54bad6d755c2341bde76e39b5d1a": "6457218f47a2a56355fbdb5a8ee51d58",
".git/objects/1f/0981cc0b69fc2269aa0280f91e6687597bb8ce": "c2c4ce152b76e46c4bc21aed4bf4f053",
".git/objects/20/1008fe37cc60ffd1c07591474a6981ac6589f2": "ac626bf498622894e06dd9d7002ab3cd",
".git/objects/20/e5f43c6b5754a995ab2323f4a9a1eb02ba011c": "4b05f0bad70fdf2ad83f0259fba81691",
".git/objects/21/7193a7ab22545d4aa4690fb13b1f8a314002f6": "6157f15677d516e09f730048992518cd",
".git/objects/22/665b6439c1f03b20ad609d5af6e151384ee017": "4f660de77dcc691a8caac6c92b563d11",
".git/objects/23/d12589c655c5336dd69a367ba0f02e6bfdb903": "d11536847ee2483f7f19072bef3e8c16",
".git/objects/27/8dfd98d0a6536e2bf0e6d3d6ba49835bf2cb12": "ed4158e29d18c95b21c670ead30c8ee9",
".git/objects/29/acb83695401bb9cb11597be91f0628c0390447": "a87dde5e36bc418992a94b996df6c791",
".git/objects/2a/9efe91f61183f10e2216e1bef51e2d1455984f": "82c3e471086817d095cb7dafe6031e86",
".git/objects/2b/48da5ef8f1fd329632a9f345348066b83921ad": "bc2fecbadef5dc81bcbc24dc5e78f16d",
".git/objects/2c/6b25a82ef7a8637cac7178f9bcd480d3de13cc": "b076ec7cccc9369944da299d67776678",
".git/objects/2d/254f0e148798aa6f249c286b6edabf959c32ee": "b403b0f6fe29478b04917b1209a0a3fd",
".git/objects/2d/f6f2ad9f98e39aa840e3a3a53e03217ca7f9ab": "32590f4c935d8426292cd2a2febda635",
".git/objects/2e/32842b4dedbe7cb472008f9c7979225cb4c2d2": "8d94df83fe42120ef50bed35ae8fee42",
".git/objects/2e/9da29ef64f9aa134b1476ab7debf76fc5920b8": "32a7c8e4b261d077767e8d6c6d9e825a",
".git/objects/31/45c86d9431fe6c697c8b48534ab37e65e93728": "802db5406def9665b0208c2b5a3cb815",
".git/objects/31/960f0d3806f587251f192335157587a2617ae7": "7976c446b8cc7ccfb308c6f9319f05b4",
".git/objects/32/9aaa052c931ee322af700663b0c203f8978d62": "4f85050ab72fcf06975a975b9e3e0883",
".git/objects/32/a9816305bce900971ae4b727c55db2466b00f5": "5ac08f53e0818529d2454d173053681d",
".git/objects/32/e326b7cbd9cd536471362b02e2155d131d2584": "211e1cca2d19c10931c7aee3387fbf0b",
".git/objects/34/cb8cc43d7e74a1b90cf81c333a8e90b3ac761e": "5ba7228e002ed018f4c0a22216f02597",
".git/objects/36/181b298a119ee72bb851d706f3ec54efad3a79": "b3e480297e62aa70b7eca9e154e5f168",
".git/objects/36/996d7d4f2d03de86510efe146238c4a8f2bdf6": "c768435c5d0b750411d8295e785390cf",
".git/objects/37/25bdec9478e82dbf516dd84785c464e01fa2d1": "7e228e2afbe5c9a8cd9663c7d8530033",
".git/objects/37/f50fe9a636ea35316e55926ba09a1157973d28": "35fffe163ec249b2cdf8e393e17e952e",
".git/objects/38/3d060ae5e5223f96ae59257bf85d4e4ba2271e": "d6d20cfd019571e6afed6f14ba2d8860",
".git/objects/3a/af417036729469a63dfd5a2703cac4ad37d90e": "e36747c2f9851bb390c833385a8303ba",
".git/objects/3c/a055b2c9ceab28cf2ff5cd067a531b31dd04c1": "81fbf776bd22ceb08e0fe95a2a9b14b0",
".git/objects/3d/b33b57ffa2dedc311185bedbbdc5359ddd19cf": "f9ca015835bea78a3e46833b986fdca6",
".git/objects/3e/269d325bbdb051dd5f6d6eaa2514704031e707": "e06ed2e36b89ed14a941d33cf8bd6395",
".git/objects/3e/5ea1b7c50f4d3a3dae9b3e781acface75794c4": "200ffcf318ef520c45e180be48a71255",
".git/objects/3e/8503b725072a7f1161e62241aff5764a24630c": "3a335fafbb1aad52d6f72bbb456df958",
".git/objects/3f/1ff474a004f15ba837162ae4d76979215ba39d": "c5593daf7326fa0fc2bbb9c8d684ae16",
".git/objects/3f/964cd31552cb5e572dc89ebfba33b68601f100": "c8a02c669dc2102913b4741e48e54ed1",
".git/objects/41/52d48a912bea9698ced233da8e0e4e678cea4d": "83b69ecfb7ca5a87fa2b9dbaac4dcdc3",
".git/objects/41/75bb9b395b23d321f2a30767b95d5c6bc841e6": "d72a43a86b30efbc2fcd75a22c2afe46",
".git/objects/41/ccbf8246944427b85e82573357aff254de1d19": "bb217aad782e96ebe7b2de430051ad93",
".git/objects/42/de25f446cd0af5e78d0d8574435f47ce37a95c": "0cfb3dea8fa61404d3d8698b04c6a5d3",
".git/objects/43/bf9793e960ca5e447960aaa8129ce2b41f8f32": "24deafc1c4487c7b996f0810fdb41ecb",
".git/objects/45/9f268c525d58414680ad659e86d88f449cb8f9": "46dcad8dd8d97d9a5b0b61fe4726a0d6",
".git/objects/47/eae11c85a7859b3746cc40f1dc97d46d1251f3": "f53643b9bb38ced8360b2ba9bc927522",
".git/objects/48/9f55b001b9c4c53468b1934411037c4f140215": "1bfc0b895f92970dfdfdb5ef4ffc2c32",
".git/objects/49/1c34e72b2f3d1da90976aff6a5b94c49d0e4c1": "8e924d9f7f795d8eae9327e1679c514d",
".git/objects/49/91d4c1082bec924b8a65e6c15587a9117ecacf": "c598adad5516e1f1252c373c58c387f6",
".git/objects/4a/404bb0aa1df197cefa404bdeff54181671e25d": "86ad37c6fd8a6d8b6e47ac97be75fa7b",
".git/objects/4a/f60abbd5f0f56f80acf4d63d63c07056b05504": "0995d7d4ef22ab2050ac2558818a78b3",
".git/objects/4b/32cd7d21dd361fe0c554deaa7ce0bcee9a3bc2": "1f04e98b9227970ffa01b655a7456efc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/35e8a242890f428930822e55e2fa8a0c7d71ab": "6102c7f8d620e5b61ae1d2d13f33dc5a",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/fba8aaf6c0ae0d634f81f59f7627b86496f13b": "1aa30283a988a172cd307bf5699a9349",
".git/objects/4d/922abe08e878d9cc125124c3d75089fb1a6699": "66259aff7120fa14803a2e671ced71b9",
".git/objects/4e/3ed3afbeb4c54bc1608041d621c79961cf9edd": "a19c5ba7eb217b84013ec5859ff6af3a",
".git/objects/4f/22536993bbfa3756b7922e84b51b03e4ee7d9c": "a07e08061613011cfe1b5b2ba92cc284",
".git/objects/4f/fbffb914ecf39a5085b6ff96b792afc392736b": "1fe306bdfd4b04c623e0768533be50ed",
".git/objects/50/c329fea0b3d4b7555a4a94d31a84a88e8ac156": "674eb2ceda000cd1854bd7b6e3ac2850",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/60f94cb952ffd87897fd7cb940ef27c7783326": "4147c303d796fcf7d86ccf534db99872",
".git/objects/53/9d7df969c0f9b1ec69709ba82efa29cd842ee6": "e5e6e745d59cd85c8e831019650359a7",
".git/objects/55/e29148e22f55a77137ca690a9251d76134dcab": "ebe184f2380cf710520b53199ae60423",
".git/objects/56/0994b30b2916a5807e16a26cbd5ca262875c13": "b38f7f486871973635090e824a80cd63",
".git/objects/58/646198acd862e2fdc860c343a48966f85f4c34": "967b5bc1d05b76dc6dbd106deb28b6e1",
".git/objects/5a/6b2b7f3a376045441165fadc6c301656c8b8a4": "c4dff684d1d4ea69be743b2ebe3a867e",
".git/objects/5a/dd3640713995046438eb36c3a94162d1d5f4d8": "ba154a1d3a0a9a66ca6d72569f32b91f",
".git/objects/5b/2167a522c1195f7d9c00b8ad705a5052d3d26d": "ab4644989fa1fdeef8d3c538f6e226ba",
".git/objects/5b/22612f11ebbf7a0fcd8e5d4ef1189ce75e6a4a": "2e2b41d0347c459852f7655b91244c34",
".git/objects/5b/f97a5463a61e7be34db9aec042a17db37018eb": "729846ef9d75fbb577ade8368f89157f",
".git/objects/5d/2d81679c087fd7697faf2f31bd372220eb6128": "dc98956d485165b49d196959c9e90687",
".git/objects/62/0aa79af1cb6090f82b1317c20dd00ecdd9982e": "6d4c8abb285609394bae90c0e5d18c3e",
".git/objects/62/5cc7c1c56c1b4420d2b203b854708650540ed7": "ae7ba2bffc7f1b8ace1b28c67ebc0865",
".git/objects/63/650317689b63b137d55f6ae17af042135d9252": "7b7977a8465af96a8552faea40d1193c",
".git/objects/63/9d10328886ec9d1a43b9f36508554c0c7eae2a": "fca3ef814fe94032c35643a702eb7437",
".git/objects/64/44c84e0fa5649b8b347f0ba178afc52ab3fb46": "c2a99dc6fbbfa82c2ff468e52f24de69",
".git/objects/65/241f3e4f73ebb9f4b59e53f19c45c20d59b81e": "23b4d5d843e55c54a0b96a179c23a794",
".git/objects/66/8772d24b4b96e3bf34808e232f57e3cf5be5b9": "08c3f8d6ac67d24fa25a021d76552dd6",
".git/objects/67/04825a3af516e6d9c4edfe7f881f4dd65b0542": "776839c895169885f6a4ee48be3da423",
".git/objects/68/1e3a1139f6402390fab7831be0fffe1428ff8c": "0d3bf766b61e52810052c35fa93ebd88",
".git/objects/69/cd122d26d9d22a9d8b854f08db50b0a947084c": "766ff81893e78c6ccadf7f5a65c5b6c0",
".git/objects/69/dd085767a08895d6cc768f2ea356a2d9a3a602": "cf6e6b65d1428458fd4c5ec5b0310b62",
".git/objects/6b/729bb55b96e52702e68203fa9757695c7f0cb8": "8d3e1180efac66b536419fa84da2f411",
".git/objects/6b/88aa355cf8e0ecff08d9e2b7a98d107ce7ac7b": "edfae7ec6417d82b3a704ec3f56e84a1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/4fd6377382134421b604edcffad9ac74f50174": "fde1c49731dc4291d13e0213e577ee79",
".git/objects/70/0250b8faaaad8283afe7108de8998a22dd9dba": "ea89bc4073df4aab25c9daddb8ecb5db",
".git/objects/70/826ad918c8768ae7a387fc9fe5397b6a681778": "7f63584ae8cdc46c08d156926ec12bf5",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/6fd11ac44c1f61d41732f930f8c8f4aeb075b3": "f8bda703e0bbd307c9390a31d0add281",
".git/objects/73/316bb27cbcc55c0753bb961dafd97ac2e2c524": "a31213de851ccfbe356b61a9cc5f19e5",
".git/objects/73/4ebfbfef2f568f62a011f7392758b75049bf72": "93a0ba9bb14e7bc4978484eb3ee9dffc",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/1b743f9d37c76fffb97dc70fbf63880a1a0066": "9f0a0b4c9119672fd87e5df69674ca0f",
".git/objects/75/6657489fac7c57fecb7ef013fe4e125a6c3235": "cbe34acd994cfd5166b5a4a7a48d0695",
".git/objects/77/28ffafd3d096acbbbb9216117f7683767f01a6": "1644718cf8ef79902fd2115d874654cb",
".git/objects/77/4e95d7bc67ad76307d88fd327f6e62b2393847": "9b66ab32dd676d49d5593b9a0416fac4",
".git/objects/79/c8e05fdd9c00fc3d0ce7ea64b20fcb29931746": "39f9d3970442d2110465df5aef554268",
".git/objects/7b/705efbf9dc3c4907a0ce02d734e460b333b022": "53748896746e997ba251c671466461a9",
".git/objects/7c/303348e885900ed7f0cb9c9ff7c73b5e77344a": "ae86ea42c9adc006ff5265ea3159ec60",
".git/objects/7d/fc888990086cf206c628594e95df03eac1cc89": "757d146315a8d26b5bdfbad1b2013c10",
".git/objects/7e/a26d8282e05c9a6ca9820e058e49d51ab557d0": "fc79217939234258e04f356824c726a2",
".git/objects/7e/f1d37752b417406a36cb35f1cff83650c51a80": "a5d1284480b81a2bce0085b0c818a812",
".git/objects/7f/8f15dd2376f62b406b899d0c505d9ae71f3386": "2632033e0228b7f9872668d269aa96e8",
".git/objects/7f/9ea414a63d2f0dad6edce7e7176ce948ccb73f": "6f6d48fbdf263299337f3d85d567ec87",
".git/objects/81/229b7bd5ff00b52b81bb8f2247b442857124eb": "18815c589aaed81846a043f568d4f0b0",
".git/objects/81/8c25680053ecf0d2401be24de857a4408e0b8b": "330f73583d9fb4dc9cc1b6395d7740a4",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/84/4b500f8e4282ff8c4262f0d7de076073024fce": "7e04725290db61be9739f8f35725d4f7",
".git/objects/86/99620cf3d30f308e328e0b3e3dd212163382bc": "1fb9df95498ed3ca85ef2922906e1b29",
".git/objects/88/e4b0888c2692cad3796ca7fa08217b71ea076f": "cc1e2714abd53b88f3d505549e07e98b",
".git/objects/89/213f4e0678563f31f2da747dc29f4c648ae4ac": "6d82b4c17ac64fd824963f3bed7160d2",
".git/objects/89/875104621d6305e25e31fa7a3b794f1a6f3b97": "6b073c0249615461add12af1622ada1e",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8d/1a850f77569139002842e16e383c176f62fdab": "59926d26a015213f148627800eda2c8d",
".git/objects/8d/7e2853216ff79a5ed7487c0a2376c9ed5c9dac": "40eb2cbcd495d7f12c6e32e80d0939ac",
".git/objects/8d/ae7801e515f83c287901f46ace89b7628929cb": "fedf05b2bb6eea669de26187fee8ff74",
".git/objects/8d/f469a3bf255af32a5454220ba079a5fe5728f3": "6ade3fd66afbcb76e67f9e80382764b2",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/b7f4c82b08dd372347acd97880293bbabf421e": "fd833e9fc7a0619c2ff5c582a6d80995",
".git/objects/8f/d8831bba1eee1cd09bc73a75b3147f9a9802dd": "4ef622ed10d8edad0933e0a2d4cb77fe",
".git/objects/8f/ed66bea36eb2ef9529067c0b00b4497359045c": "6bde21f7f29255bef09245cb50538f6c",
".git/objects/90/246c7634968da7579fcc803ac83306037290ad": "c704aee23ae5f66e7fcc49f3c1d252a0",
".git/objects/90/d7bdb987049119bc3e643cc3fbe1f5e50d0822": "61c4678fca952d64de9b39e70b8e75a9",
".git/objects/91/42d383395cd2300795d306c8c3f417cfb0aeca": "2726e741f3caed10ef944eb6b9d0ec04",
".git/objects/91/b1734af8d7641b992e2090818835952dde595b": "0f298f523e8d533cf04846ffe2d79196",
".git/objects/98/cd6f7bb0a703377997e9a01e3c7e48e81f9ca6": "8f1f01191d3786ac61d0c7d134317143",
".git/objects/98/daab6c2bf8ebd05c1f35ac2dce35eb8961e206": "e5c27ba2cab0d371829c5d784aa626d4",
".git/objects/99/3dbf1fd3fc8d34ac7c62053e783b50f22bce8f": "3f7cae8fb9785d3df2fb39bf74cf1a42",
".git/objects/9a/017fb69f6de533eef9be8004ec80cab7b3687f": "524f50d1597754770492bde3e9c51e66",
".git/objects/9b/4c84261d7b47c4d122236f04e7b40c53593689": "17411760df85b6d8bb7db006861dba12",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9f/26d098ba0669702866fc08811707e406138559": "153f21762d35f2e40c12baddffccd287",
".git/objects/a0/94bffa310e3cdeaced19a333a322f183f579cf": "24a9c92ca57a9976c29aa32f8a87d8b4",
".git/objects/a0/a354814e265c750761db2b6b68ac5916ecf03a": "3235a8922dd440acb5eb57846beaf289",
".git/objects/a2/b86f6cfcfcaaf17d52f25eefdce5519805d8c7": "4175d5352cee2cccf30673c6484aa1c4",
".git/objects/a3/12990791753c36b9dbfd2f23a35a09f551fd71": "62c08219da82a2f0f7b2c3450e29030e",
".git/objects/a3/d579a4a44edce8dff0bb9d81f827c3f05edc2e": "9811041218c056921625581d7653d84a",
".git/objects/a4/253f7705c4939b486d43aa4e47b596a2ad4a0c": "89a2d9d5db70d03fbd79c1662d2de44e",
".git/objects/a5/5b77b89e3917ac744c3cfc7c2fde332bd09e58": "1f10b0389bb9519a97b586893ac7126c",
".git/objects/a6/0f949ce29a0ee40fc29a4ec77aff4ca6d58727": "c1e0d87910a389395a1f848dd7c1509a",
".git/objects/aa/aa746c8f2e1e4bbd83dc60e1ef90fd0fa49d92": "a109d86b5ae9a5eceabed7333ffb486d",
".git/objects/aa/acea03b11e715b6222167d9781d88a7409c1cc": "634b9bddca4855d090bc8982fd441964",
".git/objects/ab/e6e769393e3b7e14ffab714707c1586a374cca": "15e3cadb1b1f5b69ed70e02545b3819f",
".git/objects/ac/f268eea3bf183f74630586a1670f03820a3a01": "69e95a08db8ec895ab070725af3aa55d",
".git/objects/ad/184ecf7d07177c9003c653e32a149e31a0f045": "1c56734cd5a8426fe940164d3af5028e",
".git/objects/ad/9bba6a68ce424234dec843153b1b56f58679f4": "6684e1acbc1204b1152fa7c83d47df59",
".git/objects/ad/e764f54ec71439e3334b8cbfac1fe033d20fea": "a3b640814bd8c7589963b321b90fab4d",
".git/objects/af/c36a6fd0984e94efc032d558d6203a34af0fda": "78644eca6ccbc97b25622002b4f7fcee",
".git/objects/b1/41708946ead2aa947eddc5462524aeef59b49d": "940a06fe3a65d1d16a323cbd5fb260e8",
".git/objects/b1/60b896fbf6d6f2509af20a723019857a42d34b": "7faa3379554b81d7218d6d64544e65e2",
".git/objects/b1/6beea02cdc763cb7945bb86cfcb5ec9ca2ab00": "a543b0fd1a32fd165bbe51b5d5b48481",
".git/objects/b4/1ef7c982bb6cef6c06175c87129cce8e46c1d9": "5383a4c22851bf7f9752091ef3f7820b",
".git/objects/b4/372a3aa12efb2e56c2b71cc4af98cacb02e8f1": "c755b42da38affe2e854118943a70d9a",
".git/objects/b5/ee7d29779284fe8cc642c25c54749b15a3c6f7": "bd21ab0cbffedfada8dc050acbd3bde3",
".git/objects/b6/2f5e8f428a0cc6d15e7f3f0fcd4fa7c2a057ee": "6f9e9b8311b12850fdb591478931a32a",
".git/objects/b8/e1be495d8d9a91305f2c2957f5876137a74698": "d719eddd6dda20ddf4e70dcd6fcf7341",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/9166c4960a40d2e2d1d6233e5106ae5b7900d1": "bffd4339dacd04d42c19fb06b71e574d",
".git/objects/b9/ee2c16f9f502c169528408bf74675bd1f822b9": "e37ee6b54edc6d992986acfddd8f8195",
".git/objects/ba/270e1a0c41d7b272e29e9b01f6379e4ed9c079": "51b8fc13d8a45e937f3f94803d61256d",
".git/objects/ba/63b5d721c0976a80b6a1bba26845760f32caf7": "45619b8882b05bc68a8813c6ad95c2a7",
".git/objects/ba/f9f10b3a17368b76e65efa49586e6b7ed49ce7": "c8ebe01a7b43dee4ceb687496ad9bbf2",
".git/objects/bb/edda13633ba07ff22ed9a341b8d012fa38a4c7": "906e6f30c0e8761c1b87339a489a363e",
".git/objects/bc/726137f16cc3435637dc0683fd8ddbbd35bf41": "d68f59c3936fed6b99b9d23317e25397",
".git/objects/bc/7e1c9b39ea136c216960b5eb53a40f58596aa7": "44070c1ee8099554ff27bba71ea2d7de",
".git/objects/bc/c34fedc3ff301ff6a07ebf7c538349664c652a": "336c513b09fb480388bcd4a6bb81576a",
".git/objects/bd/3abf591dbf6358d709f288e6270c8d9bb95c86": "05c5f44fe5ed73714018dc71de09c6b8",
".git/objects/bd/5b50cf4be58f46e0fca2eb6613f690720a5fda": "6c7f7a73a67e15d5dbcbfd341695f0f0",
".git/objects/bd/cba3c24955c93c0b81a736d8e4e5d0f297e005": "0df079518f0492845b31aa4a7c0d0131",
".git/objects/be/1fced35c72cd1f7f80d22aa030aa765447a679": "ccf6e8005000af593dd04814fb91688d",
".git/objects/be/7d2a6491d74270b2c870e9f1f9b538b2eaedfc": "0d1e23c40855e8651e20755b5f1c7a6a",
".git/objects/be/9275fe50d8b0ba719a617c0f5899f2271c2c79": "09585ddd5ab4840edef9b3bbf831fa31",
".git/objects/be/dca1297f6726ea5bbd4ac4ac297389fe8f3acb": "589ea98613f1ff47038cfea7f6f34057",
".git/objects/bf/dc5b86797e6f3e9ba4ec68c39d166a6cc1befe": "119501ef31fd3be8885490e22dde5f4a",
".git/objects/c0/46c688b0fef30bc207b28437d7c76015a291ef": "94b14ed1ff33c824e6f3c45526d854e8",
".git/objects/c1/06483a66c47db5c485bb822f9e84664a2ae90b": "8c3b9c9ec240ad469ca7f3d69eb54184",
".git/objects/c3/19aa1e7eeb65532cdb3a5e8339310f5f7a02b9": "3f41dd6d6040e6bde333f51280c22772",
".git/objects/c3/2a5d930f7ec7a2c28be58bffdfb70d586f8bfc": "b39c0c985ea0afcbd023c319630ee735",
".git/objects/c3/cd2c5cbaaff1a67710e406a03b8be8719e0472": "07912fec642918005643a718ada667f1",
".git/objects/c3/f2e61245085de2134f446464d9a35b7f4c3ee8": "76769779f247ac236ac2fa8af21ba73f",
".git/objects/c5/1713586832ab3e351a87b37f3ac4363578564f": "9f4d6bdffae01d3878b927ee86e81c8e",
".git/objects/c5/179a844fd255535fb0d7e1c487e273089532da": "7f556a27d2437d48d9eb0765897b5d86",
".git/objects/c5/24b4d4c24ab08196700654a7d3c3aacf688936": "33fccb7ec4e70b509ada6c393d499719",
".git/objects/c5/35443fb4f64731e3e4456e3301cdb0cbd2cb6d": "b59c0fa6f09b9cb69334fac85f800d1d",
".git/objects/c5/bbd15d50f75ee697390a2b213f5dafd94d89f8": "09ebf2c4530a3328b5770eb0f4d9a348",
".git/objects/c6/a116764b0863b33c68733c1dd1cbf1e2cb1073": "9ab7bedb702e2a2b90f18a71e44c2bc3",
".git/objects/c6/b0600e7ba09f50e50a2b285d2f16adf65d3643": "b52a0f68a85a705b7d54055d887834b1",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/bedf0a790e0c5a191d4794bf5a9dc94327b355": "793f1ee279c7cca56d917fb82b6e7e1b",
".git/objects/c9/a1585edf78f582840455d7d352d22f31d15469": "ccf2bc23fe5b6469287c7ffdc1cf73b5",
".git/objects/c9/aa38029ce48b1e5648ebb1f4902de6ab137725": "c28c572e1bc803f12d0ad4ecfd0e5093",
".git/objects/cb/0e47933caca73ea43caaafe9694bb27fe81130": "8a0cc29d153246693590842abbc37733",
".git/objects/cb/cfece077313f659db6114115a48c0f0d290d45": "04bddeffaf3e9c724786ce5ebfb85ab0",
".git/objects/cc/280345ef850f07058569c9558d9c23e785d89e": "897d293629f435a9549d51adc0ebd1c7",
".git/objects/cd/4e5b3d5615183f48e280be16cb7743132c5e4c": "f80e9a22353759b7f346086c2ce89ab2",
".git/objects/cd/841ec56533563c177583514b246e94c5a72979": "01ddd19c1f57d897e917ddd1159edf71",
".git/objects/ce/4025c309780f971d720455eb9cb474517ec893": "eacfcf422d6572012ecbf2038662ee09",
".git/objects/d1/7ff8d7a2d9823ad543f5f494a42e0c8f0ddd1f": "38433b08a3d3a385a8f97b718368057f",
".git/objects/d2/7751d6214c28ba55369c32b34ec582a6e0b9aa": "0d040a13e1a50850c6c6ba9edcd3c4d5",
".git/objects/d2/9e9143e9421cd21ba9dc07b74776e8930237db": "9b61dce59dda1c982c0c8db29bc9ba75",
".git/objects/d3/98f732f6c93ddf17682a9a41569926194421f5": "c4770073148e9f2cceb7ed35aea76f40",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/49ff9c692fdd5d6fadf8923a81ecc8ee7c5e52": "606630ff7be9c3c93e42b41f68530d59",
".git/objects/d4/6b5fb53f95c43a6dcb341981fb40d935646a67": "818841e8d15954223c735705aa3996f5",
".git/objects/d6/034ed7cc00dd2a7358120950e50729830461fe": "330d0d65b1dfbe2ab694f60b3a4dae11",
".git/objects/d6/71faf8fdda5e8714c7c39af41f507bbbca9522": "10cf0a642c8c0ff900c1ea0f8e54a30e",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/d8/c852d2d135176ed00ddeefb6cbd2ae396a05e6": "a5440e84d5bb8ad6077d3d67b468bd94",
".git/objects/d9/7b678f0ccdbdb1a63cd6edaadbe01ee02ffb9b": "abea0cf66068b8dbc86a25802149b523",
".git/objects/db/ca8f22b795f0b21cf5d1d3471ea1d1b64bbbfb": "11e6573f95fe84b48d8442ad75b7270a",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/5be2c12107e05557958b396caaf540e23d99e2": "fd9e895b8b83a515aff7b261bc49e269",
".git/objects/de/a704b658b3bcd9a8ebfea7e1d8ee1431c51df7": "c371de3d281e83dcb9cc2d200f897745",
".git/objects/df/f14f58b4ac6d3a20710ad409d91d83d4917f03": "f7ad3c45d7ba0bfb95b18c7c48836b06",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/4102863e546c5227c33e36afc7bcf3757e15c3": "3a94df63f49a033d7095d1537f1b0a69",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/e5/b04d414898ec994fe88df147c819528730a63b": "4f14df4a8ff8e97e918cdb5be59ba80a",
".git/objects/e5/eae6871f99325cd793e47ce5dac6c7b9339b59": "e41364ab445f9e45c119ac21df21165b",
".git/objects/e6/2a1d39ca36cefc4b7536e0252f72cf383931db": "c68ba6882e9ff7819a2d394c164639d2",
".git/objects/e6/91710dcf2ebfc8f441a2837be07bd45d84fc2a": "df873170299246b837f7a2a41c87b9c8",
".git/objects/e7/a25259f659411c2e5af0c933a066a6b16ff0ad": "4417ca8cfc902b81443e89fb0cb63da9",
".git/objects/e7/ac062cab8f22d71ac4add1deb87a45d63421f6": "4edeb74ee1b439d82f9ce629ae8269b5",
".git/objects/e9/2e0d3704e35f7b248ca680ec7fdd96eb212211": "4b6ad9edf08aa12bea2291e709beceee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/c1c0f276546588e188b1698ad7ca45e4239f37": "21c325f2406a24b26882ebe6c862b6b5",
".git/objects/e9/f414d902433eb5e479102517662cdcbc1c9e6e": "2f2dc71b1984c5616fbad42a37d70695",
".git/objects/ea/608d898393f0ca9216e50ee6edda7433a81086": "77626ccedd901245148595d7420f1d93",
".git/objects/ec/ee8d2e10affefb387108b6c6e2d7fe9b028206": "3634f667d62af1d9901148258d074848",
".git/objects/ed/04250ac0d49e715d90240c0e2559be2ee23abc": "5bef24710ca3d6a36e5f245811eef04a",
".git/objects/ed/b358b51a9388b016bd5dc897d5ebe519b8622d": "439606575cc3ec4acbc18555b4766cd6",
".git/objects/ed/c139e99849517362af8dd16646f136ca8bae2e": "4b30ae129cbe554441ace5e276e0df0a",
".git/objects/ed/d32b0323e103525478df5d4134396344b651d1": "d21c57947822372bcf5f682b7bf0a20f",
".git/objects/ef/87ebff1346d4b3b95cd1b519bc2dd9b4e8101c": "95e25ccecddf18dc87393863396b9787",
".git/objects/ef/9297c1794c161c4b7a1e3aefcc743da42da09d": "602644c9e3f6fc08459d1e9cc8c7adf9",
".git/objects/f0/24ab787270952bdf5c15a1882741034406f7e4": "f160e89cbeb4dc3820f6c5b1bc170e00",
".git/objects/f0/38ebeec5ff158c60634d1571cf4b2bb34bb77e": "7c25ded75f5229b95a657eb78393811f",
".git/objects/f0/c2051b98697c9b109255688552049678b7ed1a": "7c81f9019dbc348c78472157b1aee4b0",
".git/objects/f1/d10d52588713362ddd88d129671b80175abf6b": "7bb265445af305f196cdd04cdc0cd606",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/310cfbb1893ddd45b103e4980970d45f5886b8": "20b85073f89e8ba62145ed489e042ec2",
".git/objects/f5/230ad4f32693674185a39125a17a428e85b344": "ee4f22dcbda8052149ed756591790d8b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/a781987c78494d5a4c34a10f04f0fb77db8e5a": "097f31b0d308930bb9ce51d85a309a11",
".git/objects/f7/0bf000fcd5ae40cebad110d5c915c6e2356c0f": "af7e2c56ac387c7b0c524c1887c671b6",
".git/objects/f7/ce0c16233a6695e717e73ffe3c944442e4f62b": "10f04caf9013247b7e569cffbcb28ad6",
".git/objects/fc/5b64dc1894490ecd560d974809a4e714d45d04": "54f1ef0d0409fe913568bbc6c0cec29d",
".git/objects/fd/c84fdfe2f078656ee44c6b12143e31e29e6401": "60d60c9395b9c12a0e073fb4148a7bef",
".git/objects/pack/pack-28bba4b07504d15807fa43a786b47a967e3e8de8.idx": "d4811e2ab3cd9d28a1162f9fcdefdad2",
".git/objects/pack/pack-28bba4b07504d15807fa43a786b47a967e3e8de8.pack": "14858a791aa89257f7c53f54847af172",
".git/objects/pack/pack-28bba4b07504d15807fa43a786b47a967e3e8de8.rev": "1f1594e89a1dba2b3999525a8abe91fe",
".git/objects/pack/pack-b6be4772001fd57cccd3a53eb91f065f8dd85b9b.idx": "f2c792bdeca73ca7046bfb914a490b05",
".git/objects/pack/pack-b6be4772001fd57cccd3a53eb91f065f8dd85b9b.pack": "c6c79824c9c84e4f2c85ac4fe4927332",
".git/objects/pack/pack-b6be4772001fd57cccd3a53eb91f065f8dd85b9b.rev": "c8a1afe25c6e566021fd4b2919fbaed2",
".git/refs/heads/gh-pages": "b3e11d78e9a88b6acd37caa1a81ab8c3",
".git/refs/heads/master": "15663a4df9fe132075cffda85fd80ceb",
".git/refs/remotes/origin/chienan0617-patch-1": "c5fef13021c37bfc44918102699fc304",
".git/refs/remotes/origin/gh-pages": "b3e11d78e9a88b6acd37caa1a81ab8c3",
".git/refs/remotes/origin/gh-pages-html": "64b585de082522e6e5404b246ab1896e",
".git/refs/remotes/origin/main": "3fc567b1bb84d5e04a7f17fd3e1a6cee",
".git/refs/remotes/origin/repaired": "f45330bce500be1e4566d1777eccbec6",
".git/refs/remotes/origin/repaired_final": "c7012c24095654458c698530da4dde6b",
".git/refs/remotes/origin/temppppp": "136df0f4fcbaefae47a085404e4b88db",
".git/refs/remotes/origin/Web": "14d848decef358d658f86073e6f2235f",
"assets/AssetManifest.bin": "b72acf693e551a3727ba5821fc391b18",
"assets/AssetManifest.bin.json": "cb47ad918b8725a743d42eb713546a71",
"assets/AssetManifest.json": "d2354c710e153063ec8f73a6b884b5d6",
"assets/assets/document/cities.json": "c47cc9ab0f9aeb83795edc077b58dea6",
"assets/assets/document/weather.json": "7d2e5816730616e1bb15dd1c480a428d",
"assets/assets/document/weather_icon.json": "0b2db7ddceea3af3c88e740dc146d064",
"assets/assets/document/word.json": "cf53fe982f6d95cb9cf6c7c204e7c708",
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
"assets/assets/image/background/wi_16.webp": "2893ea77dca0716ba1fbbddaa04217c0",
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
"assets/assets/image/background/wi_8.webp": "b5bc4e964d056c02db1ee53aab079ad3",
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
"assets/NOTICES": "827b48a6795918f7286198523cfa61ee",
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
"flutter_bootstrap.js": "4d5843094aa45c39f8369c587d9f942b",
"icons/Icon-192.png": "0f7b676b471816138847737b134a5863",
"icons/Icon-512.png": "c9adf95d40c5346da10c74b6c053f435",
"icons/Icon-maskable-192.png": "0f7b676b471816138847737b134a5863",
"icons/Icon-maskable-512.png": "c9adf95d40c5346da10c74b6c053f435",
"icons/icon.png": "fddc0f19feec8c4c0695e25a9e764e2a",
"index.html": "2f17c391a77d503c21943e929107e880",
"/": "2f17c391a77d503c21943e929107e880",
"main.dart.js": "6531d50200dbc63a592c22f5fc4b7077",
"manifest.json": "d45fb6024682d7820286fa67d362c776",
"splash/img/dark-1x.png": "f7d5ef888904faa9552aabad0210f9d4",
"splash/img/dark-2x.png": "1c0292ab296ba6a1b7fb2f102ba9e84a",
"splash/img/dark-3x.png": "556c9ca8b55bd86017e397d6b7747480",
"splash/img/dark-4x.png": "bcc70b160ef4c84079728525787cc700",
"splash/img/light-1x.png": "f7d5ef888904faa9552aabad0210f9d4",
"splash/img/light-2x.png": "1c0292ab296ba6a1b7fb2f102ba9e84a",
"splash/img/light-3x.png": "556c9ca8b55bd86017e397d6b7747480",
"splash/img/light-4x.png": "bcc70b160ef4c84079728525787cc700",
"version.json": "89388755ad95170bcb60beb6b0feb1a3"};
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
