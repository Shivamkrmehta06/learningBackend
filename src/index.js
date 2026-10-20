import app from "./app.js"
import connectDB from "./config/db.js";
import { configDotenv } from "dotenv";


configDotenv();
console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
await connectDB();

app.listen(3000,()=>{
    console.log("Server is connected");
})