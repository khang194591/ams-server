export declare const userSchema: import("yup").ObjectSchema<{
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    phone: string;
    birthDay: string;
    gender: "male" | "female" | "other";
    address: string;
    bank: string;
    bankAccount: string;
    citizenId: string;
    status: "active" | "pending" | "inactive";
    roleId: number;
    province: string;
    district: string;
    ward: string;
}, import("yup").AnyObject, {
    email: undefined;
    firstName: undefined;
    lastName: undefined;
    avatarUrl: undefined;
    phone: undefined;
    birthDay: undefined;
    gender: undefined;
    address: undefined;
    bank: undefined;
    bankAccount: undefined;
    citizenId: undefined;
    status: "pending";
    roleId: undefined;
    province: undefined;
    district: undefined;
    ward: undefined;
}, "">;
export declare const userBulkSchema: import("yup").ObjectSchema<{
    items: {
        email?: string;
        firstName?: string;
        lastName?: string;
        phone?: string;
        gender?: "male" | "female" | "other";
        birthDay?: string;
        citizenId?: string;
        bank?: string;
        bankAccount?: string;
        province?: string;
        district?: string;
        ward?: string;
        address?: string;
        status?: "active" | "pending" | "inactive";
        roleId?: number;
        avatarUrl?: string;
    }[];
}, import("yup").AnyObject, {
    items: "";
}, "">;
export declare const querySchema: import("yup").ObjectSchema<{
    keyword: string;
    sortBy: string;
    sortOrder: "asc" | "desc";
    page: number;
    take: number;
} & {
    gender: ("male" | "female" | "other")[];
    status: ("active" | "pending" | "inactive")[];
    roleId: number[];
}, import("yup").AnyObject, {
    keyword: undefined;
    sortBy: "createdAt";
    sortOrder: "desc";
    page: undefined;
    take: undefined;
    gender: "";
    status: "";
    roleId: "";
}, "">;
