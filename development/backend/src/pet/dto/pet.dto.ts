import { Gender } from '@prisma/client';
import { Transform, Type } from 'class-transformer';
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

// export class uploadVaccineDto{
  

// }
export class uploadPetImgDto{


  @IsString()
  @MaxLength(20)
  tag?: string;

  @Transform(({value})=> value ==='true')
  @IsNotEmpty()
  isPrivate: boolean;
}
export class AddPetDto {
  // @IsString()
  // @IsOptional()
  // profileImg?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(14)
  name: string;

  @Type(() => Date)
  @IsOptional()
  dateBirth?: Date;

  @Type(() => Number)
  @IsNumber()
  speciesId: number;

  @IsNotEmpty()
  gender: Gender;

  
}