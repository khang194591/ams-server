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
exports.BaseDto = exports.PaginatedDto = exports.BaseQueryString = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class BaseQueryString {
    static _OPENAPI_METADATA_FACTORY() {
        return { keyword: { required: false, type: () => String }, sortBy: { required: false, type: () => String }, sortOrder: { required: false, type: () => Object }, page: { required: false, type: () => Number }, take: { required: false, type: () => Number } };
    }
}
exports.BaseQueryString = BaseQueryString;
class PaginatedDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { items: { required: true }, total: { required: true, type: () => Number }, totalPage: { required: false, type: () => Number } };
    }
}
exports.PaginatedDto = PaginatedDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Object,
    }),
    __metadata("design:type", Array)
], PaginatedDto.prototype, "items", void 0);
class BaseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.BaseDto = BaseDto;
//# sourceMappingURL=base.dto.js.map