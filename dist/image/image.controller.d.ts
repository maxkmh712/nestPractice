/// <reference types="multer" />
export declare class ImageController {
    uploadFile(file: Express.Multer.File): void;
    uploadFiles(files: Array<Express.Multer.File>): void;
}
