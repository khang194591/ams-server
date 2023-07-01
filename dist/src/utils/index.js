"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAccents = exports.random_bm = exports.signJWT = exports.checkPermissions = exports.parseQueryString = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../constants/config");
function parseQueryString(queryParams) {
    const { keyword, sortBy, sortOrder, take, page, ...filter } = queryParams;
    const skip = page ? (page - 1) * take : undefined;
    const orderBy = sortBy && sortOrder
        ? { [sortBy]: sortOrder }
        : { createdAt: 'desc' };
    const where = {};
    for (const queryKey of Object.keys(filter)) {
        where[queryKey] = { in: filter[queryKey].map((item) => item) };
    }
    return { orderBy, where, take, skip };
}
exports.parseQueryString = parseQueryString;
function checkPermissions(userId, userPermissions, permission, id) {
    return userPermissions.includes(permission) || userId === +id;
}
exports.checkPermissions = checkPermissions;
function signJWT(data) {
    return (0, jsonwebtoken_1.sign)(data, process.env[config_1.EnvKey.TOKEN_SECRET], {
        expiresIn: Number(process.env[config_1.EnvKey.COOKIE_AGE]),
    });
}
exports.signJWT = signJWT;
function random_bm(max) {
    let u = 0, v = 0;
    while (u === 0)
        u = Math.random();
    while (v === 0)
        v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5;
    if (num > 1 || num < 0)
        return random_bm(max);
    return Math.round(num * max);
}
exports.random_bm = random_bm;
function removeAccents(str) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
}
exports.removeAccents = removeAccents;
//# sourceMappingURL=index.js.map