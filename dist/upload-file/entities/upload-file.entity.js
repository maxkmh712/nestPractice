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
exports.UploadFile = void 0;
const class_validator_1 = require("class-validator");
const core_entitiy_1 = require("../../common/entities/core.entitiy");
const typeorm_1 = require("typeorm");
let UploadFile = class UploadFile extends core_entitiy_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadFile.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadFile.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadFile.prototype, "ext", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadFile.prototype, "mime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UploadFile.prototype, "width", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UploadFile.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UploadFile.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadFile.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UploadFile.prototype, "url", void 0);
UploadFile = __decorate([
    (0, typeorm_1.Entity)()
], UploadFile);
exports.UploadFile = UploadFile;
//# sourceMappingURL=upload-file.entity.js.map