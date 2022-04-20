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
exports.Content = void 0;
const class_validator_1 = require("class-validator");
const core_entitiy_1 = require("../../common/entities/core.entitiy");
const userinfo_entity_1 = require("../../userinfo/entities/userinfo.entity");
const typeorm_1 = require("typeorm");
let Content = class Content extends core_entitiy_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], Content.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10000),
    __metadata("design:type", String)
], Content.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Content.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Content.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "view", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "like", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Content.prototype, "isPick", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Content.prototype, "isFreePoint", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Content.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Content.prototype, "isPPDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Content.prototype, "isPromotion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "freePointDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "interest", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Content.prototype, "isWatermark", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Content.prototype, "isSale", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Content.prototype, "ppDiscountStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Content.prototype, "ppDiscountEnd", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "float" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "basicScore", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "float" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "pickScore", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: -1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "businessPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: -1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "companyPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: -1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "individualPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: -1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "personalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 0 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Content.prototype, "pixelPointDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Content.prototype, "goState", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Content.prototype, "search", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Content.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => userinfo_entity_1.Userinfo, (userinfo) => {
        onDelete: "CASCADE";
    }),
    __metadata("design:type", userinfo_entity_1.Userinfo)
], Content.prototype, "userinfo", void 0);
Content = __decorate([
    (0, typeorm_1.Entity)()
], Content);
exports.Content = Content;
//# sourceMappingURL=content.entity.js.map