const places = [
  {
    mapTypeId: 1,
    chiName: "龍貓仔專門店",
    engName: "CHINCHILLA AND PETS SHOP",
    chiAddress: "香港渣華道3-5號永光閣4號鋪",
    engAddress: "SHOP 4, G/F, CIRCLE COURT, 3-5 JAVA ROAD, NORTH POINT, HK",
    phoneNumber: 28955502,
    district: "Eastern",
    latitude: 22.29130977593307,
    longitude: 114.1954751346806,
    profileImg: "123",
  },
  {
    mapTypeId: 1,
    chiName: "BABY FAT PET SHOP",
    engName: "BABY FAT PET SHOP",
    chiAddress: "香港西營盤皇后大道西330號-336號新昇大廈C號鋪",
    engAddress: "SHOP C, NEW S]TART BUILDING, 330 - 336 QUEEN'S ROAD WEST, SAI YING PUN, HK",
    phoneNumber: 54960222,
    district: "Central_and_western",
    latitude: 22.286832518313616,
    longitude: 114.14131763163783,
    profileImg: "124",
  },
  {
    mapTypeId: 2,
    chiName: "夏利維動物醫院",
    engName: "Chris & Nicola's Animal Hospital",
    chiAddress: "香港天后永興街37號地鋪",
    engAddress: "G/F, 37 Wing Hing Street, Tin Hau, HK",
    phoneNumber: 25706048,
    district: "Eastern",
    latitude: 22.28541251424708,
    longitude: 114.19265225447529,
    profileImg: "125",
  },
  {
    mapTypeId: 2,
    chiName: "中環貓醫院 ",
    engName: "Central Cat Hospital ",
    chiAddress: "香港中環鴨巴甸街37號地舖",
    engAddress: "G/F, 37 Aberdeen Street, Central, HK",
    phoneNumber: 25052505,
    district: "Central_and_western",
    latitude: 22.282777590021777,
    longitude: 114.1516801968238,
    profileImg: "126",
  },
  {
    mapTypeId: 2,
    chiName: "Pets Central 流動診所 (荃灣)",
    engName: "Pets Central Mobile Clinic (Tsuen Wan)",
    chiAddress: "新界荃灣馬灣珀麗路8號",
    engAddress: "8 Pak Lai Road, Ma Wan, Tsuen Wan, N.T.",
    phoneNumber: 62230903,
    district: "Tsuen_wan",
    latitude: 22.353041481736252,
    longitude: 114.06208494100319,
    profileImg: "127",
  },
];

export default places;

// import { useEffect, useState } from "react";

// const differentPlaces = function loadPlacesData() {
//   const [loadPlacesData, setLoadPlacesData] = useState<any[]>([]);

//   useEffect(() => {
//     async function loadData() {
//       const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/map`);
//       const json = await res.json();

//       setLoadPlacesData(json);
//     }
//     loadData();
//   }, []);
//   return loadPlacesData;
// };

// export default differentPlaces;