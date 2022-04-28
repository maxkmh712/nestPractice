import { CreateUserInput, CreateUserOutput } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(userData: CreateUserInput): Promise<CreateUserOutput>;
}
