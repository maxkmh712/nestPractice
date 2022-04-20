import { Module } from "@nestjs/common";
import { ContentService } from "./content.service";
import { ContentController } from "./content.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Content } from "./entities/content.entity";
import { ContentError } from "./error/content.error";

@Module({
  imports: [TypeOrmModule.forFeature([Content])],
  providers: [ContentService, ContentError],
  controllers: [ContentController],
  exports: [ContentService],
})
export class ContentModule {}
