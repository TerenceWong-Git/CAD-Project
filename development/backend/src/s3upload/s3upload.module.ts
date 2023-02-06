import { Global, Module } from '@nestjs/common';
import { S3uploadService } from './s3upload.service';

@Global()
@Module({
  providers: [S3uploadService],
  exports: [S3uploadService],
})
export class S3uploadModule {}
