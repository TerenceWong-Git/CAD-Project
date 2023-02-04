import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import commentData from './data/commentData';
import commentImgData from './data/commentImgData';
import eventData from './data/eventData';
import expData from './data/ExpData';
import expLikeData from './data/expLikeData';
import mapData from './data/mapData';
import mapToWorkingHour from './data/mapToWorkingHourData';
import petData from './data/petData';
import petImgData from './data/PetImgData';
import petWeightData from './data/petWeightData';
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
  const userRes = await prisma.user.findMany({ select: { id: true } });
  console.log(`No. of user data inserted: ${userRes.length}`);
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
  console.log(`No. of map data inserted: ${mapRes.length}`);
  const workingHourRes = await prisma.workingHour.findMany({
    select: { id: true, hours: true },
  });
  console.log(`No. of working hour data inserted: ${workingHourRes.length}`);
  await prisma.mapToWorkingHour.createMany({
    data: mapToWorkingHour,
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
  console.log(`No. of species data inserted: ${speciesId.length}`);
  console.log('species0: ' + speciesId[0].engSpecies);
  console.log('species9: ' + speciesId[9].engSpecies);
  console.log('species10: ' + speciesId[10].engSpecies);
  console.log('species26: ' + speciesId[26].engSpecies);
  await prisma.pet.createMany({
    data: petData,
    skipDuplicates: true,
  });
  const petRes = await prisma.pet.findMany({
    select: { id: true },
  });
  console.log(`No. of pet data inserted: ${petRes.length}`);
  await prisma.petWeight.createMany({
    data: petWeightData,
    skipDuplicates: true,
  });
  const petWeightRes = await prisma.petWeight.findMany({
    select: { id: true },
  });
  console.log(`No. of pet weight data inserted: ${petWeightRes.length}`);
  console.log(`length of pet Img array: ${petImgData.length}`);
  await prisma.petImg.createMany({
    data: petImgData,
    skipDuplicates: true,
  });
  const petImgRes = await prisma.petImg.findMany({
    select: { id: true },
  });
  console.log(`No. of pet img data inserted: ${petImgRes.length}`);
  console.log(`length of comment array: ${commentData.length}`);
  await prisma.comment.createMany({
    data: commentData,
    skipDuplicates: true,
  });
  const commentRes = await prisma.comment.findMany({
    select: { id: true },
  });
  console.log(`No. of comment data inserted: ${commentRes.length}`);
  console.log(`length of comment Img array: ${commentImgData.length}`);
  await prisma.commentImg.createMany({
    data: commentImgData,
    skipDuplicates: true,
  });
  const commentImgRes = await prisma.commentImg.findMany({
    select: { id: true },
  });
  console.log(`No. of comment Img data inserted: ${commentImgRes.length}`);
  console.log(`length of event array: ${eventData.length}`);
  await prisma.event.createMany({
    data: eventData,
    skipDuplicates: true,
  });
  const eventRes = await prisma.event.findMany({
    select: { id: true },
  });
  console.log(`No. of event data inserted: ${eventRes.length}`);
  console.log(`length of experience array: ${expData.length}`);
  await prisma.exp.createMany({
    data: expData,
    skipDuplicates: true,
  });
  const expRes = await prisma.exp.findMany({
    select: { id: true },
  });
  console.log(`No. of experience data inserted: ${expRes.length}`);
  console.log(`length of experience like array: ${expLikeData.length}`);
  await prisma.expLike.createMany({
    data: expLikeData,
    skipDuplicates: true,
  });
  const expLikeRes = await prisma.expLike.findMany({
    select: { id: true },
  });
  console.log(`No. of event data inserted: ${expLikeRes.length}`);
}

main().then(() => console.log('seed done'));
