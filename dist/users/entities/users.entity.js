"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const class_validator_1 = require("class-validator");
const core_entitiy_1 = require("../../common/entities/core.entitiy");
const typeorm_1 = require("typeorm");
const roles_enum_1 = require("./roles.enum");
let Users = class Users extends core_entitiy_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Users.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Users.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Users.prototype, "isConfirm", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Users.prototype, "isBlocked", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Users.prototype, "fail", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: roles_enum_1.Role.USER }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;
//# sourceMappingURL=users.entity.js.map