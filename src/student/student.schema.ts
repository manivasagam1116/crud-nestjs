import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop()
  id: string;

  @Prop()
  name: string;
 
  @Prop()
  age: number;

  @Prop()
  phonenumber: number;

  @Prop()
  address: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);