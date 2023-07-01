export declare const TIME_FORMAT = "HH:mm:ss";
export declare const DATE_FORMAT = "YYYY-MM-DD";
export declare const baseUniqueKeys: readonly ["id"];
export declare const baseSortByKeys: readonly ["createdAt", "updatedAt"];
export declare const sortOrderKeys: readonly ["asc", "desc"];
export declare const DEFAULT_PAGE_SIZE = 10;
export declare const DEFAULT_PAGE_SIZES: number[];
export declare const baseQuerySchema: import("yup").ObjectSchema<{
    keyword: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
    page: number;
    take: number;
}, import("yup").AnyObject, {
    keyword: undefined;
    sortBy: "createdAt";
    sortOrder: "desc";
    page: undefined;
    take: undefined;
}, "">;
export declare const baseBulkSchema: import("yup").ObjectSchema<{
    items: number[];
}, import("yup").AnyObject, {
    items: "";
}, "">;
