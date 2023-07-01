import { faker } from '@faker-js/faker/locale/vi';
import { PrismaClient } from '@prisma/client';
import * as dayjs from 'dayjs';
import 'dotenv/config';
import { STATUS } from '../../src/app/user/user.constants';
import { removeAccents } from '../../src/utils';
import seedRole from './001-role';
import { DATE_FORMAT } from '../../src/constants/base';
import { hashSync } from 'bcrypt';
import { randomInt } from 'crypto';
const prisma = new PrismaClient();

const seedUser = async () => {
  try {
    console.log('Start seeding user');
    const { admin, user } = await seedRole();
    // Create Super admin account
    await prisma.user.create({
      data: {
        email: 'khang.td194591@sis.hust.edu.vn',
        password: hashSync('@sang.123', 10),
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
    // Create normal account
    const promises = [];
    const numStaff = randomInt(10000);
    for (let i = 0; i < numStaff; i++) {
      const gender = Math.random() < 0.5 ? 'male' : 'female';
      const fullName =
        faker.person.lastName(gender) + ' ' + faker.person.firstName(gender);
      const firstName = fullName.split(' ').pop();
      const lastName = fullName
        .slice(0, fullName.length - firstName.length)
        .trim();
      const birthDay = dayjs(
        faker.date.birthdate({ min: 18, max: 40, mode: 'age' }),
      ).format(DATE_FORMAT);
      const email = `${removeAccents(firstName)}.${removeAccents(
        lastName,
      ).replace(' ', '')}${dayjs(birthDay).format(
        'MMDDYY',
      )}@ams.vn`.toLocaleLowerCase();
      const promise = prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          phone: faker.phone.number('0#########'),
          gender,
          birthDay,
          roleId: user.id,
          status: STATUS[1],
        },
      });
      promises.push(promise);
    }
    await Promise.all(promises);
    console.log('Seeding user success');
  } catch (error) {
    console.log(error);
  }
};

export default seedUser;
