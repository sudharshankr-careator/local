import { Module } from "@nestjs/common";

import { Student } from "./entities/student.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BullModule } from "@nestjs/bull";
import { StudentConsumer } from "./student.consumer";

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    BullModule.registerQueue({
      name: "student",
      redis: {
<<<<<<< HEAD
        host: "localhost",
=======
        host: "redis",
>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4
        port: 6379,
      },
    }),
  ],
  providers: [StudentConsumer],
})
export class StudentModule {}
