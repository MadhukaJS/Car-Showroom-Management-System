const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        match:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:128
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    age:{
        type:Number,
        validate:{
            validator:function(value){
                return value>=18;
            },
            message:'age must be at least 18'
        }
    }
});

const user=mongoose.model('user',UserSchema);

module.exports=user;