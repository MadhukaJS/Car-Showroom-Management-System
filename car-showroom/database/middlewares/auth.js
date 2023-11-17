const jwt=require('jsonwebtoken');
const User=require('../Database/model/user');
require('dotenv').config();
const JWT_SECRET= process.env.JWT_SECRET;

const authenticate=async(req,res,next)=>{
    const token=req.header('authentication')?.replace('Bearer','');

    if(!token){
        return res.status(401).json({message:'authentication required'});
    }

    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        const user=await User.findById(decoded.userId);

        if(!user){
            throw new Error('User not found');
        }

        req.user=user;
        next();


    }catch (err){
        res.status(500).json({
            message:'invalid token'
        });
    }
};

const authorize=(role)=>{
    return(req,res,next)=>{
        if(req.user && req.user.role===role){
            next();
        }else{
            res.status(403).json({message:'access denied'});
        }
    }
}

module.exports={authenticate,authorize};