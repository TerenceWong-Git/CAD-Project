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
    engType: 'Pet_shop',
  },
  {
    chiType: '獸醫診所',
    engType: 'Vet_clinic',
  },
  {
    chiType: '寵物公園',
    engType: 'Pet_park',
  },
  {
    chiType: '寵物美容',
    engType: 'Pet_spa',
  },
  {
    chiType: '寵物善終',
    engType: 'Pet_hospice',
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
    district: District['Central_and_western'],
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
    district: District['Central_and_western'],
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
    district: District['Tsuen_wan'],
    latitude: 22.353041481736252,
    longitude: 114.06208494100319,
    profileImg: '127',
  },
];
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
      district: District['Sha_tin'],
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
      district: District['Tuen_mun'],
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
      district: District['Tai_po'],
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
      district: District['Yuen_long'],
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
