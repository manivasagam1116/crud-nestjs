import { Model } from "mongoose";
import { Student, StudentDocument } from "./Student.schema";
export declare class StudentService {
    private studentModel;
    constructor(studentModel: Model<StudentDocument>);
    create(Student: Student): Promise<Student>;
    readAll(): Promise<Student[]>;
    readById(id: any): Promise<Student>;
    update(id: any, Student: Student): Promise<Student>;
    delete(id: any): Promise<any>;
}
