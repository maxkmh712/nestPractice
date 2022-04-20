import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsString,
  MaxLength,
  IsNotEmpty,
} from "class-validator";
import { CoreEntity } from "src/common/entities/core.entitiy";
import { Userinfo } from "src/userinfo/entities/userinfo.entity";
import { Column, Entity, OneToOne } from "typeorm";

@Entity()
export class Content extends CoreEntity {
  @Column()
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @Column({ nullable: true })
  @IsString()
  @MaxLength(10000)
  description: string;

  @Column({ nullable: true })
  @IsString()
  link: string;

  @Column({ nullable: true })
  @IsString()
  color: string;

  @Column({ nullable: true, default: 0 })
  @IsNumber()
  view: number;

  @Column({ nullable: true, default: 0 })
  @IsNumber()
  like: number;

  @Column({ nullable: true, default: false })
  @IsBoolean()
  isPick: boolean;

  @Column({ nullable: true, default: false })
  @IsBoolean()
  isFreePoint: boolean;

  @Column({ nullable: true, default: false })
  @IsBoolean()
  isActive: boolean;

  @Column({ nullable: true, default: false })
  @IsBoolean()
  isPPDiscount: boolean;

  @Column({ nullable: true, default: false })
  @IsBoolean()
  isPromotion: boolean;

  @Column({ nullable: true, default: 0 })
  @IsNumber()
  freePointDiscount: number;

  @Column({ nullable: true, default: 0 })
  @IsNumber()
  interest: number;

  @Column({ nullable: true, default: false })
  @IsBoolean()
  isWatermark: boolean;

  @Column({ nullable: true })
  @IsBoolean()
  isSale: boolean;

  @Column({ nullable: true })
  @IsDate()
  ppDiscountStart: Date;

  @Column({ nullable: true })
  @IsDate()
  ppDiscountEnd: Date;

  @Column({ nullable: true, type: "float" })
  @IsNumber()
  basicScore: number;

  @Column({ nullable: true, type: "float" })
  @IsNumber()
  pickScore: number;

  @Column({ nullable: true, default: -1 })
  @IsNumber()
  businessPrice: number;

  @Column({ nullable: true, default: -1 })
  @IsNumber()
  companyPrice: number;

  @Column({ nullable: true, default: -1 })
  @IsNumber()
  individualPrice: number;

  @Column({ nullable: true, default: -1 })
  @IsNumber()
  personalPrice: number;

  @Column({ nullable: true, default: 0 })
  @IsNumber()
  pixelPointDiscount: number;

  @Column({ nullable: true })
  @IsString()
  goState: string;

  @Column({ nullable: true })
  @IsString()
  search: string;
  // 스트라피에서 "private": true 되어 있던 것 확인

  @Column()
  @IsString()
  @IsNotEmpty()
  username: string;
  // 스트라피에서 "private": true 되어 있던 것 확인

  @OneToOne(
    () => Userinfo,
    (userinfo) => {
      onDelete: "CASCADE";
    },
  )
  userinfo: Userinfo;
}
