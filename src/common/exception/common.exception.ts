import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      // you can manipulate the response here
      .json({
        status,
        ...(exception.getResponse() as Object),
        path: request.url,
      });
  }
}
