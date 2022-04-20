import { CoreError } from "src/common/error/common.error";

export const AUTH_ERROR = {
  USER_NOT_CONNECT: "usernotConect",
};

export class AuthError extends CoreError {
  constructor() {
    super();
    this.errorHandle = {
      [AUTH_ERROR.USER_NOT_CONNECT]: {
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
