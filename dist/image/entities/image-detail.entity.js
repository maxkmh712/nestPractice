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
exports.ImageDetail = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let ImageDetail = class ImageDetail {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageDetail.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageDetail.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageDetail.prototype, "ext", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageDetail.prototype, "mime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ImageDetail.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ImageDetail.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ImageDetail.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ImageDetail.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], ImageDetail.prototype, "url", void 0);
ImageDetail = __decorate([
    (0, typeorm_1.Entity)()
], ImageDetail);
exports.ImageDetail = ImageDetail;
//# sourceMappingURL=image-detail.entity.js.map