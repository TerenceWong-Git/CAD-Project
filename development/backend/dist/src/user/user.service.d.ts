import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getSelfInfo(userId: number): Promise<{
        email: string;
        id: number;
    }>;
}
