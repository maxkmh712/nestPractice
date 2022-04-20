import { AuthService } from "./auth.service";
import { LoginUserInput, LoginUserOutput } from "./dto/login-user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getProfile(req: any): any;
    login(loginUserInput: LoginUserInput): Promise<LoginUserOutput>;
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): Promise<import("../common/entities/error.entity").ErrorEntity>;
}
