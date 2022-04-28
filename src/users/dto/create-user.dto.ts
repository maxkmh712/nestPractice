import { PickType } from "@nestjs/mapped-types";
import { Users } from "../entities/users.entity";

export class CreateUserInput extends PickType(Users, [
  "username",
  "password",
  "email",
  "role",
  "provider",
]) {}

export class CreateUserOutput extends PickType(Users, [
  "username",
  "email",
  "provider",
  "id",
]) {}
