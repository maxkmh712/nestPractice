import {
  IsBoolean,
  IsEmail,
  IsHash,
  IsNumber,
  IsString,
  Min,
} from "class-validator";
import { CoreEntity } from "src/common/entities/core.entitiy";
import { Column, Entity } from "typeorm";

@Entity()
export class Users extends CoreEntity {
  @Column({ unique: true })
  @IsString()
  @Min(3)
  username: string;

  @Column()
  @IsEmail()
  @Min(6)
  email: string;

  @Column()
  @IsString()
  provider: string;

  @Column()
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
}
