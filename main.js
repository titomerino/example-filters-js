/** Data */
var categories = {
  1: 'Category 1',
  2: 'Category 2',
  3: 'Category 3',
  4: 'Category 4',
  5: 'Category 5',
  6: 'Category 6',
  7: 'Category 7',
  8: 'Category 8',
  9: 'Category 9',
  10: 'Category 10'
};

var modality = {
  1: 'Part time',
  2: 'Evening',
  3: 'Full Time',
  4: 'Not especified'
};

var locations = {
  1: 'Alabama',
  2: 'California',
  3: 'Colorado',
  4: 'Hawaii',
  5: 'New Mexico',
  6: 'New Hampshire',
  7: 'Georgia',
  8: 'Guam',
  9: 'Northern Mariana Islands',
  10:'South Carolina',
  10:'Texas'
};

var data = [
  {
    "id": 0,
    "price": "$3,624.66",
    "college": {
      "name": "mollit ea",
      "picture": "http://placehold.it/32x32"
    },
    "title": "sint in aliquip",
    "location": "515 Hamilton Walk, Glenville, Alabama, 2492",
    "about": "tempor aliqua aliqua reprehenderit ea laborum voluptate aliqua excepteur ut enim velit labore officia fugiat deserunt non deserunt exercitation do...",
    "category": 8,
    "modality": 3
  },
  {
    "id": 1,
    "price": "$1,066.39",
    "college": {
      "name": "nulla qui",
      "picture": "http://placehold.it/32x32"
    },
    "title": "duis exercitation consectetur",
    "location": "504 Summit Street, Mappsville, California, 552",
    "about": "tempor sit cillum commodo aliqua officia veniam deserunt aliqua irure nostrud consectetur Lorem in dolore Lorem ea nostrud laboris amet...",
    "category": 5,
    "modality": 3
  },
  {
    "id": 2,
    "price": "$1,504.28",
    "college": {
      "name": "labore consectetur",
      "picture": "http://placehold.it/32x32"
    },
    "title": "elit ullamco officia",
    "location": "404 Beach Place, Bergoo, Colorado, 5874",
    "about": "reprehenderit qui ut esse veniam non proident non sint officia et laborum do nostrud commodo velit elit non occaecat labore...",
    "category": 8,
    "modality": 4
  },
  {
    "id": 3,
    "price": "$3,396.05",
    "college": {
      "name": "ullamco ea",
      "picture": "http://placehold.it/32x32"
    },
    "title": "enim dolore sit",
    "location": "419 Hamilton Avenue, Catherine, Hawaii, 4271",
    "about": "esse commodo est magna tempor sunt occaecat ad nisi fugiat ex velit fugiat ea cupidatat adipisicing proident Lorem sit irure...",
    "category": 5,
    "modality": 1
  },
  {
    "id": 4,
    "price": "$3,591.85",
    "college": {
      "name": "ullamco laborum",
      "picture": "http://placehold.it/32x32"
    },
    "title": "nisi incididunt in",
    "location": "459 McKibben Street, Gratton, New Mexico, 7958",
    "about": "id irure excepteur elit id magna cupidatat proident laborum reprehenderit culpa sint est irure occaecat non aliqua reprehenderit est deserunt...",
    "category": 9,
    "modality": 3
  },
  {
    "id": 5,
    "price": "$1,262.10",
    "college": {
      "name": "dolor labore",
      "picture": "http://placehold.it/32x32"
    },
    "title": "nulla voluptate eu",
    "location": "930 Wortman Avenue, Durham, New Hampshire, 3016",
    "about": "enim labore voluptate nisi occaecat eu laborum deserunt labore cillum velit qui quis ex sit nisi incididunt commodo duis aliqua...",
    "category": 5,
    "modality": 4
  },
  {
    "id": 6,
    "price": "$1,000.93",
    "college": {
      "name": "sint nostrud",
      "picture": "http://placehold.it/32x32"
    },
    "title": "exercitation est nulla",
    "location": "734 Crooke Avenue, Northchase, Georgia, 1186",
    "about": "id reprehenderit magna in magna irure consectetur duis in laboris labore laborum est velit voluptate et laborum id quis ipsum...",
    "category": 3,
    "modality": 3
  },
  {
    "id": 7,
    "price": "$3,918.87",
    "college": {
      "name": "labore voluptate",
      "picture": "http://placehold.it/32x32"
    },
    "title": "veniam exercitation consectetur",
    "location": "308 Montague Terrace, Brule, Guam, 893",
    "about": "fugiat commodo deserunt proident cillum ipsum proident commodo incididunt deserunt laboris et commodo ut consequat ut cillum non reprehenderit dolore...",
    "category": 9,
    "modality": 2
  },
  {
    "id": 8,
    "price": "$3,316.42",
    "college": {
      "name": "aliquip minim",
      "picture": "http://placehold.it/32x32"
    },
    "title": "ullamco duis adipisicing",
    "location": "609 Hampton Place, Leeper, Northern Mariana Islands, 8591",
    "about": "officia sint esse voluptate eu nulla eu veniam enim anim reprehenderit excepteur duis dolore dolore irure commodo ut qui ad...",
    "category": 6,
    "modality": 4
  },
  {
    "id": 9,
    "price": "$2,951.84",
    "college": {
      "name": "amet aliquip",
      "picture": "http://placehold.it/32x32"
    },
    "title": "proident eu veniam",
    "location": "248 Caton Avenue, Barrelville, South Carolina, 1222",
    "about": "ullamco velit voluptate sint ipsum aute dolor irure officia adipisicing aliqua non voluptate tempor aliqua commodo reprehenderit eu veniam aliqua...",
    "category": 6,
    "modality": 3
  },
  {
    "id": 10,
    "price": "$2,206.54",
    "college": {
      "name": "officia id",
      "picture": "http://placehold.it/32x32"
    },
    "title": "officia non et",
    "location": "819 Richards Street, Chamberino, Marshall Islands, 7376",
    "about": "qui ea ex consectetur cupidatat proident commodo do commodo ipsum id dolore adipisicing fugiat voluptate qui nulla Lorem laborum voluptate...",
    "category": 1,
    "modality": 1
  },
  {
    "id": 11,
    "price": "$3,604.19",
    "college": {
      "name": "ipsum sint",
      "picture": "http://placehold.it/32x32"
    },
    "title": "aliqua pariatur consequat",
    "location": "464 Kermit Place, Oneida, Delaware, 7181",
    "about": "eu proident aliqua reprehenderit officia commodo labore eu anim eu voluptate magna ipsum enim ullamco officia ex tempor ut minim...",
    "category": 9,
    "modality": 2
  },
  {
    "id": 12,
    "price": "$3,666.26",
    "college": {
      "name": "nostrud sit",
      "picture": "http://placehold.it/32x32"
    },
    "title": "occaecat consequat laboris",
    "location": "458 Clinton Street, Roeville, Oregon, 6749",
    "about": "duis sunt proident qui ipsum non officia magna exercitation aliquip nisi dolore nulla commodo quis sit qui in commodo ullamco...",
    "category": 6,
    "modality": 3
  },
  {
    "id": 13,
    "price": "$3,352.58",
    "college": {
      "name": "cillum proident",
      "picture": "http://placehold.it/32x32"
    },
    "title": "et ipsum amet",
    "location": "942 Metrotech Courtr, Maybell, Arkansas, 3544",
    "about": "in deserunt irure irure amet ea quis esse consequat aliquip fugiat aute commodo eiusmod nisi enim id occaecat ad adipisicing...",
    "category": 9,
    "modality": 2
  },
  {
    "id": 14,
    "price": "$1,234.35",
    "college": {
      "name": "laborum amet",
      "picture": "http://placehold.it/32x32"
    },
    "title": "aliqua minim ex",
    "location": "903 Milton Street, Blanford, Colorado, 5342",
    "about": "amet eu culpa fugiat eu exercitation ipsum quis sit aute laboris consectetur dolore ad incididunt labore proident do do velit...",
    "category": 5,
    "modality": 3
  },
  {
    "id": 15,
    "price": "$1,656.82",
    "college": {
      "name": "do nisi",
      "picture": "http://placehold.it/32x32"
    },
    "title": "irure nulla aliqua",
    "location": "200 Vernon Avenue, Websterville, Hawaii, 4396",
    "about": "ex eu consectetur pariatur do est nisi est dolore excepteur ipsum id eiusmod labore cupidatat sint ea minim consequat amet...",
    "category": 9,
    "modality": 3
  },
  {
    "id": 16,
    "price": "$2,016.85",
    "college": {
      "name": "cillum dolor",
      "picture": "http://placehold.it/32x32"
    },
    "title": "duis officia officia",
    "location": "939 Waldorf Court, Rushford, Missouri, 9751",
    "about": "qui amet elit sit sit id consequat culpa veniam aute eu in irure cillum exercitation labore laborum ea deserunt nostrud...",
    "category": 4,
    "modality": 3
  },
  {
    "id": 17,
    "price": "$3,431.16",
    "college": {
      "name": "cillum eiusmod",
      "picture": "http://placehold.it/32x32"
    },
    "title": "deserunt id fugiat",
    "location": "149 Laurel Avenue, Rosedale, Tennessee, 1538",
    "about": "duis mollit laboris qui adipisicing nulla est laborum fugiat do eu velit ea do reprehenderit culpa eu deserunt duis Lorem...",
    "category": 4,
    "modality": 3
  },
  {
    "id": 18,
    "price": "$2,494.50",
    "college": {
      "name": "elit mollit",
      "picture": "http://placehold.it/32x32"
    },
    "title": "qui fugiat adipisicing",
    "location": "344 Sands Street, Lopezo, California, 2211",
    "about": "voluptate elit id qui magna ipsum aliquip non laborum excepteur officia ipsum esse sunt sint est magna irure sint anim...",
    "category": 8,
    "modality": 4
  },
  {
    "id": 19,
    "price": "$3,671.83",
    "college": {
      "name": "anim magna",
      "picture": "http://placehold.it/32x32"
    },
    "title": "veniam culpa elit",
    "location": "292 Chestnut Avenue, Hasty, North Carolina, 6473",
    "about": "et esse voluptate culpa nostrud cillum ipsum cillum dolor voluptate mollit adipisicing deserunt proident eu laboris laborum magna pariatur esse...",
    "category": 10,
    "modality": 4
  },
  {
    "id": 20,
    "price": "$2,086.80",
    "college": {
      "name": "excepteur laboris",
      "picture": "http://placehold.it/32x32"
    },
    "title": "laborum tempor consequat",
    "location": "939 Ocean Avenue, Kanauga, Hawaii, 5094",
    "about": "labore fugiat anim minim non aute nostrud non et deserunt qui id aute minim aute minim consectetur voluptate veniam tempor...",
    "category": 3,
    "modality": 1
  },
  {
    "id": 21,
    "price": "$3,879.60",
    "college": {
      "name": "reprehenderit laborum",
      "picture": "http://placehold.it/32x32"
    },
    "title": "esse ut ipsum",
    "location": "579 Cooke Court, Camino, New Jersey, 9167",
    "about": "dolor minim in ut officia sunt minim magna nostrud commodo voluptate minim velit Lorem qui aute eiusmod enim adipisicing nostrud...",
    "category": 1,
    "modality": 3
  },
  {
    "id": 22,
    "price": "$1,558.55",
    "college": {
      "name": "esse cillum",
      "picture": "http://placehold.it/32x32"
    },
    "title": "proident magna aliqua",
    "location": "907 Stone Avenue, Aberdeen, Alabama, 1354",
    "about": "dolor Lorem minim velit cupidatat reprehenderit ea consequat eu magna nulla ipsum magna adipisicing commodo sunt veniam id adipisicing non...",
    "category": 4,
    "modality": 2
  },
  {
    "id": 23,
    "price": "$3,461.12",
    "college": {
      "name": "proident ipsum",
      "picture": "http://placehold.it/32x32"
    },
    "title": "quis aliqua aliquip",
    "location": "115 Perry Terrace, Robinette, Puerto Rico, 4278",
    "about": "id ad reprehenderit et ut reprehenderit deserunt culpa exercitation nulla minim amet ut culpa reprehenderit qui elit ex cillum in...",
    "category": 2,
    "modality": 1
  },
  {
    "id": 24,
    "price": "$3,012.66",
    "college": {
      "name": "occaecat exercitation",
      "picture": "http://placehold.it/32x32"
    },
    "title": "esse non magna",
    "location": "649 Vermont Court, Bodega, Ohio, 527",
    "about": "ex in voluptate exercitation nulla qui aliqua do consequat eiusmod ex nulla ad dolor ad occaecat et nulla irure enim...",
    "category": 2,
    "modality": 4
  },
  {
    "id": 25,
    "price": "$2,626.06",
    "college": {
      "name": "ad tempor",
      "picture": "http://placehold.it/32x32"
    },
    "title": "excepteur commodo quis",
    "location": "378 Classon Avenue, Ezel, Hawaii, 4608",
    "about": "laboris consequat aliqua minim consequat labore Lorem elit eu commodo id sit cillum labore ea non sunt anim non deserunt...",
    "category": 10,
    "modality": 4
  },
  {
    "id": 26,
    "price": "$3,927.34",
    "college": {
      "name": "amet minim",
      "picture": "http://placehold.it/32x32"
    },
    "title": "ad adipisicing ea",
    "location": "808 Applegate Court, Boling, Utah, 2973",
    "about": "aute irure sint laborum minim ea nulla deserunt ea excepteur sit laborum do sit laborum incididunt elit ullamco adipisicing dolor...",
    "category": 10,
    "modality": 2
  },
  {
    "id": 27,
    "price": "$1,169.87",
    "college": {
      "name": "consequat Lorem",
      "picture": "http://placehold.it/32x32"
    },
    "title": "tempor exercitation excepteur",
    "location": "245 Morgan Avenue, Caspar, South Dakota, 1491",
    "about": "enim aliqua esse voluptate tempor amet sit cillum commodo quis pariatur deserunt ullamco et excepteur eu ullamco mollit exercitation enim...",
    "category": 1,
    "modality": 3
  },
  {
    "id": 28,
    "price": "$2,316.98",
    "college": {
      "name": "incididunt dolor",
      "picture": "http://placehold.it/32x32"
    },
    "title": "mollit duis velit",
    "location": "492 Waldane Court, Leroy, California, 2903",
    "about": "cillum irure excepteur elit sit enim officia non anim irure in officia eiusmod enim cupidatat labore excepteur irure enim voluptate...",
    "category": 7,
    "modality": 2
  },
  {
    "id": 29,
    "price": "$1,820.10",
    "college": {
      "name": "id tempor",
      "picture": "http://placehold.it/32x32"
    },
    "title": "cillum do sint",
    "location": "367 Brighton Avenue, Brazos, Federated States Of Micronesia, 7416",
    "about": "enim sint dolor culpa aute duis velit anim ullamco sint nostrud ex est consectetur id quis aliqua dolor cillum excepteur...",
    "category": 9,
    "modality": 2
  },
  {
    "id": 30,
    "price": "$1,266.93",
    "college": {
      "name": "tempor nostrud",
      "picture": "http://placehold.it/32x32"
    },
    "title": "ullamco esse sint",
    "location": "323 Strickland Avenue, Bourg, Texas, 2618",
    "about": "magna dolor id aliquip est deserunt do mollit est ad exercitation irure dolor id non ipsum non irure ipsum do...",
    "category": 2,
    "modality": 4
  },
  {
    "id": 31,
    "price": "$2,488.53",
    "college": {
      "name": "cupidatat labore",
      "picture": "http://placehold.it/32x32"
    },
    "title": "tempor tempor culpa",
    "location": "289 McKinley Avenue, Dale, Hawaii, 9529",
    "about": "ullamco incididunt ullamco non fugiat laboris laboris ullamco do deserunt pariatur commodo anim dolore ipsum veniam excepteur fugiat eiusmod sint...",
    "category": 1,
    "modality": 1
  },
  {
    "id": 32,
    "price": "$1,895.27",
    "college": {
      "name": "nulla dolore",
      "picture": "http://placehold.it/32x32"
    },
    "title": "laboris est elit",
    "location": "986 Ide Court, Rote, Kentucky, 7195",
    "about": "aliqua incididunt officia nulla proident adipisicing magna non irure non amet reprehenderit qui consectetur aliquip ex laborum non ullamco aute...",
    "category": 4,
    "modality": 2
  },
  {
    "id": 33,
    "price": "$1,193.84",
    "college": {
      "name": "labore duis",
      "picture": "http://placehold.it/32x32"
    },
    "title": "adipisicing occaecat labore",
    "location": "799 Herbert Street, Crawfordsville, California, 6917",
    "about": "mollit quis velit elit adipisicing et aute Lorem incididunt nostrud sit ea esse culpa mollit fugiat est enim ipsum consectetur...",
    "category": 8,
    "modality": 3
  },
  {
    "id": 34,
    "price": "$3,338.79",
    "college": {
      "name": "reprehenderit ad",
      "picture": "http://placehold.it/32x32"
    },
    "title": "exercitation veniam ad",
    "location": "846 Homecrest Avenue, Edgewater, Virginia, 9096",
    "about": "proident nisi magna do proident ea laboris ad nisi ullamco sit et incididunt nulla eiusmod reprehenderit proident reprehenderit tempor nulla...",
    "category": 4,
    "modality": 1
  },
  {
    "id": 35,
    "price": "$1,048.06",
    "college": {
      "name": "officia occaecat",
      "picture": "http://placehold.it/32x32"
    },
    "title": "mollit labore sunt",
    "location": "839 Degraw Street, Shaft, Michigan, 8599",
    "about": "ipsum reprehenderit ipsum anim velit exercitation Lorem elit pariatur quis esse consectetur aute ut deserunt nisi in dolor elit ea...",
    "category": 4,
    "modality": 1
  },
  {
    "id": 36,
    "price": "$2,646.14",
    "college": {
      "name": "ut magna",
      "picture": "http://placehold.it/32x32"
    },
    "title": "do consectetur magna",
    "location": "476 Boerum Place, Gorst, Alabama, 3702",
    "about": "commodo ipsum consequat laboris labore aliquip aute exercitation cillum in id quis et duis ex aliquip irure aliqua veniam excepteur...",
    "category": 4,
    "modality": 3
  },
  {
    "id": 37,
    "price": "$2,043.33",
    "college": {
      "name": "eu est",
      "picture": "http://placehold.it/32x32"
    },
    "title": "duis nisi non",
    "location": "468 Gilmore Court, Haring, Connecticut, 9745",
    "about": "mollit in in ex anim ex laborum velit ullamco pariatur qui veniam irure dolore pariatur exercitation magna consequat ut officia...",
    "category": 5,
    "modality": 1
  },
  {
    "id": 38,
    "price": "$2,158.24",
    "college": {
      "name": "est exercitation",
      "picture": "http://placehold.it/32x32"
    },
    "title": "culpa eu eiusmod",
    "location": "942 Scott Avenue, Lacomb, Washington, 2376",
    "about": "ex fugiat dolor ut laboris est non ad pariatur id eu laborum ad ad voluptate veniam mollit ut deserunt duis...",
    "category": 4,
    "modality": 4
  },
  {
    "id": 39,
    "price": "$1,512.62",
    "college": {
      "name": "ullamco sint",
      "picture": "http://placehold.it/32x32"
    },
    "title": "incididunt voluptate magna",
    "location": "142 Dictum Court, Cutter, California, 111",
    "about": "proident consequat id magna Lorem duis minim ad veniam reprehenderit eiusmod eu nostrud quis nulla aute quis pariatur elit ipsum...",
    "category": 8,
    "modality": 3
  },
  {
    "id": 40,
    "price": "$2,565.73",
    "college": {
      "name": "excepteur dolor",
      "picture": "http://placehold.it/32x32"
    },
    "title": "laboris ad elit",
    "location": "848 Gunnison Court, Windsor, New York, 2432",
    "about": "voluptate eu et ea aliqua elit laborum laborum qui nostrud culpa officia ipsum incididunt ut non ipsum in sit minim...",
    "category": 3,
    "modality": 3
  },
  {
    "id": 41,
    "price": "$1,816.46",
    "college": {
      "name": "minim eu",
      "picture": "http://placehold.it/32x32"
    },
    "title": "proident qui ullamco",
    "location": "629 Will Place, Ruckersville, Alabama, 705",
    "about": "id excepteur ut est amet aute nostrud sint anim velit adipisicing elit aute sint excepteur velit eu proident nulla deserunt...",
    "category": 4,
    "modality": 3
  },
  {
    "id": 42,
    "price": "$2,620.86",
    "college": {
      "name": "non sunt",
      "picture": "http://placehold.it/32x32"
    },
    "title": "sint aliquip ad",
    "location": "889 Provost Street, Marshall, Illinois, 7443",
    "about": "elit magna ipsum pariatur eiusmod fugiat aliqua sint adipisicing elit dolor voluptate eiusmod ipsum nulla eiusmod ipsum fugiat eu dolor...",
    "category": 8,
    "modality": 1
  },
  {
    "id": 43,
    "price": "$3,438.01",
    "college": {
      "name": "enim ut",
      "picture": "http://placehold.it/32x32"
    },
    "title": "fugiat sit enim",
    "location": "850 Colonial Road, Fulford, Florida, 2426",
    "about": "deserunt exercitation eiusmod sit in qui mollit cupidatat duis aute aute Lorem nulla consequat veniam sit cupidatat veniam ipsum fugiat...",
    "category": 2,
    "modality": 1
  },
  {
    "id": 44,
    "price": "$3,216.71",
    "college": {
      "name": "ipsum deserunt",
      "picture": "http://placehold.it/32x32"
    },
    "title": "voluptate reprehenderit labore",
    "location": "230 Marconi Place, Cobbtown, District Of Columbia, 6795",
    "about": "incididunt ea incididunt commodo cupidatat laborum ad officia veniam irure aute adipisicing id amet veniam culpa id fugiat officia consectetur...",
    "category": 2,
    "modality": 3
  },
  {
    "id": 45,
    "price": "$1,336.20",
    "college": {
      "name": "elit tempor",
      "picture": "http://placehold.it/32x32"
    },
    "title": "minim nostrud nostrud",
    "location": "596 Madison Street, Clay, Virgin Islands, 878",
    "about": "culpa enim fugiat elit minim mollit non laboris quis ad labore sint amet nulla amet sint sit eu duis ad...",
    "category": 3,
    "modality": 4
  },
  {
    "id": 46,
    "price": "$1,571.39",
    "college": {
      "name": "consectetur est",
      "picture": "http://placehold.it/32x32"
    },
    "title": "ad fugiat non",
    "location": "868 Thames Street, Richmond, Louisiana, 9167",
    "about": "esse eu ad et anim laborum reprehenderit Lorem adipisicing ipsum tempor incididunt ut duis cupidatat ea qui nostrud non tempor...",
    "category": 1,
    "modality": 2
  },
  {
    "id": 47,
    "price": "$2,317.72",
    "college": {
      "name": "quis ut",
      "picture": "http://placehold.it/32x32"
    },
    "title": "nisi laboris minim",
    "location": "381 Commercial Street, Strykersville, Nevada, 3625",
    "about": "sint nostrud commodo sunt consequat cillum incididunt ut et commodo consequat officia proident elit excepteur sunt laboris labore labore cupidatat...",
    "category": 7,
    "modality": 2
  },
  {
    "id": 48,
    "price": "$1,756.50",
    "college": {
      "name": "proident qui",
      "picture": "http://placehold.it/32x32"
    },
    "title": "sunt velit labore",
    "location": "699 Remsen Avenue, Crisman, Maryland, 6380",
    "about": "esse ea irure nulla ullamco nulla irure quis amet cupidatat magna tempor eu fugiat non occaecat veniam reprehenderit commodo excepteur...",
    "category": 2,
    "modality": 2
  },
  {
    "id": 49,
    "price": "$2,490.21",
    "college": {
      "name": "ad nostrud",
      "picture": "http://placehold.it/32x32"
    },
    "title": "culpa sunt officia",
    "location": "376 Bedford Avenue, Sanborn, Wisconsin, 4892",
    "about": "ullamco non laboris ullamco et tempor nulla duis magna quis voluptate nostrud tempor occaecat occaecat fugiat deserunt duis commodo consequat...",
    "category": 3,
    "modality": 2
  }
];
/** Data end */

const containerList = document.querySelector('[data-course-list]');
const categoryContainer = document.querySelector('#categories');
const locationContainer = document.querySelector('#locations');
const modalityContainer = document.querySelector('[data-modality-filter]');

/** form filter */
const formFilters = document.querySelector('#filters');

/** Get params url */
var keywordSelected = getQuery('keyword');
var categorySelected = getQuery('category');
var locationSelected = getQuery('location');
var modality1 = getQuery('modality-1');
var modality2 = getQuery('modality-2');
var modality3 = getQuery('modality-3');
var modality4 = getQuery('modality-4');
var modalitiesSelected = [];

/** Functions */
function initCourseList(courses, container) {
  var template = '';
  courses.forEach((element, index) => {
    template += `
    <li>
      <article class="course-card">
        <div class="content">
          <h5 class="mt-0 mb-1">${element.title}</h5>
          <p>${element.about}</p>
          <p><strong class="small">${element.location}</strong></p>
          <span class="small badge badge-info">${categories[element.category]}</span>
          <span class="small badge badge-dark">${modality[element.modality]}</span>
        </div>
        <div class="image">
          <img src="http://placehold.it/128x64" class="mr-3" alt="">
          <p>${element.college.name}</p>
          <span><strong>${element.price}</strong></span>
        </div>
        <a href="/"><span class="sr-only">${element.title}</span></a>
      </article>
    </li>
    `;
  });
  container.innerHTML = template;
}

function initSelect(listItems, container, filterName = '') {
  var template = `<option value="0">All ${filterName}</option>`;
  for (var clave in listItems) {
    template += `
      <option value="${clave}">${listItems[clave]}</option>
    `;
  }
  container.innerHTML = template;
}

function initCheckbox(listItems, container) {
  var template = '';
  for (var clave in listItems) {
    template += `
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        name="modality-${clave}"
        id="modality-${clave}"
        value="${clave}"
      >
      <label class="form-check-label" for="modality-${clave}">${listItems[clave]}</label>
    </div>
    `;
  }
  container.innerHTML = template;
}

/** Origin: https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript */
function getQuery(q) {
  return (window.location.search.match(new RegExp('[?&]' + q + '=([^&]+)')) || [, null])[1];
}

function filterByKeyword(item) {
  if (item.title.search(keywordSelected) != -1) return true;
  else return false;
}

function filterCategory(item) {
  if (item.category == categorySelected) return true;
  else return false;
}

function filterLocation(item) {
  if (item.location.search(locations[locationSelected]) != -1) return true;
  else return false;
}

function filterModality(item) {
  var flat = modalitiesSelected.find(function(id) {
    if (id == item.modality) return true;
    else return false;
  });
  return flat;
}

function formReset() {
  formFilters.reset();
  window.location.href = 'index.html';
}

function initCounter(total, visible) {
  var totalCouerses = document.querySelector('[data-total]');
  var totalCouersesFiltered = document.querySelector('[data-visible]');

  totalCouerses.textContent = `${total}`;
  totalCouersesFiltered.textContent = `${visible}`;
}
/** Functions end */


/** Init elements */
if (containerList) {
  initCourseList(data, containerList);
}

if (categoryContainer) {
  initSelect(categories, categoryContainer, 'Categories');
}

if (locationContainer) {
  initSelect(locations, locationContainer, 'Locations');
}

if (modalityContainer) {
  initCheckbox(modality, modalityContainer);
}

if (keywordSelected) {
  formFilters.elements['keyword'].value = keywordSelected;
  data = data.filter(filterByKeyword);
}

if (categorySelected && categorySelected != '0') {
  formFilters.elements['category'].value = categorySelected;
  data = data.filter(filterCategory)
}

if (locationSelected && locationSelected != '0') {
  formFilters.elements['location'].value = locationSelected;
  data = data.filter(filterLocation)
}

if (modality1) {
  formFilters.elements['modality-1'].checked = true;
  modalitiesSelected.push(modality1);
}

if (modality2) {
  formFilters.elements['modality-2'].checked = true;
  modalitiesSelected.push(modality2);
}

if (modality3) {
  formFilters.elements['modality-3'].checked = true;
  modalitiesSelected.push(modality3);
}

if (modality4) {
  formFilters.elements['modality-4'].checked = true;
  modalitiesSelected.push(modality4);
}

if (modalitiesSelected.length > 0) {
  data = data.filter(filterModality);
}

initCounter(50, data.length)
initCourseList(data, containerList);

if (data.length == 0) {
  containerList.innerHTML = '<li><h3>No course found &#128533; </h3></li>';
}