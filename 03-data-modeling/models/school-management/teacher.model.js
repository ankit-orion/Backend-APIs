import mongoose from "mongoose";
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    experience:{
        type:Number,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true
    }
},{timestamps:true});