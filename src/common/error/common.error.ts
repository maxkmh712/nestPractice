import { ErrorEntity } from "../entities/error.entity"

export class CoreError {
  protected api: string
  protected errorHandle: Object
  protected status: number

  errorHandler(message): ErrorEntity {
    const error = this.errorHandle[message]

    if (!error) {
      return {
        id: `Out.of.control.error`,
        message,
      }
    }

    return error
  }

  getErrorHandle(): Object {
    return this.errorHandle
  }

  getDescription(handlers) {
    const description = handlers.reduce((acc, cur) => {
      const txt = `${this.errorHandle[cur].id} : ${this.errorHandle[cur].message}\n\n`

      return acc + txt
    }, "")

    return description
  }
}
