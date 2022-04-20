import { UploadFile } from "./upload-file.entity";
export declare class UploadFileDetail extends UploadFile {
    foramts: Object;
    provider: String;
    related: UploadFile[];
}
