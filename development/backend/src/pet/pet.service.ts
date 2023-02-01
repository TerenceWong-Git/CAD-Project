import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from 'src/user/dto';
import { AddPetDto, AddWeightDto, PetDto, uploadPetImgDto } from './dto';
import { v4 as uuidv4 } from 'uuid';

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
        dateBirth:true,
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
  async getPet(petId: number,userId: number) {
    const foundPet = await this.prismaService.pet.findMany({
      where: { userId : userId,id: petId },
      select: {
        id: true,
        name: true,
        dateBirth:true,
        PetWeight: true,
      },
    });
    return foundPet;
  }

  async getPetImg(petId: number) {
    const foundPet = await this.prismaService.petImg.findUnique({
      where: { id: petId },
      select: {
        id: true,
        name: true,
        isPrivate:true,
        tag: true,
        // modifiedAt: true
      },
    });
    return foundPet;
  }
  async getVaccine(petId: number) {
    const foundPet = await this.prismaService.petVaccine.findUnique({
      where: { id: petId },
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

    async addWeight(addWeightDto:AddWeightDto, petId: number){
        const data = await this.prismaService.petWeight.create({
            data:{
                petId: petId,
                ...addWeightDto
            }
        })
        return data
    }

    async uploadPetImg(uploadPetImgDto:uploadPetImgDto, petId: number,file: Express.Multer.File){
      
      const newFile = new Date().toJSON().slice(0)+ "-" +file.originalname

      const data = await this.prismaService.petImg.create({
          data:{
              petId: petId,
              ...uploadPetImgDto,
              name: newFile
          }
      })
      return data
  }
  async uploadVaccine(petId: number,file: Express.Multer.File){
      
    const newFile = new Date().toJSON().slice(0)+ "-" +file.originalname

    const data = await this.prismaService.petVaccine.create({
        data:{
            petId: petId,
            name: newFile
        }
    })
    return data
}

//   async uploadPetImg(uploadPetImgDto:uploadPetImgDto, petId: number,files: Express.Multer.File[]){
      
//     const fieldFiles = files.map((file) => ({ name: file.originalname }));

//     const data = await this.prismaService.petImg.createMany({
//         data:{
//             petId: petId,
//             ...uploadPetImgDto,
//             fieldFiles
//         }
//     })
//     return data
// }
    
    async addPet(userId: number, addPetDto: AddPetDto, file:Express.Multer.File) {
        
        const newFile = new Date().toJSON().slice(0)+ "-" +file.originalname
        
        console.log("ori",file.originalname);
        
        await this.prismaService.pet.create({
            data: {
                userId: userId,
                ...addPetDto,
                profileImg: newFile
            }
            
        })
    }
}
