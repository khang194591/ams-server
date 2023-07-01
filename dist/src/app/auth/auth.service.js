"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bcrypt_1 = require("bcrypt");
const config_2 = require("../../constants/config");
const database_service_1 = require("../../modules/database/database.service");
const utils_1 = require("../../utils");
const user_service_1 = require("../user/user.service");
const dayjs = require("dayjs");
let AuthService = exports.AuthService = class AuthService {
    constructor(configService, prisma, userService) {
        this.configService = configService;
        this.prisma = prisma;
        this.userService = userService;
    }
    async signIn(data) {
        try {
            const user = await this.userService.findByEmail(data.email);
            if (user && user.password && (0, bcrypt_1.compareSync)(data.password, user.password)) {
                delete user.password;
                const token = (0, utils_1.signJWT)(user);
                return {
                    token,
                    tokenExpiredAt: dayjs(Date.now()).add(this.configService.get(config_2.EnvKey.COOKIE_AGE), 'second'),
                    user,
                };
            }
            else {
                throw new common_1.UnauthorizedException('Wrong Credentials');
            }
        }
        catch (error) {
            throw error;
        }
    }
    async signUp(data) {
        try {
            const newUser = await this.prisma.user.create({
                data: {
                    ...data,
                    roleId: 2,
                },
            });
            delete newUser.password;
            const token = (0, utils_1.signJWT)(newUser);
            return { token, user: newUser };
        }
        catch (error) {
            throw error;
        }
    }
    async signOut(res) {
        res.cookie('token', '', {
            secure: true,
            httpOnly: true,
            maxAge: Number(this.configService.get(config_2.EnvKey.COOKIE_AGE)) * 1000,
        });
        res.cookie('user', '');
        return true;
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        database_service_1.DatabaseService,
        user_service_1.UserService])
], AuthService);
//# sourceMappingURL=auth.service.js.map