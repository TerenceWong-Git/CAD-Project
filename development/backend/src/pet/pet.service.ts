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
    // async getSpecies() {
    //     const foundSpeciesID = await this.prismaService.species.findUnique(
    //         {
    //         where: {
    //             id:1
    //         },
    //     })
    //     return foundSpeciesID
    // }
    
    async addPet(userId: number, addPetDto: AddPetDto) {
        
        await this.prismaService.pet.create({
            data: {
                userId: userId,
                name: addPetDto.name,
                dateBirth: addPetDto.date_birth,
                gender: addPetDto.gender,
                speciesId: addPetDto.speciesId
            }
        })
    }
}
