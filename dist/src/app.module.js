"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const role_module_1 = require("./app/role/role.module");
const user_module_1 = require("./app/user/user.module");
const config_module_1 = require("./modules/config/config.module");
const database_module_1 = require("./modules/database/database.module");
const auth_module_1 = require("./app/auth/auth.module");
const common_module_1 = require("./app/common/common.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.AppConfigModule,
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            role_module_1.RoleModule,
            auth_module_1.AuthModule,
            common_module_1.CommonModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map