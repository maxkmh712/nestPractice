import { applyDecorators, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import * as AWS from "aws-sdk";
import * as multerS3 from "multer-s3";
import "dotenv/config";

const slugify = require("slugify");
const path = require("path");
const crypto = require("crypto");

const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export function CustomUploadFiles(fieldName: string, maxCount?: number) {
  return applyDecorators(
    UseInterceptors(
      FilesInterceptor(fieldName, maxCount, {
        storage: multerS3({
          s3: s3,
          bucket: process.env.AWS_S3_BUCKET_NAME,
          acl: "public-read",
          key: function (request, file, cb) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            const hash = slugify(basename, { separator: "_", lower: false });
            file.filename = `${hash}_${crypto.randomBytes(5).toString("hex")}`;

            cb(null, `${file.filename}`);
          },
        }),
        limits: {},
      }),
    ),
  );
}
