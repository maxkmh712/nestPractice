import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  UploadedFiles,
  Version,
} from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { LoginUserOutput } from "src/auth/dto/login-user.dto";
import { Roles } from "src/role/role.decorator";
import { CustomUploadFiles } from "src/upload-file/decorator/upload-file.decorator";
import { ContentService } from "./content.service";
import { Content } from "./entities/content.entity";
import { ContentError, CONTENT_ERROR } from "./error/content.error";
const uploadController = require("../upload-file/upload-file.controller");

// Controller 전체 version 관리
@Controller({ version: "1", path: "content" })
@ApiTags("Content API")
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  // Route별 version 관리
  // @Version('1')
  @Get()
  @ApiOperation({
    summary: "API 요약 제목 같은 거",
    description: "여기가 이제 콘텐츠 GET 설명 들어가는 부분",
  })
  @ApiCreatedResponse({
    description: "201 성공했을 때 메세지 ex) 콘텐트 요청",
    type: LoginUserOutput,
  })
  @ApiBadRequestResponse({
    description: new ContentError().getDescription([
      CONTENT_ERROR.CONTENT_NOT_FOUND,
    ]),
  })
  getAllContents() {
    //throw new BadRequestException();
    return this.contentService.findContents();
  }

  @Post()
  @CustomUploadFiles("files", 100)
  createContents(@UploadedFiles() files: Express.MulterS3.File[]) {
    return uploadController.uploadFile(files);
  }

  // @Get()
  // async getBasicScoreContents(
  //   @Query('_limit') _limit: Number = 12,
  //   @Query('_start') _start: Number = 0,
  // ): Promise<Content[]>{
  //   return this.contentService.findBasicScoreContents({_limit, _start})
  // }
}
