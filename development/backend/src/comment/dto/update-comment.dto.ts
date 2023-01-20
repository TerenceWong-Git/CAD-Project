import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsBoolean()
  is_thumb: boolean;
}
