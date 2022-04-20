import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/users/entities/users.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { AuthError, AUTH_ERROR } from "./error/auth.error";
import { LoginUserInput, LoginUserOutput } from "./dto/login-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authError: AuthError,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersRepository.findOneBy({
      username,
    });
    if (!user) {
      throw Error(AUTH_ERROR.USER_NOT_CONNECT);
    }
    const valid = await this.isHashValid(password, user.password);

    if (!valid) {
      throw Error(AUTH_ERROR.USER_NOT_CONNECT);
    }

    return user;
  }

  async googleLogin(req) {
    try {
      if (!req.user) {
        throw Error(AUTH_ERROR.USER_NOT_CONNECT);
      }

      const user = await this.usersRepository.findOneBy({
        email: req.user.email,
      });

      if (!user) {
        throw Error(AUTH_ERROR.USER_NOT_CONNECT);
      }
    } catch (error) {
      console.log(error);

      return this.authError.errorHandler(error.message);
    }
  }

  async login(user: LoginUserInput): Promise<LoginUserOutput> {
    try {
      const payload = {
        username: user.username,
        sub: user.id,
      };

      const users = await this.usersRepository.findOneBy({
        username: user.username,
      });

      if (!users) {
        throw Error(AUTH_ERROR.USER_NOT_CONNECT);
      }

      return {
        jwt: this.jwtService.sign(payload),
      };
    } catch (error) {
      console.log(error);

      throw new BadRequestException(this.authError.errorHandler(error.message));
    }
  }

  async isHashValid(password, hashPassword): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}
