import { CreateUserDto } from "./dto/create-user.dto";
import { Users } from "./entities/users.entity";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(userData: CreateUserDto): Promise<Users>;
}
