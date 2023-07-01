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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../modules/database/database.service");
const utils_1 = require("../../utils");
let UserService = exports.UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
        this.repository = this.prisma.user;
    }
    async create(data) {
        try {
            return this.repository.create({ data });
        }
        catch (error) {
            throw error;
        }
    }
    async createBulk(data) {
        try {
            return this.repository.createMany({ data });
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(queryString) {
        try {
            const { orderBy, where, take, skip } = (0, utils_1.parseQueryString)(queryString);
            const keyword = queryString.keyword?.split(' ').join(' & ');
            if (keyword) {
                where['OR'] = [
                    {
                        lastName: { search: keyword },
                        firstName: { search: keyword },
                    },
                ];
            }
            const total = await this.repository.count({ where });
            const totalPage = Math.ceil(total / take);
            const items = await this.repository.findMany({
                orderBy,
                where,
                take,
                skip,
                include: { role: { select: { title: true } } },
            });
            return {
                total,
                totalPage,
                items,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const item = await this.repository.findUniqueOrThrow({
                where: { id },
                include: { role: true },
            });
            return item;
        }
        catch (error) {
            throw error;
        }
    }
    async findByEmail(email) {
        try {
            return this.repository.findUnique({
                where: { email },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, data) {
        try {
            return await this.repository.update({ where: { id }, data });
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            return await this.repository.delete({ where: { id } });
        }
        catch (error) {
            throw error;
        }
    }
    async deleteBulk(items) {
        try {
            console.log(items);
            return await this.repository.deleteMany({
                where: {
                    id: {
                        in: items,
                    },
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserService);
//# sourceMappingURL=user.service.js.map