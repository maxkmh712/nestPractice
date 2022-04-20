import { IsBoolean, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateContentDto {
  @IsString()
  readonly title: string;

  @IsString()
  description: string;

  @IsString()
  readonly password: string;

  @IsNumber()
  view: number;

  @IsBoolean()
  isActive: boolean;
}
