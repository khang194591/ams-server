import { array, object, string } from 'yup';

export const roleSchema = object({
  title: string().required().defined(),
  permissions: array().of(string()).required().defined(),
});
