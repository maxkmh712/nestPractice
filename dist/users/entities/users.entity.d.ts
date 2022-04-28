import { CoreEntity } from "src/common/entities/core.entitiy";
export declare class Users extends CoreEntity {
    username: string;
    email: string;
    provider: string;
    password: string;
    resetPasswordToken: string;
    isConfirm: boolean;
    isBlocked: boolean;
    fail: number;
    role: string;
}
