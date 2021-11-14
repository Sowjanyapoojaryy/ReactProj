import React from 'react'
import Btnrender from '../../components/Btnrender'

function ProductItem({product, isAdmin,isLogged, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
            {
                isAdmin && isLogged ?  <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />:<div></div>
            }
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>₹{product.price}</span>
            </div>

            
            <Btnrender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem