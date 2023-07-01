import { Response } from 'express';
import { SignInDto, SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(body: SignInDto, res: Response): Promise<Response<any, Record<string, any>>>;
    signUp(body: SignUpDto, res: Response): Promise<Response<any, Record<string, any>>>;
    signOut(res: Response): Promise<Response<any, Record<string, any>>>;
}
