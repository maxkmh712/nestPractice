import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/users/entities/users.entity";
import { Repository } from "typeorm";
import { CreateContentDto } from "./dto/create-content.dto";
import { Content } from "./entities/content.entity";
import { ContentError, CONTENT_ERROR } from "./error/content.error";

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentRepository: Repository<Content>,
    private readonly contentError: ContentError,
  ) // private readonly usersRepository: Repository<Users>,
  {}

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

  // async createContent(createContentDto: CreateContentDto) {
  //   const { title, description, view, isActive, pickScore, userinfo } =
  //     createContentDto;
  //   const TITLELIMIT = 200;

  //   if (title === undefined) {
  //     throw new ForbiddenException("제목을 입력해주세요.");
  //   }

  //   try {
  //     let result = {
  //       freePointPaid: false,
  //       message: "done",
  //     };

  //     // 판매자 확인
  //     // const user = await usersRepository
  //     //   .createQueryBuilder("users")
  //     //   .where("users.id = :id", { id: id });
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }
}
