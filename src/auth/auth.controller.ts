import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginUserInput, LoginUserOutput } from "./dto/login-user.dto";
import { AuthError, AUTH_ERROR } from "./error/auth.error";

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
}
