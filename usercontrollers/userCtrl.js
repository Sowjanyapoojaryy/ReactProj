const Users=require('../models/Usermodel')
const Payments=require('../models/paymentModel')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const nodemailer=require('nodemailer')
const sendgridTransport=require('nodemailer-sendgrid-transport')
const crypto=require('crypto')
const Cash=require('../models/cashModel')


const transporter=nodemailer.createTransport(sendgridTransport({
auth:{
    api_key:"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"
}
}))

const userCtrl={
    register: async (req, res) =>{
        try {
            const {name, email, password,phoneNo} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "The email already exists."})

            if(password.Length < 6) 
                return res.status(400).json({msg: "Password is  long."})

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, email, password: passwordHash,phoneNo
            })

            // Save mongodb
            await newUser.save()

            // Then create jsonwebtoken to authentication
            
            
            // .then(newUser=>{
            //     transporter.sendMail({
            //         to:newUser.email,
            //         from:"BookMyFood123@gmail.com",
            //         subject:"signup success",
            //         html:"<h1>welcome to book my food<h1>"
            //     })
            //     res.json({msg:"successfully rigistered"})
            // })
            // .catch(err=>{
            //     console.log(err)
            // })

                const accesstoken = createAccessToken({id: newUser._id})
                const refreshtoken = createRefreshToken({id: newUser._id})
    
                res.cookie('refreshtoken', refreshtoken, {
                    httpOnly: true,
                    path: '/user/refresh_token',
                    maxAge: 7*24*60*60*1000 // 7d
                })
                res.json({accesstoken})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    refreshToken:(req,res)=>{
       try{
        const rf_token = req.cookies.refreshtoken;
        if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
            if(err) return res.status(400).json({msg: "Please Login or Register"})

            const accesstoken = createAccessToken({id: user.id})

            res.json({accesstoken})
        })
       }catch(err){
           return res.status(500).json({msg:err.messege})
       }
        // res.json({rf_token})
    },
    activateEmail: async (req, res) => {
        const {token}=req.body;
        jwt.verify(tokrn)
        try {
            const {activation_token} = req.body
            const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)

            const {name, email, password} = user

            const check = await Users.findOne({email})
            if(check) return res.status(400).json({msg:"This email already exists."})

            const newUser = new Users({
                name, email, password
            })

            await newUser.save()

            res.json({msg: "Account has been activated!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }, 
    login:async(req,res)=>{
        try{
            const{email,password}=req.body
            const user=await Users.findOne({email})
        if(!user) return res.status(400).json({msg:"this email does not exists"})
        
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg:"password is incorrect."})


        const accesstoken=createAccessToken({id:user._id})
        const refreshtoken=createRefreshToken({id:user._id})
        
        res.cookie('refreshtoken',refreshtoken,{
            httpOnly: true,
            path:'/user/refresh_token',
            maxAge:7*24*60*60*1000
        })
        res.json({accesstoken})

        // res.json({msg:"login success"})
    } catch(err){
        return res.status(500).json({msg:err.message})
    }
    },
    forgotPassword:async(req,res)=>{
        try{
            
            const newPassword = req.body.password
            const sentToken = req.body.token
            const usr=Users.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
            .then(usr=>{
                if(!usr){
                    return res.status(422).json({error:"Try again session expired"})
                    console.log(usr)
                }
                bcrypt.hash(newPassword,12).then(hashedpassword=>{
                   usr.password = hashedpassword
                   usr.resetToken = undefined
                   usr.expireToken = undefined
                   console.log(usr.password)
                   usr.save().then((saveduser)=>{
                       res.json({message:"password updated success"})
                   })
                })
            }).catch(err=>{
                console.log(err)
            })

        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    resetPassword:async(req,res)=>{
        try{
            crypto.randomBytes(32,(err,buffer)=>{
                if(err){
                    console.log(err)
                }
                const token=buffer.toString("hex")
                usr=Users.findOne({email:req.body.email})
                .then(usr =>{
                    if(!usr){
                        return res.status(422).json({error:"user doesnt exist with that email"})
                    }
                    usr.resetToken=token
                    usr.expireToken=Date.now() + 3600000
                    usr.save().then((result)=>{
                        transporter.sendMail({
                            to:usr.email,
                            from:"BookMyFood123@gmail.com",
                            subject:"Password reset",
                            html:`
                            <p>you requested for password reset</p>
                            <h5>click this <a href="http://localhost:3000/reset/${token}">link</a> to reset password </h5>`

                        })
                        res.json({messege:"check your email"})
                    })
                })
            })
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getUserInfor:async(req,res)=>{
        try{
            const user=await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg:"user does not exist"})
            res.json(user)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    logout:async(req,res)=>{
        try{
                res.clearCookie('refreshtoken',{path:'/user/refresh_token'})
                return res.json({msg:"logged out"})
            }catch(err){
                return res.status(500).json({msg:err.message})
            }
    },
    addCart:async(req,res)=>{
        try{
            const user=await Users.findById(req.user.id)
            if(!user) return res.status(400).json({msg:"user does not exist"})

            await Users.findOneAndUpdate({_id:req.user.id},{
                cart:req.body.cart
            })
            return res.json({msg:"Added to the cart"})

        }catch(err){
            return res.status(500).json({msg:err.messege})
        }
    },
    updateUser:async (req,res)=>{
        try{
            const {name,avatar}=req.body
            await Users.findOneAndUpdate({_id:req.user.id},{
                 name,avatar
            })
            res.json({msg:"Update Success"})
        }catch(err){
            return res.status(500).json({msg:err.messege})
        }
    },
    deleteUser:async(req,res)=>{
        try{
            await Users.findByIdAndDelete(req.params.id)

            res.json({msg:"deleted Success"})
        }catch(err){
            return res.status(500).json({msg:err.messege})
        }
    },
    history: async(req, res) =>{
        try {
            const user=await Users.findById(req.user.id).select('email')
            const {customerEmail} = req.body;

            const pay = await Payments.find({customerEmail:user.email})
            res.json(pay)   
        } catch (err){
            return res.status(500).json({msg: err.message})
        }
    },
    cashhistory: async(req, res) =>{
        try {
            const user=await Users.findById(req.user.id).select('email')
            const {email} = req.body; 
            const cash = await Cash.find({email:user.email})
            res.json(cash)  
        } catch (err){
            return res.status(500).json({msg: err.message})
        }
    },
}
const createAccessToken=(user)=>{
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'11m'})
}
const createRefreshToken=(user)=>{
    return jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
}
module.exports=userCtrl