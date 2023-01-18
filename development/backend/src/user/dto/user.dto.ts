import { District, Gender } from '@prisma/client';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty() id: string;
  @IsNotEmpty() username: string;
  @IsNotEmpty() @IsEmail() email: string;
}

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(14)
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(10000000)
  @Max(99999999)
  phoneNumber: number;

  @IsNotEmpty()
  gender: Gender;

  @IsNotEmpty()
  district: District;

  @IsNumber()
  @IsNotEmpty()
  @Min(1000)
  @Max(9999)
  yearBirth: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(12)
  monthBirth: number;
}
