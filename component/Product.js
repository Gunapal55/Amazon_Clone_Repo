import React from 'react'
import '../component/Product.css';


function Product({title, price, image, rating}) {
    return (
        <div className="product">
        <div className='product__info'>
<p>{title}</p>
<p className="product__price">
    < strong>₹ </ strong>
<strong>{price}</strong>
</p>
<div className="product__rating">
{Array(rating).fill().map((_, i)=>
<p>⭐</p>
)}
  </div>
 </div>
<img className="card__image" src={image} alt="amazon product image"/>
<button>Add to Cart</button>
        </div>
    )
}

export default Product
