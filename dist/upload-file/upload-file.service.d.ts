/// <reference types="multer-s3" />
import { Repository } from "typeorm";
import { UploadFile } from "./entities/upload-file.entity";
export declare class UploadFileService {
    private readonly UploadFileRepository;
    constructor(UploadFileRepository: Repository<UploadFile>);
    uploadFile(files: Express.MulterS3.File[]): Promise<{
        data: any[];
    }>;
}
