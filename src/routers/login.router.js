import express from "express"

const loginRouter = express.Router()

loginRouter.get("/login",(req,res)=>{
    res.send("This is login page");
})

export default loginRouter