import { CommonService } from './common.service';
export declare class CommonController {
    private readonly publicService;
    constructor(publicService: CommonService);
    getUsers(): Promise<{
        total: number;
        items: {
            id: number;
            fullName: string;
        }[];
    }>;
    getRoles(): Promise<{
        total: number;
        items: {
            id: number;
            title: string;
        }[];
    }>;
    getBanks(): Promise<{
        total: number;
        items: {
            id: number;
            name: string;
            code: string;
            bin: string;
            shortName: string;
            logo: string;
            transferSupported: number;
            lookupSupported: number;
            short_name: string;
            support: number;
            isTransfer: number;
            swift_code: string;
        }[];
    }>;
}
