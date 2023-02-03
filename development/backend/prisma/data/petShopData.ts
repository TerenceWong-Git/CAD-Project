import { District } from '@prisma/client';

const petShopData = [
  {
    chiName: "The Dog's Garden",
    engName: "The Dog's Garden",
    chiAddress: '大嶼山愉景灣 愉景灣北商場 地下 34號',
    engAddress: 'Shop G34, 1 Discovery Bay Rd, Discovery Bay',
    phoneNumber: 29872077,
    district: District['Islands'],
    latitude: 22.295427215257902,
    longitude: 114.01704249113905,
    profileImg: "The Dog's Garden",
  },
  {
    chiName: '貓之嶼',
    engName: 'Cat Island',
    chiAddress: '東涌馬灣新村16號HK 新界 大嶼山',
    engAddress: '16 Ma Wan Sun Tsuen Tung Chung',
    phoneNumber: 61507454,
    district: District['Islands'],
    latitude: 22.279556830295927,
    longitude: 113.941452445765,
    profileImg: 'Cat Island',
  },
  {
    chiName: 'Pureal Aroma HK',
    engName: 'Pureal Aroma HK',
    chiAddress: '新界馬灣田寮新村72號',
    engAddress: '72 Tin Liu New Village Ma Wan',
    phoneNumber: 96106166,
    district: District['Islands'],
    latitude: 22.35251196740685,
    longitude: 114.05972439851003,
    profileImg: 'Pureal Aroma HK',
  },
  {
    chiName: '大嶼山寵物農莊',
    engName: '-',
    chiAddress: '梅窩碼頭路福安閣4號',
    engAddress: '4 Mui Wo Ferry Pier Rd, Mui Wo',
    phoneNumber: 29849898,
    district: District['Islands'],
    latitude: 22.263788890938294,
    longitude: 114.00112881481732,
    profileImg: '大嶼山寵物農莊',
  },
];

export default petShopData;
