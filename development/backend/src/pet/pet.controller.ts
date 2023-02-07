import { v4 as uuid } from 'uuid';

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
  UploadedFiles,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { AddPetDto, AddWeightDto, UploadPetImgDto } from './dto';
import { PetService } from './pet.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { S3uploadService } from 'src/s3upload/s3upload.service';
import { extname } from 'path';

@Controller('pet')
export class PetController {
  constructor(
    private readonly petService: PetService,
    private readonly s3uploadService: S3uploadService,
  ) {}

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
  @Get('petWeight/:petid')
  @UseGuards(JwtGuard)
  async getPetWeight(
    @GetUser('id') userId: number,
    @Param('petid', ParseIntPipe) petId: number,
  ) {
    return await this.petService.getPetWeight(petId, userId);
  }

  @Get('petImg/:petid')
  @UseGuards(JwtGuard)
  async getPetImg(
    @Param('petid', ParseIntPipe) petId: number,
    @GetUser('id') userId: number,
  ) {
    return await this.petService.getPetImg(petId, userId);
  }

  @Get('vaccine/:id')
  @UseGuards(JwtGuard)
  async getVaccine(
    @Param('id', ParseIntPipe) petId: number,
    @GetUser('id') userId: number,
  ) {
    const res = await this.petService.getVaccine(petId, userId);
    return res;
  }

  @Post('addPet')
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('file'))
  async addPet(
    @GetUser('id') userId: number,
    @Body() addPetDto: AddPetDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const filename = `${uuid()}${extname(file.originalname)}`;
    await this.s3uploadService.upload(file, filename);
    await this.petService.addPet(userId, addPetDto, filename);

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
  @UseInterceptors(FilesInterceptor('files'))
  async uploadPetImg(
    @Body() uploadPetImgDto: UploadPetImgDto,
    @Param('id', ParseIntPipe) petId: number,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const arrayOfFileNames = [];
    for (const file of files) {
      const filename = `${uuid()}${extname(file.originalname)}`;
      arrayOfFileNames.push(filename);
      await this.s3uploadService.upload(file, filename);
    }
    await this.petService.uploadPetImg(uploadPetImgDto, petId, arrayOfFileNames);
    return { message: 'success' };
  }

  @Post('uploadVaccine/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadVaccine(
    @Param('id', ParseIntPipe) petId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const filename = `${uuid()}${extname(file.originalname)}`;
    await this.s3uploadService.upload(file, filename);
    await this.petService.uploadVaccine(petId, filename);
    return { message: 'success' };
  }
}
