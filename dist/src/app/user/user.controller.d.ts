import { PaginatedDto } from '../../interfaces/base.dto';
import { UserDto, UserQueryParamsDto, UserResponseDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(body: UserDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    createBulk(body: PaginatedDto<UserDto>): Promise<{
        count: number;
    }>;
    findAll(queryParams: UserQueryParamsDto): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, data: UserResponseDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    remove(id: string): Promise<import("@prisma/client/runtime").GetResult<{
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
}
