export const validateStudent = (req,res,next)=>{
    const {name,age} = req.body;

    if(!name || age === undefined){
        return res.status(400).json({
            message:"Name and age is required"
        });
    };

    if(typeof name !== String){
        return res.status(400).json({
            message:"Name must be a Stirng"
        });
    };

    if(typeof age !== Number){
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
            message:"Name must contain atleast 3 characters"
        });
    };

    next();
}
