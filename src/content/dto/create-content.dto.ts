import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNumber, IsString } from "class-validator";
import { Userinfo } from "src/userinfo/entities/userinfo.entity";

export class CreateContentDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  view: number;

  @IsBoolean()
  isActive: boolean;

  @IsNumber()
  pickScore: number;

  @IsString()
  userinfo: Userinfo;
}
