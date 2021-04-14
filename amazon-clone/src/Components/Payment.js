import React from 'react'
// import Checkout from '../Checkout';
import CheckoutProduct from '../CheckoutProduct';
import { useStateValue } from '../StateProvider'
import '../Styles/Payment.css'

function Payment() {
  const [{cart, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3> Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Fake Ave</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart?.map((item, idx)=> (
              <CheckoutProduct 
                key={idx}
                id={item.id}
                index={idx}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image} 
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Delivery address</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
