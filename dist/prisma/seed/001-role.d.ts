declare const seedRole: () => Promise<{
    admin: import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        permissions: string[];
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {};
    user: import("@prisma/client/runtime").GetResult<{
        id: number;
        title: string;
        permissions: string[];
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {};
}>;
export default seedRole;
