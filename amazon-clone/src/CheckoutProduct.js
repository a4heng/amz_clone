import React from 'react'
import './Styles/CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({index, image, title, price, rating}) {

  const [{cart}, dispatch] = useStateValue();

  const removeItem = () => {
    //dispatch to remove item
    dispatch({
      type: 'REMOVE_FROM_CART',
      item: {
        index: index
      }
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          {title}
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i)=> (
            <p key={i}>⭐</p>
          ))}
        </div>
        <button onClick={removeItem}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
