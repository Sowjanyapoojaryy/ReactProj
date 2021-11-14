
import React,{useState} from "react";
import axios from 'axios'
const initialState={
    name: '',
    email: '',
    theaterName:'',
    seatNo:"",
    showtime:"",
    Total:"",
    status:"not paid"
}

function Cash(){
   
    const [cash,setCash]=useState(initialState)

    const {name,email,theaterName,seatNo,showtime,Total,status}=cash

    const handleChangeInput=e=>{
        const {name,value}=e.target
        setCash({...cash,[name]:value,err:'',success:''})

    }
    const handleSubmit=async e =>{
        e.preventDefault()
        try{
            const res=await axios.post('/api/delivery',{name,email,theaterName,seatNo,showtime,Total,status})
            setCash({...cash,err:'',success:res.data.msg})
            alert("you have successfully placed an order")
        }catch(err){
            alert(err.response.data.msg) &&
             setCash({...cash,err:err.response.data.msg,success:''})
        }
    }

return(
  <body style={{"background-color":"#f5f3ef","height":"600px"}}>
    <div class="rowses my-5">
      <div class="col-md-4 offset-md-4" style={{marginLeft:"400px"}}>
      <h1>CASHONDELIVERY</h1>
        <div class="card" >
          <div class="card-body">
  
            <form onSubmit={handleSubmit}>
             
					        
 					        <div className="form-group">
 					          <input type="text" name="name" className="form-control" placeholder="name" id="name" value={name} onChange={handleChangeInput} required/>
 					        </div>

 							<div className="form-group">
 					          <input type="email" name="email" className="form-control" placeholder="email" id="email" value={email} onChange={handleChangeInput} required/>
 					        </div>


                            <div className="form-group">
					          <input type="text" name="theaterName" className="form-control" placeholder="theaterName" id="theaterName" value={theaterName} onChange={handleChangeInput} required/>
 					        </div>

                             <div className="form-group">
					          <input type="text" name="seatNo" className="form-control" placeholder="seatNo" id="seatNo" value={seatNo} onChange={handleChangeInput} required/>
 					        </div>

                   <div className="form-group">
					          <input type="text" name="showtime" className="form-control" placeholder="showtime" id="theater" value={showtime} onChange={handleChangeInput} required/>
 					        </div>

                   <div className="form-group">
					          <input type="text" name="Total" className="form-control" placeholder="Total" id="Total" value={Total} onChange={handleChangeInput} required/>
 					        </div>
              <div class="form-group">
                <button class="btn form-control btn-primary" type="submit" style={{"paddingTop":"1px"}}>Order Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  </body>
  )
}
export default Cash



