import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';

const s3 = new AWS.S3()

@Controller('upload')
export class ImageController {
    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file : Express.Multer.File) {
        console.log(file);
    }

    @Post('files')
    @UseInterceptors(FileInterceptor('files'))
    uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
        console.log(files)
    }

}
