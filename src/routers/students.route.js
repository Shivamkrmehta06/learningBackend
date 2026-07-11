import express from "express"

import { createStudent, getStudents, getStudentsById } from "../controllers/students.controller.js"

const studentRouter = express.Router();

studentRouter.get("/students", getStudents);

studentRouter.get("/students/:id",getStudentsById)

studentRouter.post("/students",createStudent)

export default studentRouter