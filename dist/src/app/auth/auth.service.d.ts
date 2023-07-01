import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { DatabaseService } from '../../modules/database/database.service';
import { UserService } from '../user/user.service';
import { SignInDto, SignUpDto } from './auth.dto';
import * as dayjs from 'dayjs';
export declare class AuthService {
    private readonly configService;
    private readonly prisma;
    private readonly userService;
    constructor(configService: ConfigService, prisma: DatabaseService, userService: UserService);
    signIn(data: SignInDto): Promise<{
        token: any;
        tokenExpiredAt: dayjs.Dayjs;
        user: import("@prisma/client/runtime").GetResult<{
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
        }> & {};
    }>;
    signUp(data: SignUpDto): Promise<{
        token: any;
        user: import("@prisma/client/runtime").GetResult<{
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
        }> & {};
    }>;
    signOut(res: Response): Promise<boolean>;
}
