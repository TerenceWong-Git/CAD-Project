// select p.id,s.english_species from pets p inner join species s on s.id=p.species_id where s.family_id=1;
// select p.id,s.english_species from pets p inner join species s on s.id=p.species_id where s.family_id=2;

// import { PrismaClient } from '@prisma/client';

// function compareNumbers(a, b) {
//   return a - b;
// }

// async function main() {
//   const prisma = new PrismaClient();
//   const catsArray = [];
//   const cats = await prisma.pet.findMany({
//     where: {
//       species: {
//         familyId: 1,
//       },
//     },
//     select: {
//       id: true,
//       species: {
//         select: {
//           engSpecies: true,
//         },
//       },
//     },
//   });
//   for (const cat of cats) {
//     catsArray.push(cat.id);
//   }
//   catsArray.sort(compareNumbers);
//   console.log(catsArray.length);
//   console.log(catsArray);
//   const dogsArray = [];
//   const dogs = await prisma.pet.findMany({
//     where: {
//       species: {
//         familyId: 2,
//       },
//     },
//     select: {
//       id: true,
//       species: {
//         select: {
//           engSpecies: true,
//         },
//       },
//     },
//   });
//   for (const dog of dogs) {
//     dogsArray.push(dog.id);
//   }
//   dogsArray.sort(compareNumbers);
//   console.log(dogsArray.length);
//   console.log(dogsArray.slice(0, 50));
//   console.log(dogsArray.slice(50, 100));
//   console.log(dogsArray.slice(100, 150));
//   console.log(dogsArray.slice(150, 201));
// }

// main();

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
//   2, 3, 5, 8, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 25, 26, 29, 30, 34,
//   36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 53, 56, 58, 59, 60, 61, 62, 63,
//   64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75, 76, 79, 80, 81, 82, 83, 84, 85,
//   87, 89, 91, 92, 93, 94, 95, 98, 99, 100, 101, 102, 103, 104, 107, 108, 109,
//   112, 113, 114, 115, 117, 118, 119, 120, 121, 122, 123, 124, 125, 129, 130,
//   132, 133, 134, 135, 137, 139, 141, 142, 146, 147, 151, 153, 154, 156, 157,
//   158, 160, 163, 165, 167, 169, 170, 174, 175, 178, 179, 182, 184, 186, 188,
//   189, 190, 191, 192, 193, 194, 195, 197, 199, 200, 203, 205, 206, 208, 209,
//   210, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 224, 225, 226,
//   227, 228, 229, 230, 233, 234, 236, 237, 239, 241, 242, 244, 245, 247, 250,
//   252, 254, 255, 258, 259, 260, 261, 264, 269, 270, 272, 273, 274, 275, 276,
//   279, 280, 281, 282, 284, 285, 286, 287, 288, 290, 291, 292, 293, 294, 295,
//   296, 297,
// ];
const petWeightData = [
  {
    petId: 185,
    weight: 5.3,
    createdAt: new Date('2020-11-16 16:42:06').toISOString(),
  },
  {
    petId: 253,
    weight: 5.1,
    createdAt: new Date('2016-11-27 12:52:32').toISOString(),
  },
  {
    petId: 211,
    weight: 4.9,
    createdAt: new Date('2016-07-22 08:02:48').toISOString(),
  },
  {
    petId: 277,
    weight: 3.8,
    createdAt: new Date('2018-04-06 02:37:41').toISOString(),
  },
  {
    petId: 55,
    weight: 4.49,
    createdAt: new Date('2016-10-09 05:38:37').toISOString(),
  },
  {
    petId: 183,
    weight: 4.38,
    createdAt: new Date('2019-03-23 04:39:56').toISOString(),
  },
  {
    petId: 77,
    weight: 4.76,
    createdAt: new Date('2019-12-20 18:48:18').toISOString(),
  },
  {
    petId: 35,
    weight: 4.49,
    createdAt: new Date('2017-07-21 08:05:43').toISOString(),
  },
  {
    petId: 9,
    weight: 5.25,
    createdAt: new Date('2018-06-13 08:00:32').toISOString(),
  },
  {
    petId: 39,
    weight: 3.83,
    createdAt: new Date('2019-05-29 03:33:28').toISOString(),
  },
  {
    petId: 180,
    weight: 4.18,
    createdAt: new Date('2020-04-21 05:01:19').toISOString(),
  },
  {
    petId: 249,
    weight: 4.85,
    createdAt: new Date('2017-03-24 06:29:23').toISOString(),
  },
  {
    petId: 105,
    weight: 5.13,
    createdAt: new Date('2016-12-17 13:10:06').toISOString(),
  },
  {
    petId: 283,
    weight: 4.75,
    createdAt: new Date('2016-12-05 08:40:13').toISOString(),
  },
  {
    petId: 267,
    weight: 5.7,
    createdAt: new Date('2016-12-22 02:12:10').toISOString(),
  },
  {
    petId: 38,
    weight: 4.84,
    createdAt: new Date('2020-03-19 20:14:07').toISOString(),
  },
  {
    petId: 27,
    weight: 5.96,
    createdAt: new Date('2019-09-04 20:01:40').toISOString(),
  },
  {
    petId: 1,
    weight: 4.43,
    createdAt: new Date('2022-06-24 22:13:01').toISOString(),
  },
  {
    petId: 268,
    weight: 5.84,
    createdAt: new Date('2020-06-16 22:54:05').toISOString(),
  },
  {
    petId: 278,
    weight: 4.76,
    createdAt: new Date('2018-04-20 18:12:20').toISOString(),
  },
  {
    petId: 277,
    weight: 4.65,
    createdAt: new Date('2016-09-20 00:22:25').toISOString(),
  },
  {
    petId: 155,
    weight: 5.05,
    createdAt: new Date('2021-10-06 16:36:55').toISOString(),
  },
  {
    petId: 38,
    weight: 4.86,
    createdAt: new Date('2020-04-28 19:51:47').toISOString(),
  },
  {
    petId: 126,
    weight: 3.91,
    createdAt: new Date('2021-06-07 22:21:33').toISOString(),
  },
  {
    petId: 126,
    weight: 4.61,
    createdAt: new Date('2016-07-12 21:05:42').toISOString(),
  },
  {
    petId: 283,
    weight: 4.7,
    createdAt: new Date('2021-06-25 18:26:35').toISOString(),
  },
  {
    petId: 40,
    weight: 4.9,
    createdAt: new Date('2017-09-30 22:03:49').toISOString(),
  },
  {
    petId: 128,
    weight: 3.41,
    createdAt: new Date('2020-04-21 03:45:33').toISOString(),
  },
  {
    petId: 37,
    weight: 4.74,
    createdAt: new Date('2016-06-21 13:38:46').toISOString(),
  },
  {
    petId: 198,
    weight: 4.33,
    createdAt: new Date('2020-10-05 11:54:52').toISOString(),
  },
  {
    petId: 266,
    weight: 5.7,
    createdAt: new Date('2018-03-11 05:44:43').toISOString(),
  },
  {
    petId: 202,
    weight: 4.43,
    createdAt: new Date('2022-02-21 09:39:14').toISOString(),
  },
  {
    petId: 110,
    weight: 3.24,
    createdAt: new Date('2021-11-25 02:32:56').toISOString(),
  },
  {
    petId: 149,
    weight: 4.81,
    createdAt: new Date('2020-01-15 21:17:28').toISOString(),
  },
  {
    petId: 155,
    weight: 5.33,
    createdAt: new Date('2023-01-19 16:43:16').toISOString(),
  },
  {
    petId: 256,
    weight: 3.91,
    createdAt: new Date('2018-01-06 03:50:47').toISOString(),
  },
  {
    petId: 88,
    weight: 4.32,
    createdAt: new Date('2018-02-15 23:49:05').toISOString(),
  },
  {
    petId: 126,
    weight: 5.27,
    createdAt: new Date('2018-12-30 10:41:18').toISOString(),
  },
  {
    petId: 57,
    weight: 3.53,
    createdAt: new Date('2019-02-25 11:11:34').toISOString(),
  },
  {
    petId: 10,
    weight: 5.15,
    createdAt: new Date('2017-02-18 14:47:19').toISOString(),
  },
  {
    petId: 128,
    weight: 3.51,
    createdAt: new Date('2022-11-06 08:38:35').toISOString(),
  },
  {
    petId: 148,
    weight: 4.17,
    createdAt: new Date('2016-06-05 17:35:22').toISOString(),
  },
  {
    petId: 88,
    weight: 4.83,
    createdAt: new Date('2021-05-12 22:54:34').toISOString(),
  },
  {
    petId: 267,
    weight: 5.51,
    createdAt: new Date('2021-01-26 16:25:57').toISOString(),
  },
  {
    petId: 10,
    weight: 4.49,
    createdAt: new Date('2023-02-02 04:43:09').toISOString(),
  },
  {
    petId: 23,
    weight: 4.22,
    createdAt: new Date('2016-06-20 13:38:55').toISOString(),
  },
  {
    petId: 231,
    weight: 4.73,
    createdAt: new Date('2016-12-30 21:58:27').toISOString(),
  },
  {
    petId: 277,
    weight: 4.71,
    createdAt: new Date('2018-01-21 05:05:45').toISOString(),
  },
  {
    petId: 40,
    weight: 4.51,
    createdAt: new Date('2018-02-09 06:44:42').toISOString(),
  },
  {
    petId: 88,
    weight: 5.6,
    createdAt: new Date('2017-10-26 13:41:09').toISOString(),
  },
  {
    petId: 150,
    weight: 4.66,
    createdAt: new Date('2019-07-02 22:55:15').toISOString(),
  },
  {
    petId: 10,
    weight: 4.32,
    createdAt: new Date('2018-05-06 10:16:42').toISOString(),
  },
  {
    petId: 201,
    weight: 3.97,
    createdAt: new Date('2019-07-21 14:33:32').toISOString(),
  },
  {
    petId: 37,
    weight: 4.51,
    createdAt: new Date('2018-05-02 02:53:54').toISOString(),
  },
  {
    petId: 232,
    weight: 4.45,
    createdAt: new Date('2019-07-07 06:47:59').toISOString(),
  },
  {
    petId: 90,
    weight: 3.78,
    createdAt: new Date('2021-03-23 12:20:16').toISOString(),
  },
  {
    petId: 150,
    weight: 4.38,
    createdAt: new Date('2018-12-11 17:00:02').toISOString(),
  },
  {
    petId: 90,
    weight: 5.43,
    createdAt: new Date('2022-05-24 01:15:33').toISOString(),
  },
  {
    petId: 173,
    weight: 3.99,
    createdAt: new Date('2020-04-24 16:51:08').toISOString(),
  },
  {
    petId: 271,
    weight: 4.4,
    createdAt: new Date('2022-03-10 07:55:46').toISOString(),
  },
  {
    petId: 88,
    weight: 4.11,
    createdAt: new Date('2016-03-30 09:29:49').toISOString(),
  },
  {
    petId: 97,
    weight: 5.16,
    createdAt: new Date('2021-08-27 01:51:50').toISOString(),
  },
  {
    petId: 127,
    weight: 5.18,
    createdAt: new Date('2017-06-21 17:35:38').toISOString(),
  },
  {
    petId: 54,
    weight: 4.18,
    createdAt: new Date('2016-11-10 21:25:53').toISOString(),
  },
  {
    petId: 173,
    weight: 3.61,
    createdAt: new Date('2022-01-08 20:04:58').toISOString(),
  },
  {
    petId: 171,
    weight: 4.79,
    createdAt: new Date('2017-06-14 22:40:10').toISOString(),
  },
  {
    petId: 176,
    weight: 5.35,
    createdAt: new Date('2020-10-24 01:35:17').toISOString(),
  },
  {
    petId: 211,
    weight: 4.34,
    createdAt: new Date('2016-12-03 00:36:56').toISOString(),
  },
  {
    petId: 207,
    weight: 4.29,
    createdAt: new Date('2019-07-06 05:10:29').toISOString(),
  },
  {
    petId: 52,
    weight: 4.8,
    createdAt: new Date('2020-12-02 16:28:58').toISOString(),
  },
  {
    petId: 185,
    weight: 5.5,
    createdAt: new Date('2018-05-13 08:21:19').toISOString(),
  },
  {
    petId: 1,
    weight: 5.89,
    createdAt: new Date('2019-11-18 03:32:03').toISOString(),
  },
  {
    petId: 96,
    weight: 4.64,
    createdAt: new Date('2020-01-20 01:48:29').toISOString(),
  },
  {
    petId: 299,
    weight: 3.77,
    createdAt: new Date('2017-09-19 15:44:15').toISOString(),
  },
  {
    petId: 77,
    weight: 3.93,
    createdAt: new Date('2022-10-22 22:48:23').toISOString(),
  },
  {
    petId: 196,
    weight: 5.13,
    createdAt: new Date('2018-06-01 22:03:40').toISOString(),
  },
  {
    petId: 78,
    weight: 4.74,
    createdAt: new Date('2019-01-24 01:44:27').toISOString(),
  },
  {
    petId: 6,
    weight: 4.46,
    createdAt: new Date('2016-12-10 06:00:26').toISOString(),
  },
  {
    petId: 150,
    weight: 3.52,
    createdAt: new Date('2016-02-12 04:02:47').toISOString(),
  },
  {
    petId: 164,
    weight: 3.38,
    createdAt: new Date('2021-10-28 17:05:06').toISOString(),
  },
  {
    petId: 267,
    weight: 3.9,
    createdAt: new Date('2021-12-25 04:13:27').toISOString(),
  },
  {
    petId: 263,
    weight: 4.57,
    createdAt: new Date('2022-03-22 23:43:40').toISOString(),
  },
  {
    petId: 187,
    weight: 4.37,
    createdAt: new Date('2021-07-01 01:56:09').toISOString(),
  },
  {
    petId: 181,
    weight: 3.65,
    createdAt: new Date('2021-05-10 06:22:46').toISOString(),
  },
  {
    petId: 40,
    weight: 4.07,
    createdAt: new Date('2018-05-31 07:29:46').toISOString(),
  },
  {
    petId: 238,
    weight: 5.14,
    createdAt: new Date('2019-05-10 14:44:53').toISOString(),
  },
  {
    petId: 172,
    weight: 3.24,
    createdAt: new Date('2017-11-22 19:47:35').toISOString(),
  },
  {
    petId: 176,
    weight: 3.79,
    createdAt: new Date('2019-09-26 09:10:30').toISOString(),
  },
  {
    petId: 38,
    weight: 3.36,
    createdAt: new Date('2022-06-27 06:41:53').toISOString(),
  },
  {
    petId: 161,
    weight: 5.28,
    createdAt: new Date('2017-02-10 15:27:57').toISOString(),
  },
  {
    petId: 299,
    weight: 3.52,
    createdAt: new Date('2017-05-30 16:15:23').toISOString(),
  },
  {
    petId: 97,
    weight: 4.09,
    createdAt: new Date('2018-02-21 18:12:40').toISOString(),
  },
  {
    petId: 148,
    weight: 4.4,
    createdAt: new Date('2018-07-09 07:07:34').toISOString(),
  },
  {
    petId: 105,
    weight: 4.57,
    createdAt: new Date('2020-11-04 21:53:10').toISOString(),
  },
  {
    petId: 35,
    weight: 4.52,
    createdAt: new Date('2022-09-11 12:42:09').toISOString(),
  },
  {
    petId: 88,
    weight: 4.35,
    createdAt: new Date('2021-12-14 06:28:55').toISOString(),
  },
  {
    petId: 246,
    weight: 4.96,
    createdAt: new Date('2023-01-31 03:23:28').toISOString(),
  },
  {
    petId: 183,
    weight: 4.65,
    createdAt: new Date('2019-10-12 00:37:35').toISOString(),
  },
  {
    petId: 90,
    weight: 2.85,
    createdAt: new Date('2020-09-15 13:40:17').toISOString(),
  },
  {
    petId: 168,
    weight: 5.11,
    createdAt: new Date('2020-09-17 05:36:34').toISOString(),
  },
  {
    petId: 33,
    weight: 6.2,
    createdAt: new Date('2017-01-25 00:02:35').toISOString(),
  },
  {
    petId: 144,
    weight: 3.63,
    createdAt: new Date('2018-01-12 01:33:34').toISOString(),
  },
  {
    petId: 24,
    weight: 4.36,
    createdAt: new Date('2020-01-21 21:55:25').toISOString(),
  },
  {
    petId: 55,
    weight: 5.12,
    createdAt: new Date('2018-04-24 13:43:35').toISOString(),
  },
  {
    petId: 187,
    weight: 4.75,
    createdAt: new Date('2019-12-04 04:10:01').toISOString(),
  },
  {
    petId: 86,
    weight: 4.39,
    createdAt: new Date('2020-10-28 03:16:26').toISOString(),
  },
  {
    petId: 262,
    weight: 3.73,
    createdAt: new Date('2022-04-06 11:26:50').toISOString(),
  },
  {
    petId: 277,
    weight: 4.28,
    createdAt: new Date('2018-12-16 04:46:58').toISOString(),
  },
  {
    petId: 277,
    weight: 4.87,
    createdAt: new Date('2018-06-23 22:02:05').toISOString(),
  },
  {
    petId: 17,
    weight: 3.26,
    createdAt: new Date('2021-06-23 09:48:34').toISOString(),
  },
  {
    petId: 32,
    weight: 4.04,
    createdAt: new Date('2021-03-11 00:42:21').toISOString(),
  },
  {
    petId: 97,
    weight: 5.28,
    createdAt: new Date('2018-11-30 11:28:05').toISOString(),
  },
  {
    petId: 24,
    weight: 3.94,
    createdAt: new Date('2021-07-17 06:08:01').toISOString(),
  },
  {
    petId: 138,
    weight: 4.39,
    createdAt: new Date('2022-03-26 12:34:22').toISOString(),
  },
  {
    petId: 289,
    weight: 3.56,
    createdAt: new Date('2016-11-15 17:51:34').toISOString(),
  },
  {
    petId: 263,
    weight: 4.37,
    createdAt: new Date('2022-09-04 05:50:45').toISOString(),
  },
  {
    petId: 126,
    weight: 3.52,
    createdAt: new Date('2020-08-08 10:41:33').toISOString(),
  },
  {
    petId: 150,
    weight: 4.05,
    createdAt: new Date('2016-12-29 05:50:53').toISOString(),
  },
  {
    petId: 148,
    weight: 4.55,
    createdAt: new Date('2020-11-10 23:58:35').toISOString(),
  },
  {
    petId: 164,
    weight: 4.47,
    createdAt: new Date('2022-09-17 19:12:16').toISOString(),
  },
  {
    petId: 267,
    weight: 4.0,
    createdAt: new Date('2022-06-12 07:07:51').toISOString(),
  },
  {
    petId: 24,
    weight: 6.31,
    createdAt: new Date('2016-11-27 18:21:52').toISOString(),
  },
  {
    petId: 128,
    weight: 4.86,
    createdAt: new Date('2017-10-12 20:07:42').toISOString(),
  },
  {
    petId: 52,
    weight: 4.86,
    createdAt: new Date('2021-11-16 03:31:36').toISOString(),
  },
  {
    petId: 86,
    weight: 4.37,
    createdAt: new Date('2021-01-25 00:45:19').toISOString(),
  },
  {
    petId: 86,
    weight: 4.14,
    createdAt: new Date('2018-06-19 14:53:56').toISOString(),
  },
  {
    petId: 28,
    weight: 3.7,
    createdAt: new Date('2021-10-29 07:28:17').toISOString(),
  },
  {
    petId: 150,
    weight: 4.41,
    createdAt: new Date('2018-06-10 16:56:57').toISOString(),
  },
  {
    petId: 31,
    weight: 5.26,
    createdAt: new Date('2017-12-14 04:24:16').toISOString(),
  },
  {
    petId: 211,
    weight: 4.86,
    createdAt: new Date('2018-03-19 14:30:49').toISOString(),
  },
  {
    petId: 251,
    weight: 4.85,
    createdAt: new Date('2016-11-18 19:06:33').toISOString(),
  },
  {
    petId: 283,
    weight: 5.09,
    createdAt: new Date('2018-09-02 20:24:21').toISOString(),
  },
  {
    petId: 300,
    weight: 5.59,
    createdAt: new Date('2020-03-09 23:50:01').toISOString(),
  },
  {
    petId: 246,
    weight: 5.86,
    createdAt: new Date('2019-05-09 22:32:22').toISOString(),
  },
  {
    petId: 268,
    weight: 4.34,
    createdAt: new Date('2022-06-09 19:27:17').toISOString(),
  },
  {
    petId: 202,
    weight: 3.92,
    createdAt: new Date('2021-07-04 15:51:10').toISOString(),
  },
  {
    petId: 248,
    weight: 3.21,
    createdAt: new Date('2017-11-02 22:50:06').toISOString(),
  },
  {
    petId: 78,
    weight: 6.15,
    createdAt: new Date('2022-09-23 16:11:41').toISOString(),
  },
  {
    petId: 97,
    weight: 4.2,
    createdAt: new Date('2016-08-06 06:50:22').toISOString(),
  },
  {
    petId: 235,
    weight: 4.66,
    createdAt: new Date('2021-12-02 15:00:05').toISOString(),
  },
  {
    petId: 164,
    weight: 3.5,
    createdAt: new Date('2022-03-02 23:49:28').toISOString(),
  },
  {
    petId: 136,
    weight: 4.5,
    createdAt: new Date('2020-06-24 13:02:39').toISOString(),
  },
  {
    petId: 166,
    weight: 4.49,
    createdAt: new Date('2017-07-29 05:51:41').toISOString(),
  },
  {
    petId: 168,
    weight: 5.52,
    createdAt: new Date('2018-07-10 21:58:14').toISOString(),
  },
  {
    petId: 263,
    weight: 4.23,
    createdAt: new Date('2016-10-13 01:56:38').toISOString(),
  },
  {
    petId: 202,
    weight: 4.83,
    createdAt: new Date('2018-12-17 20:52:20').toISOString(),
  },
  {
    petId: 10,
    weight: 4.41,
    createdAt: new Date('2016-11-26 04:02:47').toISOString(),
  },
  {
    petId: 111,
    weight: 3.22,
    createdAt: new Date('2021-01-28 12:32:31').toISOString(),
  },
  {
    petId: 240,
    weight: 5.5,
    createdAt: new Date('2020-05-06 16:44:50').toISOString(),
  },
  {
    petId: 240,
    weight: 3.6,
    createdAt: new Date('2017-12-24 02:47:23').toISOString(),
  },
  {
    petId: 171,
    weight: 3.85,
    createdAt: new Date('2018-12-23 17:30:38').toISOString(),
  },
  {
    petId: 268,
    weight: 4.26,
    createdAt: new Date('2021-08-25 12:57:00').toISOString(),
  },
  {
    petId: 105,
    weight: 3.7,
    createdAt: new Date('2016-09-27 20:29:59').toISOString(),
  },
  {
    petId: 9,
    weight: 3.45,
    createdAt: new Date('2020-08-12 08:54:34').toISOString(),
  },
  {
    petId: 17,
    weight: 4.02,
    createdAt: new Date('2018-08-15 01:59:49').toISOString(),
  },
  {
    petId: 251,
    weight: 4.15,
    createdAt: new Date('2017-08-27 05:59:55').toISOString(),
  },
  {
    petId: 38,
    weight: 5.5,
    createdAt: new Date('2016-08-03 10:01:07').toISOString(),
  },
  {
    petId: 202,
    weight: 4.91,
    createdAt: new Date('2022-05-27 09:51:19').toISOString(),
  },
  {
    petId: 176,
    weight: 4.89,
    createdAt: new Date('2017-12-11 03:27:37').toISOString(),
  },
  {
    petId: 40,
    weight: 3.05,
    createdAt: new Date('2020-04-06 17:12:39').toISOString(),
  },
  {
    petId: 204,
    weight: 3.64,
    createdAt: new Date('2022-04-22 06:25:04').toISOString(),
  },
  {
    petId: 116,
    weight: 4.15,
    createdAt: new Date('2021-05-20 19:41:57').toISOString(),
  },
  {
    petId: 266,
    weight: 3.7,
    createdAt: new Date('2016-05-02 11:12:51').toISOString(),
  },
  {
    petId: 54,
    weight: 5.17,
    createdAt: new Date('2022-08-09 02:22:47').toISOString(),
  },
  {
    petId: 128,
    weight: 3.37,
    createdAt: new Date('2022-04-07 18:14:46').toISOString(),
  },
  {
    petId: 54,
    weight: 4.49,
    createdAt: new Date('2018-09-24 08:50:08').toISOString(),
  },
  {
    petId: 159,
    weight: 4.87,
    createdAt: new Date('2016-09-03 22:37:32').toISOString(),
  },
  {
    petId: 211,
    weight: 3.64,
    createdAt: new Date('2017-10-30 22:12:44').toISOString(),
  },
  {
    petId: 173,
    weight: 4.68,
    createdAt: new Date('2019-09-09 15:06:18').toISOString(),
  },
  {
    petId: 10,
    weight: 4.18,
    createdAt: new Date('2019-11-07 06:28:45').toISOString(),
  },
  {
    petId: 161,
    weight: 3.82,
    createdAt: new Date('2018-07-19 08:39:52').toISOString(),
  },
  {
    petId: 243,
    weight: 3.47,
    createdAt: new Date('2017-10-05 13:47:20').toISOString(),
  },
  {
    petId: 31,
    weight: 4.88,
    createdAt: new Date('2022-09-08 13:16:36').toISOString(),
  },
  {
    petId: 251,
    weight: 4.45,
    createdAt: new Date('2023-01-22 22:37:32').toISOString(),
  },
  {
    petId: 27,
    weight: 4.14,
    createdAt: new Date('2018-05-10 14:33:16').toISOString(),
  },
  {
    petId: 138,
    weight: 3.49,
    createdAt: new Date('2017-09-08 06:22:47').toISOString(),
  },
  {
    petId: 31,
    weight: 4.32,
    createdAt: new Date('2019-11-03 10:29:03').toISOString(),
  },
  {
    petId: 166,
    weight: 4.99,
    createdAt: new Date('2020-01-29 03:46:50').toISOString(),
  },
  {
    petId: 97,
    weight: 4.19,
    createdAt: new Date('2017-05-01 04:43:07').toISOString(),
  },
  {
    petId: 181,
    weight: 4.79,
    createdAt: new Date('2019-06-19 05:32:40').toISOString(),
  },
  {
    petId: 136,
    weight: 4.58,
    createdAt: new Date('2020-10-10 17:58:07').toISOString(),
  },
  {
    petId: 159,
    weight: 5.43,
    createdAt: new Date('2017-08-11 10:09:13').toISOString(),
  },
  {
    petId: 143,
    weight: 4.01,
    createdAt: new Date('2018-06-27 00:56:19').toISOString(),
  },
  {
    petId: 173,
    weight: 3.95,
    createdAt: new Date('2018-12-27 11:03:19').toISOString(),
  },
  {
    petId: 207,
    weight: 5.22,
    createdAt: new Date('2021-05-24 01:13:40').toISOString(),
  },
  {
    petId: 57,
    weight: 5.25,
    createdAt: new Date('2018-08-17 02:26:15').toISOString(),
  },
  {
    petId: 201,
    weight: 4.91,
    createdAt: new Date('2021-06-07 18:43:30').toISOString(),
  },
  {
    petId: 283,
    weight: 5.0,
    createdAt: new Date('2021-11-25 11:14:29').toISOString(),
  },
  {
    petId: 116,
    weight: 4.63,
    createdAt: new Date('2020-06-15 06:55:33').toISOString(),
  },
  {
    petId: 148,
    weight: 4.4,
    createdAt: new Date('2018-12-05 08:30:36').toISOString(),
  },
  {
    petId: 164,
    weight: 5.53,
    createdAt: new Date('2021-06-03 23:40:52').toISOString(),
  },
  {
    petId: 4,
    weight: 4.68,
    createdAt: new Date('2017-09-29 10:58:49').toISOString(),
  },
  {
    petId: 265,
    weight: 4.89,
    createdAt: new Date('2020-06-26 15:45:40').toISOString(),
  },
  {
    petId: 159,
    weight: 4.59,
    createdAt: new Date('2021-10-19 05:39:57').toISOString(),
  },
  {
    petId: 33,
    weight: 2.75,
    createdAt: new Date('2017-04-30 10:17:22').toISOString(),
  },
  {
    petId: 283,
    weight: 3.87,
    createdAt: new Date('2023-01-03 09:44:53').toISOString(),
  },
  {
    petId: 128,
    weight: 4.35,
    createdAt: new Date('2022-12-14 08:48:04').toISOString(),
  },
  {
    petId: 90,
    weight: 4.44,
    createdAt: new Date('2022-02-16 12:48:00').toISOString(),
  },
  {
    petId: 10,
    weight: 4.15,
    createdAt: new Date('2018-03-27 07:19:12').toISOString(),
  },
  {
    petId: 171,
    weight: 3.95,
    createdAt: new Date('2017-10-07 23:28:49').toISOString(),
  },
  {
    petId: 96,
    weight: 3.55,
    createdAt: new Date('2021-02-20 10:44:35').toISOString(),
  },
  {
    petId: 180,
    weight: 4.86,
    createdAt: new Date('2017-05-25 20:01:55').toISOString(),
  },
  {
    petId: 246,
    weight: 3.83,
    createdAt: new Date('2018-06-11 23:56:59').toISOString(),
  },
  {
    petId: 37,
    weight: 4.45,
    createdAt: new Date('2016-08-15 08:35:05').toISOString(),
  },
  {
    petId: 31,
    weight: 4.9,
    createdAt: new Date('2020-06-04 22:35:49').toISOString(),
  },
  {
    petId: 140,
    weight: 4.13,
    createdAt: new Date('2018-08-13 10:32:50').toISOString(),
  },
  {
    petId: 266,
    weight: 5.31,
    createdAt: new Date('2018-12-02 21:04:25').toISOString(),
  },
  {
    petId: 4,
    weight: 4.82,
    createdAt: new Date('2017-05-23 16:04:32').toISOString(),
  },
  {
    petId: 256,
    weight: 4.73,
    createdAt: new Date('2020-02-10 14:48:50').toISOString(),
  },
  {
    petId: 198,
    weight: 4.6,
    createdAt: new Date('2017-02-09 21:36:04').toISOString(),
  },
  {
    petId: 4,
    weight: 4.69,
    createdAt: new Date('2020-01-15 17:07:30').toISOString(),
  },
  {
    petId: 32,
    weight: 4.89,
    createdAt: new Date('2020-09-07 15:12:23').toISOString(),
  },
  {
    petId: 211,
    weight: 4.58,
    createdAt: new Date('2018-10-13 04:13:56').toISOString(),
  },
  {
    petId: 116,
    weight: 5.58,
    createdAt: new Date('2023-01-28 01:24:23').toISOString(),
  },
  {
    petId: 246,
    weight: 4.11,
    createdAt: new Date('2018-09-28 05:30:19').toISOString(),
  },
  {
    petId: 267,
    weight: 3.81,
    createdAt: new Date('2018-09-19 05:01:29').toISOString(),
  },
  {
    petId: 177,
    weight: 4.87,
    createdAt: new Date('2018-07-13 10:02:39').toISOString(),
  },
  {
    petId: 181,
    weight: 3.71,
    createdAt: new Date('2022-05-02 07:23:08').toISOString(),
  },
  {
    petId: 28,
    weight: 4.28,
    createdAt: new Date('2020-06-14 16:40:59').toISOString(),
  },
  {
    petId: 96,
    weight: 4.03,
    createdAt: new Date('2017-10-01 17:01:26').toISOString(),
  },
  {
    petId: 6,
    weight: 3.18,
    createdAt: new Date('2019-03-07 06:18:42').toISOString(),
  },
  {
    petId: 183,
    weight: 3.86,
    createdAt: new Date('2019-03-26 01:13:52').toISOString(),
  },
  {
    petId: 161,
    weight: 3.61,
    createdAt: new Date('2019-12-24 08:06:13').toISOString(),
  },
  {
    petId: 138,
    weight: 4.75,
    createdAt: new Date('2018-04-21 19:23:59').toISOString(),
  },
  {
    petId: 17,
    weight: 2.58,
    createdAt: new Date('2017-04-25 03:36:04').toISOString(),
  },
  {
    petId: 148,
    weight: 4.26,
    createdAt: new Date('2022-11-04 04:47:29').toISOString(),
  },
  {
    petId: 1,
    weight: 5.72,
    createdAt: new Date('2023-01-30 14:12:28').toISOString(),
  },
  {
    petId: 231,
    weight: 3.2,
    createdAt: new Date('2022-09-04 09:04:35').toISOString(),
  },
  {
    petId: 148,
    weight: 5.25,
    createdAt: new Date('2018-03-07 05:57:37').toISOString(),
  },
  {
    petId: 6,
    weight: 5.22,
    createdAt: new Date('2017-08-05 03:36:25').toISOString(),
  },
  {
    petId: 4,
    weight: 3.59,
    createdAt: new Date('2016-02-24 19:04:54').toISOString(),
  },
  {
    petId: 140,
    weight: 4.68,
    createdAt: new Date('2021-08-29 11:57:41').toISOString(),
  },
  {
    petId: 28,
    weight: 4.76,
    createdAt: new Date('2018-05-29 02:43:24').toISOString(),
  },
  {
    petId: 1,
    weight: 4.19,
    createdAt: new Date('2016-10-06 20:32:19').toISOString(),
  },
  {
    petId: 166,
    weight: 5.75,
    createdAt: new Date('2017-01-18 11:10:46').toISOString(),
  },
  {
    petId: 27,
    weight: 5.2,
    createdAt: new Date('2017-07-23 16:09:06').toISOString(),
  },
  {
    petId: 207,
    weight: 4.57,
    createdAt: new Date('2021-09-10 16:03:23').toISOString(),
  },
  {
    petId: 240,
    weight: 4.59,
    createdAt: new Date('2018-03-01 15:31:57').toISOString(),
  },
  {
    petId: 111,
    weight: 4.64,
    createdAt: new Date('2017-01-18 11:43:28').toISOString(),
  },
  {
    petId: 253,
    weight: 3.92,
    createdAt: new Date('2017-12-13 22:25:14').toISOString(),
  },
  {
    petId: 266,
    weight: 5.23,
    createdAt: new Date('2019-11-04 15:17:43').toISOString(),
  },
  {
    petId: 27,
    weight: 4.94,
    createdAt: new Date('2020-08-16 20:19:49').toISOString(),
  },
  {
    petId: 116,
    weight: 4.98,
    createdAt: new Date('2022-09-30 15:52:07').toISOString(),
  },
  {
    petId: 198,
    weight: 4.77,
    createdAt: new Date('2018-03-19 05:50:55').toISOString(),
  },
  {
    petId: 251,
    weight: 4.88,
    createdAt: new Date('2017-03-14 18:57:43').toISOString(),
  },
  {
    petId: 38,
    weight: 3.51,
    createdAt: new Date('2018-02-22 04:08:14').toISOString(),
  },
  {
    petId: 278,
    weight: 4.23,
    createdAt: new Date('2021-06-30 12:27:19').toISOString(),
  },
  {
    petId: 38,
    weight: 4.72,
    createdAt: new Date('2018-01-10 22:56:45').toISOString(),
  },
  {
    petId: 235,
    weight: 3.89,
    createdAt: new Date('2019-09-12 15:23:12').toISOString(),
  },
  {
    petId: 10,
    weight: 3.48,
    createdAt: new Date('2022-05-19 01:30:47').toISOString(),
  },
  {
    petId: 143,
    weight: 4.5,
    createdAt: new Date('2021-07-29 07:49:34').toISOString(),
  },
  {
    petId: 162,
    weight: 3.64,
    createdAt: new Date('2016-08-27 03:10:59').toISOString(),
  },
  {
    petId: 299,
    weight: 3.68,
    createdAt: new Date('2020-02-18 18:51:29').toISOString(),
  },
  {
    petId: 136,
    weight: 5.91,
    createdAt: new Date('2016-03-17 12:10:30').toISOString(),
  },
  {
    petId: 249,
    weight: 4.9,
    createdAt: new Date('2020-05-01 04:39:40').toISOString(),
  },
  {
    petId: 265,
    weight: 4.65,
    createdAt: new Date('2021-01-31 05:42:19').toISOString(),
  },
  {
    petId: 90,
    weight: 3.98,
    createdAt: new Date('2016-12-30 18:05:20').toISOString(),
  },
  {
    petId: 246,
    weight: 5.72,
    createdAt: new Date('2017-04-20 23:30:14').toISOString(),
  },
  {
    petId: 150,
    weight: 4.24,
    createdAt: new Date('2022-11-08 16:44:07').toISOString(),
  },
  {
    petId: 96,
    weight: 2.71,
    createdAt: new Date('2017-10-20 13:11:33').toISOString(),
  },
  {
    petId: 251,
    weight: 3.72,
    createdAt: new Date('2020-02-18 12:24:52').toISOString(),
  },
  {
    petId: 35,
    weight: 3.86,
    createdAt: new Date('2022-09-22 09:40:59').toISOString(),
  },
  {
    petId: 150,
    weight: 4.88,
    createdAt: new Date('2019-10-17 23:47:58').toISOString(),
  },
  {
    petId: 110,
    weight: 3.92,
    createdAt: new Date('2021-10-10 12:22:26').toISOString(),
  },
  {
    petId: 256,
    weight: 5.32,
    createdAt: new Date('2019-01-02 03:35:14').toISOString(),
  },
  {
    petId: 235,
    weight: 6.34,
    createdAt: new Date('2017-10-01 05:33:16').toISOString(),
  },
  {
    petId: 168,
    weight: 3.12,
    createdAt: new Date('2016-11-30 15:23:54').toISOString(),
  },
  {
    petId: 96,
    weight: 4.11,
    createdAt: new Date('2019-10-14 23:30:12').toISOString(),
  },
  {
    petId: 52,
    weight: 5.72,
    createdAt: new Date('2022-03-03 02:07:01').toISOString(),
  },
  {
    petId: 10,
    weight: 4.65,
    createdAt: new Date('2018-03-18 03:00:22').toISOString(),
  },
  {
    petId: 159,
    weight: 4.26,
    createdAt: new Date('2017-01-20 17:25:44').toISOString(),
  },
  {
    petId: 265,
    weight: 4.41,
    createdAt: new Date('2019-12-12 02:00:20').toISOString(),
  },
  {
    petId: 164,
    weight: 3.42,
    createdAt: new Date('2018-06-19 12:05:07').toISOString(),
  },
  {
    petId: 6,
    weight: 4.34,
    createdAt: new Date('2016-12-10 18:40:28').toISOString(),
  },
  {
    petId: 127,
    weight: 4.5,
    createdAt: new Date('2019-12-19 08:18:37').toISOString(),
  },
  {
    petId: 271,
    weight: 4.12,
    createdAt: new Date('2022-10-13 23:34:35').toISOString(),
  },
  {
    petId: 9,
    weight: 4.79,
    createdAt: new Date('2016-02-08 22:39:46').toISOString(),
  },
  {
    petId: 52,
    weight: 5.05,
    createdAt: new Date('2016-07-16 09:56:28').toISOString(),
  },
  {
    petId: 263,
    weight: 3.32,
    createdAt: new Date('2018-11-09 16:40:42').toISOString(),
  },
  {
    petId: 7,
    weight: 4.79,
    createdAt: new Date('2020-01-31 10:24:34').toISOString(),
  },
  {
    petId: 131,
    weight: 4.57,
    createdAt: new Date('2022-08-16 03:32:22').toISOString(),
  },
  {
    petId: 181,
    weight: 4.98,
    createdAt: new Date('2020-03-16 06:22:30').toISOString(),
  },
  {
    petId: 238,
    weight: 5.23,
    createdAt: new Date('2016-07-21 13:23:47').toISOString(),
  },
  {
    petId: 166,
    weight: 4.46,
    createdAt: new Date('2017-06-25 19:03:23').toISOString(),
  },
  {
    petId: 187,
    weight: 3.34,
    createdAt: new Date('2020-01-24 02:44:16').toISOString(),
  },
  {
    petId: 196,
    weight: 4.71,
    createdAt: new Date('2022-08-10 17:02:33').toISOString(),
  },
  {
    petId: 277,
    weight: 5.56,
    createdAt: new Date('2017-08-21 10:28:12').toISOString(),
  },
  {
    petId: 116,
    weight: 4.35,
    createdAt: new Date('2021-06-27 11:43:21').toISOString(),
  },
  {
    petId: 131,
    weight: 4.39,
    createdAt: new Date('2016-06-28 17:32:58').toISOString(),
  },
  {
    petId: 202,
    weight: 4.17,
    createdAt: new Date('2023-01-04 03:14:25').toISOString(),
  },
  {
    petId: 168,
    weight: 4.57,
    createdAt: new Date('2016-08-24 16:26:00').toISOString(),
  },
  {
    petId: 10,
    weight: 5.01,
    createdAt: new Date('2020-12-03 18:46:56').toISOString(),
  },
  {
    petId: 253,
    weight: 3.37,
    createdAt: new Date('2020-10-05 15:35:22').toISOString(),
  },
  {
    petId: 162,
    weight: 4.09,
    createdAt: new Date('2021-11-05 18:19:13').toISOString(),
  },
  {
    petId: 138,
    weight: 5.15,
    createdAt: new Date('2016-09-10 14:02:46').toISOString(),
  },
  {
    petId: 168,
    weight: 4.27,
    createdAt: new Date('2017-08-30 15:45:52').toISOString(),
  },
  {
    petId: 207,
    weight: 4.16,
    createdAt: new Date('2020-12-30 22:18:25').toISOString(),
  },
  {
    petId: 273,
    weight: 11.14,
    createdAt: new Date('2017-07-19 01:18:38').toISOString(),
  },
  {
    petId: 141,
    weight: 11.11,
    createdAt: new Date('2016-04-16 13:34:02').toISOString(),
  },
  {
    petId: 208,
    weight: 10.63,
    createdAt: new Date('2017-08-14 05:36:10').toISOString(),
  },
  {
    petId: 275,
    weight: 10.97,
    createdAt: new Date('2017-10-26 20:06:56').toISOString(),
  },
  {
    petId: 99,
    weight: 11.95,
    createdAt: new Date('2017-06-04 15:43:51').toISOString(),
  },
  {
    petId: 133,
    weight: 14.94,
    createdAt: new Date('2016-12-18 16:19:45').toISOString(),
  },
  {
    petId: 190,
    weight: 11.36,
    createdAt: new Date('2017-03-16 11:53:54').toISOString(),
  },
  {
    petId: 290,
    weight: 7.41,
    createdAt: new Date('2017-04-13 00:43:55').toISOString(),
  },
  {
    petId: 197,
    weight: 8.14,
    createdAt: new Date('2016-10-12 22:34:43').toISOString(),
  },
  {
    petId: 259,
    weight: 12.72,
    createdAt: new Date('2017-05-12 04:39:02').toISOString(),
  },
  {
    petId: 297,
    weight: 9.81,
    createdAt: new Date('2017-05-06 05:40:08').toISOString(),
  },
  {
    petId: 197,
    weight: 13.14,
    createdAt: new Date('2017-07-30 19:50:48').toISOString(),
  },
  {
    petId: 247,
    weight: 8.33,
    createdAt: new Date('2016-08-16 12:17:01').toISOString(),
  },
  {
    petId: 294,
    weight: 8.72,
    createdAt: new Date('2016-10-15 11:05:10').toISOString(),
  },
  {
    petId: 44,
    weight: 12.75,
    createdAt: new Date('2017-06-29 18:02:43').toISOString(),
  },
  {
    petId: 134,
    weight: 9.63,
    createdAt: new Date('2016-02-12 21:28:55').toISOString(),
  },
  {
    petId: 30,
    weight: 8.72,
    createdAt: new Date('2016-10-30 14:40:25').toISOString(),
  },
  {
    petId: 74,
    weight: 12.34,
    createdAt: new Date('2017-07-05 07:51:31').toISOString(),
  },
  {
    petId: 163,
    weight: 11.43,
    createdAt: new Date('2016-02-02 14:54:02').toISOString(),
  },
  {
    petId: 247,
    weight: 11.87,
    createdAt: new Date('2016-04-26 13:32:31').toISOString(),
  },
  {
    petId: 156,
    weight: 11.2,
    createdAt: new Date('2017-06-03 09:36:02').toISOString(),
  },
  {
    petId: 102,
    weight: 4.93,
    createdAt: new Date('2017-04-27 13:02:41').toISOString(),
  },
  {
    petId: 244,
    weight: 11.61,
    createdAt: new Date('2018-01-05 05:40:20').toISOString(),
  },
  {
    petId: 26,
    weight: 8.47,
    createdAt: new Date('2016-11-30 17:30:49').toISOString(),
  },
  {
    petId: 58,
    weight: 5.97,
    createdAt: new Date('2016-08-21 23:43:27').toISOString(),
  },
  {
    petId: 163,
    weight: 7.6,
    createdAt: new Date('2017-01-21 00:17:12').toISOString(),
  },
  {
    petId: 225,
    weight: 8.27,
    createdAt: new Date('2016-06-14 12:26:50').toISOString(),
  },
  {
    petId: 68,
    weight: 10.6,
    createdAt: new Date('2017-05-30 14:20:08').toISOString(),
  },
  {
    petId: 295,
    weight: 14.5,
    createdAt: new Date('2016-10-08 22:49:00').toISOString(),
  },
  {
    petId: 292,
    weight: 10.53,
    createdAt: new Date('2017-01-22 18:17:41').toISOString(),
  },
  {
    petId: 19,
    weight: 12.07,
    createdAt: new Date('2017-02-10 00:55:30').toISOString(),
  },
  {
    petId: 43,
    weight: 11.58,
    createdAt: new Date('2016-10-27 01:31:11').toISOString(),
  },
  {
    petId: 132,
    weight: 11.8,
    createdAt: new Date('2017-11-30 04:43:12').toISOString(),
  },
  {
    petId: 216,
    weight: 9.78,
    createdAt: new Date('2017-05-06 21:02:20').toISOString(),
  },
  {
    petId: 273,
    weight: 6.74,
    createdAt: new Date('2016-05-24 14:18:00').toISOString(),
  },
  {
    petId: 133,
    weight: 10.96,
    createdAt: new Date('2016-06-19 14:59:12').toISOString(),
  },
  {
    petId: 87,
    weight: 13.28,
    createdAt: new Date('2016-11-25 14:55:21').toISOString(),
  },
  {
    petId: 141,
    weight: 12.92,
    createdAt: new Date('2017-06-18 06:32:05').toISOString(),
  },
  {
    petId: 258,
    weight: 10.05,
    createdAt: new Date('2017-10-13 09:29:24').toISOString(),
  },
  {
    petId: 205,
    weight: 6.85,
    createdAt: new Date('2017-12-02 19:38:41').toISOString(),
  },
  {
    petId: 216,
    weight: 10.06,
    createdAt: new Date('2017-03-16 23:48:00').toISOString(),
  },
  {
    petId: 160,
    weight: 9.53,
    createdAt: new Date('2016-04-10 00:53:56').toISOString(),
  },
  {
    petId: 102,
    weight: 9.6,
    createdAt: new Date('2017-02-12 13:46:28').toISOString(),
  },
  {
    petId: 208,
    weight: 9.51,
    createdAt: new Date('2016-02-15 04:36:50').toISOString(),
  },
  {
    petId: 119,
    weight: 8.83,
    createdAt: new Date('2017-11-13 15:39:01').toISOString(),
  },
  {
    petId: 227,
    weight: 10.8,
    createdAt: new Date('2017-07-06 12:36:23').toISOString(),
  },
  {
    petId: 63,
    weight: 12.91,
    createdAt: new Date('2016-11-23 04:39:12').toISOString(),
  },
  {
    petId: 291,
    weight: 11.55,
    createdAt: new Date('2016-02-19 10:35:01').toISOString(),
  },
  {
    petId: 282,
    weight: 6.7,
    createdAt: new Date('2017-12-17 21:46:47').toISOString(),
  },
  {
    petId: 195,
    weight: 5.75,
    createdAt: new Date('2018-01-31 07:01:22').toISOString(),
  },
  {
    petId: 212,
    weight: 10.83,
    createdAt: new Date('2017-02-10 11:51:41').toISOString(),
  },
  {
    petId: 15,
    weight: 11.91,
    createdAt: new Date('2016-09-19 02:14:48').toISOString(),
  },
  {
    petId: 62,
    weight: 7.85,
    createdAt: new Date('2016-06-20 10:23:58').toISOString(),
  },
  {
    petId: 36,
    weight: 9.16,
    createdAt: new Date('2016-12-02 04:23:07').toISOString(),
  },
  {
    petId: 174,
    weight: 13.71,
    createdAt: new Date('2016-12-07 17:14:26').toISOString(),
  },
  {
    petId: 297,
    weight: 7.7,
    createdAt: new Date('2016-07-17 06:31:14').toISOString(),
  },
  {
    petId: 212,
    weight: 13.67,
    createdAt: new Date('2016-10-18 01:45:08').toISOString(),
  },
  {
    petId: 151,
    weight: 12.75,
    createdAt: new Date('2017-08-28 02:54:13').toISOString(),
  },
  {
    petId: 169,
    weight: 10.36,
    createdAt: new Date('2016-05-13 17:12:14').toISOString(),
  },
  {
    petId: 199,
    weight: 7.77,
    createdAt: new Date('2016-09-23 07:45:40').toISOString(),
  },
  {
    petId: 70,
    weight: 10.96,
    createdAt: new Date('2016-03-20 04:19:40').toISOString(),
  },
  {
    petId: 112,
    weight: 9.89,
    createdAt: new Date('2017-10-25 17:48:26').toISOString(),
  },
  {
    petId: 227,
    weight: 12.21,
    createdAt: new Date('2017-03-22 12:05:38').toISOString(),
  },
  {
    petId: 245,
    weight: 9.05,
    createdAt: new Date('2016-12-20 21:06:06').toISOString(),
  },
  {
    petId: 275,
    weight: 10.66,
    createdAt: new Date('2016-07-24 04:35:02').toISOString(),
  },
  {
    petId: 250,
    weight: 10.25,
    createdAt: new Date('2017-02-21 22:22:13').toISOString(),
  },
  {
    petId: 284,
    weight: 10.7,
    createdAt: new Date('2018-01-25 20:51:56').toISOString(),
  },
  {
    petId: 53,
    weight: 9.09,
    createdAt: new Date('2017-11-30 22:50:42').toISOString(),
  },
  {
    petId: 64,
    weight: 9.98,
    createdAt: new Date('2016-02-28 03:52:24').toISOString(),
  },
  {
    petId: 114,
    weight: 10.81,
    createdAt: new Date('2016-12-21 09:05:13').toISOString(),
  },
  {
    petId: 279,
    weight: 7.31,
    createdAt: new Date('2016-09-22 03:42:06').toISOString(),
  },
  {
    petId: 13,
    weight: 11.99,
    createdAt: new Date('2017-03-09 12:02:30').toISOString(),
  },
  {
    petId: 82,
    weight: 7.93,
    createdAt: new Date('2016-04-10 00:35:27').toISOString(),
  },
  {
    petId: 68,
    weight: 11.17,
    createdAt: new Date('2017-07-09 12:38:18').toISOString(),
  },
  {
    petId: 95,
    weight: 12.89,
    createdAt: new Date('2016-12-05 11:28:39').toISOString(),
  },
  {
    petId: 269,
    weight: 12.07,
    createdAt: new Date('2016-07-19 15:43:26').toISOString(),
  },
  {
    petId: 43,
    weight: 10.4,
    createdAt: new Date('2016-06-11 20:50:58').toISOString(),
  },
  {
    petId: 133,
    weight: 12.62,
    createdAt: new Date('2018-01-20 01:14:52').toISOString(),
  },
  {
    petId: 209,
    weight: 11.13,
    createdAt: new Date('2017-05-02 20:47:53').toISOString(),
  },
  {
    petId: 25,
    weight: 7.41,
    createdAt: new Date('2016-02-27 23:56:33').toISOString(),
  },
  {
    petId: 137,
    weight: 7.84,
    createdAt: new Date('2016-08-06 08:11:20').toISOString(),
  },
  {
    petId: 114,
    weight: 9.58,
    createdAt: new Date('2017-11-13 11:36:21').toISOString(),
  },
  {
    petId: 3,
    weight: 12.03,
    createdAt: new Date('2017-12-04 03:39:15').toISOString(),
  },
  {
    petId: 273,
    weight: 10.58,
    createdAt: new Date('2016-08-14 12:09:32').toISOString(),
  },
  {
    petId: 5,
    weight: 6.73,
    createdAt: new Date('2016-04-13 04:30:15').toISOString(),
  },
  {
    petId: 84,
    weight: 5.74,
    createdAt: new Date('2017-09-19 19:17:59').toISOString(),
  },
  {
    petId: 49,
    weight: 12.45,
    createdAt: new Date('2016-06-21 22:55:17').toISOString(),
  },
  {
    petId: 118,
    weight: 8.35,
    createdAt: new Date('2017-09-11 09:19:14').toISOString(),
  },
  {
    petId: 76,
    weight: 10.19,
    createdAt: new Date('2017-12-07 16:50:44').toISOString(),
  },
  {
    petId: 25,
    weight: 12.24,
    createdAt: new Date('2016-06-28 00:41:13').toISOString(),
  },
  {
    petId: 175,
    weight: 9.27,
    createdAt: new Date('2016-07-07 09:32:42').toISOString(),
  },
  {
    petId: 247,
    weight: 8.26,
    createdAt: new Date('2016-05-19 11:25:40').toISOString(),
  },
  {
    petId: 21,
    weight: 7.97,
    createdAt: new Date('2016-03-06 14:26:11').toISOString(),
  },
  {
    petId: 227,
    weight: 9.7,
    createdAt: new Date('2016-05-13 02:49:38').toISOString(),
  },
  {
    petId: 72,
    weight: 9.53,
    createdAt: new Date('2016-02-14 10:36:52').toISOString(),
  },
  {
    petId: 142,
    weight: 13.0,
    createdAt: new Date('2017-04-25 20:06:36').toISOString(),
  },
  {
    petId: 184,
    weight: 13.23,
    createdAt: new Date('2016-07-23 13:08:35').toISOString(),
  },
  {
    petId: 20,
    weight: 8.41,
    createdAt: new Date('2016-05-11 19:32:14').toISOString(),
  },
  {
    petId: 115,
    weight: 13.23,
    createdAt: new Date('2017-12-03 08:33:26').toISOString(),
  },
  {
    petId: 135,
    weight: 8.38,
    createdAt: new Date('2016-05-11 09:52:31').toISOString(),
  },
  {
    petId: 92,
    weight: 10.23,
    createdAt: new Date('2017-03-12 08:27:05').toISOString(),
  },
  {
    petId: 132,
    weight: 5.8,
    createdAt: new Date('2017-06-05 07:59:05').toISOString(),
  },
  {
    petId: 286,
    weight: 13.52,
    createdAt: new Date('2017-09-09 11:00:10').toISOString(),
  },
  {
    petId: 280,
    weight: 7.22,
    createdAt: new Date('2016-06-19 15:48:52').toISOString(),
  },
  {
    petId: 63,
    weight: 11.68,
    createdAt: new Date('2016-12-10 17:04:00').toISOString(),
  },
  {
    petId: 29,
    weight: 9.17,
    createdAt: new Date('2016-02-26 22:41:47').toISOString(),
  },
  {
    petId: 5,
    weight: 9.34,
    createdAt: new Date('2016-04-17 03:10:47').toISOString(),
  },
  {
    petId: 220,
    weight: 12.54,
    createdAt: new Date('2016-08-07 00:59:34').toISOString(),
  },
  {
    petId: 15,
    weight: 7.87,
    createdAt: new Date('2017-08-20 21:41:29').toISOString(),
  },
  {
    petId: 175,
    weight: 17.27,
    createdAt: new Date('2017-10-23 16:42:51').toISOString(),
  },
  {
    petId: 293,
    weight: 8.91,
    createdAt: new Date('2016-03-18 07:06:06').toISOString(),
  },
  {
    petId: 244,
    weight: 8.76,
    createdAt: new Date('2016-03-18 10:28:04').toISOString(),
  },
  {
    petId: 151,
    weight: 10.81,
    createdAt: new Date('2016-06-06 01:59:23').toISOString(),
  },
  {
    petId: 61,
    weight: 9.57,
    createdAt: new Date('2017-06-28 09:03:53').toISOString(),
  },
  {
    petId: 146,
    weight: 10.2,
    createdAt: new Date('2017-04-01 13:28:55').toISOString(),
  },
  {
    petId: 156,
    weight: 9.87,
    createdAt: new Date('2017-07-08 04:36:16').toISOString(),
  },
  {
    petId: 189,
    weight: 11.95,
    createdAt: new Date('2017-04-15 19:36:57').toISOString(),
  },
  {
    petId: 197,
    weight: 14.09,
    createdAt: new Date('2016-04-05 12:11:32').toISOString(),
  },
  {
    petId: 233,
    weight: 9.16,
    createdAt: new Date('2016-04-17 23:16:35').toISOString(),
  },
  {
    petId: 69,
    weight: 12.97,
    createdAt: new Date('2017-10-31 14:23:29').toISOString(),
  },
  {
    petId: 199,
    weight: 10.1,
    createdAt: new Date('2017-03-04 07:26:08').toISOString(),
  },
  {
    petId: 36,
    weight: 8.94,
    createdAt: new Date('2016-07-24 12:39:34').toISOString(),
  },
  {
    petId: 286,
    weight: 8.16,
    createdAt: new Date('2016-11-30 11:28:12').toISOString(),
  },
  {
    petId: 153,
    weight: 12.19,
    createdAt: new Date('2016-05-08 23:06:19').toISOString(),
  },
  {
    petId: 233,
    weight: 8.76,
    createdAt: new Date('2017-03-14 04:22:38').toISOString(),
  },
  {
    petId: 276,
    weight: 13.82,
    createdAt: new Date('2017-09-16 01:34:53').toISOString(),
  },
  {
    petId: 221,
    weight: 7.8,
    createdAt: new Date('2018-01-30 19:28:59').toISOString(),
  },
  {
    petId: 270,
    weight: 9.86,
    createdAt: new Date('2016-06-23 02:00:40').toISOString(),
  },
  {
    petId: 214,
    weight: 8.27,
    createdAt: new Date('2018-01-16 22:24:08').toISOString(),
  },
  {
    petId: 233,
    weight: 8.19,
    createdAt: new Date('2017-05-28 10:56:25').toISOString(),
  },
  {
    petId: 280,
    weight: 8.89,
    createdAt: new Date('2016-12-24 12:31:11').toISOString(),
  },
  {
    petId: 158,
    weight: 10.65,
    createdAt: new Date('2017-04-12 03:44:12').toISOString(),
  },
  {
    petId: 59,
    weight: 8.48,
    createdAt: new Date('2016-02-19 05:29:16').toISOString(),
  },
  {
    petId: 287,
    weight: 9.55,
    createdAt: new Date('2016-05-26 09:20:44').toISOString(),
  },
  {
    petId: 237,
    weight: 10.88,
    createdAt: new Date('2017-10-23 12:08:29').toISOString(),
  },
  {
    petId: 43,
    weight: 15.16,
    createdAt: new Date('2016-12-23 07:21:04').toISOString(),
  },
  {
    petId: 214,
    weight: 9.85,
    createdAt: new Date('2017-01-03 14:25:18').toISOString(),
  },
  {
    petId: 220,
    weight: 8.36,
    createdAt: new Date('2016-10-29 06:50:31').toISOString(),
  },
  {
    petId: 120,
    weight: 9.95,
    createdAt: new Date('2017-03-12 23:07:54').toISOString(),
  },
  {
    petId: 209,
    weight: 10.82,
    createdAt: new Date('2016-07-20 04:21:12').toISOString(),
  },
  {
    petId: 125,
    weight: 11.06,
    createdAt: new Date('2017-05-15 13:02:44').toISOString(),
  },
  {
    petId: 8,
    weight: 11.78,
    createdAt: new Date('2017-03-01 06:23:15').toISOString(),
  },
  {
    petId: 65,
    weight: 11.49,
    createdAt: new Date('2017-08-23 05:44:22').toISOString(),
  },
  {
    petId: 84,
    weight: 10.68,
    createdAt: new Date('2016-11-17 06:14:06').toISOString(),
  },
  {
    petId: 212,
    weight: 7.55,
    createdAt: new Date('2016-05-13 10:45:44').toISOString(),
  },
  {
    petId: 190,
    weight: 14.37,
    createdAt: new Date('2017-02-04 22:00:26').toISOString(),
  },
  {
    petId: 41,
    weight: 9.17,
    createdAt: new Date('2017-04-01 07:14:20').toISOString(),
  },
  {
    petId: 163,
    weight: 10.07,
    createdAt: new Date('2016-06-16 19:21:27').toISOString(),
  },
  {
    petId: 49,
    weight: 10.77,
    createdAt: new Date('2017-10-06 15:03:27').toISOString(),
  },
  {
    petId: 236,
    weight: 9.0,
    createdAt: new Date('2017-06-28 08:06:26').toISOString(),
  },
  {
    petId: 62,
    weight: 12.03,
    createdAt: new Date('2016-12-05 00:39:36').toISOString(),
  },
  {
    petId: 44,
    weight: 10.48,
    createdAt: new Date('2016-03-27 11:10:33').toISOString(),
  },
  {
    petId: 82,
    weight: 4.1,
    createdAt: new Date('2018-01-06 09:50:55').toISOString(),
  },
  {
    petId: 272,
    weight: 12.0,
    createdAt: new Date('2017-06-14 16:40:41').toISOString(),
  },
  {
    petId: 104,
    weight: 11.91,
    createdAt: new Date('2017-10-03 04:56:04').toISOString(),
  },
  {
    petId: 191,
    weight: 5.31,
    createdAt: new Date('2016-03-11 23:40:50').toISOString(),
  },
  {
    petId: 242,
    weight: 6.82,
    createdAt: new Date('2017-09-19 06:40:49').toISOString(),
  },
  {
    petId: 281,
    weight: 10.09,
    createdAt: new Date('2016-11-23 17:04:35').toISOString(),
  },
  {
    petId: 282,
    weight: 8.08,
    createdAt: new Date('2017-05-23 07:57:00').toISOString(),
  },
  {
    petId: 91,
    weight: 12.09,
    createdAt: new Date('2017-02-26 04:44:55').toISOString(),
  },
  {
    petId: 158,
    weight: 12.07,
    createdAt: new Date('2016-04-12 11:59:49').toISOString(),
  },
  {
    petId: 68,
    weight: 4.51,
    createdAt: new Date('2017-05-15 08:53:00').toISOString(),
  },
  {
    petId: 275,
    weight: 9.91,
    createdAt: new Date('2016-10-19 06:20:10').toISOString(),
  },
  {
    petId: 286,
    weight: 9.32,
    createdAt: new Date('2018-02-01 01:52:53').toISOString(),
  },
  {
    petId: 125,
    weight: 15.17,
    createdAt: new Date('2016-06-19 02:21:38').toISOString(),
  },
  {
    petId: 85,
    weight: 8.57,
    createdAt: new Date('2017-02-04 15:41:30').toISOString(),
  },
  {
    petId: 60,
    weight: 9.88,
    createdAt: new Date('2018-01-08 11:38:33').toISOString(),
  },
  {
    petId: 225,
    weight: 10.41,
    createdAt: new Date('2016-12-22 10:41:25').toISOString(),
  },
  {
    petId: 107,
    weight: 6.66,
    createdAt: new Date('2017-09-10 18:19:06').toISOString(),
  },
  {
    petId: 206,
    weight: 10.54,
    createdAt: new Date('2016-03-07 20:30:12').toISOString(),
  },
  {
    petId: 26,
    weight: 13.63,
    createdAt: new Date('2017-05-02 09:19:26').toISOString(),
  },
  {
    petId: 184,
    weight: 8.51,
    createdAt: new Date('2016-08-17 07:18:09').toISOString(),
  },
  {
    petId: 212,
    weight: 9.28,
    createdAt: new Date('2017-10-27 12:10:28').toISOString(),
  },
  {
    petId: 226,
    weight: 11.03,
    createdAt: new Date('2016-12-02 08:05:35').toISOString(),
  },
  {
    petId: 18,
    weight: 11.14,
    createdAt: new Date('2017-04-23 08:54:15').toISOString(),
  },
  {
    petId: 216,
    weight: 14.16,
    createdAt: new Date('2017-01-28 01:36:39').toISOString(),
  },
  {
    petId: 291,
    weight: 8.74,
    createdAt: new Date('2017-10-16 21:52:19').toISOString(),
  },
  {
    petId: 53,
    weight: 11.76,
    createdAt: new Date('2016-06-17 11:16:28').toISOString(),
  },
  {
    petId: 30,
    weight: 8.59,
    createdAt: new Date('2017-12-03 00:32:00').toISOString(),
  },
  {
    petId: 206,
    weight: 10.63,
    createdAt: new Date('2016-07-12 20:06:43').toISOString(),
  },
  {
    petId: 120,
    weight: 9.93,
    createdAt: new Date('2017-11-25 17:07:07').toISOString(),
  },
  {
    petId: 8,
    weight: 13.11,
    createdAt: new Date('2017-08-25 03:01:43').toISOString(),
  },
  {
    petId: 237,
    weight: 8.88,
    createdAt: new Date('2016-03-03 14:44:52').toISOString(),
  },
  {
    petId: 142,
    weight: 11.21,
    createdAt: new Date('2016-04-25 14:26:11').toISOString(),
  },
  {
    petId: 34,
    weight: 8.54,
    createdAt: new Date('2017-04-05 21:38:39').toISOString(),
  },
  {
    petId: 170,
    weight: 5.82,
    createdAt: new Date('2016-05-11 05:03:21').toISOString(),
  },
  {
    petId: 13,
    weight: 11.86,
    createdAt: new Date('2017-03-19 15:27:06').toISOString(),
  },
  {
    petId: 214,
    weight: 12.12,
    createdAt: new Date('2017-02-19 01:57:59').toISOString(),
  },
  {
    petId: 118,
    weight: 11.47,
    createdAt: new Date('2017-08-02 11:57:25').toISOString(),
  },
  {
    petId: 154,
    weight: 11.03,
    createdAt: new Date('2017-05-17 09:39:05').toISOString(),
  },
  {
    petId: 130,
    weight: 10.47,
    createdAt: new Date('2016-11-06 05:02:51').toISOString(),
  },
  {
    petId: 19,
    weight: 11.33,
    createdAt: new Date('2016-11-04 16:04:51').toISOString(),
  },
  {
    petId: 224,
    weight: 9.18,
    createdAt: new Date('2017-11-10 11:17:26').toISOString(),
  },
  {
    petId: 174,
    weight: 10.22,
    createdAt: new Date('2017-01-17 13:00:20').toISOString(),
  },
  {
    petId: 112,
    weight: 4.49,
    createdAt: new Date('2016-02-09 09:09:40').toISOString(),
  },
  {
    petId: 157,
    weight: 6.83,
    createdAt: new Date('2017-11-03 03:47:57').toISOString(),
  },
  {
    petId: 213,
    weight: 13.05,
    createdAt: new Date('2017-01-25 01:34:43').toISOString(),
  },
  {
    petId: 192,
    weight: 11.42,
    createdAt: new Date('2016-10-27 03:47:21').toISOString(),
  },
  {
    petId: 210,
    weight: 10.47,
    createdAt: new Date('2016-10-16 02:53:37').toISOString(),
  },
  {
    petId: 145,
    weight: 10.17,
    createdAt: new Date('2016-02-11 00:02:47').toISOString(),
  },
  {
    petId: 2,
    weight: 11.68,
    createdAt: new Date('2016-10-16 05:46:26').toISOString(),
  },
  {
    petId: 297,
    weight: 21.73,
    createdAt: new Date('2018-06-19 04:06:17').toISOString(),
  },
  {
    petId: 260,
    weight: 17.84,
    createdAt: new Date('2019-10-21 11:57:43').toISOString(),
  },
  {
    petId: 26,
    weight: 17.67,
    createdAt: new Date('2019-12-08 08:29:36').toISOString(),
  },
  {
    petId: 199,
    weight: 19.47,
    createdAt: new Date('2018-04-19 00:27:15').toISOString(),
  },
  {
    petId: 282,
    weight: 22.38,
    createdAt: new Date('2019-08-16 04:49:32').toISOString(),
  },
  {
    petId: 203,
    weight: 19.0,
    createdAt: new Date('2019-08-25 05:41:56').toISOString(),
  },
  {
    petId: 269,
    weight: 23.82,
    createdAt: new Date('2018-07-11 13:10:35').toISOString(),
  },
  {
    petId: 112,
    weight: 19.69,
    createdAt: new Date('2018-11-15 10:32:27').toISOString(),
  },
  {
    petId: 25,
    weight: 20.2,
    createdAt: new Date('2018-12-01 07:03:15').toISOString(),
  },
  {
    petId: 292,
    weight: 19.71,
    createdAt: new Date('2019-08-26 00:05:15').toISOString(),
  },
  {
    petId: 182,
    weight: 20.98,
    createdAt: new Date('2019-02-19 07:42:54').toISOString(),
  },
  {
    petId: 49,
    weight: 21.09,
    createdAt: new Date('2018-04-18 20:02:46').toISOString(),
  },
  {
    petId: 228,
    weight: 20.59,
    createdAt: new Date('2018-02-07 21:46:11').toISOString(),
  },
  {
    petId: 255,
    weight: 16.52,
    createdAt: new Date('2018-11-29 10:37:51').toISOString(),
  },
  {
    petId: 141,
    weight: 18.31,
    createdAt: new Date('2018-09-07 07:46:14').toISOString(),
  },
  {
    petId: 212,
    weight: 18.77,
    createdAt: new Date('2018-07-20 23:40:15').toISOString(),
  },
  {
    petId: 190,
    weight: 18.89,
    createdAt: new Date('2018-03-10 01:14:52').toISOString(),
  },
  {
    petId: 184,
    weight: 20.08,
    createdAt: new Date('2018-10-15 08:06:24').toISOString(),
  },
  {
    petId: 175,
    weight: 18.76,
    createdAt: new Date('2019-12-15 09:22:54').toISOString(),
  },
  {
    petId: 139,
    weight: 18.3,
    createdAt: new Date('2018-07-14 17:56:36').toISOString(),
  },
  {
    petId: 46,
    weight: 19.17,
    createdAt: new Date('2019-11-03 11:58:38').toISOString(),
  },
  {
    petId: 179,
    weight: 18.79,
    createdAt: new Date('2018-11-21 00:18:57').toISOString(),
  },
  {
    petId: 290,
    weight: 16.94,
    createdAt: new Date('2018-02-06 17:33:19').toISOString(),
  },
  {
    petId: 101,
    weight: 19.94,
    createdAt: new Date('2019-05-30 05:04:34').toISOString(),
  },
  {
    petId: 286,
    weight: 23.24,
    createdAt: new Date('2018-08-11 15:06:20').toISOString(),
  },
  {
    petId: 53,
    weight: 20.6,
    createdAt: new Date('2019-04-25 09:00:16').toISOString(),
  },
  {
    petId: 146,
    weight: 20.52,
    createdAt: new Date('2018-08-20 11:58:15').toISOString(),
  },
  {
    petId: 233,
    weight: 23.67,
    createdAt: new Date('2019-01-16 16:46:13').toISOString(),
  },
  {
    petId: 230,
    weight: 16.8,
    createdAt: new Date('2019-06-09 12:32:20').toISOString(),
  },
  {
    petId: 135,
    weight: 15.45,
    createdAt: new Date('2019-09-15 18:51:53').toISOString(),
  },
  {
    petId: 100,
    weight: 16.99,
    createdAt: new Date('2018-07-19 16:29:48').toISOString(),
  },
  {
    petId: 247,
    weight: 21.37,
    createdAt: new Date('2019-02-12 03:43:40').toISOString(),
  },
  {
    petId: 236,
    weight: 19.19,
    createdAt: new Date('2018-10-30 15:03:24').toISOString(),
  },
  {
    petId: 114,
    weight: 16.94,
    createdAt: new Date('2019-09-26 18:38:29').toISOString(),
  },
  {
    petId: 227,
    weight: 20.3,
    createdAt: new Date('2018-10-31 17:28:05').toISOString(),
  },
  {
    petId: 18,
    weight: 20.48,
    createdAt: new Date('2018-09-06 09:47:17').toISOString(),
  },
  {
    petId: 260,
    weight: 20.96,
    createdAt: new Date('2018-11-07 08:41:51').toISOString(),
  },
  {
    petId: 272,
    weight: 19.67,
    createdAt: new Date('2020-01-05 08:21:11').toISOString(),
  },
  {
    petId: 252,
    weight: 17.82,
    createdAt: new Date('2018-11-23 20:23:33').toISOString(),
  },
  {
    petId: 229,
    weight: 18.88,
    createdAt: new Date('2018-03-22 10:41:50').toISOString(),
  },
  {
    petId: 64,
    weight: 17.37,
    createdAt: new Date('2018-09-07 18:09:56').toISOString(),
  },
  {
    petId: 130,
    weight: 20.5,
    createdAt: new Date('2018-12-31 11:21:21').toISOString(),
  },
  {
    petId: 81,
    weight: 19.78,
    createdAt: new Date('2019-03-26 21:27:00').toISOString(),
  },
  {
    petId: 227,
    weight: 17.27,
    createdAt: new Date('2019-09-24 08:43:44').toISOString(),
  },
  {
    petId: 272,
    weight: 20.72,
    createdAt: new Date('2019-02-24 14:32:39').toISOString(),
  },
  {
    petId: 296,
    weight: 19.67,
    createdAt: new Date('2018-10-29 22:56:15').toISOString(),
  },
  {
    petId: 84,
    weight: 17.16,
    createdAt: new Date('2019-11-04 04:32:53').toISOString(),
  },
  {
    petId: 29,
    weight: 18.39,
    createdAt: new Date('2020-01-02 23:00:33').toISOString(),
  },
  {
    petId: 121,
    weight: 19.22,
    createdAt: new Date('2019-04-19 01:57:38').toISOString(),
  },
  {
    petId: 195,
    weight: 19.46,
    createdAt: new Date('2018-07-23 06:55:16').toISOString(),
  },
  {
    petId: 95,
    weight: 20.71,
    createdAt: new Date('2019-04-23 03:37:23').toISOString(),
  },
  {
    petId: 210,
    weight: 19.73,
    createdAt: new Date('2019-02-08 02:06:00').toISOString(),
  },
  {
    petId: 119,
    weight: 20.5,
    createdAt: new Date('2020-01-16 18:49:52').toISOString(),
  },
  {
    petId: 63,
    weight: 19.66,
    createdAt: new Date('2019-07-02 18:07:49').toISOString(),
  },
  {
    petId: 67,
    weight: 21.37,
    createdAt: new Date('2018-08-28 15:32:17').toISOString(),
  },
  {
    petId: 225,
    weight: 23.04,
    createdAt: new Date('2018-03-12 01:11:01').toISOString(),
  },
  {
    petId: 213,
    weight: 18.2,
    createdAt: new Date('2019-12-14 10:16:07').toISOString(),
  },
  {
    petId: 18,
    weight: 22.6,
    createdAt: new Date('2018-10-20 17:28:18').toISOString(),
  },
  {
    petId: 191,
    weight: 21.23,
    createdAt: new Date('2018-12-26 22:55:16').toISOString(),
  },
  {
    petId: 3,
    weight: 20.26,
    createdAt: new Date('2019-09-07 16:11:15').toISOString(),
  },
  {
    petId: 208,
    weight: 21.22,
    createdAt: new Date('2018-09-06 16:17:39').toISOString(),
  },
  {
    petId: 153,
    weight: 20.15,
    createdAt: new Date('2018-09-18 13:38:12').toISOString(),
  },
  {
    petId: 85,
    weight: 19.92,
    createdAt: new Date('2019-06-22 13:59:01').toISOString(),
  },
  {
    petId: 81,
    weight: 19.42,
    createdAt: new Date('2019-10-10 18:10:11').toISOString(),
  },
  {
    petId: 104,
    weight: 18.89,
    createdAt: new Date('2019-03-22 05:23:52').toISOString(),
  },
  {
    petId: 29,
    weight: 16.7,
    createdAt: new Date('2018-10-21 19:12:22').toISOString(),
  },
  {
    petId: 274,
    weight: 20.08,
    createdAt: new Date('2018-06-15 08:55:05').toISOString(),
  },
  {
    petId: 124,
    weight: 16.09,
    createdAt: new Date('2019-05-11 01:46:04').toISOString(),
  },
  {
    petId: 165,
    weight: 25.49,
    createdAt: new Date('2019-07-27 09:33:19').toISOString(),
  },
  {
    petId: 244,
    weight: 21.49,
    createdAt: new Date('2018-04-23 09:41:21').toISOString(),
  },
  {
    petId: 212,
    weight: 19.89,
    createdAt: new Date('2019-10-17 17:34:32').toISOString(),
  },
  {
    petId: 92,
    weight: 18.0,
    createdAt: new Date('2018-05-25 13:16:26').toISOString(),
  },
  {
    petId: 34,
    weight: 19.45,
    createdAt: new Date('2018-08-09 22:43:14').toISOString(),
  },
  {
    petId: 259,
    weight: 18.97,
    createdAt: new Date('2019-05-21 10:59:59').toISOString(),
  },
  {
    petId: 124,
    weight: 19.64,
    createdAt: new Date('2019-06-15 14:57:31').toISOString(),
  },
  {
    petId: 273,
    weight: 17.75,
    createdAt: new Date('2019-04-29 22:47:46').toISOString(),
  },
  {
    petId: 169,
    weight: 17.63,
    createdAt: new Date('2019-04-28 22:08:04').toISOString(),
  },
  {
    petId: 215,
    weight: 18.25,
    createdAt: new Date('2018-02-07 21:46:24').toISOString(),
  },
  {
    petId: 29,
    weight: 22.3,
    createdAt: new Date('2020-01-30 18:26:23').toISOString(),
  },
  {
    petId: 25,
    weight: 22.61,
    createdAt: new Date('2018-10-26 06:38:47').toISOString(),
  },
  {
    petId: 62,
    weight: 19.67,
    createdAt: new Date('2018-04-03 22:20:27').toISOString(),
  },
  {
    petId: 95,
    weight: 19.36,
    createdAt: new Date('2019-07-25 06:26:08').toISOString(),
  },
  {
    petId: 69,
    weight: 17.0,
    createdAt: new Date('2018-09-06 16:03:22').toISOString(),
  },
  {
    petId: 205,
    weight: 20.18,
    createdAt: new Date('2018-08-06 11:38:24').toISOString(),
  },
  {
    petId: 16,
    weight: 19.93,
    createdAt: new Date('2018-09-15 10:24:23').toISOString(),
  },
  {
    petId: 91,
    weight: 23.34,
    createdAt: new Date('2020-01-14 09:40:13').toISOString(),
  },
  {
    petId: 245,
    weight: 23.44,
    createdAt: new Date('2018-05-24 07:08:12').toISOString(),
  },
  {
    petId: 108,
    weight: 20.6,
    createdAt: new Date('2019-06-14 15:08:06').toISOString(),
  },
  {
    petId: 260,
    weight: 21.53,
    createdAt: new Date('2019-03-10 21:28:10').toISOString(),
  },
  {
    petId: 275,
    weight: 20.86,
    createdAt: new Date('2020-01-13 07:21:06').toISOString(),
  },
  {
    petId: 21,
    weight: 19.17,
    createdAt: new Date('2018-04-25 18:53:10').toISOString(),
  },
  {
    petId: 156,
    weight: 19.58,
    createdAt: new Date('2018-08-29 11:47:42').toISOString(),
  },
  {
    petId: 281,
    weight: 16.01,
    createdAt: new Date('2019-05-28 01:27:27').toISOString(),
  },
  {
    petId: 280,
    weight: 21.72,
    createdAt: new Date('2018-04-26 02:25:42').toISOString(),
  },
  {
    petId: 62,
    weight: 19.99,
    createdAt: new Date('2018-05-22 07:12:15').toISOString(),
  },
  {
    petId: 234,
    weight: 22.36,
    createdAt: new Date('2018-12-22 08:19:32').toISOString(),
  },
  {
    petId: 68,
    weight: 21.13,
    createdAt: new Date('2020-01-16 04:52:33').toISOString(),
  },
  {
    petId: 216,
    weight: 20.44,
    createdAt: new Date('2018-09-20 17:16:52').toISOString(),
  },
  {
    petId: 139,
    weight: 19.48,
    createdAt: new Date('2018-03-24 19:12:47').toISOString(),
  },
  {
    petId: 2,
    weight: 25.77,
    createdAt: new Date('2018-07-18 09:31:13').toISOString(),
  },
  {
    petId: 199,
    weight: 21.13,
    createdAt: new Date('2018-12-09 13:20:41').toISOString(),
  },
  {
    petId: 13,
    weight: 18.41,
    createdAt: new Date('2019-10-19 02:29:00').toISOString(),
  },
  {
    petId: 19,
    weight: 17.22,
    createdAt: new Date('2018-07-06 00:31:21').toISOString(),
  },
  {
    petId: 250,
    weight: 20.92,
    createdAt: new Date('2019-11-25 01:26:04').toISOString(),
  },
  {
    petId: 94,
    weight: 19.13,
    createdAt: new Date('2018-10-03 10:32:18').toISOString(),
  },
  {
    petId: 25,
    weight: 23.74,
    createdAt: new Date('2018-08-14 03:11:30').toISOString(),
  },
  {
    petId: 83,
    weight: 20.18,
    createdAt: new Date('2018-03-22 10:13:15').toISOString(),
  },
  {
    petId: 46,
    weight: 16.92,
    createdAt: new Date('2019-02-05 17:13:38').toISOString(),
  },
  {
    petId: 42,
    weight: 21.96,
    createdAt: new Date('2018-11-27 16:15:22').toISOString(),
  },
  {
    petId: 81,
    weight: 18.7,
    createdAt: new Date('2019-07-07 23:10:01').toISOString(),
  },
  {
    petId: 53,
    weight: 19.01,
    createdAt: new Date('2019-12-15 02:07:39').toISOString(),
  },
  {
    petId: 13,
    weight: 19.08,
    createdAt: new Date('2018-11-15 18:15:20').toISOString(),
  },
  {
    petId: 121,
    weight: 21.59,
    createdAt: new Date('2018-02-11 20:41:53').toISOString(),
  },
  {
    petId: 190,
    weight: 20.32,
    createdAt: new Date('2019-09-26 09:42:22').toISOString(),
  },
  {
    petId: 151,
    weight: 19.43,
    createdAt: new Date('2019-02-01 11:19:46').toISOString(),
  },
  {
    petId: 288,
    weight: 19.5,
    createdAt: new Date('2019-10-22 04:52:35').toISOString(),
  },
  {
    petId: 75,
    weight: 18.29,
    createdAt: new Date('2018-02-20 04:00:39').toISOString(),
  },
  {
    petId: 160,
    weight: 17.6,
    createdAt: new Date('2020-01-19 22:04:45').toISOString(),
  },
  {
    petId: 213,
    weight: 20.98,
    createdAt: new Date('2020-01-31 10:08:34').toISOString(),
  },
  {
    petId: 222,
    weight: 19.47,
    createdAt: new Date('2018-03-30 04:34:04').toISOString(),
  },
  {
    petId: 124,
    weight: 17.84,
    createdAt: new Date('2018-02-17 18:22:56').toISOString(),
  },
  {
    petId: 108,
    weight: 16.09,
    createdAt: new Date('2019-04-02 12:20:46').toISOString(),
  },
  {
    petId: 100,
    weight: 17.25,
    createdAt: new Date('2019-07-09 22:32:55').toISOString(),
  },
  {
    petId: 242,
    weight: 17.96,
    createdAt: new Date('2019-05-24 16:35:39').toISOString(),
  },
  {
    petId: 284,
    weight: 16.61,
    createdAt: new Date('2020-01-08 13:46:13').toISOString(),
  },
  {
    petId: 216,
    weight: 19.59,
    createdAt: new Date('2020-01-11 21:59:14').toISOString(),
  },
  {
    petId: 190,
    weight: 19.05,
    createdAt: new Date('2019-04-29 03:12:51').toISOString(),
  },
  {
    petId: 165,
    weight: 19.78,
    createdAt: new Date('2019-01-06 03:42:11').toISOString(),
  },
  {
    petId: 85,
    weight: 19.3,
    createdAt: new Date('2018-06-21 22:27:13').toISOString(),
  },
  {
    petId: 141,
    weight: 21.53,
    createdAt: new Date('2018-10-24 22:47:36').toISOString(),
  },
  {
    petId: 113,
    weight: 16.25,
    createdAt: new Date('2019-11-24 16:56:59').toISOString(),
  },
  {
    petId: 170,
    weight: 20.39,
    createdAt: new Date('2018-03-06 18:39:50').toISOString(),
  },
  {
    petId: 220,
    weight: 21.76,
    createdAt: new Date('2020-01-18 01:03:13').toISOString(),
  },
  {
    petId: 285,
    weight: 23.28,
    createdAt: new Date('2018-04-13 20:39:40').toISOString(),
  },
  {
    petId: 275,
    weight: 19.09,
    createdAt: new Date('2018-09-27 20:34:47').toISOString(),
  },
  {
    petId: 11,
    weight: 19.38,
    createdAt: new Date('2018-10-09 23:20:44').toISOString(),
  },
  {
    petId: 91,
    weight: 18.1,
    createdAt: new Date('2019-05-13 11:58:58').toISOString(),
  },
  {
    petId: 146,
    weight: 21.26,
    createdAt: new Date('2018-07-16 11:29:45').toISOString(),
  },
  {
    petId: 135,
    weight: 19.71,
    createdAt: new Date('2018-04-23 23:08:16').toISOString(),
  },
  {
    petId: 26,
    weight: 19.7,
    createdAt: new Date('2018-06-09 17:04:53').toISOString(),
  },
  {
    petId: 137,
    weight: 17.21,
    createdAt: new Date('2018-02-27 02:46:28').toISOString(),
  },
  {
    petId: 170,
    weight: 21.94,
    createdAt: new Date('2020-01-06 00:50:12').toISOString(),
  },
  {
    petId: 269,
    weight: 16.75,
    createdAt: new Date('2018-12-06 10:56:34').toISOString(),
  },
  {
    petId: 216,
    weight: 18.14,
    createdAt: new Date('2019-03-11 03:43:39').toISOString(),
  },
  {
    petId: 217,
    weight: 19.17,
    createdAt: new Date('2018-12-19 13:18:40').toISOString(),
  },
  {
    petId: 13,
    weight: 21.92,
    createdAt: new Date('2018-10-19 16:07:05').toISOString(),
  },
  {
    petId: 195,
    weight: 21.24,
    createdAt: new Date('2018-02-17 18:24:32').toISOString(),
  },
  {
    petId: 276,
    weight: 20.03,
    createdAt: new Date('2018-04-14 19:46:39').toISOString(),
  },
  {
    petId: 117,
    weight: 18.59,
    createdAt: new Date('2018-07-07 00:38:42').toISOString(),
  },
  {
    petId: 294,
    weight: 21.02,
    createdAt: new Date('2019-04-22 17:58:31').toISOString(),
  },
  {
    petId: 250,
    weight: 20.94,
    createdAt: new Date('2019-12-15 16:36:01').toISOString(),
  },
  {
    petId: 101,
    weight: 20.47,
    createdAt: new Date('2018-02-06 05:57:45').toISOString(),
  },
  {
    petId: 18,
    weight: 20.86,
    createdAt: new Date('2019-07-02 11:45:05').toISOString(),
  },
  {
    petId: 252,
    weight: 19.0,
    createdAt: new Date('2018-10-10 20:54:37').toISOString(),
  },
  {
    petId: 189,
    weight: 23.35,
    createdAt: new Date('2018-11-30 21:46:48').toISOString(),
  },
  {
    petId: 179,
    weight: 19.82,
    createdAt: new Date('2019-10-07 15:25:22').toISOString(),
  },
  {
    petId: 95,
    weight: 20.02,
    createdAt: new Date('2019-03-03 01:43:38').toISOString(),
  },
  {
    petId: 83,
    weight: 22.5,
    createdAt: new Date('2020-01-28 02:42:03').toISOString(),
  },
  {
    petId: 194,
    weight: 16.86,
    createdAt: new Date('2019-01-07 10:53:21').toISOString(),
  },
  {
    petId: 14,
    weight: 22.13,
    createdAt: new Date('2018-02-12 08:53:26').toISOString(),
  },
  {
    petId: 26,
    weight: 17.07,
    createdAt: new Date('2018-06-09 07:27:43').toISOString(),
  },
  {
    petId: 87,
    weight: 20.94,
    createdAt: new Date('2018-11-08 04:10:07').toISOString(),
  },
  {
    petId: 18,
    weight: 22.42,
    createdAt: new Date('2018-06-18 15:12:36').toISOString(),
  },
  {
    petId: 241,
    weight: 22.79,
    createdAt: new Date('2018-09-18 22:06:04').toISOString(),
  },
  {
    petId: 158,
    weight: 18.77,
    createdAt: new Date('2019-09-07 15:01:46').toISOString(),
  },
  {
    petId: 5,
    weight: 19.54,
    createdAt: new Date('2019-10-30 03:50:07').toISOString(),
  },
  {
    petId: 100,
    weight: 17.57,
    createdAt: new Date('2019-06-14 20:05:04').toISOString(),
  },
  {
    petId: 298,
    weight: 21.98,
    createdAt: new Date('2019-09-05 05:44:51').toISOString(),
  },
  {
    petId: 107,
    weight: 23.29,
    createdAt: new Date('2020-01-14 01:55:11').toISOString(),
  },
  {
    petId: 123,
    weight: 23.04,
    createdAt: new Date('2018-10-26 08:39:14').toISOString(),
  },
  {
    petId: 208,
    weight: 18.26,
    createdAt: new Date('2018-07-28 03:26:41').toISOString(),
  },
  {
    petId: 197,
    weight: 22.08,
    createdAt: new Date('2019-11-23 09:16:45').toISOString(),
  },
  {
    petId: 73,
    weight: 22.57,
    createdAt: new Date('2019-01-09 02:38:37').toISOString(),
  },
  {
    petId: 284,
    weight: 16.81,
    createdAt: new Date('2019-09-17 01:24:01').toISOString(),
  },
  {
    petId: 170,
    weight: 18.64,
    createdAt: new Date('2019-02-16 10:41:00').toISOString(),
  },
  {
    petId: 272,
    weight: 20.17,
    createdAt: new Date('2019-03-30 02:58:58').toISOString(),
  },
  {
    petId: 212,
    weight: 18.35,
    createdAt: new Date('2018-11-03 13:08:00').toISOString(),
  },
  {
    petId: 70,
    weight: 20.42,
    createdAt: new Date('2019-08-24 15:53:14').toISOString(),
  },
  {
    petId: 237,
    weight: 19.85,
    createdAt: new Date('2019-05-31 18:00:40').toISOString(),
  },
  {
    petId: 99,
    weight: 18.68,
    createdAt: new Date('2019-11-03 04:17:56').toISOString(),
  },
  {
    petId: 170,
    weight: 18.84,
    createdAt: new Date('2020-01-07 23:16:44').toISOString(),
  },
  {
    petId: 109,
    weight: 18.73,
    createdAt: new Date('2018-07-18 10:35:08').toISOString(),
  },
  {
    petId: 123,
    weight: 20.51,
    createdAt: new Date('2019-11-06 01:55:40').toISOString(),
  },
  {
    petId: 244,
    weight: 21.17,
    createdAt: new Date('2019-02-19 14:52:54').toISOString(),
  },
  {
    petId: 165,
    weight: 19.73,
    createdAt: new Date('2020-01-19 02:45:24').toISOString(),
  },
  {
    petId: 117,
    weight: 20.41,
    createdAt: new Date('2019-04-04 08:59:55').toISOString(),
  },
  {
    petId: 145,
    weight: 19.59,
    createdAt: new Date('2018-09-18 02:14:28').toISOString(),
  },
  {
    petId: 113,
    weight: 19.36,
    createdAt: new Date('2019-04-27 09:10:29').toISOString(),
  },
  {
    petId: 260,
    weight: 19.76,
    createdAt: new Date('2019-07-11 09:57:50').toISOString(),
  },
  {
    petId: 229,
    weight: 22.44,
    createdAt: new Date('2019-11-28 23:42:18').toISOString(),
  },
  {
    petId: 16,
    weight: 19.71,
    createdAt: new Date('2019-01-13 03:05:55').toISOString(),
  },
  {
    petId: 104,
    weight: 23.04,
    createdAt: new Date('2018-03-25 21:11:29').toISOString(),
  },
  {
    petId: 190,
    weight: 19.22,
    createdAt: new Date('2018-04-23 11:49:45').toISOString(),
  },
  {
    petId: 210,
    weight: 20.08,
    createdAt: new Date('2018-10-03 16:40:20').toISOString(),
  },
  {
    petId: 146,
    weight: 19.06,
    createdAt: new Date('2018-05-07 12:32:26').toISOString(),
  },
  {
    petId: 225,
    weight: 18.08,
    createdAt: new Date('2018-09-14 08:04:54').toISOString(),
  },
  {
    petId: 91,
    weight: 20.29,
    createdAt: new Date('2018-10-07 17:11:20').toISOString(),
  },
  {
    petId: 69,
    weight: 20.96,
    createdAt: new Date('2019-01-07 12:40:20').toISOString(),
  },
  {
    petId: 230,
    weight: 17.82,
    createdAt: new Date('2018-09-15 02:28:14').toISOString(),
  },
  {
    petId: 217,
    weight: 20.03,
    createdAt: new Date('2018-08-03 04:49:38').toISOString(),
  },
  {
    petId: 220,
    weight: 19.2,
    createdAt: new Date('2018-02-09 09:40:26').toISOString(),
  },
  {
    petId: 193,
    weight: 26.13,
    createdAt: new Date('2020-07-24 16:05:39').toISOString(),
  },
  {
    petId: 80,
    weight: 29.05,
    createdAt: new Date('2022-06-20 18:15:26').toISOString(),
  },
  {
    petId: 215,
    weight: 32.84,
    createdAt: new Date('2020-12-21 19:34:41').toISOString(),
  },
  {
    petId: 179,
    weight: 31.49,
    createdAt: new Date('2020-07-06 03:45:42').toISOString(),
  },
  {
    petId: 101,
    weight: 34.98,
    createdAt: new Date('2022-03-08 15:55:08').toISOString(),
  },
  {
    petId: 130,
    weight: 28.74,
    createdAt: new Date('2022-11-12 10:29:13').toISOString(),
  },
  {
    petId: 115,
    weight: 32.46,
    createdAt: new Date('2021-05-03 20:30:09').toISOString(),
  },
  {
    petId: 292,
    weight: 28.13,
    createdAt: new Date('2022-12-31 07:29:14').toISOString(),
  },
  {
    petId: 14,
    weight: 32.18,
    createdAt: new Date('2022-11-11 04:20:12').toISOString(),
  },
  {
    petId: 147,
    weight: 30.93,
    createdAt: new Date('2023-01-24 05:56:12').toISOString(),
  },
  {
    petId: 215,
    weight: 34.31,
    createdAt: new Date('2022-03-23 12:53:17').toISOString(),
  },
  {
    petId: 184,
    weight: 24.13,
    createdAt: new Date('2020-07-16 08:14:01').toISOString(),
  },
  {
    petId: 186,
    weight: 28.53,
    createdAt: new Date('2022-05-06 22:55:44').toISOString(),
  },
  {
    petId: 298,
    weight: 28.98,
    createdAt: new Date('2020-12-24 07:06:50').toISOString(),
  },
  {
    petId: 195,
    weight: 27.98,
    createdAt: new Date('2021-01-24 17:33:26').toISOString(),
  },
  {
    petId: 221,
    weight: 31.32,
    createdAt: new Date('2022-05-06 10:55:28').toISOString(),
  },
  {
    petId: 290,
    weight: 31.13,
    createdAt: new Date('2021-07-22 08:03:03').toISOString(),
  },
  {
    petId: 178,
    weight: 30.24,
    createdAt: new Date('2022-07-02 11:07:29').toISOString(),
  },
  {
    petId: 115,
    weight: 33.49,
    createdAt: new Date('2022-09-29 21:58:54').toISOString(),
  },
  {
    petId: 239,
    weight: 29.3,
    createdAt: new Date('2022-01-16 01:19:52').toISOString(),
  },
  {
    petId: 197,
    weight: 28.67,
    createdAt: new Date('2021-04-01 12:16:47').toISOString(),
  },
  {
    petId: 124,
    weight: 36.16,
    createdAt: new Date('2020-02-04 10:45:43').toISOString(),
  },
  {
    petId: 3,
    weight: 28.48,
    createdAt: new Date('2022-03-05 15:02:28').toISOString(),
  },
  {
    petId: 174,
    weight: 31.27,
    createdAt: new Date('2022-03-16 21:23:47').toISOString(),
  },
  {
    petId: 298,
    weight: 26.52,
    createdAt: new Date('2021-12-14 14:41:29').toISOString(),
  },
  {
    petId: 92,
    weight: 29.09,
    createdAt: new Date('2022-06-08 17:45:58').toISOString(),
  },
  {
    petId: 25,
    weight: 30.89,
    createdAt: new Date('2020-06-27 16:45:09').toISOString(),
  },
  {
    petId: 26,
    weight: 26.72,
    createdAt: new Date('2020-11-13 22:07:53').toISOString(),
  },
  {
    petId: 218,
    weight: 30.29,
    createdAt: new Date('2020-08-10 20:28:50').toISOString(),
  },
  {
    petId: 239,
    weight: 32.18,
    createdAt: new Date('2020-12-30 00:39:25').toISOString(),
  },
  {
    petId: 104,
    weight: 34.91,
    createdAt: new Date('2021-05-18 01:51:34').toISOString(),
  },
  {
    petId: 95,
    weight: 31.06,
    createdAt: new Date('2021-07-17 14:03:21').toISOString(),
  },
  {
    petId: 186,
    weight: 30.0,
    createdAt: new Date('2021-10-28 22:41:36').toISOString(),
  },
  {
    petId: 94,
    weight: 30.75,
    createdAt: new Date('2021-05-08 04:23:32').toISOString(),
  },
  {
    petId: 292,
    weight: 31.67,
    createdAt: new Date('2021-12-05 11:29:41').toISOString(),
  },
  {
    petId: 134,
    weight: 31.36,
    createdAt: new Date('2020-09-01 05:17:49').toISOString(),
  },
  {
    petId: 178,
    weight: 31.32,
    createdAt: new Date('2021-06-27 11:29:32').toISOString(),
  },
  {
    petId: 139,
    weight: 30.15,
    createdAt: new Date('2022-02-04 10:13:46').toISOString(),
  },
  {
    petId: 241,
    weight: 30.65,
    createdAt: new Date('2021-05-14 14:41:47').toISOString(),
  },
  {
    petId: 209,
    weight: 36.99,
    createdAt: new Date('2020-11-24 20:49:26').toISOString(),
  },
  {
    petId: 76,
    weight: 35.24,
    createdAt: new Date('2022-11-08 09:07:45').toISOString(),
  },
  {
    petId: 61,
    weight: 37.34,
    createdAt: new Date('2020-06-23 16:56:20').toISOString(),
  },
  {
    petId: 21,
    weight: 23.88,
    createdAt: new Date('2022-10-18 06:42:44').toISOString(),
  },
  {
    petId: 217,
    weight: 31.17,
    createdAt: new Date('2021-07-08 17:36:22').toISOString(),
  },
  {
    petId: 125,
    weight: 30.89,
    createdAt: new Date('2020-02-05 05:57:49').toISOString(),
  },
  {
    petId: 79,
    weight: 25.45,
    createdAt: new Date('2020-02-24 01:15:06').toISOString(),
  },
  {
    petId: 94,
    weight: 27.85,
    createdAt: new Date('2020-05-04 08:19:10').toISOString(),
  },
  {
    petId: 226,
    weight: 27.57,
    createdAt: new Date('2022-11-29 00:56:05').toISOString(),
  },
  {
    petId: 48,
    weight: 26.02,
    createdAt: new Date('2020-02-24 06:11:36').toISOString(),
  },
  {
    petId: 286,
    weight: 27.18,
    createdAt: new Date('2021-04-18 00:24:57').toISOString(),
  },
  {
    petId: 244,
    weight: 27.05,
    createdAt: new Date('2021-11-11 20:48:37').toISOString(),
  },
  {
    petId: 36,
    weight: 32.73,
    createdAt: new Date('2020-10-15 20:48:52').toISOString(),
  },
  {
    petId: 73,
    weight: 28.82,
    createdAt: new Date('2021-03-14 16:32:03').toISOString(),
  },
  {
    petId: 276,
    weight: 32.5,
    createdAt: new Date('2022-02-16 01:46:02').toISOString(),
  },
  {
    petId: 48,
    weight: 30.44,
    createdAt: new Date('2020-02-26 02:35:10').toISOString(),
  },
  {
    petId: 237,
    weight: 34.25,
    createdAt: new Date('2021-09-07 14:41:34').toISOString(),
  },
  {
    petId: 94,
    weight: 31.23,
    createdAt: new Date('2022-03-26 12:39:45').toISOString(),
  },
  {
    petId: 217,
    weight: 31.63,
    createdAt: new Date('2022-09-13 13:03:23').toISOString(),
  },
  {
    petId: 156,
    weight: 33.88,
    createdAt: new Date('2021-01-02 05:42:20').toISOString(),
  },
  {
    petId: 62,
    weight: 32.94,
    createdAt: new Date('2021-05-08 21:01:40').toISOString(),
  },
  {
    petId: 85,
    weight: 35.8,
    createdAt: new Date('2020-04-12 03:09:55').toISOString(),
  },
  {
    petId: 85,
    weight: 33.78,
    createdAt: new Date('2021-03-30 00:53:06').toISOString(),
  },
  {
    petId: 36,
    weight: 30.18,
    createdAt: new Date('2021-02-16 02:04:11').toISOString(),
  },
  {
    petId: 206,
    weight: 30.23,
    createdAt: new Date('2022-06-11 21:07:42').toISOString(),
  },
  {
    petId: 153,
    weight: 35.73,
    createdAt: new Date('2022-10-19 13:28:13').toISOString(),
  },
  {
    petId: 142,
    weight: 29.49,
    createdAt: new Date('2021-10-12 16:17:39').toISOString(),
  },
  {
    petId: 282,
    weight: 29.38,
    createdAt: new Date('2021-09-19 19:53:22').toISOString(),
  },
  {
    petId: 66,
    weight: 32.14,
    createdAt: new Date('2020-04-28 11:51:47').toISOString(),
  },
  {
    petId: 93,
    weight: 33.68,
    createdAt: new Date('2021-12-09 11:01:14').toISOString(),
  },
  {
    petId: 236,
    weight: 31.93,
    createdAt: new Date('2020-02-20 12:45:04').toISOString(),
  },
  {
    petId: 233,
    weight: 29.15,
    createdAt: new Date('2021-03-11 14:14:40').toISOString(),
  },
  {
    petId: 188,
    weight: 29.61,
    createdAt: new Date('2020-11-22 06:12:42').toISOString(),
  },
  {
    petId: 3,
    weight: 34.05,
    createdAt: new Date('2022-10-16 15:23:59').toISOString(),
  },
  {
    petId: 186,
    weight: 30.96,
    createdAt: new Date('2021-04-17 23:10:47').toISOString(),
  },
  {
    petId: 61,
    weight: 32.37,
    createdAt: new Date('2021-05-02 23:12:37').toISOString(),
  },
  {
    petId: 252,
    weight: 26.75,
    createdAt: new Date('2022-02-06 20:57:12').toISOString(),
  },
  {
    petId: 80,
    weight: 24.99,
    createdAt: new Date('2020-08-14 02:13:34').toISOString(),
  },
  {
    petId: 247,
    weight: 31.96,
    createdAt: new Date('2022-06-05 02:55:39').toISOString(),
  },
  {
    petId: 279,
    weight: 28.55,
    createdAt: new Date('2022-10-29 02:44:06').toISOString(),
  },
  {
    petId: 174,
    weight: 32.4,
    createdAt: new Date('2021-08-28 08:07:05').toISOString(),
  },
  {
    petId: 179,
    weight: 29.98,
    createdAt: new Date('2020-11-14 22:03:04').toISOString(),
  },
  {
    petId: 212,
    weight: 27.52,
    createdAt: new Date('2021-01-09 07:46:18').toISOString(),
  },
  {
    petId: 210,
    weight: 30.9,
    createdAt: new Date('2022-11-06 09:21:55').toISOString(),
  },
  {
    petId: 213,
    weight: 34.18,
    createdAt: new Date('2021-09-30 05:49:32').toISOString(),
  },
  {
    petId: 184,
    weight: 28.77,
    createdAt: new Date('2023-01-28 21:31:02').toISOString(),
  },
  {
    petId: 223,
    weight: 30.03,
    createdAt: new Date('2021-12-18 04:19:15').toISOString(),
  },
  {
    petId: 99,
    weight: 27.4,
    createdAt: new Date('2021-07-13 04:52:12').toISOString(),
  },
  {
    petId: 134,
    weight: 28.65,
    createdAt: new Date('2021-04-01 19:09:31').toISOString(),
  },
  {
    petId: 296,
    weight: 28.97,
    createdAt: new Date('2021-07-04 13:24:44').toISOString(),
  },
  {
    petId: 15,
    weight: 26.86,
    createdAt: new Date('2022-03-30 16:47:26').toISOString(),
  },
  {
    petId: 30,
    weight: 32.63,
    createdAt: new Date('2021-03-01 04:44:28').toISOString(),
  },
  {
    petId: 125,
    weight: 29.59,
    createdAt: new Date('2021-08-22 11:02:22').toISOString(),
  },
  {
    petId: 247,
    weight: 29.36,
    createdAt: new Date('2022-04-01 18:39:40').toISOString(),
  },
  {
    petId: 58,
    weight: 26.29,
    createdAt: new Date('2023-01-18 15:51:53').toISOString(),
  },
  {
    petId: 255,
    weight: 26.12,
    createdAt: new Date('2021-09-25 14:14:40').toISOString(),
  },
  {
    petId: 174,
    weight: 33.92,
    createdAt: new Date('2022-01-09 09:05:49').toISOString(),
  },
  {
    petId: 135,
    weight: 32.05,
    createdAt: new Date('2021-05-28 17:07:51').toISOString(),
  },
  {
    petId: 260,
    weight: 30.15,
    createdAt: new Date('2020-11-01 14:12:59').toISOString(),
  },
  {
    petId: 56,
    weight: 36.94,
    createdAt: new Date('2020-07-28 09:05:30').toISOString(),
  },
  {
    petId: 89,
    weight: 29.07,
    createdAt: new Date('2020-12-11 18:57:49').toISOString(),
  },
  {
    petId: 79,
    weight: 31.64,
    createdAt: new Date('2022-03-31 03:46:19').toISOString(),
  },
  {
    petId: 284,
    weight: 31.94,
    createdAt: new Date('2020-11-30 03:54:23').toISOString(),
  },
  {
    petId: 16,
    weight: 28.4,
    createdAt: new Date('2022-10-14 09:35:49').toISOString(),
  },
  {
    petId: 213,
    weight: 35.59,
    createdAt: new Date('2022-12-19 18:49:13').toISOString(),
  },
  {
    petId: 87,
    weight: 29.81,
    createdAt: new Date('2021-12-03 02:24:16').toISOString(),
  },
  {
    petId: 218,
    weight: 25.97,
    createdAt: new Date('2021-11-20 00:47:10').toISOString(),
  },
  {
    petId: 297,
    weight: 32.71,
    createdAt: new Date('2020-04-18 00:00:27').toISOString(),
  },
  {
    petId: 273,
    weight: 34.76,
    createdAt: new Date('2021-08-14 08:36:26').toISOString(),
  },
  {
    petId: 153,
    weight: 29.42,
    createdAt: new Date('2021-02-26 03:38:14').toISOString(),
  },
  {
    petId: 133,
    weight: 27.98,
    createdAt: new Date('2021-06-25 02:58:07').toISOString(),
  },
  {
    petId: 272,
    weight: 33.97,
    createdAt: new Date('2022-05-22 21:00:11').toISOString(),
  },
  {
    petId: 125,
    weight: 31.29,
    createdAt: new Date('2022-05-12 16:39:43').toISOString(),
  },
  {
    petId: 63,
    weight: 26.01,
    createdAt: new Date('2022-03-06 06:36:28').toISOString(),
  },
  {
    petId: 104,
    weight: 30.48,
    createdAt: new Date('2021-11-06 09:54:29').toISOString(),
  },
  {
    petId: 63,
    weight: 29.88,
    createdAt: new Date('2021-06-02 22:49:47').toISOString(),
  },
  {
    petId: 228,
    weight: 33.76,
    createdAt: new Date('2021-05-20 06:02:49').toISOString(),
  },
  {
    petId: 8,
    weight: 25.24,
    createdAt: new Date('2021-03-29 02:53:17').toISOString(),
  },
  {
    petId: 12,
    weight: 26.9,
    createdAt: new Date('2022-03-07 23:40:23').toISOString(),
  },
  {
    petId: 64,
    weight: 32.33,
    createdAt: new Date('2021-04-21 12:20:54').toISOString(),
  },
  {
    petId: 42,
    weight: 33.52,
    createdAt: new Date('2021-05-02 09:00:01').toISOString(),
  },
  {
    petId: 275,
    weight: 30.27,
    createdAt: new Date('2021-11-09 12:00:47').toISOString(),
  },
  {
    petId: 21,
    weight: 30.32,
    createdAt: new Date('2021-10-23 02:32:07').toISOString(),
  },
  {
    petId: 192,
    weight: 27.57,
    createdAt: new Date('2021-01-27 06:33:49').toISOString(),
  },
  {
    petId: 193,
    weight: 31.47,
    createdAt: new Date('2021-05-06 15:08:07').toISOString(),
  },
  {
    petId: 84,
    weight: 27.73,
    createdAt: new Date('2021-05-05 01:59:02').toISOString(),
  },
  {
    petId: 65,
    weight: 32.96,
    createdAt: new Date('2020-05-22 22:45:08').toISOString(),
  },
  {
    petId: 135,
    weight: 27.8,
    createdAt: new Date('2020-08-01 19:21:24').toISOString(),
  },
  {
    petId: 223,
    weight: 27.79,
    createdAt: new Date('2020-06-30 00:54:15').toISOString(),
  },
  {
    petId: 255,
    weight: 31.33,
    createdAt: new Date('2023-01-23 19:29:11').toISOString(),
  },
  {
    petId: 87,
    weight: 28.81,
    createdAt: new Date('2021-01-31 04:07:29').toISOString(),
  },
  {
    petId: 59,
    weight: 29.37,
    createdAt: new Date('2022-12-16 22:20:42').toISOString(),
  },
  {
    petId: 75,
    weight: 33.76,
    createdAt: new Date('2020-08-29 15:35:10').toISOString(),
  },
  {
    petId: 254,
    weight: 30.9,
    createdAt: new Date('2020-04-18 03:30:43').toISOString(),
  },
  {
    petId: 285,
    weight: 35.27,
    createdAt: new Date('2023-01-26 07:33:20').toISOString(),
  },
  {
    petId: 41,
    weight: 28.5,
    createdAt: new Date('2021-09-02 08:11:49').toISOString(),
  },
  {
    petId: 178,
    weight: 34.09,
    createdAt: new Date('2022-02-05 05:44:30').toISOString(),
  },
  {
    petId: 120,
    weight: 30.09,
    createdAt: new Date('2021-02-20 06:36:04').toISOString(),
  },
  {
    petId: 141,
    weight: 30.47,
    createdAt: new Date('2021-01-22 07:04:52').toISOString(),
  },
  {
    petId: 67,
    weight: 31.4,
    createdAt: new Date('2021-10-15 12:36:06').toISOString(),
  },
  {
    petId: 282,
    weight: 22.81,
    createdAt: new Date('2020-05-15 15:53:11').toISOString(),
  },
  {
    petId: 64,
    weight: 33.62,
    createdAt: new Date('2021-09-27 04:37:35').toISOString(),
  },
  {
    petId: 113,
    weight: 30.79,
    createdAt: new Date('2022-09-05 15:38:29').toISOString(),
  },
  {
    petId: 281,
    weight: 29.79,
    createdAt: new Date('2020-08-13 23:42:20').toISOString(),
  },
  {
    petId: 147,
    weight: 29.6,
    createdAt: new Date('2020-10-24 10:13:43').toISOString(),
  },
  {
    petId: 15,
    weight: 34.86,
    createdAt: new Date('2021-12-22 14:07:54').toISOString(),
  },
  {
    petId: 282,
    weight: 32.22,
    createdAt: new Date('2020-11-08 14:26:59').toISOString(),
  },
  {
    petId: 3,
    weight: 31.39,
    createdAt: new Date('2020-09-25 16:20:29').toISOString(),
  },
  {
    petId: 179,
    weight: 31.23,
    createdAt: new Date('2022-05-28 18:31:47').toISOString(),
  },
  {
    petId: 290,
    weight: 25.65,
    createdAt: new Date('2022-09-06 08:36:36').toISOString(),
  },
  {
    petId: 123,
    weight: 35.26,
    createdAt: new Date('2021-06-27 22:00:57').toISOString(),
  },
  {
    petId: 115,
    weight: 35.7,
    createdAt: new Date('2021-07-13 02:29:41').toISOString(),
  },
  {
    petId: 258,
    weight: 29.99,
    createdAt: new Date('2022-06-14 21:57:00').toISOString(),
  },
  {
    petId: 14,
    weight: 25.18,
    createdAt: new Date('2020-03-15 15:44:04').toISOString(),
  },
  {
    petId: 221,
    weight: 34.81,
    createdAt: new Date('2022-12-29 04:57:18').toISOString(),
  },
  {
    petId: 114,
    weight: 27.96,
    createdAt: new Date('2020-04-05 23:54:54').toISOString(),
  },
  {
    petId: 226,
    weight: 26.0,
    createdAt: new Date('2020-09-09 22:29:17').toISOString(),
  },
  {
    petId: 188,
    weight: 31.97,
    createdAt: new Date('2021-12-30 12:05:38').toISOString(),
  },
  {
    petId: 214,
    weight: 28.44,
    createdAt: new Date('2020-03-31 18:41:44').toISOString(),
  },
  {
    petId: 134,
    weight: 29.01,
    createdAt: new Date('2022-08-20 18:47:21').toISOString(),
  },
  {
    petId: 84,
    weight: 32.51,
    createdAt: new Date('2022-02-28 16:35:36').toISOString(),
  },
  {
    petId: 197,
    weight: 26.65,
    createdAt: new Date('2020-05-10 03:12:52').toISOString(),
  },
  {
    petId: 275,
    weight: 32.49,
    createdAt: new Date('2022-07-20 09:21:29').toISOString(),
  },
  {
    petId: 2,
    weight: 31.26,
    createdAt: new Date('2020-11-25 05:25:55').toISOString(),
  },
  {
    petId: 129,
    weight: 29.04,
    createdAt: new Date('2022-06-26 00:46:56').toISOString(),
  },
  {
    petId: 294,
    weight: 30.39,
    createdAt: new Date('2021-10-14 09:02:13').toISOString(),
  },
  {
    petId: 12,
    weight: 30.66,
    createdAt: new Date('2022-06-18 17:13:33').toISOString(),
  },
  {
    petId: 192,
    weight: 29.48,
    createdAt: new Date('2021-02-03 13:51:54').toISOString(),
  },
  {
    petId: 65,
    weight: 26.73,
    createdAt: new Date('2022-08-05 15:10:55').toISOString(),
  },
  {
    petId: 20,
    weight: 28.67,
    createdAt: new Date('2022-10-27 21:46:42').toISOString(),
  },
  {
    petId: 75,
    weight: 27.03,
    createdAt: new Date('2021-09-15 11:12:43').toISOString(),
  },
  {
    petId: 98,
    weight: 31.05,
    createdAt: new Date('2021-07-09 07:14:17').toISOString(),
  },
  {
    petId: 174,
    weight: 23.58,
    createdAt: new Date('2021-11-24 04:49:04').toISOString(),
  },
  {
    petId: 8,
    weight: 26.41,
    createdAt: new Date('2021-02-19 18:48:18').toISOString(),
  },
  {
    petId: 65,
    weight: 35.08,
    createdAt: new Date('2023-01-26 12:08:33').toISOString(),
  },
  {
    petId: 279,
    weight: 29.76,
    createdAt: new Date('2022-08-07 22:17:35').toISOString(),
  },
  {
    petId: 114,
    weight: 26.82,
    createdAt: new Date('2020-02-06 12:46:50').toISOString(),
  },
  {
    petId: 130,
    weight: 27.86,
    createdAt: new Date('2022-04-09 02:13:56').toISOString(),
  },
  {
    petId: 121,
    weight: 28.94,
    createdAt: new Date('2022-04-10 15:13:42').toISOString(),
  },
  {
    petId: 53,
    weight: 24.8,
    createdAt: new Date('2021-07-31 16:12:12').toISOString(),
  },
  {
    petId: 109,
    weight: 27.63,
    createdAt: new Date('2020-03-08 01:58:45').toISOString(),
  },
  {
    petId: 200,
    weight: 35.91,
    createdAt: new Date('2021-07-11 11:59:21').toISOString(),
  },
  {
    petId: 288,
    weight: 29.59,
    createdAt: new Date('2021-10-15 09:11:39').toISOString(),
  },
  {
    petId: 70,
    weight: 25.72,
    createdAt: new Date('2022-12-24 15:49:09').toISOString(),
  },
  {
    petId: 239,
    weight: 34.14,
    createdAt: new Date('2021-04-19 14:37:38').toISOString(),
  },
  {
    petId: 194,
    weight: 30.08,
    createdAt: new Date('2020-02-02 20:56:34').toISOString(),
  },
  {
    petId: 44,
    weight: 26.99,
    createdAt: new Date('2022-09-25 08:17:36').toISOString(),
  },
  {
    petId: 191,
    weight: 35.78,
    createdAt: new Date('2020-12-14 15:59:25').toISOString(),
  },
  {
    petId: 293,
    weight: 33.86,
    createdAt: new Date('2022-02-20 17:31:04').toISOString(),
  },
  {
    petId: 274,
    weight: 31.85,
    createdAt: new Date('2022-04-17 06:02:23').toISOString(),
  },
  {
    petId: 224,
    weight: 31.25,
    createdAt: new Date('2022-08-08 15:11:12').toISOString(),
  },
  {
    petId: 3,
    weight: 29.83,
    createdAt: new Date('2020-05-05 07:19:48').toISOString(),
  },
  {
    petId: 292,
    weight: 31.26,
    createdAt: new Date('2021-04-04 00:07:50').toISOString(),
  },
  {
    petId: 66,
    weight: 31.82,
    createdAt: new Date('2021-03-07 02:28:31').toISOString(),
  },
  {
    petId: 165,
    weight: 26.28,
    createdAt: new Date('2022-02-17 02:25:59').toISOString(),
  },
  {
    petId: 98,
    weight: 33.69,
    createdAt: new Date('2022-12-13 12:28:08').toISOString(),
  },
  {
    petId: 174,
    weight: 27.41,
    createdAt: new Date('2022-06-04 03:17:08').toISOString(),
  },
  {
    petId: 287,
    weight: 30.41,
    createdAt: new Date('2020-06-12 07:28:23').toISOString(),
  },
  {
    petId: 208,
    weight: 31.57,
    createdAt: new Date('2022-09-24 12:07:48').toISOString(),
  },
  {
    petId: 101,
    weight: 29.3,
    createdAt: new Date('2020-06-01 07:00:59').toISOString(),
  },
  {
    petId: 99,
    weight: 36.13,
    createdAt: new Date('2021-11-08 23:30:58').toISOString(),
  },
  {
    petId: 215,
    weight: 31.48,
    createdAt: new Date('2020-06-01 22:32:57').toISOString(),
  },
  {
    petId: 275,
    weight: 24.83,
    createdAt: new Date('2022-12-28 12:06:09').toISOString(),
  },
  {
    petId: 139,
    weight: 34.97,
    createdAt: new Date('2022-09-15 10:13:49').toISOString(),
  },
  {
    petId: 224,
    weight: 37.31,
    createdAt: new Date('2021-02-07 10:28:21').toISOString(),
  },
  {
    petId: 217,
    weight: 32.16,
    createdAt: new Date('2020-09-17 11:57:03').toISOString(),
  },
  {
    petId: 71,
    weight: 25.88,
    createdAt: new Date('2022-11-18 14:09:01').toISOString(),
  },
  {
    petId: 142,
    weight: 30.54,
    createdAt: new Date('2021-03-24 07:20:19').toISOString(),
  },
  {
    petId: 112,
    weight: 26.41,
    createdAt: new Date('2022-09-29 16:19:34').toISOString(),
  },
  {
    petId: 236,
    weight: 26.94,
    createdAt: new Date('2022-01-03 16:12:23').toISOString(),
  },
  {
    petId: 288,
    weight: 33.68,
    createdAt: new Date('2020-04-13 21:21:36').toISOString(),
  },
  {
    petId: 224,
    weight: 32.07,
    createdAt: new Date('2022-11-13 14:03:23').toISOString(),
  },
  {
    petId: 70,
    weight: 31.57,
    createdAt: new Date('2020-11-19 01:56:31').toISOString(),
  },
  {
    petId: 19,
    weight: 28.11,
    createdAt: new Date('2020-12-12 01:41:20').toISOString(),
  },
  {
    petId: 21,
    weight: 30.09,
    createdAt: new Date('2021-02-26 11:43:52').toISOString(),
  },
  {
    petId: 179,
    weight: 28.52,
    createdAt: new Date('2020-04-30 19:25:45').toISOString(),
  },
  {
    petId: 62,
    weight: 32.61,
    createdAt: new Date('2020-10-16 09:23:13').toISOString(),
  },
  {
    petId: 123,
    weight: 27.3,
    createdAt: new Date('2021-03-07 15:42:17').toISOString(),
  },
  {
    petId: 163,
    weight: 28.73,
    createdAt: new Date('2020-10-28 01:39:03').toISOString(),
  },
  {
    petId: 174,
    weight: 30.46,
    createdAt: new Date('2021-04-25 23:54:35').toISOString(),
  },
  {
    petId: 34,
    weight: 28.88,
    createdAt: new Date('2021-02-09 18:28:03').toISOString(),
  },
  {
    petId: 71,
    weight: 30.56,
    createdAt: new Date('2022-09-05 09:42:47').toISOString(),
  },
  {
    petId: 153,
    weight: 29.52,
    createdAt: new Date('2021-06-17 13:35:58').toISOString(),
  },
  {
    petId: 290,
    weight: 31.76,
    createdAt: new Date('2021-03-19 01:09:07').toISOString(),
  },
  {
    petId: 190,
    weight: 30.73,
    createdAt: new Date('2020-09-08 09:12:22').toISOString(),
  },
  {
    petId: 42,
    weight: 28.81,
    createdAt: new Date('2021-02-22 10:41:13').toISOString(),
  },
  {
    petId: 66,
    weight: 32.69,
    createdAt: new Date('2020-11-05 06:31:32').toISOString(),
  },
  {
    petId: 191,
    weight: 31.75,
    createdAt: new Date('2020-08-17 06:45:42').toISOString(),
  },
  {
    petId: 118,
    weight: 26.1,
    createdAt: new Date('2022-10-05 04:43:28').toISOString(),
  },
  {
    petId: 71,
    weight: 26.82,
    createdAt: new Date('2020-05-11 19:51:37').toISOString(),
  },
  {
    petId: 130,
    weight: 34.01,
    createdAt: new Date('2022-01-09 17:15:19').toISOString(),
  },
  {
    petId: 276,
    weight: 27.6,
    createdAt: new Date('2021-10-04 01:56:39').toISOString(),
  },
  {
    petId: 125,
    weight: 28.48,
    createdAt: new Date('2020-09-23 01:55:22').toISOString(),
  },
  {
    petId: 297,
    weight: 36.44,
    createdAt: new Date('2022-09-11 06:01:58').toISOString(),
  },
  {
    petId: 193,
    weight: 30.92,
    createdAt: new Date('2022-12-11 18:02:47').toISOString(),
  },
  {
    petId: 230,
    weight: 26.59,
    createdAt: new Date('2021-12-24 06:52:23').toISOString(),
  },
  {
    petId: 133,
    weight: 26.0,
    createdAt: new Date('2021-11-12 17:19:33').toISOString(),
  },
  {
    petId: 227,
    weight: 23.38,
    createdAt: new Date('2022-01-01 16:12:15').toISOString(),
  },
  {
    petId: 165,
    weight: 28.06,
    createdAt: new Date('2021-02-22 21:52:59').toISOString(),
  },
  {
    petId: 291,
    weight: 32.16,
    createdAt: new Date('2022-10-04 03:32:02').toISOString(),
  },
  {
    petId: 294,
    weight: 34.83,
    createdAt: new Date('2021-03-08 03:37:03').toISOString(),
  },
  {
    petId: 22,
    weight: 28.58,
    createdAt: new Date('2020-07-04 11:31:54').toISOString(),
  },
  {
    petId: 239,
    weight: 31.93,
    createdAt: new Date('2022-09-14 06:08:43').toISOString(),
  },
  {
    petId: 260,
    weight: 33.11,
    createdAt: new Date('2020-02-29 21:30:51').toISOString(),
  },
  {
    petId: 30,
    weight: 28.53,
    createdAt: new Date('2022-08-23 06:43:14').toISOString(),
  },
  {
    petId: 139,
    weight: 24.53,
    createdAt: new Date('2022-08-06 05:49:25').toISOString(),
  },
  {
    petId: 61,
    weight: 30.0,
    createdAt: new Date('2021-03-18 12:54:21').toISOString(),
  },
  {
    petId: 130,
    weight: 33.52,
    createdAt: new Date('2022-09-19 11:06:03').toISOString(),
  },
  {
    petId: 73,
    weight: 36.86,
    createdAt: new Date('2022-02-16 20:59:49').toISOString(),
  },
  {
    petId: 182,
    weight: 27.44,
    createdAt: new Date('2022-08-08 10:39:46').toISOString(),
  },
  {
    petId: 42,
    weight: 30.64,
    createdAt: new Date('2022-04-05 16:35:21').toISOString(),
  },
  {
    petId: 295,
    weight: 33.08,
    createdAt: new Date('2021-01-31 15:41:34').toISOString(),
  },
  {
    petId: 184,
    weight: 27.64,
    createdAt: new Date('2022-11-14 08:35:57').toISOString(),
  },
  {
    petId: 182,
    weight: 27.84,
    createdAt: new Date('2020-10-05 02:27:04').toISOString(),
  },
  {
    petId: 61,
    weight: 31.55,
    createdAt: new Date('2022-05-21 04:29:03').toISOString(),
  },
  {
    petId: 244,
    weight: 31.52,
    createdAt: new Date('2021-06-25 12:51:43').toISOString(),
  },
  {
    petId: 146,
    weight: 31.07,
    createdAt: new Date('2020-06-20 07:05:48').toISOString(),
  },
  {
    petId: 179,
    weight: 29.58,
    createdAt: new Date('2022-08-29 18:10:06').toISOString(),
  },
  {
    petId: 237,
    weight: 28.19,
    createdAt: new Date('2020-04-16 05:25:17').toISOString(),
  },
  {
    petId: 200,
    weight: 28.2,
    createdAt: new Date('2021-10-06 19:25:54').toISOString(),
  },
  {
    petId: 222,
    weight: 27.1,
    createdAt: new Date('2020-07-19 03:19:38').toISOString(),
  },
  {
    petId: 50,
    weight: 28.89,
    createdAt: new Date('2022-04-02 07:56:51').toISOString(),
  },
  {
    petId: 89,
    weight: 33.13,
    createdAt: new Date('2022-03-04 18:09:16').toISOString(),
  },
  {
    petId: 160,
    weight: 31.78,
    createdAt: new Date('2020-09-28 15:37:25').toISOString(),
  },
  {
    petId: 296,
    weight: 31.14,
    createdAt: new Date('2021-08-30 17:29:44').toISOString(),
  },
  {
    petId: 98,
    weight: 30.26,
    createdAt: new Date('2022-04-24 14:50:37').toISOString(),
  },
  {
    petId: 182,
    weight: 33.28,
    createdAt: new Date('2021-07-13 15:49:11').toISOString(),
  },
  {
    petId: 210,
    weight: 28.74,
    createdAt: new Date('2022-12-01 08:50:15').toISOString(),
  },
  {
    petId: 174,
    weight: 35.74,
    createdAt: new Date('2022-05-10 14:10:55').toISOString(),
  },
  {
    petId: 2,
    weight: 28.96,
    createdAt: new Date('2022-06-12 20:24:26').toISOString(),
  },
  {
    petId: 93,
    weight: 29.91,
    createdAt: new Date('2022-03-14 23:02:20').toISOString(),
  },
  {
    petId: 118,
    weight: 29.0,
    createdAt: new Date('2022-07-21 11:31:59').toISOString(),
  },
  {
    petId: 194,
    weight: 26.72,
    createdAt: new Date('2022-05-05 05:53:12').toISOString(),
  },
  {
    petId: 280,
    weight: 26.85,
    createdAt: new Date('2020-11-29 03:35:43').toISOString(),
  },
  {
    petId: 8,
    weight: 28.69,
    createdAt: new Date('2022-05-08 18:13:03').toISOString(),
  },
  {
    petId: 245,
    weight: 27.29,
    createdAt: new Date('2022-04-27 17:05:19').toISOString(),
  },
  {
    petId: 107,
    weight: 22.56,
    createdAt: new Date('2020-02-18 05:12:25').toISOString(),
  },
  {
    petId: 25,
    weight: 27.51,
    createdAt: new Date('2021-06-20 07:08:44').toISOString(),
  },
  {
    petId: 219,
    weight: 36.76,
    createdAt: new Date('2021-06-08 06:54:43').toISOString(),
  },
  {
    petId: 36,
    weight: 27.17,
    createdAt: new Date('2020-09-23 19:39:55').toISOString(),
  },
  {
    petId: 215,
    weight: 29.77,
    createdAt: new Date('2020-12-22 08:13:36').toISOString(),
  },
  {
    petId: 43,
    weight: 30.83,
    createdAt: new Date('2022-02-15 08:23:27').toISOString(),
  },
  {
    petId: 260,
    weight: 28.19,
    createdAt: new Date('2021-01-14 03:47:23').toISOString(),
  },
  {
    petId: 236,
    weight: 37.24,
    createdAt: new Date('2022-04-10 15:51:49').toISOString(),
  },
  {
    petId: 81,
    weight: 35.93,
    createdAt: new Date('2021-03-02 12:00:55').toISOString(),
  },
  {
    petId: 103,
    weight: 30.32,
    createdAt: new Date('2020-03-17 05:03:46').toISOString(),
  },
  {
    petId: 219,
    weight: 28.74,
    createdAt: new Date('2021-03-07 01:06:16').toISOString(),
  },
  {
    petId: 237,
    weight: 23.9,
    createdAt: new Date('2022-09-20 15:16:17').toISOString(),
  },
  {
    petId: 120,
    weight: 31.57,
    createdAt: new Date('2020-10-12 02:08:53').toISOString(),
  },
  {
    petId: 286,
    weight: 30.75,
    createdAt: new Date('2021-03-31 17:51:16').toISOString(),
  },
  {
    petId: 169,
    weight: 31.69,
    createdAt: new Date('2021-01-21 20:19:44').toISOString(),
  },
  {
    petId: 12,
    weight: 24.84,
    createdAt: new Date('2021-09-23 09:38:05').toISOString(),
  },
  {
    petId: 81,
    weight: 25.17,
    createdAt: new Date('2022-07-13 13:17:21').toISOString(),
  },
  {
    petId: 20,
    weight: 26.96,
    createdAt: new Date('2021-10-20 21:42:49').toISOString(),
  },
  {
    petId: 189,
    weight: 29.18,
    createdAt: new Date('2020-12-09 11:11:34').toISOString(),
  },
  {
    petId: 233,
    weight: 26.2,
    createdAt: new Date('2020-08-02 14:26:09').toISOString(),
  },
  {
    petId: 276,
    weight: 35.31,
    createdAt: new Date('2023-01-18 04:20:51').toISOString(),
  },
  {
    petId: 50,
    weight: 28.63,
    createdAt: new Date('2020-10-03 18:45:48').toISOString(),
  },
  {
    petId: 276,
    weight: 31.61,
    createdAt: new Date('2022-10-29 02:52:32').toISOString(),
  },
  {
    petId: 74,
    weight: 31.46,
    createdAt: new Date('2020-08-10 08:10:55').toISOString(),
  },
  {
    petId: 133,
    weight: 30.47,
    createdAt: new Date('2021-04-28 02:40:22').toISOString(),
  },
  {
    petId: 133,
    weight: 29.69,
    createdAt: new Date('2022-03-26 13:11:00').toISOString(),
  },
  {
    petId: 59,
    weight: 28.86,
    createdAt: new Date('2022-02-01 01:25:21').toISOString(),
  },
  {
    petId: 20,
    weight: 29.11,
    createdAt: new Date('2020-03-18 03:04:10').toISOString(),
  },
  {
    petId: 74,
    weight: 31.68,
    createdAt: new Date('2021-03-12 07:05:22').toISOString(),
  },
  {
    petId: 71,
    weight: 31.88,
    createdAt: new Date('2022-08-12 14:32:31').toISOString(),
  },
  {
    petId: 254,
    weight: 31.18,
    createdAt: new Date('2022-07-07 16:43:17').toISOString(),
  },
  {
    petId: 85,
    weight: 31.97,
    createdAt: new Date('2022-06-02 02:27:51').toISOString(),
  },
  {
    petId: 119,
    weight: 27.75,
    createdAt: new Date('2021-04-25 10:02:55').toISOString(),
  },
  {
    petId: 213,
    weight: 28.94,
    createdAt: new Date('2021-01-17 07:57:58').toISOString(),
  },
  {
    petId: 11,
    weight: 29.33,
    createdAt: new Date('2020-02-14 00:00:32').toISOString(),
  },
  {
    petId: 272,
    weight: 29.63,
    createdAt: new Date('2020-06-30 12:15:02').toISOString(),
  },
  {
    petId: 167,
    weight: 33.98,
    createdAt: new Date('2020-10-14 06:18:34').toISOString(),
  },
  {
    petId: 213,
    weight: 30.18,
    createdAt: new Date('2022-03-23 10:47:34').toISOString(),
  },
  {
    petId: 50,
    weight: 34.29,
    createdAt: new Date('2021-03-29 03:29:00').toISOString(),
  },
  {
    petId: 141,
    weight: 30.26,
    createdAt: new Date('2022-10-17 20:46:52').toISOString(),
  },
  {
    petId: 184,
    weight: 29.26,
    createdAt: new Date('2020-02-03 23:23:11').toISOString(),
  },
  {
    petId: 292,
    weight: 25.93,
    createdAt: new Date('2022-04-23 13:38:24').toISOString(),
  },
  {
    petId: 259,
    weight: 29.42,
    createdAt: new Date('2020-06-09 06:48:45').toISOString(),
  },
  {
    petId: 288,
    weight: 27.63,
    createdAt: new Date('2022-08-21 15:37:50').toISOString(),
  },
  {
    petId: 14,
    weight: 28.63,
    createdAt: new Date('2020-09-18 03:32:20').toISOString(),
  },
  {
    petId: 47,
    weight: 29.76,
    createdAt: new Date('2020-12-14 14:44:47').toISOString(),
  },
  {
    petId: 99,
    weight: 32.23,
    createdAt: new Date('2020-12-08 01:17:49').toISOString(),
  },
  {
    petId: 139,
    weight: 31.16,
    createdAt: new Date('2022-04-28 12:25:20').toISOString(),
  },
  {
    petId: 206,
    weight: 30.13,
    createdAt: new Date('2022-11-05 04:54:47').toISOString(),
  },
  {
    petId: 247,
    weight: 28.82,
    createdAt: new Date('2021-10-26 15:45:17').toISOString(),
  },
  {
    petId: 53,
    weight: 31.0,
    createdAt: new Date('2022-02-14 03:13:38').toISOString(),
  },
  {
    petId: 197,
    weight: 23.9,
    createdAt: new Date('2022-01-20 21:47:12').toISOString(),
  },
  {
    petId: 20,
    weight: 33.14,
    createdAt: new Date('2023-01-08 10:02:14').toISOString(),
  },
  {
    petId: 191,
    weight: 32.4,
    createdAt: new Date('2021-05-06 00:48:40').toISOString(),
  },
  {
    petId: 122,
    weight: 27.62,
    createdAt: new Date('2021-09-21 16:05:26').toISOString(),
  },
  {
    petId: 200,
    weight: 29.56,
    createdAt: new Date('2020-09-18 00:56:59').toISOString(),
  },
  {
    petId: 30,
    weight: 27.39,
    createdAt: new Date('2021-12-09 07:17:48').toISOString(),
  },
  {
    petId: 107,
    weight: 35.94,
    createdAt: new Date('2020-02-02 08:56:59').toISOString(),
  },
  {
    petId: 255,
    weight: 33.11,
    createdAt: new Date('2022-08-27 07:37:41').toISOString(),
  },
  {
    petId: 91,
    weight: 24.23,
    createdAt: new Date('2022-08-09 15:36:08').toISOString(),
  },
  {
    petId: 121,
    weight: 30.61,
    createdAt: new Date('2020-10-23 08:46:13').toISOString(),
  },
  {
    petId: 84,
    weight: 31.1,
    createdAt: new Date('2021-01-19 04:24:05').toISOString(),
  },
  {
    petId: 142,
    weight: 27.02,
    createdAt: new Date('2020-07-21 04:06:45').toISOString(),
  },
  {
    petId: 102,
    weight: 29.05,
    createdAt: new Date('2021-02-06 09:26:26').toISOString(),
  },
  {
    petId: 79,
    weight: 34.56,
    createdAt: new Date('2020-04-10 10:08:38').toISOString(),
  },
  {
    petId: 80,
    weight: 31.9,
    createdAt: new Date('2022-08-24 04:56:04').toISOString(),
  },
  {
    petId: 118,
    weight: 29.25,
    createdAt: new Date('2021-03-20 23:33:05').toISOString(),
  },
  {
    petId: 153,
    weight: 30.7,
    createdAt: new Date('2020-08-13 23:37:45').toISOString(),
  },
  {
    petId: 25,
    weight: 36.24,
    createdAt: new Date('2022-02-22 00:08:26').toISOString(),
  },
  {
    petId: 169,
    weight: 29.75,
    createdAt: new Date('2021-05-18 14:24:14').toISOString(),
  },
  {
    petId: 47,
    weight: 31.89,
    createdAt: new Date('2022-11-14 03:50:54').toISOString(),
  },
  {
    petId: 124,
    weight: 27.72,
    createdAt: new Date('2020-09-04 19:35:29').toISOString(),
  },
  {
    petId: 264,
    weight: 22.76,
    createdAt: new Date('2023-01-17 18:27:11').toISOString(),
  },
  {
    petId: 157,
    weight: 26.45,
    createdAt: new Date('2021-08-20 21:59:19').toISOString(),
  },
  {
    petId: 154,
    weight: 31.67,
    createdAt: new Date('2021-08-10 07:05:31').toISOString(),
  },
  {
    petId: 42,
    weight: 23.63,
    createdAt: new Date('2021-12-17 21:46:10').toISOString(),
  },
  {
    petId: 45,
    weight: 29.35,
    createdAt: new Date('2022-12-30 09:44:11').toISOString(),
  },
  {
    petId: 272,
    weight: 30.89,
    createdAt: new Date('2021-12-01 13:56:19').toISOString(),
  },
  {
    petId: 26,
    weight: 25.83,
    createdAt: new Date('2022-06-05 08:46:10').toISOString(),
  },
  {
    petId: 223,
    weight: 28.4,
    createdAt: new Date('2022-04-01 21:57:19').toISOString(),
  },
  {
    petId: 65,
    weight: 33.58,
    createdAt: new Date('2020-08-03 04:51:25').toISOString(),
  },
  {
    petId: 216,
    weight: 25.84,
    createdAt: new Date('2021-09-29 09:17:52').toISOString(),
  },
  {
    petId: 117,
    weight: 28.61,
    createdAt: new Date('2020-12-23 20:46:50').toISOString(),
  },
  {
    petId: 252,
    weight: 31.46,
    createdAt: new Date('2020-07-25 15:18:25').toISOString(),
  },
  {
    petId: 239,
    weight: 27.72,
    createdAt: new Date('2022-05-15 00:03:01').toISOString(),
  },
  {
    petId: 260,
    weight: 33.24,
    createdAt: new Date('2022-07-05 20:28:10').toISOString(),
  },
  {
    petId: 160,
    weight: 26.86,
    createdAt: new Date('2022-03-06 15:37:26').toISOString(),
  },
  {
    petId: 255,
    weight: 24.98,
    createdAt: new Date('2020-10-07 05:12:45').toISOString(),
  },
  {
    petId: 157,
    weight: 23.3,
    createdAt: new Date('2022-05-16 14:36:47').toISOString(),
  },
  {
    petId: 11,
    weight: 32.54,
    createdAt: new Date('2021-09-05 20:02:30').toISOString(),
  },
  {
    petId: 98,
    weight: 33.41,
    createdAt: new Date('2021-04-13 21:08:28').toISOString(),
  },
  {
    petId: 258,
    weight: 29.71,
    createdAt: new Date('2022-07-25 22:58:03').toISOString(),
  },
  {
    petId: 113,
    weight: 28.09,
    createdAt: new Date('2021-10-24 18:55:07').toISOString(),
  },
  {
    petId: 146,
    weight: 29.61,
    createdAt: new Date('2020-02-09 19:06:09').toISOString(),
  },
  {
    petId: 247,
    weight: 30.62,
    createdAt: new Date('2021-01-16 10:22:38').toISOString(),
  },
  {
    petId: 2,
    weight: 30.32,
    createdAt: new Date('2020-07-11 14:09:58').toISOString(),
  },
  {
    petId: 169,
    weight: 29.04,
    createdAt: new Date('2020-10-29 14:36:27').toISOString(),
  },
  {
    petId: 221,
    weight: 32.55,
    createdAt: new Date('2021-05-06 04:33:09').toISOString(),
  },
  {
    petId: 50,
    weight: 27.6,
    createdAt: new Date('2021-01-08 00:57:47').toISOString(),
  },
  {
    petId: 123,
    weight: 27.69,
    createdAt: new Date('2023-01-01 18:07:03').toISOString(),
  },
  {
    petId: 141,
    weight: 27.18,
    createdAt: new Date('2022-03-21 23:32:43').toISOString(),
  },
  {
    petId: 137,
    weight: 32.93,
    createdAt: new Date('2020-07-22 23:50:30').toISOString(),
  },
  {
    petId: 15,
    weight: 33.89,
    createdAt: new Date('2020-07-11 14:52:48').toISOString(),
  },
  {
    petId: 208,
    weight: 27.95,
    createdAt: new Date('2021-10-14 23:19:16').toISOString(),
  },
  {
    petId: 25,
    weight: 29.09,
    createdAt: new Date('2020-09-20 08:19:49').toISOString(),
  },
  {
    petId: 245,
    weight: 29.6,
    createdAt: new Date('2021-09-12 06:44:19').toISOString(),
  },
  {
    petId: 239,
    weight: 30.46,
    createdAt: new Date('2021-05-17 00:43:34').toISOString(),
  },
  {
    petId: 95,
    weight: 32.58,
    createdAt: new Date('2022-06-05 17:38:19').toISOString(),
  },
  {
    petId: 188,
    weight: 31.61,
    createdAt: new Date('2022-06-01 16:25:30').toISOString(),
  },
  {
    petId: 3,
    weight: 27.98,
    createdAt: new Date('2020-10-18 03:11:44').toISOString(),
  },
  {
    petId: 230,
    weight: 27.28,
    createdAt: new Date('2020-02-02 12:51:47').toISOString(),
  },
  {
    petId: 22,
    weight: 31.96,
    createdAt: new Date('2022-07-28 10:49:46').toISOString(),
  },
  {
    petId: 272,
    weight: 33.21,
    createdAt: new Date('2021-11-24 11:14:57').toISOString(),
  },
  {
    petId: 68,
    weight: 30.54,
    createdAt: new Date('2020-05-10 14:58:39').toISOString(),
  },
  {
    petId: 122,
    weight: 28.87,
    createdAt: new Date('2021-03-20 13:48:54').toISOString(),
  },
  {
    petId: 98,
    weight: 30.12,
    createdAt: new Date('2021-08-04 21:06:04').toISOString(),
  },
  {
    petId: 130,
    weight: 34.53,
    createdAt: new Date('2021-03-24 08:54:19').toISOString(),
  },
  {
    petId: 117,
    weight: 31.36,
    createdAt: new Date('2021-05-26 15:53:52').toISOString(),
  },
  {
    petId: 287,
    weight: 29.04,
    createdAt: new Date('2022-11-18 22:34:33').toISOString(),
  },
  {
    petId: 230,
    weight: 29.94,
    createdAt: new Date('2020-02-19 13:17:22').toISOString(),
  },
  {
    petId: 145,
    weight: 31.55,
    createdAt: new Date('2021-02-13 18:03:06').toISOString(),
  },
  {
    petId: 147,
    weight: 36.48,
    createdAt: new Date('2021-10-08 19:15:58').toISOString(),
  },
  {
    petId: 209,
    weight: 33.8,
    createdAt: new Date('2022-10-29 17:06:22').toISOString(),
  },
  {
    petId: 163,
    weight: 28.59,
    createdAt: new Date('2020-08-20 05:47:26').toISOString(),
  },
  {
    petId: 66,
    weight: 31.14,
    createdAt: new Date('2022-04-29 12:15:21').toISOString(),
  },
  {
    petId: 137,
    weight: 30.03,
    createdAt: new Date('2021-02-20 02:46:12').toISOString(),
  },
  {
    petId: 279,
    weight: 28.36,
    createdAt: new Date('2020-11-15 18:15:00').toISOString(),
  },
];

export default petWeightData;
