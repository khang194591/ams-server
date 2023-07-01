import { ApiProperty } from '@nestjs/swagger';
import { sortOrderKeys } from '../constants/base';

export type SortOrder = (typeof sortOrderKeys)[number];

export class BaseQueryString {
  keyword?: string;

  sortBy?: string;
  sortOrder?: 'asc' | 'desc';

  page?: number;
  take?: number;
}

export class PaginatedDto<T> {
  @ApiProperty({
    type: Object,
  })
  items: T[];
  total: number;
  totalPage?: number;
}

export class BaseDto {
  id: number;

  createdAt: Date;
  updatedAt: Date;
}
