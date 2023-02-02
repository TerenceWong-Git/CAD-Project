import {
  Controller,
  Post,
  Get,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  ParseIntPipe,
} from '@nestjs/common';
import {
  Body,
  Param,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { AddPetDto, AddWeightDto, uploadPetImgDto } from './dto';
import { PetService } from './pet.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get('species')
  async getSpecies() {
    return await this.petService.getSpecies();
  }

  @Get('username')
  @UseGuards(JwtGuard)
  async getUserName(@GetUser('id') userId: number) {
    return await this.petService.getUserName(userId);
  }
  @Get('me')
  @UseGuards(JwtGuard)
  async getUserPet(@GetUser('id') userId: number) {
    return await this.petService.getUserPet(userId);
  }

  @Get('petProfile/:petid')
  @UseGuards(JwtGuard)
  async getPet(
    @GetUser('id') userId: number,
    @Param('petid', ParseIntPipe) petId: number,
  ) {
    return await this.petService.getPet(petId, userId);
  }

  @Get('petImg/:petid')
  async getPetImg(@Param('petid', ParseIntPipe) petId: number) {
    return await this.petService.getPetImg(petId);
  }

  @Get('vaccine/:id')
  async getVaccine(@Param('id', ParseIntPipe) petId: number) {
    return await this.petService.getVaccine(petId);
  }

  @Post('addPet')
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('file'))
  async addPet(
    @GetUser('id') userId: number,
    @Body() addPetDto: AddPetDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    await this.petService.addPet(userId, addPetDto, file);
    return { message: 'success' };
  }

  @Post('addWeight/:id')
  async addWeight(
    @Body() addWeightDto: AddWeightDto,
    @Param('id', ParseIntPipe) petId: number,
  ) {
    await this.petService.addWeight(addWeightDto, petId);
    return { message: 'success' };
  }

  @Post('uploadPetImg/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPetImg(
    @Body() uploadPetImgDto: uploadPetImgDto,
    @Param('id', ParseIntPipe) petId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.petService.uploadPetImg(uploadPetImgDto, petId, file);
  }

  @Post('uploadVaccine/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadVaccine(
    @Param('id', ParseIntPipe) petId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    await this.petService.uploadVaccine(petId, file);
    return { message: 'success' };
  }

  // @Post('uploadPetImg/:id')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadPetImg(@Body() uploadPetImgDto:uploadPetImgDto, @Param('id',ParseIntPipe) petId: number,@UploadedFile() files: Express.Multer.File[]){
  //   await this.petService.uploadPetImg(uploadPetImgDto, petId, files);
  //   return {message:'success'}
  // }
}
