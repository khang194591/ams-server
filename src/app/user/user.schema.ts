import * as dayjs from 'dayjs';
import { array, number, object, string } from 'yup';
import { DATE_FORMAT, baseQuerySchema } from '../../constants/base';
import { GENDER, STATUS } from './user.constants';

export const userSchema = object({
  email: string().email().required(),
  firstName: string().required(),
  lastName: string().required(),
  avatarUrl: string().optional().nullable(),
  phone: string().optional().nullable(),
  birthDay: string().test('format', (val) => dayjs(val, DATE_FORMAT).isValid()),
  gender: string().oneOf(Object.values(GENDER)).optional().nullable(),
  address: string().optional().nullable(),
  bank: string().optional().nullable(),
  bankAccount: string().optional().nullable(),
  citizenId: string().optional().nullable(),
  status: string()
    .oneOf(Object.values(STATUS))
    .optional()
    .nullable()
    .default(STATUS[1]),
  roleId: number().positive().required(),
  province: string().optional().nullable(),
  district: string().optional().nullable(),
  ward: string().optional().nullable(),
});

export const userBulkSchema = object({
  items: array().of(userSchema),
});

export const querySchema = baseQuerySchema.concat(
  object({
    gender: array().of(string().oneOf(GENDER)),
    status: array().of(string().oneOf(STATUS)),
    roleId: array().of(number().positive()),
  }),
);
