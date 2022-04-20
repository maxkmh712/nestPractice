import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { AuthError } from "../error/auth.error";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    private readonly authError;
    constructor(authService: AuthService, authError: AuthError);
    validate(username: string, password: string): Promise<any>;
}
export {};
