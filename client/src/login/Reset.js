import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Reset  = ()=>{
    const history = useHistory()
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch('/user/reset',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/login')
           }
           alert("check your email")
        }).catch(err=>{
            console.log(err)
        })
        alert("check your mail")
    }
   return (
      <div className="mycard" style={{"width":"300px","marginLeft":"500px","marginTop":"100px"}}>
          <div className="card auth-card input-field" style={{"paddingTop":"30px"}}>
            <h2 style={{textAlign:"center"}}>BookMyFood</h2>
            <input
            style={{"marginTop":"20px"}}
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <button
            style={{"marginTop":"20px",paddingTop:"2px"}} className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
               reset password
            </button>
 
        </div>
      </div>
   )
}


export default Reset