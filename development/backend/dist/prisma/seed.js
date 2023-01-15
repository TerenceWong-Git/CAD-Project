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
        email: 'jason@tecky.io',
        username: 'Jason',
        phone_number: 12345678,
        password: await hashPassword('1234'),
    };
    await prisma.user.upsert({
        where: { email: insertUser.email },
        update: {},
        create: Object.assign({}, insertUser),
    });
}
main().then(() => console.log('seed done'));
//# sourceMappingURL=seed.js.map