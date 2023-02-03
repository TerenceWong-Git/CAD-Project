import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { v4 as uuid } from 'uuid';
import { extname } from 'path';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = process.env.UPLOAD_LOCATION;
          // Create folder if doesnt exist
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath);
          }
          cb(null, uploadPath);
        },
        // File modification details
        filename: (req: any, file: any, cb: any) => {
          // Calling the callback passing the random name generated with
          // the original extension name
          cb(null, `${uuid()}${extname(file.originalname)}`);
        },
      }),
    }),
  ],
  providers: [PetService],
  controllers: [PetController],
})
export class PetModule {}
