import Student from "../model/student.model.js"
const getStudents =async (req,res,next)=>{
    try{
        const students = await Student.find();
        res.status(200).json({
        success:true,
        data:students
    })
    }catch(error){
        next(error)
    }
}

const getStudentsById =async (req,res,next)=>{
    try{
        const id=req.params.id
        const student=await Student.findById(id)
        if(student){
            return res.status(200).json({
                success:true,
                data:student
            })
        }
        return res.status(404).json({
            success:false,
            message:"Student not found"
        })
    }catch(error){
        next(error)
    }
}

const createStudent = async (req,res,next)=>{
    try{
        const data = req.body
        if(!data.age||!data.name){
            return res.status(400).json({
                success:false,
                message:"Name and age are required"
        })
    }
        const student=await Student.create({
            name:data.name,
            age:data.age
        })
        return res.status(201).json({
            success:true,
            message:"Student is created",
            data:student
        })
    }catch(error){
        next(error)
    }
}

const updateStudent =async (req,res,next)=>{
    try{
        const id=req.params.id
        const student=await Student.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if(!student){
            return res.status(404).json({
                success:false,
                message:"Student not found"
            })
        }
        return res.status(200).json({
            success:true,
            data:student
        })
        }
        catch(error){
            next(error)
    }
}

const patchStudent =async (req,res,next)=>{
    try{
        const id=req.params.id
        const student=await Student.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        if(!student){
            return res.status(404).json({
                success:false,
                message:"Student not found"
            })
        }
        return res.status(200).json({
            success:true,
            data:student
        })
    }catch(error){
        next(error)
    }
}

const deleteStudent =async (req,res,next)=>{
    try{
        const id=req.params.id
        const student=await Student.findByIdAndDelete(id)
        if(!student){
            return res.status(404).json({
                success:false,
                message:"Student not found"
            })
        }
        return res.status(200).json({
            success:true,
            data:student,
            message:"Student Record is deleted"
        })
    }catch(error){
        next(error)
    }
}

export {getStudents,getStudentsById,createStudent,updateStudent,patchStudent,deleteStudent}