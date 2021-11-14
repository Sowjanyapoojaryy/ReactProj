import React,{useState} from 'react'
import './loginn.css'
import reg from './register.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {isEmpty,isEmail, isLength} from "../Signup/Validation"


const initialState={
    name:"",
    email: '',
    password:'',
    phoneNo:"",
    err:' ',
    success:' '

}

function Signup() {
    const [user,setUser]=useState(initialState)

    const {name,email,password,phoneNo}=user

    const handleChangeInput=e=>{
        const {name,value}=e.target
        setUser({...user,[name]:value,err:'',success:''})

    }

    const handleSubmit=async e =>{
        e.preventDefault()
        try{
            if(isEmpty(name) || isEmpty(password))
            return setUser({...user,err:"please fill in all fields.",success:''})

            if(isEmail(email))
            return setUser({...user,err:"invalid emails.",success:''})
            
            if(isLength(password))
            return alert("password must be at least 6 characters.")
            

            const res=await axios.post('/user/register',{name,email,password,phoneNo})
            setUser({...user,err:'',success:res.data.msg})

            localStorage.setItem('firstLogin',true)

            window.location.href='/';
        }catch(err){
            alert(err.response.data.msg) 
        }
    }

    return (
        <div>
        <body>
    <div class="containner">
        <div class="cover">
        <div class="front">
                    <img style={{"backfaceVisibility":"hidden"}} src={reg} alt=""/>
                </div>
        </div>
        <form onSubmit={handleSubmit}>  
        <div class="from-content">   
<div class="signup-form">
  <div class="title">signup</div>
  <div class="input-boxes">
      <div class="input-box">
          <i class="fas fa-user"></i>
          <input className="input" type="text" placeholder="Name" name="name" id="name" value={name}  onChange={handleChangeInput} required/>
      </div>
      <div class="input-box">
          <i class="fas fa-envelope"></i>
          <input className="input" type="email" name="email" placeholder="Email" value={email} onChange={handleChangeInput} required />
      </div>
      <div class="input-box">
          <i class="fas fa-lock"></i>
          <input className="input" type="password" name="password" placeholder="Password" value={password} onChange={handleChangeInput} required/>
      </div>
      <div class="input-box">
          <i class="fas fa-mobile"></i>
          <input className="input" type="number" name="phoneNo" placeholder="Phone Number" value={phoneNo} onChange={handleChangeInput} required/>
      </div>
   
      <div class="button input-box">
            <input type="submit" value="Submit"/>
        </div>
      <div class="text sign-up-text">Already have an account?<Link to="/Login"><label for="flip">Login now</label></Link></div>
      </div>
            </div>  
            </div> 
        </form>
    </div>
</body>
    </div>
    )
}

export default Signup