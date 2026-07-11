import express from "express"

const learn = express.Router()

/* 

router.get("/students", ...)

router.post("/students", ...)

router.put("/students/:id", ...)

router.patch("/students/:id", ...)

router.delete("/students/:id", ...)

*/

learn.get("/students",(req,res)=>{
    console.log(req.body)
    res.json({
        message:"GET request"
    })
})

learn.post("/students",(req,res)=>{
    console.log(req.body);
    res.status(201).json({
        message:"POST request"
    })
})

learn.put("/students/:id",(req,res)=>{
    console.log(req.body);
    res.json({
        message:"PUT request"
    })
})

learn.patch("/students/:id",(req,res)=>{
    console.log(req.body);
    res.json({
        message:"PATCH request"
    })
})

learn.delete("/students/:id",(req,res)=>{
    console.log(req.body);
    res.json({
      message: "DELETE request"
    });
})

export default learn