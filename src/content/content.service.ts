import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Content } from "./entities/content.entity";
import { ContentError, CONTENT_ERROR } from "./error/content.error";

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
    private readonly contentError: ContentError,
  ) {}

  async findContents(): Promise<Content[]> {
    try {
      throw Error(CONTENT_ERROR.CONTENT_NOT_FOUND);

      return await this.contentRepository.find();
    } catch (error) {
      console.log(error);

      throw new BadRequestException(
        this.contentError.errorHandler(error.message),
      );
    }
  }
}
