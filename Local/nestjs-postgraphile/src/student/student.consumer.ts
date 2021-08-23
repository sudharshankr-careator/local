import {
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from "@nestjs/bull";
import { InjectRepository } from "@nestjs/typeorm";
import { Job } from "bull";
import { StudentD } from "src/Student";
import { Repository } from "typeorm";
import { Student } from "./entities/student.entity";
import * as SC from "socketcluster-client";
import { Logger } from "@nestjs/common";

let socket = SC.create({
<<<<<<< HEAD
  hostname: "localhost",
=======
  hostname: "socket",
>>>>>>> 655bc73e5984aee25ffff16d8e5049b7356ec4a4
  port: 8002,
});
@Processor("student")
export class StudentConsumer {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  @Process("create")
  async createStudent(job: Job<[StudentD]>) {
    let d1 = [];
    job.data.map((val) => {
      const data = this.studentRepository.save(val);
      return data
        .then((val) => console.log(val))
        .catch((e) => {
          d1.push("error");
        });
    });
    if (d1.length <= 1) {
      (async () => {
        try {
          await socket.invokePublish("studentE", `Failed job with error`);
        } catch (error) {
          Logger.log(error);
        }
      })();
    }
  }
  @OnQueueCompleted()
  completed(job: Job, result: any) {
    (async () => {
      try {
        await socket.invokePublish(
          "jobComplete",
          `Completed job with result ${result}`,
        );
      } catch (error) {
        Logger.log(error);
      }
    })();
    Logger.log(`Completed job with result ${result}`);
  }

  @OnQueueFailed()
  failed(job: Job, err: Error) {
    (async () => {
      try {
        await socket.invokePublish("jobFailed", `Failed job with error ${err}`);
      } catch (error) {
        Logger.log(error);
      }
    })();
    Logger.log(`Failed job with error ${err}...`);
  }
}
