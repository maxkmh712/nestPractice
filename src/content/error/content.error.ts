import { CoreError } from "src/common/error/common.error"

export const CONTENT_ERROR = {
  CONTENT_NOT_FOUND: "contentNotFound",
}

export class ContentError extends CoreError {
  constructor() {
    super()
    this.errorHandle = {
      [CONTENT_ERROR.CONTENT_NOT_FOUND]: {
        id: "Content.not.found",
        message: "콘텐츠를 찾을 수 없습니다.",
      },
    }
  }
}
