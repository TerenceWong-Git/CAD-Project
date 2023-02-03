import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3uploadService } from './s3upload.service';

@Controller('s3upload')
export class S3uploadController {
  constructor(private readonly s3uploadService: S3uploadService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file) {
    return await this.s3uploadService.upload(file);
  }
}
