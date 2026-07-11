import express, { Router } from "express"

const postUser = express.Router()

postUser.post("/students",(req,res)=>{
    console.log(req.body);
    res.json({
        message:"Student Created"
    })
})

export default postUser

/* 

Imagine...

Today your API is

/api/v1/students

One year later

Management says

We are changing the API.

Old

{
   "name":"Shivam"
}

New

{
   "fullName":"Shivam Kumar Mehta",
   "email":"..."
}

Now...

Thousands of mobile apps are already using

/api/v1/students

If you directly change it...

💥 Everything breaks.

Instead companies create

/api/v2/students

Now

Old clients

↓

Use

/api/v1

New clients

↓

Use

/api/v2

No one breaks.

That's why APIs are versioned.

This is called

API Versioning

You'll hear this term in interviews.

*/