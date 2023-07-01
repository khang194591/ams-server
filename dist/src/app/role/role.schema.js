"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleSchema = void 0;
const yup_1 = require("yup");
exports.roleSchema = (0, yup_1.object)({
    title: (0, yup_1.string)().required().defined(),
    permissions: (0, yup_1.array)().of((0, yup_1.string)()).required().defined(),
});
//# sourceMappingURL=role.schema.js.map