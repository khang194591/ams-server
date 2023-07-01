"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const yup_1 = require("yup");
let GlobalExceptionFilter = exports.GlobalExceptionFilter = class GlobalExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (exception instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            switch (exception.code) {
                case 'P2002':
                    console.log(JSON.stringify(exception));
                    response.status(common_1.HttpStatus.CONFLICT).json({
                        message: `This ${exception.meta?.target[0]} is already taken`,
                    });
                    break;
                case 'P2003':
                    console.log(exception);
                    response
                        .status(common_1.HttpStatus.CONFLICT)
                        .json({ message: `Some error happened` });
                    break;
                case 'P2025':
                    return response
                        .status(common_1.HttpStatus.NOT_FOUND)
                        .json({ message: exception.meta?.cause || exception.message });
                default:
                    console.log('prisma', exception);
                    break;
            }
        }
        else if (exception instanceof client_1.Prisma.PrismaClientValidationError) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: exception.message,
            });
        }
        else if (exception instanceof yup_1.ValidationError) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: exception.message,
            });
        }
        else if (exception instanceof common_1.HttpException) {
            response.status(exception.getStatus()).json(exception.getResponse());
        }
        else {
            console.log(exception);
            console.log('Not handle yet');
        }
    }
};
exports.GlobalExceptionFilter = GlobalExceptionFilter = __decorate([
    (0, common_1.Catch)()
], GlobalExceptionFilter);
//# sourceMappingURL=exception.filter.js.map