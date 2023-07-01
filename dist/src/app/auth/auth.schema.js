"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSchema = exports.signInSchema = void 0;
const yup_1 = require("yup");
exports.signInSchema = (0, yup_1.object)({
    email: (0, yup_1.string)().email().required(),
    password: (0, yup_1.string)().required(),
});
exports.signUpSchema = exports.signInSchema.concat((0, yup_1.object)({
    firstName: (0, yup_1.string)().required(),
    lastName: (0, yup_1.string)().required(),
}));
//# sourceMappingURL=auth.schema.js.map