"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpDto = exports.SignInDto = void 0;
const openapi = require("@nestjs/swagger");
class SignInDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
exports.SignInDto = SignInDto;
class SignUpDto extends SignInDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String } };
    }
}
exports.SignUpDto = SignUpDto;
//# sourceMappingURL=auth.dto.js.map