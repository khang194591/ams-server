"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueryParamsDto = exports.UserResponseDto = exports.UserDto = void 0;
const openapi = require("@nestjs/swagger");
const base_dto_1 = require("../../interfaces/base.dto");
class UserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, avatarId: { required: true, type: () => Number }, phone: { required: true, type: () => String }, birthDay: { required: true, type: () => String }, gender: { required: true, type: () => Object }, address: { required: true, type: () => String }, province: { required: true, type: () => String }, district: { required: true, type: () => String }, bank: { required: true, type: () => String }, bankAccount: { required: true, type: () => String }, citizenId: { required: true, type: () => String }, status: { required: true, type: () => Object }, roleId: { required: true, type: () => Number } };
    }
}
exports.UserDto = UserDto;
class UserResponseDto extends UserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, fullName: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.UserResponseDto = UserResponseDto;
class UserQueryParamsDto extends base_dto_1.BaseQueryString {
    static _OPENAPI_METADATA_FACTORY() {
        return { gender: { required: false, type: () => [Object] }, status: { required: false, type: () => [Object] }, roleId: { required: false, type: () => [Number] } };
    }
}
exports.UserQueryParamsDto = UserQueryParamsDto;
//# sourceMappingURL=user.dto.js.map