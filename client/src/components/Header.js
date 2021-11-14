import {Link} from 'react-router-dom'
import React,{useState,useContext} from 'react'
import {GlobalState} from './GlobalState'
import Menu from '../front/images/menu.svg'
import Cart from '../front/images/cart.svg'
import Close from '../front/images/close.svg'
import axios from 'axios'

function Header(){
    const state=useContext(GlobalState)
    const [isLogged]=state.UserAPI.isLogged
    const [isAdmin]=state.UserAPI.isAdmin
    const [cart]=state.UserAPI.cart
    const [menu,setMenu]=useState(false)

    const logoutUser=async()=>{
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href="/";
    }

    const adminRouter=()=>{
        if(isLogged){
        return(
            <>
             <li><Link to="/Menu">Menus</Link></li> 
            <li><Link to="/Myorder">Orders</Link></li>
            <li><Link to='/create_product'>Create Product</Link></li>
            <li><Link to='/category'>Categories</Link></li>
        </>
        )
        }
        else{
            return(
                <>
                
               <li> <Link to='/'>Home</Link></li>
                <li><Link to='/About'>Aboutus</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to="/FAQs">FAQs</Link></li>
                <li><Link to="/Menu">menus</Link></li>
            </>
            )
        }
    }

    const loggedRouter=()=>{
        return(
            <>
            <li><Link to='/' onClick={logoutUser}>logout</Link></li>
        </>
        )
    }

    const styleMenu ={
        left: menu ? 0: "-100%"
    }
    return(
        <header>
            <div className="menu" onClick={()=>setMenu(!menu)}>
                <img src={Menu} alt="" width="30"/>
            </div>
                <div className="logo">
                    <h1>
                <Link to='/Menu'>{isLogged ? <div>{isAdmin ? <h1>ADMIN</h1> :<a href="/" className="logo"><i className="fas fa-utensils"></i>BookMyFood</a>}</div>:<a href="/" className="logo">BookMyFood</a> }</Link>
            </h1>
            </div>

            <ul style={styleMenu}> 

                <li> <Link to='/'>{isAdmin ? '':"Home"}</Link></li>
                <li><Link to='/About'>{isAdmin ? '':"Aboutus"}</Link></li>
                <li><Link to='/Contact'>{isAdmin ? '':"Contact"}</Link></li>
                <li><Link to="/FAQs">{isAdmin ? '':"FAQs"}</Link></li> 
                <li><Link to="/Menu">{isAdmin ? '':"Menus"}</Link></li>
                <li><Link to="/Myorder">{isAdmin ? '' : "MyOrders"}</Link></li>
               
               {isAdmin && adminRouter()}
               {
                isLogged? loggedRouter():<li><Link to="/Login">login</Link></li>
               }
               <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

{
    isAdmin ? " ":
            <div className="cart-icon">
            <span>{cart.length}</span>
            <Link to="/Cart">
                <img src={Cart} width="30"/>
            </Link>
        </div>
}
        </header>
    )
}
export default Header