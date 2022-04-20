import { Controller, Post, UploadedFiles } from "@nestjs/common";
import * as AWS from "aws-sdk";
import { UploadFileService } from "./upload-file.service";
import { CustomUploadFiles } from "./decorator/upload-file.decorator";

const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

@Controller("upload-file")
export class UploadFileController {
  constructor(private readonly UploadFileService: UploadFileService) {}

  @Post()
  @CustomUploadFiles("file", 100)
  async uploadFile(@UploadedFiles() files: Express.MulterS3.File[]) {
    return await this.UploadFileService.uploadFile(files);
  }
}
