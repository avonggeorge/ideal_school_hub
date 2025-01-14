import { z } from "zod";

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name cannot be empty!" }),
  teachers: z.array(z.string()), //teacher ids
});

export type SubjectSchema = z.infer<typeof subjectSchema>;

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name cannot be empty!" }),
  capacity: z.coerce.number().min(1, { message: "Capacity name cannot be empty!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade name cannot be empty!" }),
  supervisorId: z.coerce.string().optional(),
});

export type ClassSchema = z.infer<typeof classSchema>;

export const teacherSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must contain a minimum of 3 characters!"})
    .max(20, { message: "Username must contain a maximum of 20 characters!"}),
  password: z
    .string()
    .min(8, { message: "Password must contain a minimum of 8 characters!"})
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name cannot be empty!" }),
  surname: z.string().min(1, { message: "Last name cannot be empty!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type cannot be empty!" }),
  birthdate: z.coerce.date({ message: "birthdate cannot be empty!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex cannot be empty!" }),
  subjects: z.array(z.string()).optional(), // subject ids
});

export type TeacherSchema = z.infer<typeof teacherSchema>;

export const studentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must contain a minimum of 3 characters!"})
    .max(20, { message: "Username must contain a maximum of 20 characters!"}),
  password: z
    .string()
    .min(8, { message:  "Password must contain a minimum of 8 characters!"})
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name cannot be empty!" }),
  surname: z.string().min(1, { message: "Last name cannot be empty!" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type cannot be empty!" }),
  birthdate: z.coerce.date({ message: "birthdate cannot be empty!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex cannot be empty!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade cannot be empty!" }),
  classId: z.coerce.number().min(1, { message: "Class cannot be empty!" }),
  parentId: z.string().min(1, { message: "Parent Id cannot be empty!" }),
});

export type StudentSchema = z.infer<typeof studentSchema>;

export const examSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: "Title name cannot be empty!" }),
  startTime: z.coerce.date({ message: "Start time cannot be empty!" }),
  endTime: z.coerce.date({ message: "End time cannot be empty!" }),
  lessonId: z.coerce.number({ message: "Lesson cannot be empty!" }),
});

export type ExamSchema = z.infer<typeof examSchema>;