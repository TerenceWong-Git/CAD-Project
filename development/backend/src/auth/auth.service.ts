import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto';
import { checkPassword } from '../../utils/hash';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(loginDto: LoginDto) {
    console.log(loginDto);
    console.log(loginDto.email);
    const user = await this.prismaService.user.findUnique({
      where: { email: loginDto.email },
      select: { id: true, password: true },
    });
    console.log(user);

    if (!user || !(await checkPassword(loginDto.password, user.password))) {
      throw new UnauthorizedException();
    }

    console.log('Token: ' + this.signToken);
    console.log('user_id: ' + user.id);
    return this.signToken(user.id);
  }

  async signToken(userId: number) {
    const payload = { sub: userId };

    console.log('Payload: ' + payload.sub);
    console.log('JWT_SECRET: ' + this.config.get('JWT_SECRET'));
    return {
      access_token: await this.jwt.signAsync(payload, {
        expiresIn: '1d',
        secret: this.config.get('JWT_SECRET'),
      }),
    };
  }
}
