import { District, Gender, PrismaClient, Weekday } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const SALT_ROUNDS = 10;

async function hashPassword(plainPassword: string) {
  const hash: string = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  return hash;
}
const mapTypeData = [
  {
    chiType: '寵物店',
    engType: 'Pet_Shop',
  },
  {
    chiType: '獸醫診所',
    engType: 'Vet_Clinic',
  },
  {
    chiType: '寵物公園',
    engType: 'Pet_Park',
  },
  {
    chiType: '寵物美容',
    engType: 'Pet_Spa',
  },
  {
    chiType: '寵物善終',
    engType: 'Pet_Hospice',
  },
  {
    chiType: '商埸',
    engType: 'Shopping_Mall',
  },
  {
    chiType: '餐廳',
    engType: 'Restaurant',
  },
  {
    chiType: '酒店',
    engType: 'Pet_Hotel',
  },
];
const mapData = [
  {
    chiName: '龍貓仔專門店',
    engName: 'CHINCHILLA AND PETS SHOP',
    chiAddress: '香港渣華道3-5號永光閣4號鋪',
    engAddress: 'SHOP 4, G/F, CIRCLE COURT, 3-5 JAVA ROAD, NORTH POINT, HK',
    phoneNumber: 28955502,
    district: District['Eastern'],
    latitude: 22.29130977593307,
    longitude: 114.1954751346806,
    profileImg: '123',
  },
  {
    chiName: 'BABY FAT PET SHOP',
    engName: 'BABY FAT PET SHOP',
    chiAddress: '香港西營盤皇后大道西330號-336號新昇大廈C號鋪',
    engAddress:
      "SHOP C, NEW S]TART BUILDING, 330 - 336 QUEEN'S ROAD WEST, SAI YING PUN, HK",
    phoneNumber: 54960222,
    district: District['Central_and_Western'],
    latitude: 22.286832518313616,
    longitude: 114.14131763163783,
    profileImg: '124',
  },
  {
    chiName: '夏利維動物醫院',
    engName: "Chris & Nicola's Animal Hospital",
    chiAddress: '香港天后永興街37號地鋪',
    engAddress: 'G/F, 37 Wing Hing Street, Tin Hau, HK',
    phoneNumber: 25706048,
    district: District['Eastern'],
    latitude: 22.28541251424708,
    longitude: 114.19265225447529,
    profileImg: '125',
  },
  {
    chiName: '中環貓醫院 ',
    engName: 'Central Cat Hospital ',
    chiAddress: '香港中環鴨巴甸街37號地舖',
    engAddress: 'G/F, 37 Aberdeen Street, Central, HK',
    phoneNumber: 25052505,
    district: District['Central_and_Western'],
    latitude: 22.282777590021777,
    longitude: 114.1516801968238,
    profileImg: '126',
  },
  {
    chiName: 'Pets Central 流動診所 (荃灣)',
    engName: 'Pets Central Mobile Clinic (Tsuen Wan)',
    chiAddress: '新界荃灣馬灣珀麗路8號',
    engAddress: '8 Pak Lai Road, Ma Wan, Tsuen Wan, N.T.',
    phoneNumber: 62230903,
    district: District['Tsuen_Wan'],
    latitude: 22.353041481736252,
    longitude: 114.06208494100319,
    profileImg: '127',
  },
  {
    chiName: '觀塘海濱花園',
    engName: 'Kwun Tong Promenade',
    chiAddress: '九龍觀塘海濱道80號',
    engAddress: '80 Hoi Bun Road, Kwun Tong, Kowloon',
    phoneNumber: 23468538,
    district: District['Kwun_Tong'],
    latitude: 22.30973998,
    longitude: 114.21908077,
    profileImg: '128',
  },
  {
    chiName: '將軍澳海濱公園',
    engName: 'Tseung Kwan O Waterfront Park',
    chiAddress: '新界將軍澳唐俊街',
    engAddress: 'Tong Chun Street, Tseung Kwan O, N.T.',
    phoneNumber: 23462844,
    district: District['Sai_Kung'],
    latitude: 22.3014497,
    longitude: 114.26116,
    profileImg: '129',
  },
  {
    chiName: '車公廟路遊樂場',
    engName: 'Che Kung Miu Road Playground',
    chiAddress: '沙田大圍車公廟路',
    engAddress: 'Che Kung Miu Road, Tai Wai, Shatin',
    phoneNumber: 26340147,
    district: District['Sha_Tin'],
    latitude: 22.36903751,
    longitude: 114.17636949,
    profileImg: '130',
  },
  {
    chiName: '窩打老道/衛理道休憩處',
    engName: 'Waterloo Road/Wylie Road Sitting-out Area',
    chiAddress: '窩打老道/衛理道交界',
    engAddress: 'J/O Waterloo Road / Wylie Road',
    phoneNumber: 23021262,
    district: District['Yau_Tsim_Mong'],
    latitude: 22.3162097,
    longitude: 114.17407,
    profileImg: '131',
  },
  {
    chiName: '城門河第三海濱花園',
    engName: 'Shing Mun River Promenade Garden No. 3',
    chiAddress: '沙田源禾路',
    engAddress: 'Yuen Wo Road, Shatin',
    phoneNumber: 26340147,
    district: District['Sha_Tin'],
    latitude: 22.39167324,
    longitude: 114.19902419,
    profileImg: '132',
  },
  {
    chiName: '啟德空中花園',
    engName: 'Kai Tak Sky Garden',
    chiAddress: '九龍啟德承豐道',
    engAddress: 'Shing Fung Road, Kai Tak',
    phoneNumber: 28063210,
    district: District['Kowloon_City'],
    latitude: 22.3128635,
    longitude: 114.20664836,
    profileImg: '133',
  },
  {
    chiName: '聯和墟遊樂場 (近聯昌街)',
    engName: 'Luen Wo Hui Playground (near Luen Cheong Street)',
    chiAddress: '新界粉嶺聯和墟聯和道',
    engAddress: 'Luen Wo Road, Luen Wo Hui, Fanling, N.T.',
    phoneNumber: 26792838,
    district: District['North'],
    latitude: 22.49862558,
    longitude: 114.14398823,
    profileImg: '134',
  },
  {
    chiName: '青衣海濱公園—海欣花園段',
    engName: 'Tsing Yi Promenade-Grand Horizon Portion',
    chiAddress: '新界青衣楓樹窩路',
    engAddress: 'Fung Shue Wo Road, Tsing Yi, New Territories',
    phoneNumber: 24815435,
    district: District['Kwai_Tsing'],
    latitude: 22.35257486,
    longitude: 114.11002046,
    profileImg: '135',
  },
  {
    chiName: '大窩口道遊樂場',
    engName: 'Tai Wo Hau Road Playground',
    chiAddress: '葵涌大窩口道',
    engAddress: 'Tai Wo Hau Road Playground, Kwai Chung',
    phoneNumber: 24233408,
    district: District['Kwai_Tsing'],
    latitude: 22.36576891,
    longitude: 114.1310587,
    profileImg: '136',
  },
  {
    chiName: '龍翔道公園',
    engName: 'Lung Cheung Road Park',
    chiAddress: '九龍龍翔道',
    engAddress: 'Lung Cheung Road, Kowloon',
    phoneNumber: 27600581,
    district: District['Kowloon_City'],
    latitude: 22.34358184,
    longitude: 114.18102729,
    profileImg: '137',
  },
  {
    chiName: '城門河第一海濱花園',
    engName: 'Shing Mun River Promenade Garden No.1',
    chiAddress: '沙田車公廟路',
    engAddress: 'Che Kung Miu Road, Sha Tin',
    phoneNumber: 26340147,
    district: District['Sha_Tin'],
    latitude: 22.37698627,
    longitude: 114.18983911,
    profileImg: '138',
  },
  {
    chiName: '馬鞍山西沙路花園',
    engName: 'Ma On Shan Sai Sha Road Garden',
    chiAddress: '馬鞍山西沙路',
    engAddress: 'Sai Sha Road, Ma On Shan',
    phoneNumber: 26340147,
    district: District['Sha_Tin'],
    latitude: 22.42458143,
    longitude: 114.22722503,
    profileImg: '139',
  },
  {
    chiName: '觀海徑休憩處',
    engName: 'Kwun Hoi Path Sitting-out Area',
    chiAddress: '香港仔觀海徑',
    engAddress: 'Kwun Hoi Path, Aberdeen',
    phoneNumber: 25550121,
    district: District['Southern'],
    latitude: 22.24695416,
    longitude: 114.15890328,
    profileImg: '140',
  },
  {
    chiName: '香港仔海濱公園',
    engName: 'Aberdeen Promenade',
    chiAddress: '香港仔海傍道',
    engAddress: 'Aberdeen Praya Road',
    phoneNumber: 25550121,
    district: District['Southern'],
    latitude: 22.24697804,
    longitude: 114.15478037,
    profileImg: '141',
  },
  {
    chiName: '棠蔭街山邊休憩處',
    engName: 'Tong Yam Street Hillside Sitting-out Area',
    chiAddress: '石硤尾棠蔭街',
    engAddress: 'Tong Yam Street, Shek Kip Mei',
    phoneNumber: 23709954,
    district: District['Sham_Shui_Po'],
    latitude: 22.32840315,
    longitude: 114.16985649,
    profileImg: '142',
  },
  {
    chiName: '粉嶺火車站休憩處',
    engName: 'Fanling Station Sitting-out Area',
    chiAddress: '新界粉嶺火車站旁',
    engAddress: 'Next to Fanling Station',
    phoneNumber: 26792838,
    district: District['North'],
    latitude: 22.49295856,
    longitude: 114.13790705,
    profileImg: '2679 2838',
  },
  {
    chiName: '寶雲道公園',
    engName: 'Bowen Road Park',
    chiAddress: '灣仔寶雲道',
    engAddress: 'Bowen Road, Wan Chai',
    phoneNumber: 28795612,
    district: District['Wan_Chai'],
    latitude: 22.27018556,
    longitude: 114.17240242,
    profileImg: '2879 5612',
  },
  {
    chiName: '荃灣海濱單車匯合中心 (指定位置)',
    engName: 'Tsuen Wan Waterfront Cycling Entry / Exit Hub (Designated Areas)',
    chiAddress: '新界荃灣海興路',
    engAddress: 'Hoi Hing Road, Tsuen Wan, N.T.',
    phoneNumber: 22129702,
    district: District['Tsuen_Wan'],
    latitude: 22.37028661,
    longitude: 114.10741559,
    profileImg: '2212 9702',
  },
  {
    chiName: '荃灣公園',
    engName: 'Tsuen Wan Park',
    chiAddress: '永順街59號',
    engAddress: '59 Wing Shun Street',
    phoneNumber: 24089592,
    district: District['Tsuen_Wan'],
    latitude: 22.36694575,
    longitude: 114.11287093,
    profileImg: '2408 9592',
  },
  {
    chiName: '麒麟崗公眾公園',
    engName: 'Ki Lun Kong Public Park',
    chiAddress: '屯門青山公路三聖邨對面',
    engAddress: 'Opposite to Sam Shing Estate, Castle Peak Road, Tuen Mun',
    phoneNumber: 24513105,
    district: District['Tuen_Mun'],
    latitude: 22.3824184,
    longitude: 113.97865514,
    profileImg: '2451 3105',
  },
  {
    chiName: 'the pulse',
    engName: 'the pulse',
    chiAddress: '香港淺水灣海灘道28號',
    engAddress: '28, Beach Road, Repulse Bay, Hong Kong, Hong Kong',
    phoneNumber: 28158888,
    district: District['Southern'],
    latitude: 22.23559763636557,
    longitude: 114.19824669732529,
    profileImg: 'the pulse',
  },
  {
    chiName: '赤柱廣場',
    engName: 'Stanley Plaza',
    chiAddress: '赤柱佳美道23號',
    engAddress: '23 Carmel Road Stanley, Hong Kong',
    phoneNumber: 28134623,
    district: District['Southern'],
    latitude: 22.220136269308895,
    longitude: 114.20981536931092,
    profileImg: 'Stanley Plaza',
  },
  {
    chiName: '北角匯',
    engName: 'Harbour North',
    chiAddress: '香港北角北角邨里1號',
    engAddress: '1 North Point Estate Ln, North Point',
    phoneNumber: 28056605,
    district: District['Eastern'],
    latitude: 22.292901023207207,
    longitude: 114.19938850573674,
    profileImg: 'Harbour North',
  },
  {
    chiName: 'K11人文購物藝術館',
    engName: 'K11 MUSEA',
    chiAddress: '尖沙咀梳士巴利道18號',
    engAddress: 'Victoria Dockside, 18 Salisbury Road, Tsim Sha Tsui',
    phoneNumber: 38923890,
    district: District['Yau_Tsim_Mong'],
    latitude: 22.29439632211611,
    longitude: 114.17458234156776,
    profileImg: 'K11 MUSEA',
  },
  {
    chiName: 'D2 Place ONE',
    engName: 'D2 Place ONE',
    chiAddress: '荔枝角長義街9號',
    engAddress:
      '9 Cheung Yee Street, Lai Chi Kok, Kowloon, Lai Chi Kok, Hong Kong',
    phoneNumber: 36203098,
    district: District['Sham_Shui_Po'],
    latitude: 22.336395305257405,
    longitude: 114.14890401081881,
    profileImg: 'D2 Place ONE',
  },
  {
    chiName: '圓方',
    engName: 'Elements',
    chiAddress: '尖沙咀西九龍柯士甸道西1號',
    engAddress: '1 Austin Rd W, Tsim Sha Tsui',
    phoneNumber: 27355234,
    district: District['Yau_Tsim_Mong'],
    latitude: 22.30496326426625,
    longitude: 114.16112704806643,
    profileImg: 'Elements',
  },
  {
    chiName: '海港城',
    engName: 'Harbour City',
    chiAddress: '香港九龍尖沙咀廣東道3-27號',
    engAddress: '3 – 27 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong',
    phoneNumber: 21188666,
    district: District['Yau_Tsim_Mong'],
    latitude: 22.29624261892706,
    longitude: 114.16864564806502,
    profileImg: 'Harbour City',
  },
  {
    chiName: '南豐紗廠',
    engName: 'The Mills',
    chiAddress: '荃灣白田壩街45號',
    engAddress: '45 Pak Tin Par St, Tsuen Wan',
    phoneNumber: 39792300,
    district: District['Tsuen_Wan'],
    latitude: 22.375249264620432,
    longitude: 114.11020168383642,
    profileImg: 'The Mills',
  },
  {
    chiName: '新城市廣場',
    engName: 'New Town Plaza',
    chiAddress: '沙田沙田正街18-19號',
    engAddress: '18-19 Sha Tin Centre St, Sha Tin',
    phoneNumber: 26089329,
    district: District['Sha_Tin'],
    latitude: 22.382015720741858,
    longitude: 114.18859428198353,
    profileImg: 'New Town Plaza',
  },
  {
    chiName: '天晉滙',
    engName: 'Popwalk',
    chiAddress: '將軍澳唐俊街12號',
    engAddress: '12 Tong Chun St, Tseung Kwan O',
    phoneNumber: 26799300,
    district: District['Sai_Kung'],
    latitude: 22.30622685943347,
    longitude: 114.26095738114208,
    profileImg: 'Popwalk',
  },
];
console.log(mapData.length);
const workingHourData = [
  {
    weekday: Weekday['Monday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Tuesday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Wednesday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Thursday'],
    hours: 'Closed',
  },
  {
    weekday: Weekday['Friday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Saturday'],
    hours: '10:30am - 8:30pm',
  },
  {
    weekday: Weekday['Sunday'],
    hours: '10:00am - 8:30pm',
  },
  {
    weekday: Weekday['Monday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Tuesday'],
    hours: 'Closed',
  },
  {
    weekday: Weekday['Wednesday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Thursday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Friday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Saturday'],
    hours: '10:30am - 8:30pm',
  },
  {
    weekday: Weekday['Sunday'],
    hours: '10:00am - 8:30pm',
  },
];
const famSpeciesData = [
  {
    chiSpecies: '貓',
    engSpecies: 'Cat',
  },
  {
    chiSpecies: '狗',
    engSpecies: 'Dog',
  },
];
const speciesData = [
  {
    chiSpecies: '唐貓',
    engSpecies: 'Moggie',
  },
  {
    chiSpecies: '英短',
    engSpecies: 'British_Shorthair',
  },
  {
    chiSpecies: '布偶',
    engSpecies: 'Ragdoll',
  },
  {
    chiSpecies: '唐狗',
    engSpecies: 'Mongrel',
  },
  {
    chiSpecies: '金毛',
    engSpecies: 'Golden_Retriever',
  },
  {
    chiSpecies: '貴婦',
    engSpecies: 'Poodle',
  },
];
const petData = [
  {
    name: 'AAA',
    gender: Gender['Female'],
    dateBirth: new Date('2017-10-01').toISOString(),
  },
  {
    name: 'BBB',
    gender: Gender['Male'],
    dateBirth: new Date('2017-10-02').toISOString(),
  },
  {
    name: 'CCC',
    gender: Gender['Male'],
    dateBirth: new Date('2017-10-03').toISOString(),
  },
  {
    name: 'DDD',
    gender: Gender['Female'],
    dateBirth: new Date('2018-10-10').toISOString(),
  },
  {
    name: 'EEE',
    gender: Gender['Female'],
    dateBirth: new Date('2018-03-03').toISOString(),
  },
  {
    name: 'FFF',
    gender: Gender['Male'],
    dateBirth: new Date('2018-02-05').toISOString(),
  },
  {
    name: 'GGG',
    gender: Gender['Female'],
    dateBirth: new Date('2019-07-07').toISOString(),
  },
  {
    name: 'HHH',
    gender: Gender['Male'],
    dateBirth: new Date('2020-08-14').toISOString(),
  },
  {
    name: 'III',
    gender: Gender['Male'],
    dateBirth: new Date('2021-09-01').toISOString(),
  },
  {
    name: 'JJJ',
    gender: Gender['Female'],
    dateBirth: new Date('2021-09-01'),
  },
];
async function main() {
  const prisma = new PrismaClient();
  const usersData = [
    {
      email: 'terence@tecky.io',
      username: 'Terence',
      password: await hashPassword('@Tecky1234'),
      phoneNumber: 12345678,
      gender: Gender['Male'],
      district: District['Sha_Tin'],
      yearBirth: 1998,
      monthBirth: 10,
      IsWriter: false,
    },
    {
      email: 'alex@tecky.io',
      username: 'Alex',
      password: await hashPassword('@Tecky1234'),
      phoneNumber: 12345677,
      gender: Gender['Male'],
      district: District['Eastern'],
      yearBirth: 1987,
      monthBirth: 4,
      IsWriter: true,
    },
    {
      email: 'jason@tecky.io',
      username: 'Jason',
      password: await hashPassword('@Tecky1234'),
      phoneNumber: 12345676,
      gender: Gender['Male'],
      district: District['Tuen_Mun'],
      yearBirth: 2000,
      monthBirth: 5,
      IsWriter: false,
    },
    {
      email: 'mary@tecky.io',
      username: 'Mary',
      password: await hashPassword('@Tecky1234'),
      phoneNumber: 12345675,
      gender: Gender['Female'],
      district: District['Tai_Po'],
      yearBirth: 2003,
      monthBirth: 9,
      IsWriter: false,
    },
    {
      email: 'jane@tecky.io',
      username: 'Jane',
      password: await hashPassword('@Tecky1234'),
      phoneNumber: 12345674,
      gender: Gender['Female'],
      district: District['Yuen_Long'],
      yearBirth: 1999,
      monthBirth: 3,
      IsWriter: false,
    },
  ];
  await prisma.user.createMany({
    data: usersData,
    skipDuplicates: true,
  });
  const userRes = await prisma.user.findMany({ select: { id: true } });
  await prisma.mapType.createMany({
    data: mapTypeData,
    skipDuplicates: true,
  });
  const mapTypeRes = await prisma.mapType.findMany({ select: { id: true } });
  await prisma.maps.createMany({
    data: [
      {
        mapTypeId: mapTypeRes[0].id,
        ...mapData[0],
      },
      {
        mapTypeId: mapTypeRes[0].id,
        ...mapData[1],
      },
      {
        mapTypeId: mapTypeRes[1].id,
        ...mapData[2],
      },
      {
        mapTypeId: mapTypeRes[1].id,
        ...mapData[3],
      },
      {
        mapTypeId: mapTypeRes[1].id,
        ...mapData[4],
      },

      {
        mapTypeId: mapTypeRes[1].id,
        ...mapData[5],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[6],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[7],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[8],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[9],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[10],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[11],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[12],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[13],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[14],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[15],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[16],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[17],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[18],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[19],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[20],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[21],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[22],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[23],
      },
      {
        mapTypeId: mapTypeRes[2].id,
        ...mapData[24],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[25],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[26],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[27],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[28],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[29],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[30],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[31],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[32],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[33],
      },
      {
        mapTypeId: mapTypeRes[5].id,
        ...mapData[34],
      },
    ],
    skipDuplicates: true,
  });
  const mapRes = await prisma.maps.findMany({ select: { id: true } });
  await prisma.workingHour.createMany({
    data: [
      {
        mapId: mapRes[0].id,
        ...workingHourData[0],
      },
      {
        mapId: mapRes[0].id,
        ...workingHourData[1],
      },
      {
        mapId: mapRes[0].id,
        ...workingHourData[2],
      },
      {
        mapId: mapRes[0].id,
        ...workingHourData[3],
      },
      {
        mapId: mapRes[0].id,
        ...workingHourData[4],
      },
      {
        mapId: mapRes[0].id,
        ...workingHourData[5],
      },
      {
        mapId: mapRes[0].id,
        ...workingHourData[6],
      },
      {
        mapId: mapRes[1].id,
        ...workingHourData[7],
      },
      {
        mapId: mapRes[1].id,
        ...workingHourData[8],
      },
      {
        mapId: mapRes[1].id,
        ...workingHourData[9],
      },
      {
        mapId: mapRes[1].id,
        ...workingHourData[10],
      },
      {
        mapId: mapRes[1].id,
        ...workingHourData[11],
      },
      {
        mapId: mapRes[1].id,
        ...workingHourData[12],
      },
      {
        mapId: mapRes[1].id,
        ...workingHourData[13],
      },
    ],
    skipDuplicates: true,
  });
  await prisma.species.createMany({
    data: famSpeciesData,
    skipDuplicates: true,
  });
  const famSpeciesId = await prisma.species.findMany({ select: { id: true } });
  await prisma.species.createMany({
    data: [
      {
        familyId: famSpeciesId[0].id,
        ...speciesData[0],
      },
      {
        familyId: famSpeciesId[0].id,
        ...speciesData[1],
      },
      {
        familyId: famSpeciesId[0].id,
        ...speciesData[2],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[3],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[4],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[5],
      },
    ],
    skipDuplicates: true,
  });
  const speciesId = await prisma.species.findMany({
    where: {
      familyId: { not: null },
    },
    select: {
      id: true,
      engSpecies: true,
    },
  });
  // console.log('species0: ' + speciesId[0].engSpecies);
  // console.log('species5: ' + speciesId[5].engSpecies);
  await prisma.pet.createMany({
    data: [
      {
        userId: userRes[0].id,
        speciesId: speciesId[0].id,
        ...petData[0],
      },
      {
        userId: userRes[1].id,
        speciesId: speciesId[1].id,
        ...petData[1],
      },
      {
        userId: userRes[2].id,
        speciesId: speciesId[2].id,
        ...petData[2],
      },
      {
        userId: userRes[3].id,
        speciesId: speciesId[3].id,
        ...petData[3],
      },
      {
        userId: userRes[4].id,
        speciesId: speciesId[4].id,
        ...petData[4],
      },
      {
        userId: userRes[0].id,
        speciesId: speciesId[5].id,
        ...petData[5],
      },
      {
        userId: userRes[1].id,
        speciesId: speciesId[4].id,
        ...petData[6],
      },
      {
        userId: userRes[2].id,
        speciesId: speciesId[5].id,
        ...petData[7],
      },
      {
        userId: userRes[3].id,
        speciesId: speciesId[0].id,
        ...petData[8],
      },
      {
        userId: userRes[4].id,
        speciesId: speciesId[2].id,
        ...petData[9],
      },
    ],
    skipDuplicates: true,
  });
}

main().then(() => console.log('seed done'));
