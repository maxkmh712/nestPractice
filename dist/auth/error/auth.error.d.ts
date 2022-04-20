import { CoreError } from "src/common/error/common.error";
export declare const AUTH_ERROR: {
    USER_NOT_CONNECT: string;
};
export declare class AuthError extends CoreError {
    constructor();
    getDescription(handlers: any): any;
}
