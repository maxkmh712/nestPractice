import { Users } from "../entities/users.entity";
declare const CreateUserInput_base: import("@nestjs/mapped-types").MappedType<Pick<Users, "username" | "email" | "provider" | "password" | "role">>;
export declare class CreateUserInput extends CreateUserInput_base {
}
declare const CreateUserOutput_base: import("@nestjs/mapped-types").MappedType<Pick<Users, "username" | "email" | "provider" | "id">>;
export declare class CreateUserOutput extends CreateUserOutput_base {
}
export {};
