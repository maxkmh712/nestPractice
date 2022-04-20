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
exports.UploadFileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const upload_file_detail_entity_1 = require("./entities/upload-file-detail.entity");
const upload_file_entity_1 = require("./entities/upload-file.entity");
const path = require("path");
let UploadFileService = class UploadFileService {
    constructor(UploadFileRepository) {
        this.UploadFileRepository = UploadFileRepository;
    }
    async uploadFile(files) {
        const uploadfiles = [];
        for (const element of files) {
            const file = new upload_file_detail_entity_1.UploadFileDetail();
            file.name = element.originalname;
            file.ext = path.extname(element.originalname);
            file.mime = element.mimetype;
            file.size = element.size;
            file.url = element.location;
            file.hash = element.filename;
            uploadfiles.push(file);
        }
        try {
            return { data: await this.UploadFileRepository.save(uploadfiles) };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
UploadFileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(upload_file_entity_1.UploadFile)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UploadFileService);
exports.UploadFileService = UploadFileService;
//# sourceMappingURL=upload-file.service.js.map