"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const permission_1 = require("../../src/constants/permission");
const prisma = new client_1.PrismaClient();
const seedRole = async () => {
    try {
        const permissions = Object.values(permission_1.Resource)
            .map((resource) => {
            return Object.values(permission_1.Action).map((action) => `${resource}#${action}`);
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
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = seedRole;
//# sourceMappingURL=001-role.js.map