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

// export class uploadVaccineDto{

// }
export class UploadPetImgDto {
  @IsString()
  tag?: string;

  @Transform(({ value }) => {
    return [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1;
  })
  @IsNotEmpty()
  isPrivate: boolean;
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

  @Type(() => Date)
  @IsOptional()
  dateBirth?: Date;

  @Type(() => Number)
  @IsNumber()
  speciesId: number;

  @IsNotEmpty()
  gender: Gender;
}
