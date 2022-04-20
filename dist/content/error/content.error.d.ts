import { CoreError } from "src/common/error/common.error";
export declare const CONTENT_ERROR: {
    CONTENT_NOT_FOUND: string;
};
export declare class ContentError extends CoreError {
    constructor();
}
