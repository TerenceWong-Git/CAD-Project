import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from 'src/user/dto';
import { AddPetDto, PetDto } from './dto';

@Injectable()
export class PetService {
    constructor(private readonly prismaService: PrismaService) {}

    async getPet(Id:number){
        const foundPet = await this.prismaService.pet.findMany({
            where:{ userId: Id},
        })

        return foundPet;
    }

    async getSpecies() {
        const foundSpecies = await this.prismaService.species.findMany()
        return foundSpecies
    }
    
    async addPet(userId: number, addPetDto: AddPetDto, file:Express.Multer.File) {
        
        await this.prismaService.pet.create({
            data: {
                userId: userId,
                ...addPetDto,
                profileImg: file.originalname
            }
            
        })
    }
}
