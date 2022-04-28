import { CoreError } from "src/common/error/common.error";
export declare const USER_ERROR: {
    NOT_ENTER_PASSWORD: string;
    USER_CREATE_FAILED: string;
};
export declare class UserError extends CoreError {
    constructor();
}
