export const validateStudent = (req,res,next)=>{
    const {name,age} = req.body;

    if(!name || age === undefined){
        return res.status(400).json({
            message:"Name and age is required"
        });
    };

    if(typeof name !== "string"){
        return res.status(400).json({
            message:"Name must be a String"
        });
    };

    if(typeof age !== "number"){
        return res.status(400).json({
            message:"Age must be a Number"
        });
    };

    if(name.trim().length === 0){
        return res.status(400).json({
            message:"Name can't be empty"
        });
    };

    if(age<1||age>120){
        return res.status(400).json({
            message:"Age must be between 1 and 120"
        });
    };

    if(name.trim().length<3){
        return res.status(400).json({
            message:"Name must contain at least 3 characters"
        });
    };

    next();
}

export const patchValidationStudent=(req,res,next)=>{
    const {name,age} = req.body
    if(name!==undefined){
        if(typeof name!=="string"){
            return res.status(400).json({
                message:"Name must be a String"
            })
        }
        if (name.trim().length === 0) {
          return res.status(400).json({
            message: "Name can't be empty",
          });
        }
        if (name.trim().length < 3) {
          return res.status(400).json({
            message: "Name must contain at least 3 alphabets",
          });
        }
    }
    if(age!==undefined){
        if (typeof age !== "number") {
          return res.status(400).json({
            message: "Age must be a Number",
          });
        }
        if (age < 1 || age > 120) {
          return res.status(400).json({
            message: "Age must be between 1 and 120",
          });
        }
    }
    if(name===undefined&&age===undefined){
        return res.status(400).json({
            message:"Nothing to update"
        })
    }
    next()
}
