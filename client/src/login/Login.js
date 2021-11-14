
import React,{useState} from 'react'
import './login.css'
import log from './loginn.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios';


const initialState={
    email: '',
    password:'',
    err:' ',
    success:' '

}

function Login() {
    const [user,setUser]=useState(initialState)

    const {email,password}=user

    const handleChangeInput1=e=>{
        const {name,value}=e.target
        setUser({...user,[name]:value,err:'',success:''})

    }

    const handleSubmit1=async e =>{
        e.preventDefault()
        try{
            
            localStorage.setItem('firstLogin',true)

           window.location.href="/";
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
                    <img style={{"backfaceVisibility":"hidden","marginRight":"200px"}} src={log} alt=""/>
                </div>
            </div>
            <form onSubmit={handleSubmit1}>
                <div class="from-content">
                <div class="login-form">
                    <div class="title">Login</div>
                    <div class="input-boxes">
                        <div class="input-box">
                            <i class="fas fa-envelope"></i>
                            <input className="input" type="email" name="email" value={email} placeholder="Email" onChange={handleChangeInput1} required />
                        </div>
                        <div class="input-box">
                            <i class="fas fa-lock"></i>
                            <input className="input" type="password" name="password" value={password} placeholder="password" onChange={handleChangeInput1} required autoComplete="on"/>
                        </div>
                        <div class="text"><a href="/reset">Forgot password?</a></div>
                        <div class="button input-box">
                           
                            <input type="submit" value="Submit"/>
                        </div>
                        <div class="text sign-up-text">Don't have an account?<Link to="/Signup"><label>Sign now</label></Link></div>
                    </div>
                </div>
               
                </div>
                
            </form>
        </div>
    </body>
        </div>
    )
}

export default Login
