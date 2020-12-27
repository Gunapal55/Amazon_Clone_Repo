import React from 'react'
import '../component/Product.css';
import { useStateValue } from './StateProvider';


function Product({ id, title, price, image, rating}) {

    const [{cart}, dispatch] = useStateValue();
    
    const addToCart =() =>{
dispatch({
    type: 'ADD_TO_CART',
    item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
    },
 });
};

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
<button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
