"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySchema = exports.userBulkSchema = exports.userSchema = void 0;
const dayjs = require("dayjs");
const yup_1 = require("yup");
const base_1 = require("../../constants/base");
const user_constants_1 = require("./user.constants");
exports.userSchema = (0, yup_1.object)({
    email: (0, yup_1.string)().email().required(),
    firstName: (0, yup_1.string)().required(),
    lastName: (0, yup_1.string)().required(),
    avatarUrl: (0, yup_1.string)().optional().nullable(),
    phone: (0, yup_1.string)().optional().nullable(),
    birthDay: (0, yup_1.string)().test('format', (val) => dayjs(val, base_1.DATE_FORMAT).isValid()),
    gender: (0, yup_1.string)().oneOf(Object.values(user_constants_1.GENDER)).optional().nullable(),
    address: (0, yup_1.string)().optional().nullable(),
    bank: (0, yup_1.string)().optional().nullable(),
    bankAccount: (0, yup_1.string)().optional().nullable(),
    citizenId: (0, yup_1.string)().optional().nullable(),
    status: (0, yup_1.string)()
        .oneOf(Object.values(user_constants_1.STATUS))
        .optional()
        .nullable()
        .default(user_constants_1.STATUS[1]),
    roleId: (0, yup_1.number)().positive().required(),
    province: (0, yup_1.string)().optional().nullable(),
    district: (0, yup_1.string)().optional().nullable(),
    ward: (0, yup_1.string)().optional().nullable(),
});
exports.userBulkSchema = (0, yup_1.object)({
    items: (0, yup_1.array)().of(exports.userSchema),
});
exports.querySchema = base_1.baseQuerySchema.concat((0, yup_1.object)({
    gender: (0, yup_1.array)().of((0, yup_1.string)().oneOf(user_constants_1.GENDER)),
    status: (0, yup_1.array)().of((0, yup_1.string)().oneOf(user_constants_1.STATUS)),
    roleId: (0, yup_1.array)().of((0, yup_1.number)().positive()),
}));
//# sourceMappingURL=user.schema.js.map