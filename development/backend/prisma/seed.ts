import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const SALT_ROUNDS = 10;

async function hashPassword(plainPassword: string) {
  const hash: string = await bcrypt.hash(plainPassword, SALT_ROUNDS);
  return hash;
}

async function main() {
  const prisma = new PrismaClient();
  const insertUser = {
    email: 'jason@tecky.io',
    username: 'Jason',
    phone_number: 12345678,
    password: await hashPassword('1234'),
  };

  await prisma.user.upsert({
    where: { email: insertUser.email },
    update: {},
    create: { ...insertUser },
  });
}

main().then(() => console.log('seed done'));
