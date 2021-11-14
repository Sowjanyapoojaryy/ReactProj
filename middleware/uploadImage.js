const router =require('express').Router()
const cloudinary=require('cloudinary')


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_SECRET
})


const fs=require('fs')

module.exports=async function(req,res,next){
    try{
        if(!req.files || Object.keys(req.files).length === 0)
        return res.status(400).json({msg:"No files were uploaded"})
        const file=req.files.file;

        console.log(file)
        if(file.size >1024 * 1024){
        removeTmp(file.tempFilePath)
        return res.status(400).json({msg:"Size too large"})
        }
        next()
    }catch(err){
        return res.status(500).json({})
    }
}
const removeTmp=(path)=>{
    fs.unlink(path,err =>{
        if(err)throw err
    })
}