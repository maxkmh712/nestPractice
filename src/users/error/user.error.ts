import { CoreError } from "src/common/error/common.error";

export const USER_ERROR = {
  NOT_ENTER_PASSWORD: "notenterpassword",
  USER_CREATE_FAILED: "usercreatefailed",
};

export class UserError extends CoreError {
  constructor() {
    super();
    this.errorHandle = {
      [USER_ERROR.NOT_ENTER_PASSWORD]: {
        id: "User.not.enter.password",
        message: "비밀번호를 입력 해주세요.",
      },
      [USER_ERROR.USER_CREATE_FAILED]: {
        id: "User.create.failed",
        message: "회원가입 중 오류가 발생하였습니다. 다시 시도해주세요.",
      },
    };
  }
}
