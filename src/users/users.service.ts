import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { Users } from "./entities/users.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async create(userData: CreateUserDto): Promise<Users> {
    const { email, username, password } = userData;
    console.log(userData);

    const user = new Users();
    user.email = email;
    user.password = await this.hash(password);
    user.username = username;
    user.provider = "local";

    await this.userRepository.save(user);
    user.password = undefined;
    console.log(user);
    return user;
  }

  async hash(txt: string): Promise<string> {
    const saltOrRounds = 10;

    return await bcrypt.hash(txt, saltOrRounds);
  }

  async isHashValid(password, hashPassword): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}
