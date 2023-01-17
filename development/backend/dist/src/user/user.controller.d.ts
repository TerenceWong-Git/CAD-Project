import { RegisterDto } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getSelfInfo(userId: number): Promise<import(".prisma/client").User>;
    register(registerDto: RegisterDto): Promise<void>;
}
