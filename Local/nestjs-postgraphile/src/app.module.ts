<<<<<<< HEAD
=======
import { BullModule } from '@nestjs/bull';
>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { StudentModule } from "./student/student.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
<<<<<<< HEAD
    TypeOrmModule.forRoot({}),
=======
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    BullModule.forRoot({
      redis: {
        host: "redis",
        port: 6379,
      },
    }),
>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
