import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getSelfInfo(userId: number): Promise<{
        email: string;
        id: number;
    }>;
}
