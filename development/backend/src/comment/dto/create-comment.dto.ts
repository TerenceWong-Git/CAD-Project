import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @Type(() => Number)
  @IsNumber()
  mapId: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @Transform(({ value }) => {
    return [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1;
  })
  @IsBoolean()
  isThumb: boolean;
}
