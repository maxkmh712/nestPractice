import { Users } from "src/users/entities/users.entity";
import { Repository } from "typeorm";
declare const KakaoStrategy_base: new (...args: any[]) => any;
export declare class KakaoStrategy extends KakaoStrategy_base {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    validate(accessToken: any, refreshToken: any, profile: any, done: any): Promise<any>;
}
export {};
