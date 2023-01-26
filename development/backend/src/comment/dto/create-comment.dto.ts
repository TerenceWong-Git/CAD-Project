import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @Type(() => Number)
  @IsNumber()
  mapId: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @Type(() => Boolean)
  @IsBoolean()
  isThumb: boolean;
}
