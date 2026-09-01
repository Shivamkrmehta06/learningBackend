import students from "../data/students.js";

const getStudents = (req,res)=>{
    res.status(200).json({
        success:true,
        data:students
    })
}

const getStudentsById = (req,res)=>{
    const readId = Number(req.params.id)
    const stuExe = students.find(student=>student.id===readId)
    if(stuExe){
        res.status(200).json({
            success:true,
            data:stuExe
        })
    }else{
        res.status(404).json({
            success:false,
            message:"Student not found"
        })
    }
}

const createStudent = (req,res)=>{
    const data = req.body
    if(!data.age||!data.name){
        res.status(400).json({
            success:false,
            message:"Name and age are required"
        })
    }
    const newId = students.length===0?1:Math.max(...students.map(student=>student.id))+1
    const newStudent = {
        id:newId,
        name:data.name,
        age:data.age
    }
    students.push(newStudent)
    console.log(students);
    return res.status(201).json({
        success:true,
        message:"Student Created",
        data:newStudent
    })
}

const updateStudent = (req,res)=>{
    const id = Number(req.params.id)
    const index = students.findIndex(student=>student.id===id)
    if(index===-1){
        res.status(404).json({
            message:"Student not found"
        })
    }
    students[index] = {
        id,
        ...req.body 
    }
    res.status(200).json({
        message:"Student updated",
        student:students[index]
    })
}

const patchStudent = (req,res)=>{
    const id = Number(req.params.id)
    const student = students.find(student=>student.id===id)
    if(!student){
        return res.status(404).json({
            message:"Student not found"
        })
    }
    Object.assign(student,req.body)
    console.log(students);
    res.status(200).json({
        message:"Student updated successfully",
        student
    })
}

const deleteStudent = (req,res)=>{
    const id = Number(req.params.id)
    const index = students.findIndex(student=>student.id===id)
    if(index===-1){
        return res.status(404).json({
            message:"Student not found"
        })
    }
    students.splice(index,1)
    console.log(students)
    return res.status(200).json({
        message:"Student record is deleted",
        dataRemaining:students
    })
}

export {getStudents,getStudentsById,createStudent,updateStudent,patchStudent,deleteStudent}