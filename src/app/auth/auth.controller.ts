import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { SignInDto, SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';
import { YupValidationPipe } from '../../pipes/yup.pipe';
import { signInSchema, signUpSchema } from './auth.schema';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(
    @Body(new YupValidationPipe(signInSchema)) body: SignInDto,
    @Res() res: Response,
  ) {
    try {
      const result = await this.authService.signIn(body);

      if (result) {
        res.cookie('token', result.token, {
          secure: true,
          httpOnly: true,
          maxAge: Number(process.env.COOKIE_AGE) * 1000,
        });
        res.cookie('user', JSON.stringify(result.user), { httpOnly: true });
        return res.json(result);
      } else {
        throw new UnauthorizedException();
      }
    } catch (error) {
      throw error;
    }
  }

  @Post('sign-up')
  async signUp(
    @Body(new YupValidationPipe(signUpSchema)) body: SignUpDto,
    @Res() res: Response,
  ) {
    try {
      const result = await this.authService.signUp(body);
      res.cookie('token', result.token, {
        secure: true,
        httpOnly: true,
        maxAge: Number(process.env.COOKIE_AGE) * 1000,
      });
      res.cookie('user', JSON.stringify(result.user));
      return res.json(result);
    } catch (error) {
      throw error;
    }
  }

  @Delete('sign-out')
  async signOut(@Res() res: Response) {
    this.authService.signOut(res);
    return res.status(HttpStatus.OK).json({});
  }
}
