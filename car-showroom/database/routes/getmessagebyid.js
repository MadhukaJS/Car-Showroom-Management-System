const express=require('express');
const Message=require('../models/msges');

const router=express.Router();

router.get('/:id',async(req,res)=>{
    const message=await Message.findById(req.params.id);
try{
    res.status(200).json({
        status:'success',
        data:{
            message
        }
    })
}catch(err){
    res.status(500).json({
        status:'failed',
        message:(err)
    });
}


}


)

module.exports=router