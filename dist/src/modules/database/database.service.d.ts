declare const DatabaseService_base: new () => import("@prisma/client/runtime").DynamicClientExtensionThis<import(".prisma/client").Prisma.TypeMap<import("@prisma/client/runtime").Args & {
    result: {
        user: {
            fullName: () => {
                needs: {
                    firstName: true;
                    lastName: true;
                };
                compute(user: {
                    firstName: string;
                    lastName: string;
                }): string;
            };
        };
    };
    model: {};
    query: {};
    client: {};
}>, import(".prisma/client").Prisma.TypeMapCb, {
    result: {
        user: {
            fullName: () => {
                needs: {
                    firstName: true;
                    lastName: true;
                };
                compute(user: {
                    firstName: string;
                    lastName: string;
                }): string;
            };
        };
    };
    model: {};
    query: {};
    client: {};
}>;
export declare class DatabaseService extends DatabaseService_base {
}
export {};
