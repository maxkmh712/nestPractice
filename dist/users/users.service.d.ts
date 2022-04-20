import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { Users } from "./entities/users.entity";
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    create(userData: CreateUserDto): Promise<Users>;
    hash(txt: string): Promise<string>;
    isHashValid(password: any, hashPassword: any): Promise<boolean>;
}
