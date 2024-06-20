import User from "../models/User.js";
// updating details of existing user
export const updateUser=async(req,res,next)=>{
    try{
        const updatedUser=await User.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true},
        )
    }
    catch(err){
        next(err);
    }
}

// deleting an existing user
export const deleteUser=async (req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    }
    catch(err){
        next(err);
    }
}
// fetching details of a single user
export const getUser=async(req,res,next)=>{
    try{
        const user=await User.findById(req.params.id);
        res.status(200).json(user)
    }
    catch(err){
        next(err);   
    }

}
// fetching details of all users
export const getUsers=async(req,res,next)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }
    catch(err){
        next(err);
    }
}