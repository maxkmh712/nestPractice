/// <reference types="multer-s3" />
import { UploadFileService } from "./upload-file.service";
export declare class UploadFileController {
    private readonly UploadFileService;
    constructor(UploadFileService: UploadFileService);
    uploadFile(files: Express.MulterS3.File[]): Promise<{
        data: any[];
    }>;
}
