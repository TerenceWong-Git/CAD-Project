import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getSelfInfo(userId: number): Promise<"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function">;
    register(registerDto: RegisterDto): Promise<void>;
}
