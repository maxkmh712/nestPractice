"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserOutput = exports.CreateUserInput = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const users_entity_1 = require("../entities/users.entity");
class CreateUserInput extends (0, mapped_types_1.PickType)(users_entity_1.Users, [
    "username",
    "password",
    "email",
    "role",
    "provider",
]) {
}
exports.CreateUserInput = CreateUserInput;
class CreateUserOutput extends (0, mapped_types_1.PickType)(users_entity_1.Users, [
    "username",
    "email",
    "provider",
    "id",
]) {
}
exports.CreateUserOutput = CreateUserOutput;
//# sourceMappingURL=create-user.dto.js.map