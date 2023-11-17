const express=require('express');
const Message=require('../models/messages');
const {authenticate}=require('../middleware/auth');

const router=express.Router();

router.post('/',authenticate,async(req,res)=>{
    
try{
    const messageContent={
            message:req.body.Message,
            name:req.user.name,
            userId:req.user._id

    };
    const message=new Message(messageContent);
    await message.save();

    res.status(200).json({
        status: 'success',
        data:{
            message
        }
    })
    
}catch(err){
    console.log(err);
    res.status(500).json({
        status:'failed',
        message:(err)
    });
}


}


)

module.exports=router