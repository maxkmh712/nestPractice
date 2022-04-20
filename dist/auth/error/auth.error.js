"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthError = exports.AUTH_ERROR = void 0;
const common_error_1 = require("../../common/error/common.error");
exports.AUTH_ERROR = {
    USER_NOT_CONNECT: "usernotConect",
};
class AuthError extends common_error_1.CoreError {
    constructor() {
        super();
        this.errorHandle = {
            [exports.AUTH_ERROR.USER_NOT_CONNECT]: {
                id: "Auth.user.not.connect",
                message: "로그인 실패",
            },
        };
    }
    getDescription(handlers) {
        const description = handlers.reduce((acc, cur) => {
            const txt = `${this.errorHandle[cur].id} : ${this.errorHandle[cur].message}\n\n`;
            return acc + txt;
        }, "");
        return description;
    }
}
exports.AuthError = AuthError;
//# sourceMappingURL=auth.error.js.map