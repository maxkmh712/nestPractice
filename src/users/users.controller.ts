import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserInput, CreateUserOutput } from "./dto/create-user.dto";
import { Users } from "./entities/users.entity";
import { UsersService } from "./users.service";

@Controller("user")
@ApiTags("User API")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userData: CreateUserInput): Promise<CreateUserOutput> {
    return await this.usersService.create(userData);
  }
}
