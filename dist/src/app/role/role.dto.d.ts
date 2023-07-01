import { BaseDto } from '../../interfaces/base.dto';
export declare class RoleDto {
    title: string;
    permissions: string[];
}
export declare class RoleResponseDto extends RoleDto implements BaseDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}
