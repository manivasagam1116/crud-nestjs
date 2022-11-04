import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/testingdb'), StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
