import React from 'react';
import "./Styles/Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router';

function Subtotal() {
  const history = useHistory();
  const [{cart}, dispatch] = useStateValue()

  const getSubtotalPrice = (cart) => {
    return cart?.reduce((acc,cur)=> acc + (+cur.price),0)
  }

  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getSubtotalPrice(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
