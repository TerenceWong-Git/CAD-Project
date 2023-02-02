import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import mapData from './data/mapData';
import petData from './data/petData';
import { famSpeciesData, mapTypeData, speciesData } from './data/typeData';
import usersData from './data/userData';
import workingHourData from './data/workingHourData';

const SALT_ROUNDS = 10;

async function hashPassword(plainPassword: string) {
  const hash: string = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  return hash;
}
async function main() {
  const prisma = new PrismaClient();
  for (const user of usersData) {
    user.password = await hashPassword(user.password);
  }
  await prisma.user.createMany({
    data: usersData,
    skipDuplicates: true,
  });
  // const userRes = await prisma.user.findMany({ select: { id: true } });
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
        mapTypeId: mapTypeRes[2].id,
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
    data: workingHourData,
    skipDuplicates: true,
  });
  const workingHourRes = await prisma.workingHour.findMany({
    select: { id: true, hours: true },
  });
  await prisma.mapToWorkingHour.createMany({
    data: [
      {
        mapId: mapRes[0].id,
        workingHourId: workingHourRes[21].id,
      },
      {
        mapId: mapRes[0].id,
        workingHourId: workingHourRes[29].id,
      },
      {
        mapId: mapRes[0].id,
        workingHourId: workingHourRes[23].id,
      },
      {
        mapId: mapRes[0].id,
        workingHourId: workingHourRes[31].id,
      },
      {
        mapId: mapRes[0].id,
        workingHourId: workingHourRes[11].id,
      },
      {
        mapId: mapRes[0].id,
        workingHourId: workingHourRes[19].id,
      },
      {
        mapId: mapRes[0].id,
        workingHourId: workingHourRes[20].id,
      },
      {
        mapId: mapRes[1].id,
        workingHourId: workingHourRes[21].id,
      },
      {
        mapId: mapRes[1].id,
        workingHourId: workingHourRes[8].id,
      },
      {
        mapId: mapRes[1].id,
        workingHourId: workingHourRes[16].id,
      },
      {
        mapId: mapRes[1].id,
        workingHourId: workingHourRes[31].id,
      },
      {
        mapId: mapRes[1].id,
        workingHourId: workingHourRes[25].id,
      },
      {
        mapId: mapRes[1].id,
        workingHourId: workingHourRes[19].id,
      },
      {
        mapId: mapRes[1].id,
        workingHourId: workingHourRes[20].id,
      },
      {
        mapId: mapRes[2].id,
        workingHourId: workingHourRes[7].id,
      },
      {
        mapId: mapRes[2].id,
        workingHourId: workingHourRes[15].id,
      },
      {
        mapId: mapRes[2].id,
        workingHourId: workingHourRes[16].id,
      },
      {
        mapId: mapRes[2].id,
        workingHourId: workingHourRes[31].id,
      },
      {
        mapId: mapRes[2].id,
        workingHourId: workingHourRes[25].id,
      },
      {
        mapId: mapRes[2].id,
        workingHourId: workingHourRes[19].id,
      },
      {
        mapId: mapRes[2].id,
        workingHourId: workingHourRes[20].id,
      },
      {
        mapId: mapRes[3].id,
        workingHourId: workingHourRes[21].id,
      },
      {
        mapId: mapRes[3].id,
        workingHourId: workingHourRes[22].id,
      },
      {
        mapId: mapRes[3].id,
        workingHourId: workingHourRes[23].id,
      },
      {
        mapId: mapRes[3].id,
        workingHourId: workingHourRes[24].id,
      },
      {
        mapId: mapRes[3].id,
        workingHourId: workingHourRes[25].id,
      },
      {
        mapId: mapRes[3].id,
        workingHourId: workingHourRes[26].id,
      },
      {
        mapId: mapRes[3].id,
        workingHourId: workingHourRes[13].id,
      },
      {
        mapId: mapRes[4].id,
        workingHourId: workingHourRes[21].id,
      },
      {
        mapId: mapRes[4].id,
        workingHourId: workingHourRes[22].id,
      },
      {
        mapId: mapRes[4].id,
        workingHourId: workingHourRes[23].id,
      },
      {
        mapId: mapRes[4].id,
        workingHourId: workingHourRes[24].id,
      },
      {
        mapId: mapRes[4].id,
        workingHourId: workingHourRes[25].id,
      },
      {
        mapId: mapRes[4].id,
        workingHourId: workingHourRes[12].id,
      },
      {
        mapId: mapRes[4].id,
        workingHourId: workingHourRes[27].id,
      },
      {
        mapId: mapRes[5].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[5].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[5].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[5].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[5].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[5].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[5].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[6].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[6].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[6].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[6].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[6].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[6].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[6].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[7].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[7].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[7].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[7].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[7].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[7].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[7].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[8].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[8].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[8].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[8].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[8].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[8].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[8].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[9].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[9].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[9].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[9].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[9].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[9].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[9].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[10].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[10].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[10].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[10].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[10].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[10].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[10].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[11].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[11].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[11].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[11].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[11].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[11].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[11].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[12].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[12].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[12].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[12].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[12].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[12].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[12].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[13].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[13].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[13].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[13].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[13].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[13].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[13].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[14].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[14].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[14].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[14].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[14].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[14].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[14].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[15].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[15].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[15].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[15].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[15].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[15].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[15].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[16].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[16].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[16].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[16].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[16].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[16].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[16].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[17].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[17].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[17].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[17].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[17].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[17].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[17].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[18].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[18].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[18].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[18].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[18].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[18].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[18].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[19].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[19].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[19].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[19].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[19].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[19].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[19].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[20].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[20].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[20].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[20].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[20].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[20].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[20].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[21].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[21].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[21].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[21].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[21].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[21].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[21].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[22].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[22].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[22].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[22].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[22].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[22].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[22].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[23].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[23].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[23].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[23].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[23].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[23].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[23].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[24].id,
        workingHourId: workingHourRes[0].id,
      },
      {
        mapId: mapRes[24].id,
        workingHourId: workingHourRes[1].id,
      },
      {
        mapId: mapRes[24].id,
        workingHourId: workingHourRes[2].id,
      },
      {
        mapId: mapRes[24].id,
        workingHourId: workingHourRes[3].id,
      },
      {
        mapId: mapRes[24].id,
        workingHourId: workingHourRes[4].id,
      },
      {
        mapId: mapRes[24].id,
        workingHourId: workingHourRes[5].id,
      },
      {
        mapId: mapRes[24].id,
        workingHourId: workingHourRes[6].id,
      },
      {
        mapId: mapRes[25].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[25].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[25].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[25].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[25].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[25].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[25].id,
        workingHourId: workingHourRes[41].id,
      },
      {
        mapId: mapRes[26].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[26].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[26].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[26].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[26].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[26].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[26].id,
        workingHourId: workingHourRes[41].id,
      },
      {
        mapId: mapRes[27].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[27].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[27].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[27].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[27].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[27].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[27].id,
        workingHourId: workingHourRes[41].id,
      },
      {
        mapId: mapRes[28].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[28].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[28].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[28].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[28].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[28].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[28].id,
        workingHourId: workingHourRes[41].id,
      },
      {
        mapId: mapRes[29].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[29].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[29].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[29].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[29].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[29].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[29].id,
        workingHourId: workingHourRes[41].id,
      },
      {
        mapId: mapRes[30].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[30].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[30].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[30].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[30].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[30].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[30].id,
        workingHourId: workingHourRes[41].id,
      },
      {
        mapId: mapRes[31].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[31].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[31].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[31].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[31].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[31].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[31].id,
        workingHourId: workingHourRes[41].id,
      },
      {
        mapId: mapRes[32].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[32].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[32].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[32].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[32].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[32].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[32].id,
        workingHourId: workingHourRes[41].id,
      },
      {
        mapId: mapRes[33].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[33].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[33].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[33].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[33].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[33].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[33].id,
        workingHourId: workingHourRes[41].id,
      },
      {
        mapId: mapRes[34].id,
        workingHourId: workingHourRes[35].id,
      },
      {
        mapId: mapRes[34].id,
        workingHourId: workingHourRes[36].id,
      },
      {
        mapId: mapRes[34].id,
        workingHourId: workingHourRes[37].id,
      },
      {
        mapId: mapRes[34].id,
        workingHourId: workingHourRes[38].id,
      },
      {
        mapId: mapRes[34].id,
        workingHourId: workingHourRes[39].id,
      },
      {
        mapId: mapRes[34].id,
        workingHourId: workingHourRes[40].id,
      },
      {
        mapId: mapRes[34].id,
        workingHourId: workingHourRes[41].id,
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
        familyId: famSpeciesId[0].id,
        ...speciesData[3],
      },
      {
        familyId: famSpeciesId[0].id,
        ...speciesData[4],
      },
      {
        familyId: famSpeciesId[0].id,
        ...speciesData[5],
      },
      {
        familyId: famSpeciesId[0].id,
        ...speciesData[6],
      },
      {
        familyId: famSpeciesId[0].id,
        ...speciesData[7],
      },
      {
        familyId: famSpeciesId[0].id,
        ...speciesData[8],
      },
      {
        familyId: famSpeciesId[0].id,
        ...speciesData[9],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[10],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[11],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[12],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[13],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[14],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[15],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[16],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[17],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[18],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[19],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[20],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[21],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[22],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[23],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[24],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[25],
      },
      {
        familyId: famSpeciesId[1].id,
        ...speciesData[26],
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
  console.log(speciesId.length);
  console.log('species0: ' + speciesId[0].engSpecies);
  console.log('species9: ' + speciesId[9].engSpecies);
  console.log('species10: ' + speciesId[10].engSpecies);
  console.log('species26: ' + speciesId[26].engSpecies);
  await prisma.pet.createMany({
    data: petData,
    skipDuplicates: true,
  });
}

main().then(() => console.log('seed done'));
