const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter Your name!"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"please enter Your email!"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"please enter Your password!"],
        trim:true,
        unique:true
    },
    phoneNo:{
        type:String,
        trim:true,
        required:[true,"please enter your number "]
    },
    cart: {
        type: Array,
        default: []
    },
    role:{
        type:Boolean,
        default:false
    },
    admin:{
        type:Boolean,
        default:true
    },
    resetToken:String,
    expireToken:Date,
},
        {  
        timestamps:true
    })
module.exports=mongoose.model("User",userSchema)