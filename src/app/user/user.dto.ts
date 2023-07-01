import { InferType } from 'yup';
import { BaseDto, BaseQueryString } from '../../interfaces/base.dto';
import { Gender, Status } from './user.constants';
import { userSchema } from './user.schema';

export class UserDto implements InferType<typeof userSchema> {
  email: string;
  firstName: string;
  lastName: string;
  avatarId: number;
  phone: string;
  birthDay: string;
  gender: Gender;
  address: string;
  province: string;
  district: string;
  bank: string;
  bankAccount: string;
  citizenId: string;
  status: Status;
  roleId: number;
}

export class UserResponseDto extends UserDto implements BaseDto {
  id: number;
  fullName: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserQueryParamsDto extends BaseQueryString {
  gender?: Gender[];
  status?: Status[];
  roleId?: number[];
}
