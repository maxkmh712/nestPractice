import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "aws-sdk";
import { UploadFile } from "./entities/upload-file.entity";
import { UploadFileController } from "./upload-file.controller";
import { UploadFileService } from "./upload-file.service";

@Module({
  imports: [TypeOrmModule.forFeature([UploadFile])],
  exports: [UploadFileService],
  controllers: [UploadFileController],
  providers: [UploadFileService, ConfigService],
})
export class UploadFileModule {}
