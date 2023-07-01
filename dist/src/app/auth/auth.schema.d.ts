export declare const signInSchema: import("yup").ObjectSchema<{
    email: string;
    password: string;
}, import("yup").AnyObject, {
    email: undefined;
    password: undefined;
}, "">;
export declare const signUpSchema: import("yup").ObjectSchema<{
    email: string;
    password: string;
} & {
    firstName: string;
    lastName: string;
}, import("yup").AnyObject, {
    email: undefined;
    password: undefined;
    firstName: undefined;
    lastName: undefined;
}, "">;
