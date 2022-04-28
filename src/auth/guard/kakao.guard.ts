import {
  BadRequestException,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import axios from "axios";
import { BaseGuard } from "src/common/guard/base.guard";
import { Users } from "src/users/entities/users.entity";
import { Repository } from "typeorm";
import { AuthError } from "../error/auth.error";

@Injectable()
export class KakaoGuard extends BaseGuard {
  constructor(private readonly authError: AuthError) {
    super();
  }

  async handleRequest(context: ExecutionContext) {
    try {
      const request = context.switchToHttp().getRequest();

      const userInfoKakao = await this._getTokenKakao(request.query);

      return userInfoKakao.kakao_account.email;
    } catch (error) {
      throw new BadRequestException(this.authError.errorHandler(error.message));
    }
  }

  async _getTokenKakao(query) {
    try {
      const { code } = query;
      const tokenRequest = await axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URL}&code=${code}&client_secret=${process.env.KAKAO_SECRET_ACCESS_KEY}`,
          {
            headers: {
              Content_type: "application/x-www-form-urlencoded;charset=utf-8",
            },
          },
        )
        .then((res) => res.data)
        .catch((e) => console.log(e.response.data));

      const userInfoKakao = await axios
        .get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            Authorization: `Bearer ${tokenRequest.access_token}`,
          },
        })
        .then((res) => res.data)
        .catch((e) => console.log(e.response.data));

      return userInfoKakao;
    } catch (error) {
      throw new UnauthorizedException(
        this.authError.errorHandler(error.message),
      );
    }
  }
}
