import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { compareSync } from 'bcrypt';
import { Response } from 'express';
import { EnvKey } from '../../constants/config';
import { DatabaseService } from '../../modules/database/database.service';
import { signJWT } from '../../utils';
import { UserService } from '../user/user.service';
import { SignInDto, SignUpDto } from './auth.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: DatabaseService,
    private readonly userService: UserService,
  ) {}

  async signIn(data: SignInDto) {
    try {
      const user = await this.userService.findByEmail(data.email);
      if (user && user.password && compareSync(data.password, user.password)) {
        delete user.password;
        const token = signJWT(user);
        return {
          token,
          tokenExpiredAt: dayjs(Date.now()).add(
            this.configService.get(EnvKey.COOKIE_AGE),
            'second',
          ),
          user,
        };
      } else {
        throw new UnauthorizedException('Wrong Credentials');
      }
    } catch (error) {
      throw error;
    }
  }

  async signUp(data: SignUpDto) {
    try {
      const newUser = await this.prisma.user.create({
        data: {
          ...data,
          roleId: 2,
        },
      });
      delete newUser.password;
      const token = signJWT(newUser);
      return { token, user: newUser };
    } catch (error) {
      throw error;
    }
  }

  async signOut(res: Response) {
    res.cookie('token', '', {
      secure: true,
      httpOnly: true,
      maxAge: Number(this.configService.get(EnvKey.COOKIE_AGE)) * 1000,
    });
    res.cookie('user', '');
    return true;
  }
}
