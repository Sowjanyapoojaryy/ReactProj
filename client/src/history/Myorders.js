import React from 'react'
import {Link} from 'react-router-dom'
import './myorder.css'

function Myorders() {
    return (
        <div>
            <div className="order"></div>
            <Link to='/history'><button className="buttons">PaidOrders</button></Link>
            <Link to='/cashorder'><button  className="buttonss">CashOnDeliveryOrders</button></Link>        
         </div>
    )
}

export default Myorders
