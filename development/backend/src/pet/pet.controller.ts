import {
  Controller,
  Post,
  Get,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { AddPetDto } from './dto';
import { PetService } from './pet.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get('species')
  async getSpecies() {
    return await this.petService.getSpecies();
  }

  @Get('me')
  @UseGuards(JwtGuard)
  async getPet(@GetUser('id') userId: number) {
    console.log(userId);

    return await this.petService.getPet(userId);
  }
  @Post('addPet')
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('file'))
  async addPet(
    @GetUser('id') userId: number,
    @Body() addPetDto: AddPetDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.petService.addPet(userId, addPetDto, file);
  }
}
