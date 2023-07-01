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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const yup_pipe_1 = require("../../pipes/yup.pipe");
const role_dto_1 = require("./role.dto");
const role_schema_1 = require("./role.schema");
const role_service_1 = require("./role.service");
let RoleController = exports.RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    create(body) {
        try {
            return this.roleService.create(body);
        }
        catch (error) {
            throw error;
        }
    }
    find() {
        try {
            return this.roleService.find();
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            return await this.roleService.findById(+id);
        }
        catch (error) {
            throw error;
        }
    }
    update(id, data) {
        try {
            return this.roleService.update(+id, data);
        }
        catch (error) {
            throw error;
        }
    }
    remove(id) {
        try {
            return this.roleService.delete(+id);
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)(new yup_pipe_1.YupValidationPipe(role_schema_1.roleSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.RoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "find", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)(new yup_pipe_1.YupValidationPipe((0, yup_pipe_1.partial)(role_schema_1.roleSchema)))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, role_dto_1.RoleResponseDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "remove", null);
exports.RoleController = RoleController = __decorate([
    (0, common_1.Controller)('role'),
    (0, swagger_1.ApiTags)('Role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map