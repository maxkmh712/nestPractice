import { ExecutionContext } from "@nestjs/common";
import { BaseGuard } from "src/common/guard/base.guard";
import { AuthError } from "../error/auth.error";
export declare class KakaoGuard extends BaseGuard {
    private readonly authError;
    constructor(authError: AuthError);
    handleRequest(context: ExecutionContext): Promise<any>;
    _getTokenKakao(query: any): Promise<any>;
}
