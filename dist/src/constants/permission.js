"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = exports.Action = void 0;
var Action;
(function (Action) {
    Action["read"] = "read";
    Action["create"] = "create";
    Action["update"] = "update";
    Action["delete"] = "delete";
    Action["read_personal"] = "read_personal";
    Action["create_personal"] = "create_personal";
    Action["update_personal"] = "update_personal";
    Action["delete_personal"] = "delete_personal";
})(Action || (exports.Action = Action = {}));
var Resource;
(function (Resource) {
    Resource["user"] = "user";
    Resource["role"] = "role";
})(Resource || (exports.Resource = Resource = {}));
//# sourceMappingURL=permission.js.map