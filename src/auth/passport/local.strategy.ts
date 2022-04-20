import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { AuthError, AUTH_ERROR } from "../error/auth.error";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private readonly authError: AuthError,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    try {
      const user = await this.authService.validateUser(username, password);
      if (!user) {
        throw Error(AUTH_ERROR.USER_NOT_CONNECT);
      }

      return user;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(this.authError.errorHandler(error.message));
    }
  }
}
