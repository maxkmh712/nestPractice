import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsJWT, IsString } from "class-validator";
import { Jwt } from "jsonwebtoken";
import { CoreOutput } from "src/common/dto/coreoutput.dto";
import { Users } from "src/users/entities/users.entity";

export class LoginUserInput extends PickType(Users, [
  "username",
  "password",
  "email",
  "id",
]) {}

export class LoginUserOutput {
  @IsString()
  @ApiProperty({ description: "token" })
  jwt: string;
}
