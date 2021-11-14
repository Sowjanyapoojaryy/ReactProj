const Users=require('../models/Usermodel')

const authAdmin=async(req,res,next)=>{
    try{
        //get user information by id
        const user=await Users.findOne({
            _id:req.user.id
        })
        if(user.admin===true)
        return res.status(400).json({msg:"Admin resource access denied"})

        next()
    }
    catch(err){
        return res.status(500).json({msg:err.messege})
    }
}
module.exports=authAdmin