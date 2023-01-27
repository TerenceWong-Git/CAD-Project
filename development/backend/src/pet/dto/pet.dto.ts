import { Gender } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  
} from 'class-validator';

export class AddWeightDto {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  weight: number;

}
export class PetDto {
  
  @IsNotEmpty() id: string;
  @IsNotEmpty() petname: string;
}

export class AddPetDto {
  // @IsString()
  // @IsOptional()
  // profileImg?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(14)
  name: string;

  @IsOptional()
  date_birth?: Date;

  @Type(() => Number)
  @IsNumber()
  speciesId: number;

  @IsNotEmpty()
  gender: Gender;

  
}