import { District, Gender, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const SALT_ROUNDS = 10;

async function hashPassword(plainPassword: string) {
  const hash: string = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  return hash;
}

async function main() {
  const prisma = new PrismaClient();
  const insertUser = {
    email: 'terence@tecky.io',
    username: 'Terence',
    password: await hashPassword('@Tecky1234'),
    phoneNumber: 12345678,
    gender: Gender['Male'],
    district: District['Sha_tin'],
    yearBirth: 1998,
    monthBirth: 10,
    IsWriter: false,
  };

  await prisma.user.upsert({
    where: { email: insertUser.email },
    update: {},
    create: { ...insertUser },
  });
}

main().then(() => console.log('seed done'));
