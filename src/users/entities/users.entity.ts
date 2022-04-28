import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  MinLength,
} from "class-validator";
import { CoreEntity } from "src/common/entities/core.entitiy";
import { Column, Entity } from "typeorm";
import { Role } from "./roles.enum";

@Entity()
export class Users extends CoreEntity {
  @Column({ unique: true })
  @IsString()
  @MinLength(3)
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  provider: string;

  @Column({ nullable: true })
  @IsString()
  password: string;

  @Column({ nullable: true })
  @IsString()
  resetPasswordToken: string;

  @Column({ default: false })
  @IsBoolean()
  isConfirm: boolean;

  @Column({ default: false })
  @IsBoolean()
  isBlocked: boolean;

  @Column({ default: 0 })
  @IsNumber()
  fail: number;

  @Column({ default: Role.USER })
  @IsString()
  role: string;
}
