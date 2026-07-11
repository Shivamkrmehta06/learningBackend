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

export {getStudents,getStudentsById,createStudent}