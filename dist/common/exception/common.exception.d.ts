import { ExceptionFilter, ArgumentsHost, HttpException } from "@nestjs/common";
export declare class BadRequestExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
