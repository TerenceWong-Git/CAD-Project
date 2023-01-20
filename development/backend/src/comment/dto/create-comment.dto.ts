import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  mapId: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsBoolean()
  isThumb: boolean;
}
