// select p.id,s.english_species from pets p inner join species s on s.id=p.species_id where s.family_id=1;
// select p.id,s.english_species from pets p inner join species s on s.id=p.species_id where s.family_id=2;

import { PrismaClient } from '@prisma/client';

function compareNumbers(a, b) {
  return a - b;
}

async function main() {
  const prisma = new PrismaClient();
  const catsArray = [];
  const cats = await prisma.pet.findMany({
    where: {
      species: {
        familyId: 1,
      },
    },
    select: {
      id: true,
      species: {
        select: {
          engSpecies: true,
        },
      },
    },
  });
  for (const cat of cats) {
    catsArray.push(cat.id);
  }
  catsArray.sort(compareNumbers);
  console.log(catsArray.length);
  console.log(catsArray);
  const dogsArray = [];
  const dogs = await prisma.pet.findMany({
    where: {
      species: {
        familyId: 2,
      },
    },
    select: {
      id: true,
      species: {
        select: {
          engSpecies: true,
        },
      },
    },
  });
  for (const dog of dogs) {
    dogsArray.push(dog.id);
  }
  dogsArray.sort(compareNumbers);
  console.log(dogsArray.length);
  console.log(dogsArray.slice(0, 49));
  console.log(dogsArray.slice(50, 99));
  console.log(dogsArray.slice(100, 149));
  console.log(dogsArray.slice(150, 200));
}

main();

// 99
// [
//     1,   4,   6,   7,   9,  10,  17,  23,  24,  27,  28,  31,
//    32,  33,  35,  37,  38,  39,  40,  51,  52,  54,  55,  57,
//    77,  78,  86,  88,  90,  96,  97, 105, 106, 110, 111, 116,
//   126, 127, 128, 131, 136, 138, 140, 143, 144, 148, 149, 150,
//   152, 155, 159, 161, 162, 164, 166, 168, 171, 172, 173, 176,
//   177, 180, 181, 183, 185, 187, 196, 198, 201, 202, 204, 207,
//   211, 231, 232, 235, 238, 240, 243, 246, 248, 249, 251, 253,
//   256, 257, 262, 263, 265, 266, 267, 268, 271, 277, 278, 283,
//   289, 299, 300
// ]
// 201
// [
//    2,  3,  5,  8, 11, 12, 13, 14, 15, 16, 18,
//   19, 20, 21, 22, 25, 26, 29, 30, 34, 36, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50, 53, 56,
//   58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
//   69, 70, 71, 72, 73
// ]
// [
//    75,  76,  79,  80,  81,  82,  83,  84,  85,
//    87,  89,  91,  92,  93,  94,  95,  98,  99,
//   100, 101, 102, 103, 104, 107, 108, 109, 112,
//   113, 114, 115, 117, 118, 119, 120, 121, 122,
//   123, 124, 125, 129, 130, 132, 133, 134, 135,
//   137, 139, 141, 142
// ]
// [
//   146, 147, 151, 153, 154, 156, 157, 158,
//   160, 163, 165, 167, 169, 170, 174, 175,
//   178, 179, 182, 184, 186, 188, 189, 190,
//   191, 192, 193, 194, 195, 197, 199, 200,
//   203, 205, 206, 208, 209, 210, 212, 213,
//   214, 215, 216, 217, 218, 219, 220, 221,
//   222
// ]
// [
//   224, 225, 226, 227, 228, 229, 230, 233,
//   234, 236, 237, 239, 241, 242, 244, 245,
//   247, 250, 252, 254, 255, 258, 259, 260,
//   261, 264, 269, 270, 272, 273, 274, 275,
//   276, 279, 280, 281, 282, 284, 285, 286,
//   287, 288, 290, 291, 292, 293, 294, 295,
//   296, 297
// ]
