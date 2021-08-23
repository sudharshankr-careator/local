import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExcelUploadService } from './excel-upload.service';
import { ExcelUpload } from './entities/excel-upload.entity';
import { CreateExcelUploadInput } from './dto/create-excel-upload.input';
import { UpdateExcelUploadInput } from './dto/update-excel-upload.input';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { Logger } from '@nestjs/common';
<<<<<<< HEAD
//import { GraphQLUpload } from 'apollo-server-express';
=======
>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4

@Resolver('Excel')
export class ExcelUploadResolver {
  constructor(private readonly excelUploadService: ExcelUploadService) {}

  @Query(() => [ExcelUpload], { name: 'excelUpload' })
  findAll() {
    return this.excelUploadService.findAll();
  }

  @Mutation(() => String)
  async uploadFile(
    @Args({
      name: 'file',
      type: () => GraphQLUpload,
    })
    { createReadStream, filename }: FileUpload,
  ) {
    console.log('in mutation');

    let a = await new Promise(async (resolve, reject) => {
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
<<<<<<< HEAD
        // .this.excelService.uploadFile(createReadStream, filename)
=======
>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4
        .on('finish', () => resolve('true'))
        .on('error', (e) => {
          reject('false');
          Logger.log(e, 'rejected');
        });

      setTimeout(() => {
        this.excelUploadService.read(filename);
      }, 1000);
    });
    return a;
  }
}
