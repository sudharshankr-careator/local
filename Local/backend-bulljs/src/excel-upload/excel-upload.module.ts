import { Module } from '@nestjs/common';
import { ExcelUploadService } from './excel-upload.service';
import { ExcelUploadResolver } from './excel-upload.resolver';
import { Upload } from 'graphql-upload';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    Upload,
    BullModule.registerQueue({
      name: 'student',
      redis: {
<<<<<<< HEAD
        host: 'localhost',
=======
        host: 'redis',
>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4
        port: 6379,
      },
    }),
  ],
  providers: [ExcelUploadResolver, ExcelUploadService],
})
export class ExcelUploadModule {}
