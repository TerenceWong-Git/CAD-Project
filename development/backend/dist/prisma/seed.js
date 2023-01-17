"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcryptjs");
const SALT_ROUNDS = 10;
async function hashPassword(plainPassword) {
    const hash = await bcrypt.hash(plainPassword, SALT_ROUNDS);
    return hash;
}
async function main() {
    const prisma = new client_1.PrismaClient();
    const insertUser = {
        email: 'terence@tecky.io',
        username: 'Terence',
        password: await hashPassword('@Tecky1234'),
        phoneNumber: 12345678,
        gender: client_1.Gender['Male'],
        district: client_1.District['Sha_tin'],
        yearBirth: 1998,
        monthBirth: 10,
        IsWriter: false,
    };
    await prisma.user.upsert({
        where: { email: insertUser.email },
        update: {},
        create: Object.assign({}, insertUser),
    });
}
main().then(() => console.log('seed done'));
//# sourceMappingURL=seed.js.map