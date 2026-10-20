import express from "express"

import { createStudent, getStudents, getStudentsById, updateStudent, patchStudent, deleteStudent } from "../controllers/students.controller.js"
import { patchValidationStudent, validateStudent } from "../middleware/validateStudent.middleware.js";

const studentRouter = express.Router();

studentRouter.get("/students", getStudents);

studentRouter.get("/students/:id",getStudentsById)

// studentRouter.post("/students",createStudent)

// studentRouter.put("/students/:id",updateStudent)

studentRouter.patch("/students/:id",patchStudent)

studentRouter.delete("/students/:id",deleteStudent)

studentRouter.post("/students",validateStudent,createStudent)

studentRouter.put("/students/:id",validateStudent,updateStudent)

studentRouter.patch("/students/:id",patchValidationStudent,patchStudent)

export default studentRouter