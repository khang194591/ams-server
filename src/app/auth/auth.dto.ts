export class SignInDto {
  email: string;
  password: string;
}

export class SignUpDto extends SignInDto {
  firstName: string;
  lastName: string;
}
