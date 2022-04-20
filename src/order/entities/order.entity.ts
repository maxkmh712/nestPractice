import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsString,
  IsNotEmpty,
} from "class-validator";
import { CoreEntity } from "src/common/entities/core.entitiy";
import { Column, Entity } from "typeorm";

@Entity()
export class Order extends CoreEntity {
  @Column({ nullable: true })
  @IsNumber()
  buyerFee: number;

  @Column({ nullable: true })
  @IsDate()
  cancelDate: Date;

  @Column()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Column({ unique: true })
  @IsString()
  @IsNotEmpty()
  code: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  type: string;

  @Column({ nullable: true, default: 0 })
  @IsNumber()
  freePointDiscount: number;

  @Column({ nullable: true })
  @IsDate()
  confirmDate: Date;

  @Column({ nullable: true, default: false })
  @IsBoolean()
  isCancel: boolean;
  // 스트라피에서 "private": true 되어 있던 것 확인

  @Column({ nullable: true, default: false })
  @IsBoolean()
  isConfirm: boolean;

  @Column({ nullable: true })
  @IsBoolean()
  isGroupOrder: boolean;

  @Column({ nullable: true, default: true })
  @IsBoolean()
  isPayback: boolean;

  @Column({ nullable: true })
  @IsNumber()
  pixelPointDiscount: number;
}
