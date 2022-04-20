import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { Users } from "./entities/users.entity";
import { UsersService } from "./users.service";

@Controller("user")
@ApiTags("User API")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userData: CreateUserDto): Promise<Users> {
    return await this.usersService.create(userData);
  }
}
