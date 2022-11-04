import { StudentService } from './student.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Student } from "./student.schema";

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Post()
    async createStudent(@Res() response, @Body() student: Student) {
        const newStudent = await this.studentService.create(student);
        return response.status(HttpStatus.CREATED).json({
            status:"success",
            statuscode:"200",
            message:"student data inserted successfully",
            result:newStudent
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const students = await this.studentService.readAll();
        return response.status(HttpStatus.OK).json({
            status:"success",
            statuscode:"200",
            result:students
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const student = await this.studentService.readById(id);
        return response.status(HttpStatus.OK).json({
            status:"success",
            statuscode:"200",
            result: student
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() student: Student) {
        const updatedStudent = await this.studentService.update(id, student);
        return response.status(HttpStatus.OK).json({
            status:"success",
            statuscode:"200",
            message:"student data updated successfully",
            result: updatedStudent
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedStudent = await this.studentService.delete(id);
        return response.status(HttpStatus.OK).json({
            status:"success",
            statuscode:"200",
            message:"student data deleted successfully",
            result: deletedStudent
        })
    }
}
