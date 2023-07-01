"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseBulkSchema = exports.baseQuerySchema = exports.DEFAULT_PAGE_SIZES = exports.DEFAULT_PAGE_SIZE = exports.sortOrderKeys = exports.baseSortByKeys = exports.baseUniqueKeys = exports.DATE_FORMAT = exports.TIME_FORMAT = void 0;
const yup_1 = require("yup");
exports.TIME_FORMAT = 'HH:mm:ss';
exports.DATE_FORMAT = 'YYYY-MM-DD';
exports.baseUniqueKeys = ['id'];
exports.baseSortByKeys = ['createdAt', 'updatedAt'];
exports.sortOrderKeys = ['asc', 'desc'];
exports.DEFAULT_PAGE_SIZE = 10;
exports.DEFAULT_PAGE_SIZES = [10, 25, 100];
exports.baseQuerySchema = (0, yup_1.object)({
    keyword: (0, yup_1.string)().trim(),
    sortBy: (0, yup_1.string)().default('createdAt'),
    sortOrder: (0, yup_1.string)().oneOf(exports.sortOrderKeys).default(exports.sortOrderKeys[1]),
    page: (0, yup_1.number)().required(),
    take: (0, yup_1.number)().required(),
});
exports.baseBulkSchema = (0, yup_1.object)({
    items: (0, yup_1.array)().of((0, yup_1.number)().positive()),
});
//# sourceMappingURL=base.js.map