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
exports.Userinfo = void 0;
const class_validator_1 = require("class-validator");
const core_entitiy_1 = require("../../common/entities/core.entitiy");
const content_entity_1 = require("../../content/entities/content.entity");
const typeorm_1 = require("typeorm");
let Userinfo = class Userinfo extends core_entitiy_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Userinfo.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Userinfo.prototype, "introudction", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Userinfo.prototype, "isReceiveSMS", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Userinfo.prototype, "isReceiveEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Userinfo.prototype, "isAdvertisement", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Userinfo.prototype, "carrerFirst", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Userinfo.prototype, "carrerSecond", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Userinfo.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Userinfo.prototype, "receiveOnly", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Userinfo.prototype, "antCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Userinfo.prototype, "isVendor", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Userinfo.prototype, "isSeller", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Boolean)
], Userinfo.prototype, "specialGrade", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Userinfo.prototype, "isSpecialGrade", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Userinfo.prototype, "isMG", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Userinfo.prototype, "specialGradeDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Userinfo.prototype, "penName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Userinfo.prototype, "adAgreeDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Userinfo.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Userinfo.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Userinfo.prototype, "loginAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Userinfo.prototype, "isInactive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Userinfo.prototype, "accentUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => content_entity_1.Content, (content) => { onDelete: 'CASCADE'; }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Userinfo.prototype, "contents", void 0);
Userinfo = __decorate([
    (0, typeorm_1.Entity)()
], Userinfo);
exports.Userinfo = Userinfo;
//# sourceMappingURL=userinfo.entity.js.map