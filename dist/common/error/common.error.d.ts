import { ErrorEntity } from "../entities/error.entity";
export declare class CoreError {
    protected api: string;
    protected errorHandle: Object;
    protected status: number;
    errorHandler(message: any): ErrorEntity;
    getErrorHandle(): Object;
    getDescription(handlers: any): any;
}
