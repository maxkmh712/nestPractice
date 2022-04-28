"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserError = exports.USER_ERROR = void 0;
const common_error_1 = require("../../common/error/common.error");
exports.USER_ERROR = {
    NOT_ENTER_PASSWORD: "notenterpassword",
    USER_CREATE_FAILED: "usercreatefailed",
};
class UserError extends common_error_1.CoreError {
    constructor() {
        super();
        this.errorHandle = {
            [exports.USER_ERROR.NOT_ENTER_PASSWORD]: {
                id: "User.not.enter.password",
                message: "비밀번호를 입력 해주세요.",
            },
            [exports.USER_ERROR.USER_CREATE_FAILED]: {
                id: "User.create.failed",
                message: "회원가입 중 오류가 발생하였습니다. 다시 시도해주세요.",
            },
        };
    }
}
exports.UserError = UserError;
//# sourceMappingURL=user.error.js.map