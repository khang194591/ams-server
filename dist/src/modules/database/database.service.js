"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const util = require("util");
function getExtendedClient() {
    const client = () => new client_1.PrismaClient().$extends({
        query: {
            $allModels: {
                async $allOperations({ operation, model, args, query }) {
                    const start = performance.now();
                    const result = await query(args);
                    const end = performance.now();
                    const time = end - start;
                    console.log(util.inspect(`${operation} on ${model} table take ${time} milliseconds`));
                    return result;
                },
            },
            user: {
                $allOperations({ args, query, operation }) {
                    if (operation !== 'findUnique' &&
                        operation !== 'create' &&
                        operation !== 'createMany') {
                        args.where.administrator = false;
                    }
                    return query(args);
                },
            },
        },
        result: {
            user: {
                fullName: {
                    needs: { firstName: true, lastName: true },
                    compute(user) {
                        return [user.lastName, user.firstName].join(' ');
                    },
                },
            },
        },
    });
    return class {
        constructor() {
            return client();
        }
    };
}
let DatabaseService = exports.DatabaseService = class DatabaseService extends getExtendedClient() {
};
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
//# sourceMappingURL=database.service.js.map