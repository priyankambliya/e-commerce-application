import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nickname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    middlename:{
        type:String
    },
    mobile:{
        type:String
    },
    image:{
        type:String
    },
    otp:{
        type:String
    },
    otpVerification:{
        type:Boolean,
        num:[0,1],
        default:0
    }
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema)

export default User