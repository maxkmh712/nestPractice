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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileController = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const upload_file_service_1 = require("./upload-file.service");
const upload_file_decorator_1 = require("./decorator/upload-file.decorator");
const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
let UploadFileController = class UploadFileController {
    constructor(UploadFileService) {
        this.UploadFileService = UploadFileService;
    }
    async uploadFile(files) {
        return await this.UploadFileService.uploadFile(files);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, upload_file_decorator_1.CustomUploadFiles)("file", 100),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UploadFileController.prototype, "uploadFile", null);
UploadFileController = __decorate([
    (0, common_1.Controller)("upload-file"),
    __metadata("design:paramtypes", [upload_file_service_1.UploadFileService])
], UploadFileController);
exports.UploadFileController = UploadFileController;
//# sourceMappingURL=upload-file.controller.js.map