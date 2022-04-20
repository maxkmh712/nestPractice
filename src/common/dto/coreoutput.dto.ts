import { IsNumber, IsObject } from "class-validator";

export class CoreOutput {
  @IsNumber()
  status: number;

  @IsObject()
  data: Object;
}
