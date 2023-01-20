import { Controller, Post, Get, UseGuards } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { AddPetDto } from './dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get("me")
  @UseGuards(JwtGuard)
  async getPet(@GetUser('id') userId: number) {
    console.log(userId);
    
    return await this.petService.getPet(userId);
  }
  @Post('addPet')
  async addPet(@GetUser('id') userId: number, @Body() addPetDto: AddPetDto) {
    return await this.petService.addPet(userId, addPetDto);
  }
}
