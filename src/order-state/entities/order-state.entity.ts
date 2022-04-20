import { IsNumber, IsString, IsNotEmpty } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entitiy";
import { Column, Entity } from "typeorm";

@Entity()
export class OrderState extends CoreEntity {
  @Column()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Column({ nullable: true })
  @IsString()
  reason: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  state: string;
}
