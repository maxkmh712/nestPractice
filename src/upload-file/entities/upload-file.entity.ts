import { IsHash, IsJSON, IsNumber, IsString, IsUrl } from "class-validator";
import { CoreEntity } from "src/common/entities/core.entitiy";
import { Column, Entity } from "typeorm";

@Entity()
export class UploadFile extends CoreEntity {
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