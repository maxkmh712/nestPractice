import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare abstract class BaseGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
    abstract handleRequest(context: ExecutionContext): any;
}
