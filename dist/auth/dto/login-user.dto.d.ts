import { Users } from "src/users/entities/users.entity";
declare const LoginUserInput_base: import("@nestjs/common").Type<Pick<Users, "email" | "username" | "password" | "id">>;
export declare class LoginUserInput extends LoginUserInput_base {
}
export declare class LoginUserOutput {
    jwt: string;
}
export {};
