import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddPetDto, AddWeightDto, UploadPetImgDto } from './dto';
// Deleted UserDto & PetDto (有冇用過)

@Injectable()
export class PetService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserName(Id: number) {
    const foundPet = await this.prismaService.user.findUnique({
      where: { id: Id },
      select: {
        username: true,
      },
    });

    return foundPet;
  }
  async getUserPet(Id: number) {
    const foundPet = await this.prismaService.pet.findMany({
      where: { userId: Id },
      select: {
        id: true,
        name: true,
        dateBirth: true,
        species: {
          select: {
            id: true,
            chiSpecies: true,
            engSpecies: true,
          },
        },
        // PetWeight: true,
      },
    });

    return foundPet;
  }
  async getPet(petId: number, userId: number) {
    const foundPet = await this.prismaService.pet.findMany({
      where: { userId: userId, id: petId },
      select: {
        id: true,
        name: true,
        dateBirth: true,
        PetWeight: true,
      },
    });
    return foundPet;
  }

  async getPetWeight(petId: number, userId: number) {
    const selectedPet = await this.prismaService.pet.findUnique({
      where: {
        id: petId,
      },
    });
    if (!selectedPet || selectedPet.userId !== userId) {
      throw new ForbiddenException('Failed to update get weight');
    }
    const foundPet = await this.prismaService.petWeight.findMany({
      take: 5,
      where: { petId: petId },
      select: {
        weight: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return foundPet;
  }

  async getPetImg(petId: number, userId: number) {
    const foundPet = await this.prismaService.petImg.findMany({
      where: { petId: petId, pet: { userId } },
      select: {
        id: true,
        name: true,
        isPrivate: true,
        tag: true,
      },
      orderBy: [
        {
          id: 'asc',
        },
      ],
    });
    return foundPet;
  }
  async getVaccine(petId: number, userId: number) {
    const foundPet = await this.prismaService.petVaccine.findMany({
      where: { petId: petId, pet: { userId } },
      select: {
        id: true,
        name: true,
        createdAt: true,
      },
    });
    return foundPet;
  }

  async getSpecies() {
    const foundSpecies = await this.prismaService.species.findMany();
    return foundSpecies;
  }

  async addWeight(addWeightDto: AddWeightDto, petId: number) {
    const data = await this.prismaService.petWeight.create({
      data: {
        petId: petId,
        ...addWeightDto,
      },
    });
    return data;
  }

  async uploadPetImg(
    uploadPetImgDto: UploadPetImgDto,
    petId: number,
    files: Express.Multer.File[],
  ) {
    console.log(files);

    await this.prismaService.petImg.createMany({
      data: files.map((file) => ({
        petId: petId,
        name: file.filename,
        tag: uploadPetImgDto.tag,
        isPrivate: uploadPetImgDto.isPrivate,
      })),
    });
  }

  async uploadVaccine(petId: number, file: Express.Multer.File) {
    const data = await this.prismaService.petVaccine.create({
      data: {
        petId: petId,
        name: file.filename,
      },
    });
    return data;
  }

  async addPet(
    userId: number,
    addPetDto: AddPetDto,
    file: Express.Multer.File,
  ) {
    await this.prismaService.pet.create({
      data: {
        userId: userId,
        ...addPetDto,
        profileImg: file.filename,
      },
    });
  }
}
