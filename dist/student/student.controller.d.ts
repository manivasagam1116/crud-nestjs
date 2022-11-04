import { StudentService } from './student.service';
import { Student } from "./student.schema";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    createStudent(response: any, student: Student): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
    update(response: any, id: any, student: Student): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
