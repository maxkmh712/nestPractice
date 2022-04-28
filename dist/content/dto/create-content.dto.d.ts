import { Userinfo } from "src/userinfo/entities/userinfo.entity";
export declare class CreateContentDto {
    title: string;
    description: string;
    view: number;
    isActive: boolean;
    pickScore: number;
    userinfo: Userinfo;
}
