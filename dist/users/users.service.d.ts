import { Repository } from "typeorm";
import { CreateUserInput, CreateUserOutput } from "./dto/create-user.dto";
import { Users } from "./entities/users.entity";
import { UserError } from "./error/user.error";
export declare class UsersService {
    private readonly userRepository;
    private readonly userError;
    constructor(userRepository: Repository<Users>, userError: UserError);
    create(userData: CreateUserInput): Promise<CreateUserOutput>;
    hash(txt: string): Promise<string>;
    isHashValid(password: any, hashPassword: any): Promise<boolean>;
    findOneAdmin(query: any): Promise<Users>;
    findOne(query: any): Promise<CreateUserOutput>;
}
