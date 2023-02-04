import { Transform } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  // @IsOptional()
  title: string;

  @IsString()
  // @IsOptional()
  content: string;

  @Transform(({ value }) => {
    return [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1;
  })
  @IsBoolean()
  // @IsOptional()
  isThumb: boolean;
}
