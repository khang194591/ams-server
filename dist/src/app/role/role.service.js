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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../../modules/database/database.service");
let RoleService = exports.RoleService = class RoleService {
    constructor(prisma) {
        this.prisma = prisma;
        this.repository = this.prisma.role;
    }
    async create(data) {
        try {
            return this.repository.create({ data });
        }
        catch (error) {
            throw error;
        }
    }
    async find() {
        try {
            return this.repository.findMany();
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const item = await this.repository.findUniqueOrThrow({
                where: { id },
                include: {
                    _count: {
                        select: {
                            users: true,
                        },
                    },
                },
            });
            return item;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, data) {
        try {
            return await this.repository.updateMany({ where: { id }, data });
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            return await this.repository.deleteMany({ where: { id } });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], RoleService);
//# sourceMappingURL=role.service.js.map