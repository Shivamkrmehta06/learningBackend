import express from "express"
import router from "./routers/user.router.js"
import loginRouter from "./routers/login.router.js"
import postUser from "./routers/postUser.router.js"
import learn from "./routers/learn.router.js"
import students from "./data/students.js"
import studentRouter from "./routers/students.route.js";
const app = express()

// app.get("/",(req,res)=>{
//     res.send("Hello Backend")
// })

// app.get("/about",(req,res)=>{
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers.host);
//     console.log(req.headers["user-agent"]);

//     res.send("About page")
// })

// app.get("/learn/:params",(req,res)=>{
//     console.log(req.params);
//     res.send("Done")
// })

// app.get("/query",(req,res)=>{
//     console.log(req.query);
//     res.send("Learning req.query")
// })

// app.get("/student/:roll",(req,res)=>{
//     res.send(`Student roll number is ${req.params.roll}`)
// })

// app.get("/products",(req,res)=>{
//     res.send(`Page Number: ${req.query.page}`)
// })

// app.use(express)

// app.post("/login",(req,res)=>{
//     const {email,password} = req.body
//     res.send("Login Success")
// })

//app.use("/",router)

app.use((req,res,next)=>{
    console.log("This is Middleware")
    next()
})

app.use("/",loginRouter)

app.use(express.json())

//app.use("/api/v1", postUser);

//app.use("/api/v2",learn)

app.use("/api/v2",studentRouter)


export default app