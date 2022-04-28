import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { query } from "express";
import { AuthService } from "./auth.service";
import { KaKaoDto } from "./dto/kakao-dto";
import { LoginUserInput, LoginUserOutput } from "./dto/login-user.dto";
import { AuthError, AUTH_ERROR } from "./error/auth.error";
import { KakaoGuard } from "./guard/kakao.guard";

@Controller("auth")
@ApiTags("Auth API")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard("jwt"))
  @Get("profile")
  getProfile(@Req() req) {
    return req.user;
  }

  @UseGuards(AuthGuard("local"))
  @Post("local")
  @ApiOperation({ summary: "유저 로그인 API", description: "로컬 유저 로그인" })
  @ApiCreatedResponse({
    description: "로컬 유저 로그인",
    type: LoginUserOutput,
  })
  @ApiBadRequestResponse({
    description: new AuthError().getDescription([AUTH_ERROR.USER_NOT_CONNECT]),
  })
  async login(
    @Body() loginUserInput: LoginUserInput,
  ): Promise<LoginUserOutput> {
    return await this.authService.login(loginUserInput);
  }

  @Get("google")
  @UseGuards(AuthGuard("google"))
  async googleAuth(@Req() req) {}

  @Get("google/callback")
  @UseGuards(AuthGuard("google"))
  async googleAuthRedirect(@Req() req) {
    return await this.authService.googleLogin(req);
  }

  @Get("/kakao/callback")
  @UseGuards(KakaoGuard)
  async getToken(@Query() query, @Req() req) {
    return this.authService.kakaoLogin(req["guard"]);
  }
}
