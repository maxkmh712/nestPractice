import { CoreEntity } from "src/common/entities/core.entitiy";
import { Content } from "src/content/entities/content.entity";
export declare class Userinfo extends CoreEntity {
    username: string;
    introudction: string;
    isReceiveSMS: boolean;
    isReceiveEmail: boolean;
    isAdvertisement: boolean;
    carrerFirst: string;
    carrerSecond: string;
    grade: number;
    receiveOnly: string;
    antCode: string;
    isVendor: boolean;
    isSeller: boolean;
    specialGrade: boolean;
    isSpecialGrade: boolean;
    isMG: boolean;
    specialGradeDate: Date;
    penName: string;
    adAgreeDate: Date;
    country: string;
    language: string;
    loginAt: Date;
    isInactive: boolean;
    accentUser: string;
    contents: Content[];
}
