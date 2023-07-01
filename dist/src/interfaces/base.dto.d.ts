import { sortOrderKeys } from '../constants/base';
export type SortOrder = (typeof sortOrderKeys)[number];
export declare class BaseQueryString {
    keyword?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    page?: number;
    take?: number;
}
export declare class PaginatedDto<T> {
    items: T[];
    total: number;
    totalPage?: number;
}
export declare class BaseDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}
