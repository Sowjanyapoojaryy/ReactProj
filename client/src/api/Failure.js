import React from 'react'
import {Link} from 'react-router-dom'
import './Success.css'

function Failure(){
    return(
        <div className="body">
        <div class="cards">
        <div style={{borderradius:"200px",height:"200px", width:"200px", background: "#F8FAF5",margin:"0 auto"}}>
          <i class="checkmark">✓</i>
        </div>
          <h1>Failure</h1> 
          <p>Your payment failed<br/> order Again!</p>
         <p> <Link to="/">Go to Home</Link></p>
        </div>
        </div>
    )
}
export default Failure