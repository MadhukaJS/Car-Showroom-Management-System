const express=require('express');
const Message=require('../models/msges');

const router=express.Router();

router.post('/create',async(req,res)=>{
    console.log(req.body);
try{
    const message=new Message(req.body);
    await message.save();

    res.status(200).json({
        status:'success',
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