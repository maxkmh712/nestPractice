import { IsHash, IsJSON, IsNumber, IsString, IsUrl } from "class-validator";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { UploadFile } from "./upload-file.entity";

@Entity()
export class UploadFileDetail extends UploadFile {
    @Column({nullable : true})
    @IsJSON()
    foramts : Object;

    @Column({default : "aws-s3"})
    @IsString()
    provider : String;

    @Column({nullable : false})
    @OneToMany(() => UploadFile, (uploadFile) => { onDelete: 'CASCADE' })
    @JoinColumn()
    related : UploadFile[];
}