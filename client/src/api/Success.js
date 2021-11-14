import React from 'react'
import {Link} from 'react-router-dom'
import './Success.css'

function Success(){
    return(
        <div className="body">
        <div class="cards">
        <div style={{borderradius:"200px",height:"200px", width:"200px", background: "#F8FAF5",margin:"0 auto"}}>
          <i class="checkmark">✓</i>
        </div>
          <h1>Success</h1> 
          <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
         <p> <Link to="/">Go to Home</Link></p>
        </div>
        </div>
    )
}
export default Success