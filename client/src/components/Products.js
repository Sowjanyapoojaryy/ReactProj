import React,{useContext,useState} from 'react'
import {GlobalState} from './GlobalState'
import ProductItem from '../utils/notification/ProductItem'
import './Product.css'
import Filter from './Filter'
import Loadmore from './Loadmore'
import axios from 'axios'
import Footer from '../front/Footer'

function Products(){
const state=useContext(GlobalState)
 const  [products,setProducts]=state.productsAPI.products
 const [isAdmin]=state.UserAPI.isAdmin
 const [isLogged]=state.UserAPI.isLogged
 const [token] = state.token
 const [callback,setCallback]=state.productsAPI.callback
 const [isCheck, setIsCheck] = useState(false)

 const handleCheck = (id) =>{
    products.forEach(product => {
        if(product._id === id) product.checked = !product.checked
    })
    setProducts([...products])
}

const deleteProduct = async(id, public_id) => {
    try {
        
        const destroyImg = axios.post('/api/destroy', {public_id},{
            headers: {Authorization: token}
        })
        const deleteProduct = axios.delete(`/api/products/${id}`, {
            headers: {Authorization: token}
        })

        await destroyImg
        await deleteProduct
        setCallback(!callback)
    } catch (err) {
        alert(err.response.data.msg)
    }
}

const checkAll = () =>{
    products.forEach(product => {
        product.checked = !isCheck
    })
    setProducts([...products])
    setIsCheck(!isCheck)
}

const deleteAll = () =>{
    products.forEach(product => {
        if(product.checked) deleteProduct(product._id, product.images.public_id)
    })
}
    return(
        <div>
        <Filter />
        {
            isAdmin && isLogged ?
            <div className="delete-all">
                <span style={{"margin-top":"30px"}}>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} style={{"marginLeft":"10px"}}/>
                <button style={{"backgroundColor":"red","margin-left":"20px"}} onClick={deleteAll}>Delete ALL</button>
            </div>:
            <div></div>
        }

        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })
            } 
        </div>
        <Loadmore />
        <Footer />
        </div>

    )
 }

export default Products
























