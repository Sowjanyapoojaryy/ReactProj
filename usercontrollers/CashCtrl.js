const Cash=require('../models/cashModel')

const { CLIENT_URL }=process.env

const CashCtrl={
    getCash:async(req,res)=>{
        try{
        const cash=await Cash.find()
        res.json(cash)
    }catch(err){
        return res.status(500).json({msg:err.message})
    }
    },
    postcash: async(req,res) => {
        try{
            const {name,email,theaterName,seatNo,showtime,Total,status}=req.body
            // const user=await Cash.findOne({seatNo}),
            // if(user) return res.status(400).json({msg:"this seat no already booked a snack"})

            const cash=new Cash({
                name,email,theaterName,seatNo,showtime,Total,status
            })
            await cash.save()
            res.json({msg:"placed order"})
        }catch (err){
            return res.status(500).json({msg:err.messege})
        }

    }

}
module.exports=CashCtrl