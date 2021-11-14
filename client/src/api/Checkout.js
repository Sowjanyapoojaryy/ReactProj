
import React,{useState} from "react";
const initialState={
      amount: '',
      name: '',
      email:'',
      phone:"",
      theater:"",
      seat:"",
      show:"",
  
  }
  

function Checkout(){
   
    const [check,setCheck]=useState(initialState)

        const {amount,name,email,phone,theater,seat,show}=check
    
        const handleChangeInput=e=>{
            const {name,value}=e.target
            setCheck({...check,[name]:value})
    
        }

return(
  <body style={{"background-color":"#f5f3ef","height":"600px"}}>
    <div class="rowses my-5">
      <div class="col-md-4 offset-md-4" style={{marginLeft:"400px"}}>
      <h3>PAYMENT</h3>
        <div class="card" >
          <div class="card-body">
  
            <form class="" action="/paynow" method="post">
             
            <div className="form-group">
 					          <input type="text" name="amount" className="form-control" placeholder="amount" id="amount"  value={amount} onChange={handleChangeInput} required/>
 					        </div>
					        
 					        <div className="form-group">
 					          <input type="text" name="name" className="form-control" placeholder="name" id="name" value={name} onChange={handleChangeInput} required/>
 					        </div>

 							<div className="form-group">
 					          <input type="email" name="email" className="form-control" placeholder="email" id="email" value={email} onChange={handleChangeInput} required/>
 					        </div>

                  <div className="form-group">
					          <input type="text" name="phone" className="form-control" placeholder="number" id="phone" value={phone} onChange={handleChangeInput} required/>
 					        </div>

                   <div className="form-group">
					          <input type="text" name="theater" className="form-control" placeholder="ThreaterName" id="theater" value={theater} onChange={handleChangeInput} required/>
 					        </div>

                   <div className="form-group">
					          <input type="text" name="seat" className="form-control" placeholder="SeatNo" id="seat" value={seat} onChange={handleChangeInput} required/>
 					        </div>

                   <div className="form-group">
					          <input type="text" name="show" className="form-control" placeholder="showtime" id="show" value={show} onChange={handleChangeInput} required/>
 					        </div>
              <div class="form-group">
                <button class="btn form-control btn-primary" type="submit" style={{"paddingTop":"1px"}}>Pay Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  </body>
  )
}
export default Checkout



