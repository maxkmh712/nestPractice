"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentError = exports.CONTENT_ERROR = void 0;
const common_error_1 = require("../../common/error/common.error");
exports.CONTENT_ERROR = {
    CONTENT_NOT_FOUND: "contentNotFound",
};
class ContentError extends common_error_1.CoreError {
    constructor() {
        super();
        this.errorHandle = {
            [exports.CONTENT_ERROR.CONTENT_NOT_FOUND]: {
                id: "Content.not.found",
                message: "콘텐츠를 찾을 수 없습니다.",
            },
        };
    }
}
exports.ContentError = ContentError;
//# sourceMappingURL=content.error.js.map