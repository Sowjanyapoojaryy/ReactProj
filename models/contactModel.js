const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter Your name!"],
        trim:true
    },
    email:{
            type:String,
            trim:true
    },
    messege:{
        type:String,
        trim:true
        },
     },
      {  
            timestamps:true
        })
module.exports=mongoose.model("Contact",contactSchema)