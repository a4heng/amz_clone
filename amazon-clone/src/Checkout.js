import React from 'react'
import './Styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
  const [{cart, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad"/>

        <div>
          <h3>Hello, {user?.email.split('@')[0]}</h3>
          <h2 className="checkout__title">
            Your Shopping Cart:
          </h2>
          {cart?.map((item, i) =>(
            <CheckoutProduct
              key={i}
              id={item.id}
              index={i}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
      
    </div>
  )
}

export default Checkout
