/// <reference types="multer-s3" />
import { ContentService } from "./content.service";
import { Content } from "./entities/content.entity";
export declare class ContentController {
    private readonly contentService;
    constructor(contentService: ContentService);
    getAllContents(): Promise<Content[]>;
    createContents(files: Express.MulterS3.File[]): any;
}
