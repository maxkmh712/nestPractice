"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomUploadFiles = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
require("dotenv/config");
const slugify = require("slugify");
const path = require("path");
const crypto = require("crypto");
const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
function CustomUploadFiles(fieldName, maxCount) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)(fieldName, maxCount, {
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
    })));
}
exports.CustomUploadFiles = CustomUploadFiles;
//# sourceMappingURL=upload-file.decorator.js.map