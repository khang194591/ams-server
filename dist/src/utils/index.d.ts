import { BaseQueryString } from '../interfaces/base.dto';
export declare function parseQueryString(queryParams: BaseQueryString): {
    orderBy: {
        [x: string]: "asc" | "desc";
        createdAt?: undefined;
    } | {
        createdAt: "asc" | "desc";
    };
    where: {};
    take: number;
    skip: number;
};
export declare function checkPermissions(userId: number, userPermissions: string[], permission: string, id: number | string): boolean;
export declare function signJWT(data: any): any;
export declare function random_bm(max: number): number;
export declare function removeAccents(str: string): string;
