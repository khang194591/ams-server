"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleResponseDto = exports.RoleDto = void 0;
const openapi = require("@nestjs/swagger");
class RoleDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, permissions: { required: true, type: () => [String] } };
    }
}
exports.RoleDto = RoleDto;
class RoleResponseDto extends RoleDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.RoleResponseDto = RoleResponseDto;
//# sourceMappingURL=role.dto.js.map