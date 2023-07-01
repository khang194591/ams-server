import { DatabaseService } from '../../modules/database/database.service';
import { RoleDto } from './role.dto';
export declare class RoleService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    private readonly repository;
    create(data: RoleDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    findById(id: number): Promise<{
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
    update(id: number, data: RoleDto): Promise<{
        count: number;
    }>;
    delete(id: number): Promise<{
        count: number;
    }>;
}
