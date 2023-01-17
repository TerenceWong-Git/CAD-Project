import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { hashPassword } from 'src/auth/hash';
import { RegisterDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(JwtGuard)
  async getSelfInfo(@GetUser('id') userId: number) {
    return await this.userService.getSelfInfo(userId);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.userService.register(registerDto);
  }
}
