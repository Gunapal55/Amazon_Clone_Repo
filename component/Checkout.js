import React from 'react'
import '../component/Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
      <div className="checkout__left" >
<img className="checkout__add" 
    src="https://cdn.iphoneincanada.ca/wp-content/uploads/2019/06/prime-video-channels-canada.png"
    alt="amazon banner add" />
<div>
    <h2 className="checkout__title">Your Shopping Cart</h2>
{/* CartItems */}
{/* CartItems */}
{/* CartItems */}

</div>
</div>
        <div className="checkout__right">
           <Subtotal /> 
        </div>

      
        </div>
    );
}

export default Checkout;
