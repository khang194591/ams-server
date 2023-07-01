import { DatabaseService } from '../../modules/database/database.service';
import { UserDto, UserQueryParamsDto } from './user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    private readonly repository;
    create(data: UserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        gender: import(".prisma/client").Gender;
        birthDay: string;
        citizenId: string;
        bank: string;
        bankAccount: string;
        province: string;
        district: string;
        ward: string;
        address: string;
        status: import(".prisma/client").Status;
        administrator: boolean;
        roleId: number;
        avatarId: number;
        createdAt: Date;
        updatedAt: Date;
    }, {
        fullName: () => {
            needs: {
                firstName: true;
                lastName: true;
            };
            compute(user: {
                firstName: string;
                lastName: string;
            }): string;
        };
    }> & {}>;
    createBulk(data: UserDto[]): Promise<{
        count: number;
    }>;
    findAll(queryString: UserQueryParamsDto): Promise<{
        total: number;
        totalPage: number;
        items: ({
            role: {
                title: string;
            };
        } & import("@prisma/client/runtime").GetResult<{
            id: number;
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            phone: string;
            gender: import(".prisma/client").Gender;
            birthDay: string;
            citizenId: string;
            bank: string;
            bankAccount: string;
            province: string;
            district: string;
            ward: string;
            address: string;
            status: import(".prisma/client").Status;
            administrator: boolean;
            roleId: number;
            avatarId: number;
            createdAt: Date;
            updatedAt: Date;
        }, {
            fullName: () => {
                needs: {
                    firstName: true;
                    lastName: true;
                };
                compute(user: {
                    firstName: string;
                    lastName: string;
                }): string;
            };
        }> & {})[];
    }>;
    findById(id: number): Promise<{
        role: import("@prisma/client/runtime").GetResult<{
            id: number;
            title: string;
            permissions: string[];
            createdAt: Date;
            updatedAt: Date;
        }, {
            [x: string]: () => unknown;
        }> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        gender: import(".prisma/client").Gender;
        birthDay: string;
        citizenId: string;
        bank: string;
        bankAccount: string;
        province: string;
        district: string;
        ward: string;
        address: string;
        status: import(".prisma/client").Status;
        administrator: boolean;
        roleId: number;
        avatarId: number;
        createdAt: Date;
        updatedAt: Date;
    }, {
        fullName: () => {
            needs: {
                firstName: true;
                lastName: true;
            };
            compute(user: {
                firstName: string;
                lastName: string;
            }): string;
        };
    }> & {}>;
    findByEmail(email: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        gender: import(".prisma/client").Gender;
        birthDay: string;
        citizenId: string;
        bank: string;
        bankAccount: string;
        province: string;
        district: string;
        ward: string;
        address: string;
        status: import(".prisma/client").Status;
        administrator: boolean;
        roleId: number;
        avatarId: number;
        createdAt: Date;
        updatedAt: Date;
    }, {
        fullName: () => {
            needs: {
                firstName: true;
                lastName: true;
            };
            compute(user: {
                firstName: string;
                lastName: string;
            }): string;
        };
    }> & {}>;
    update(id: number, data: UserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        gender: import(".prisma/client").Gender;
        birthDay: string;
        citizenId: string;
        bank: string;
        bankAccount: string;
        province: string;
        district: string;
        ward: string;
        address: string;
        status: import(".prisma/client").Status;
        administrator: boolean;
        roleId: number;
        avatarId: number;
        createdAt: Date;
        updatedAt: Date;
    }, {
        fullName: () => {
            needs: {
                firstName: true;
                lastName: true;
            };
            compute(user: {
                firstName: string;
                lastName: string;
            }): string;
        };
    }> & {}>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        gender: import(".prisma/client").Gender;
        birthDay: string;
        citizenId: string;
        bank: string;
        bankAccount: string;
        province: string;
        district: string;
        ward: string;
        address: string;
        status: import(".prisma/client").Status;
        administrator: boolean;
        roleId: number;
        avatarId: number;
        createdAt: Date;
        updatedAt: Date;
    }, {
        fullName: () => {
            needs: {
                firstName: true;
                lastName: true;
            };
            compute(user: {
                firstName: string;
                lastName: string;
            }): string;
        };
    }> & {}>;
    deleteBulk(items: number[]): Promise<{
        count: number;
    }>;
}
