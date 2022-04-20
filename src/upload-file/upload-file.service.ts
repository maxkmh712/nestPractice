import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UploadFileDetail } from "./entities/upload-file-detail.entity";
import { UploadFile } from "./entities/upload-file.entity";

const path = require("path");

@Injectable()
export class UploadFileService {
  constructor(
    @InjectRepository(UploadFile)
    private readonly UploadFileRepository: Repository<UploadFile>,
  ) {}

  async uploadFile(files: Express.MulterS3.File[]) {
    const uploadfiles = [];
    for (const element of files) {
      const file = new UploadFileDetail();

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
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
