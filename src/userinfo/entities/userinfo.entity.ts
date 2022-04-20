import { IsBoolean, IsDate, IsEmail, IsNumber, IsString } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entitiy";
import { Content } from "src/content/entities/content.entity";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class Userinfo extends CoreEntity {
    @Column({nullable : true})
    @IsString()
    username : string;

    @Column({nullable : true})
    @IsString()
    introudction : string;

    @Column({nullable : true})
    @IsBoolean()
    isReceiveSMS : boolean;

    @Column({nullable : true})
    @IsBoolean()
    isReceiveEmail : boolean;

    @Column({nullable : true})
    @IsBoolean()
    isAdvertisement : boolean;

    @Column({nullable : true})
    @IsString()
    carrerFirst : string;

    @Column({nullable : true})
    @IsString()
    carrerSecond : string;

    @Column({nullable : true})
    @IsNumber()
    grade : number;

    @Column({nullable : true})
    @IsEmail()
    receiveOnly : string;

    @Column({nullable : true})
    @IsString()
    antCode : string;

    @Column({nullable : true})
    @IsBoolean()
    isVendor : boolean;

    @Column({nullable : true})
    @IsBoolean()
    isSeller : boolean;

    @Column({nullable : true})
    @IsString()
    specialGrade : boolean;

    @Column({nullable : true})
    @IsBoolean()
    isSpecialGrade : boolean;

    @Column({nullable : true})
    @IsBoolean()
    isMG : boolean;

    @Column({nullable : true})
    @IsDate()
    specialGradeDate : Date;

    @Column({nullable : true})
    @IsString()
    penName : string;

    @Column({nullable : true})
    @IsDate()
    adAgreeDate : Date;

    @Column({nullable : true})
    @IsString()
    country : string;

    @Column({nullable : true})
    @IsString()
    language : string;

    @Column({nullable : true})
    @IsDate()
    loginAt : Date;

    @Column({nullable : true})
    @IsBoolean()
    isInactive : boolean;

    @Column({nullable : true})
    @IsString()
    accentUser : string;

    @OneToMany(() => Content, (content) => { onDelete: 'CASCADE' })
    @JoinColumn()
    contents : Content[];

}