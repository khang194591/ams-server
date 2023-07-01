"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const yup_1 = require("yup");
let AppConfigModule = exports.AppConfigModule = class AppConfigModule {
};
exports.AppConfigModule = AppConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validate(config) {
                    const envSchema = (0, yup_1.object)({
                        PORT: (0, yup_1.string)().required(),
                        DOCS_PATH: (0, yup_1.string)().required(),
                        BASE_PATH: (0, yup_1.string)().required(),
                        CLIENT_BASE_URL: (0, yup_1.string)().required(),
                        COOKIE_AGE: (0, yup_1.string)().required(),
                        TOKEN_SECRET: (0, yup_1.string)().required(),
                    });
                    try {
                        const result = envSchema.validateSync(config);
                        return result;
                    }
                    catch (error) {
                        throw error;
                    }
                },
            }),
        ],
    })
], AppConfigModule);
//# sourceMappingURL=config.module.js.map