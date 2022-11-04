import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Student, StudentDocument } from "./Student.schema";

@Injectable()
export class StudentService {
    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}
    
    async create(Student: Student): Promise<Student> {
        const newStudent = new this.studentModel(Student);
        return newStudent.save();
    }

    async readAll(): Promise<Student[]> {
        return await this.studentModel.find().exec();
    }

    async readById(id): Promise<Student> {
        return await this.studentModel.findById(id).exec();
    }

    async update(id, Student: Student): Promise<Student> {
        return await this.studentModel.findByIdAndUpdate(id, Student, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.studentModel.findByIdAndRemove(id);
    }
}
