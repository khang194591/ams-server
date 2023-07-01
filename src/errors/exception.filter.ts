import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { ValidationError } from 'yup';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const request = ctx.getRequest<Request>();

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          console.log(JSON.stringify(exception));
          response.status(HttpStatus.CONFLICT).json({
            message: `This ${exception.meta?.target[0]} is already taken`,
          });
          break;
        case 'P2003':
          console.log(exception);
          response
            .status(HttpStatus.CONFLICT)
            .json({ message: `Some error happened` });
          break;
        case 'P2025':
          return response
            .status(HttpStatus.NOT_FOUND)
            .json({ message: exception.meta?.cause || exception.message });
        default:
          console.log('prisma', exception);
          break;
      }
    } else if (exception instanceof Prisma.PrismaClientValidationError) {
      response.status(HttpStatus.BAD_REQUEST).json({
        message: exception.message,
      });
    } else if (exception instanceof ValidationError) {
      response.status(HttpStatus.BAD_REQUEST).json({
        message: exception.message,
      });
    } else if (exception instanceof HttpException) {
      response.status(exception.getStatus()).json(exception.getResponse());
    } else {
      console.log(exception);
      console.log('Not handle yet');
    }
  }
}
