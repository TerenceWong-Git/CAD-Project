import { District } from '@prisma/client';

const petShopData = [
  {
    chiName: 'I LOVE RABBIT',
    engName: 'I LOVE RABBIT',
    chiAddress: '新界將軍澳新都城3期1樓139A鋪',
    engAddress:
      'SHOP 139A, LEVEL 1, MCP DISCOVERY, PHASE 3, THE METROPOLIS, METRO CITY, TSEUNG KWAN O',
    phoneNumber: 26169803,
    district: District['Sai_Kung'],
    latitude: 22.322548436371108,
    longitude: 114.2568180602086,
    profileImg: '123',
  },
];

export default petShopData;
