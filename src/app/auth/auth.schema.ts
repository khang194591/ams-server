import { object, string } from 'yup';

export const signInSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export const signUpSchema = signInSchema.concat(
  object({
    firstName: string().required(),
    lastName: string().required(),
  }),
);
