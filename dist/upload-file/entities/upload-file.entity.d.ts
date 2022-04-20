import { CoreEntity } from "src/common/entities/core.entitiy";
export declare class UploadFile extends CoreEntity {
    name: String;
    hash: String;
    ext: String;
    mime: String;
    width: Number;
    height: Number;
    size: Number;
    path: String;
    url: String;
}
