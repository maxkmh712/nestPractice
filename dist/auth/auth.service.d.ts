import { JwtService } from "@nestjs/jwt";
import { Users } from "src/users/entities/users.entity";
import { Repository } from "typeorm";
import { AuthError } from "./error/auth.error";
import { LoginUserInput, LoginUserOutput } from "./dto/login-user.dto";
export declare class AuthService {
    private readonly jwtService;
    private readonly authError;
    private readonly usersRepository;
    constructor(jwtService: JwtService, authError: AuthError, usersRepository: Repository<Users>);
    validateUser(username: string, password: string): Promise<Users>;
    googleLogin(req: any): Promise<import("../common/entities/error.entity").ErrorEntity>;
    kakaoLogin(email: string): Promise<{
        jwt: string;
        username: string;
        email: string;
        provider: string;
        password: string;
        resetPasswordToken: string;
        isConfirm: boolean;
        isBlocked: boolean;
        fail: number;
        role: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(user: LoginUserInput): Promise<LoginUserOutput>;
    isHashValid(password: any, hashPassword: any): Promise<boolean>;
}
