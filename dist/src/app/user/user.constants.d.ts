export declare const STATUS: readonly ["active", "pending", "inactive"];
export declare const GENDER: readonly ["male", "female", "other"];
export type Status = (typeof STATUS)[number];
export type Gender = (typeof GENDER)[number];
