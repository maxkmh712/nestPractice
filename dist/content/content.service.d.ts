import { Repository } from "typeorm";
import { Content } from "./entities/content.entity";
import { ContentError } from "./error/content.error";
export declare class ContentService {
    private readonly contentRepository;
    private readonly contentError;
    constructor(contentRepository: Repository<Content>, contentError: ContentError);
    findContents(): Promise<Content[]>;
}
