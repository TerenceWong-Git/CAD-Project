import { Injectable, Logger } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';

@Injectable()
export class S3uploadService {
  async upload(file, filename) {
    const bucketS3 = process.env.S3_BUCKET;
    console.log('running upload');
    console.log('file: ', file);

    await this.uploadS3(file.buffer, bucketS3, filename);
  }

  async uploadS3(file, bucket, name) {
    const s3 = this.getS3();
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
    };
    console.log('params: ', params);

    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          Logger.error(err);
          reject(err.message);
        }
        resolve(data);
      });
    });
  }

  getS3() {
    return new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }
}
