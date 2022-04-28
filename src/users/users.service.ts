import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserInput, CreateUserOutput } from "./dto/create-user.dto";
import { Users } from "./entities/users.entity";
import * as bcrypt from "bcrypt";
import { UserError, USER_ERROR } from "./error/user.error";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly userError: UserError,
  ) {}

  async create(userData: CreateUserInput): Promise<CreateUserOutput> {
    try {
      const { email, username, password, role, provider } = userData;

      if (provider === "local" && !password) {
        throw Error(USER_ERROR.NOT_ENTER_PASSWORD);
      }

      const user = new Users();
      user.email = email;
      user.password = password ? await this.hash(password) : null;
      user.username = username;
      user.provider = provider;
      user.role = role;

      const createUser = await this.userRepository.save(user);

      if (!createUser) {
        throw Error(USER_ERROR.USER_CREATE_FAILED);
      }

      return createUser;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(this.userError.errorHandler(error.message));
    }
  }

  async hash(txt: string): Promise<string> {
    const saltOrRounds = 10;

    return await bcrypt.hash(txt, saltOrRounds);
  }

  async isHashValid(password, hashPassword): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }

  async findOneAdmin(query): Promise<Users> {
    return await this.userRepository.findOne({
      where: query,
    });
  }

  async findOne(query): Promise<CreateUserOutput> {
    const user = await this.userRepository.findOne({
      select: { username: true, email: true, id: true, provider: true },
      where: query,
    });

    return user;
  }
}
