import { RoleDto, RoleResponseDto } from './role.dto';
import { RoleService } from './role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(body: RoleDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        permissions: string[];
        createdAt: Date;
        updatedAt: Date;
    }, {
        [x: string]: () => unknown;
    }> & {}>;
    find(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        permissions: string[];
        createdAt: Date;
        updatedAt: Date;
    }, {
        [x: string]: () => unknown;
    }> & {})[]>;
    findOne(id: string): Promise<{
        _count: {
            users: number;
        };
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        permissions: string[];
        createdAt: Date;
        updatedAt: Date;
    }, {
        [x: string]: () => unknown;
    }> & {}>;
    update(id: string, data: RoleResponseDto): Promise<{
        count: number;
    }>;
    remove(id: string): Promise<{
        count: number;
    }>;
}
