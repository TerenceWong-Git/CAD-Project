import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getSelfInfo(userId: number): Promise<import(".prisma/client").User>;
    register(registerDto: RegisterDto): Promise<void>;
}
