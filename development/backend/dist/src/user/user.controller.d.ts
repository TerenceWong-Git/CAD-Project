import { RegisterDto } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getSelfInfo(userId: number): Promise<"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function">;
    register(registerDto: RegisterDto): Promise<void>;
}
