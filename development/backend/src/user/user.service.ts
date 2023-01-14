import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getSelfInfo(userId: number) {
    const foundUser = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true },
    });
    return foundUser;
  }
}
