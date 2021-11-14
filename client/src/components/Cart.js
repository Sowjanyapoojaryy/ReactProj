import React,{useContext,useState,useEffect} from 'react'
import {GlobalState} from './GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'


function Cart() {
    const state=useContext(GlobalState)
    const [cart,setCart]=state.UserAPI.cart
    const [total,setTotal]=useState(0)
    const [token]=state.token

    
    useEffect(()=>{
        const getTotal=()=>{
            const total=cart.reduce((prev,item)=>{
                return prev + (item.price * item.quantity)
            },0)
            setTotal(total)
        }
        getTotal()
        
    
    },[cart])

    

    const addToCart =async()=>{
        await axios.patch('/user/addcart',{cart},{
            headers:{Authorization:token}
        })
    }

    const increment=(id) =>{
        cart.forEach(item =>{
            if(item._id === id){
                item.quantity+=1
            }

        })
        setCart([...cart])
        addToCart()
    }

    const decrement=(id) =>{
        cart.forEach(item =>{
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1: item.quantity -= 1
            }

        })
        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct= id =>{
        if(window.confirm("Do you want to delete this product")){
            cart.forEach((item,index)=>{
                if(item._id === id){
                    cart.splice(index,1)
                }
            })
            setCart([...cart])
            addToCart()
        }
    }
   


    if(cart.length === 0)
     return <h2 style={{textAlign:"center",fontSize:"5rem"}}>cart Empty</h2>  
    

     return ( 
        <div>  
             {    
            cart.map(product =>(
                <div className="detail cart" key={product._id}>
            <img src={product.images.url} alt="" className="img_container" />
            <div className="box-detail">
                <div className="rowing">
                    <h2>{product.title}</h2>
                </div>
                <span>Rs{product.price * product.quantity}</span>
                <p>{product.description}</p>
                <p>{product.content}</p>
                
                <div className="amount">
                    <button onClick={() =>decrement(product._id)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() =>increment(product._id)}>+</button>
                    </div>

                    <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
            </div>
        </div> 
            ))
        }
        <div className="total">
            <h3 style={{paddingLeft:"200px"}}>Total:Rs{total}</h3>
            <div style={{paddingLeft:"200px"}}><Link to="/checkout"><button>Payment</button></Link></div>
            <div style={{paddingLeft:"200px"}}><Link to="/Cashondelivery"><button>CashOndelivery</button></Link></div>
            
        </div>
        </div>
        
    )
}


export default Cart
