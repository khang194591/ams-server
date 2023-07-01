"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vi_1 = require("@faker-js/faker/locale/vi");
const client_1 = require("@prisma/client");
const dayjs = require("dayjs");
require("dotenv/config");
const user_constants_1 = require("../../src/app/user/user.constants");
const utils_1 = require("../../src/utils");
const _001_role_1 = require("./001-role");
const base_1 = require("../../src/constants/base");
const bcrypt_1 = require("bcrypt");
const crypto_1 = require("crypto");
const prisma = new client_1.PrismaClient();
const seedUser = async () => {
    try {
        console.log('Start seeding user');
        const { admin, user } = await (0, _001_role_1.default)();
        await prisma.user.create({
            data: {
                email: 'khang.td194591@sis.hust.edu.vn',
                password: (0, bcrypt_1.hashSync)('@sang.123', 10),
                firstName: 'Khang',
                lastName: 'Trịnh Đức',
                phone: '0862612659',
                birthDay: '2001-11-03',
                gender: 'male',
                status: 'active',
                roleId: admin.id,
                administrator: true,
            },
        });
        const promises = [];
        const numStaff = (0, crypto_1.randomInt)(10000);
        for (let i = 0; i < numStaff; i++) {
            const gender = Math.random() < 0.5 ? 'male' : 'female';
            const fullName = vi_1.faker.person.lastName(gender) + ' ' + vi_1.faker.person.firstName(gender);
            const firstName = fullName.split(' ').pop();
            const lastName = fullName
                .slice(0, fullName.length - firstName.length)
                .trim();
            const birthDay = dayjs(vi_1.faker.date.birthdate({ min: 18, max: 40, mode: 'age' })).format(base_1.DATE_FORMAT);
            const email = `${(0, utils_1.removeAccents)(firstName)}.${(0, utils_1.removeAccents)(lastName).replace(' ', '')}${dayjs(birthDay).format('MMDDYY')}@ams.vn`.toLocaleLowerCase();
            const promise = prisma.user.create({
                data: {
                    email,
                    firstName,
                    lastName,
                    phone: vi_1.faker.phone.number('0#########'),
                    gender,
                    birthDay,
                    roleId: user.id,
                    status: user_constants_1.STATUS[1],
                },
            });
            promises.push(promise);
        }
        await Promise.all(promises);
        console.log('Seeding user success');
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = seedUser;
//# sourceMappingURL=002-user.js.map