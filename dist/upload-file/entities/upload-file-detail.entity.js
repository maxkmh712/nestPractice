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
exports.UploadFileDetail = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const upload_file_entity_1 = require("./upload-file.entity");
let UploadFileDetail = class UploadFileDetail extends upload_file_entity_1.UploadFile {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsJSON)(),
    __metadata("design:type", Object)
], UploadFileDetail.prototype, "foramts", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "aws-s3" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UploadFileDetail.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    (0, typeorm_1.OneToMany)(() => upload_file_entity_1.UploadFile, (uploadFile) => { onDelete: 'CASCADE'; }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], UploadFileDetail.prototype, "related", void 0);
UploadFileDetail = __decorate([
    (0, typeorm_1.Entity)()
], UploadFileDetail);
exports.UploadFileDetail = UploadFileDetail;
//# sourceMappingURL=upload-file-detail.entity.js.map