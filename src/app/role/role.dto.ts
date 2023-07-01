import { BaseDto } from '../../interfaces/base.dto';

export class RoleDto {
  title: string;
  permissions: string[];
}

export class RoleResponseDto extends RoleDto implements BaseDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
