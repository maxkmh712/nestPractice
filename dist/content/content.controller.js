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
exports.ContentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const login_user_dto_1 = require("../auth/dto/login-user.dto");
const upload_file_decorator_1 = require("../upload-file/decorator/upload-file.decorator");
const content_service_1 = require("./content.service");
const content_error_1 = require("./error/content.error");
const uploadController = require("../upload-file/upload-file.controller");
let ContentController = class ContentController {
    constructor(contentService) {
        this.contentService = contentService;
    }
    getAllContents() {
        return this.contentService.findContents();
    }
    createContents(files) {
        return uploadController.uploadFile(files);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: "API 요약 제목 같은 거",
        description: "여기가 이제 콘텐츠 GET 설명 들어가는 부분",
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "201 성공했을 때 메세지 ex) 콘텐트 요청",
        type: login_user_dto_1.LoginUserOutput,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: new content_error_1.ContentError().getDescription([
            content_error_1.CONTENT_ERROR.CONTENT_NOT_FOUND,
        ]),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getAllContents", null);
__decorate([
    (0, common_1.Post)(),
    (0, upload_file_decorator_1.CustomUploadFiles)("files", 100),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "createContents", null);
ContentController = __decorate([
    (0, common_1.Controller)({ version: "1", path: "content" }),
    (0, swagger_1.ApiTags)("Content API"),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ContentController);
exports.ContentController = ContentController;
//# sourceMappingURL=content.controller.js.map