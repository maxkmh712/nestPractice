import { IsHash, IsNumber, IsString, IsUrl } from "class-validator";
import { Column, Entity } from "typeorm";

@Entity()
export class ImageDetail {
    @Column()
    @IsString()
    name : String;

    @Column()
    @IsString()
    hash : String;

    @Column()
    @IsString()
    ext : String;

    @Column()
    @IsString()
    mime : String;

    @Column({type : "float"})
    @IsNumber()
    width : Number;

    @Column({type : "float"})
    @IsNumber()
    height : Number;

    @Column({type : "float"})
    @IsNumber()
    size : Number;

    @Column({nullable : true})
    @IsString()
    path : String;

    @Column()
    @IsUrl()
    url : String;
}