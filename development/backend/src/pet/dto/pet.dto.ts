import { Gender } from '@prisma/client';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  
} from 'class-validator';

export class PetDto {
  @IsNotEmpty() id: string;
  @IsNotEmpty() petname: string;
}

export class AddPetDto {
  @IsNumber()
  userId: number;

  @IsString()
  profileImg: string|undefined;

  @IsString()
  @IsNotEmpty()
  @MaxLength(14)
  name: string;

  date_birth: Date;

  @IsNumber()
  species: Number|undefined;

  @IsNotEmpty()
  gender: Gender;


}