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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const base_1 = require("../../constants/base");
const base_dto_1 = require("../../interfaces/base.dto");
const yup_pipe_1 = require("../../pipes/yup.pipe");
const user_dto_1 = require("./user.dto");
const user_schema_1 = require("./user.schema");
const user_service_1 = require("./user.service");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(body) {
        try {
            return this.userService.create(body);
        }
        catch (error) {
            throw error;
        }
    }
    createBulk(body) {
        try {
            return this.userService.createBulk(body.items);
        }
        catch (error) {
            throw error;
        }
    }
    findAll(queryParams) {
        try {
            return this.userService.findAll(queryParams);
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            return await this.userService.findById(+id);
        }
        catch (error) {
            throw error;
        }
    }
    update(id, data) {
        try {
            return this.userService.update(+id, data);
        }
        catch (error) {
            throw error;
        }
    }
    deleteBulk(items) {
        try {
            return this.userService.deleteBulk(items);
        }
        catch (error) {
            throw error;
        }
    }
    remove(id) {
        try {
            return this.userService.delete(+id);
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)(new yup_pipe_1.YupValidationPipe(user_schema_1.userSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('bulk'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)(new yup_pipe_1.YupValidationPipe(user_schema_1.userBulkSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [base_dto_1.PaginatedDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createBulk", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)(new yup_pipe_1.YupValidationPipe(user_schema_1.querySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserQueryParamsDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)(new yup_pipe_1.YupValidationPipe((0, yup_pipe_1.partial)(user_schema_1.userSchema)))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserResponseDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('bulk'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)(new yup_pipe_1.YupValidationPipe(base_1.baseBulkSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteBulk", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('User'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map