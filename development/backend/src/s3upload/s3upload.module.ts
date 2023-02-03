import { Module } from '@nestjs/common';
import { S3uploadService } from './s3upload.service';
import { S3uploadController } from './s3upload.controller';

@Module({
  providers: [S3uploadService],
  controllers: [S3uploadController],
})
export class S3uploadModule {}
