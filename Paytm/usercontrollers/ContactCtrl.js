const Contact=require('../models/contactModel')

const { CLIENT_URL }=process.env

const ContactCtrl={
    getContact:async(req,res)=>{
        try{
        const contact=await Contact.find()
        res.json(contact)
    }catch(err){
        return res.status(500).json({msg:err.message})
    }
    },
    Contact: async(req,res) => {
        try{
            const {name,email,messege}=req.body
            // const user=await Cinema.findOne({seat}),
            // if(user) return res.status(400).json({msg:"this seat no already booked a snack"})

            const contact=new Contact({
                name,email,messege
            })
            await contact.save()
            res.json({msg:"messege sent successfully"})
        }catch (err){
            return res.status(500).json({msg:err.messege})
        }

    }

}
module.exports=ContactCtrl