import { PrismaClient } from '@prisma/client';
import { Action, Resource } from '../../src/constants/permission';

const prisma = new PrismaClient();

const seedRole = async () => {
  try {
    const permissions = Object.values(Resource)
      .map((resource) => {
        return Object.values(Action).map((action) => `${resource}#${action}`);
      })
      .flatMap((item) => item);

    const admin = await prisma.role.create({
      data: {
        title: 'Admin',
        permissions,
      },
    });

    const user = await prisma.role.create({
      data: {
        title: 'User',
        permissions: [],
      },
    });
    return { admin, user };
  } catch (error) {
    console.log(error);
  }
};

export default seedRole;
