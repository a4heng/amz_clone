import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useState, useEffect} from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from '../CheckoutProduct';
import { useStateValue } from '../StateProvider'
import axios from "../axios"
import '../Styles/Payment.css'

function Payment() {
  const [{cart, user}, _] = useStateValue();
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?total=${getSubtotalPrice(cart) * 100}`
      })
      // console.log(response)
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
    console.log(clientSecret);
  }, [cart])

  const getSubtotalPrice = (cart) => {
    return cart?.reduce((acc,cur)=> acc + (+cur.price),0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      //paymentIntent ==> payment confrimation of stripe
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      history.replace('/orders')
    })
  }
  const handleChange = e =>{
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  }
  return (
    <div className='payment'>
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
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
            <h3> Payment Method</h3>
          </div>
          <div className="payment__details">
            {/**Stripe magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>

              <div className="payment__price">
              <CurrencyFormat 
                  renderText={(value) => (
                      <p>
                        Subtotal ({cart.length} items): <strong>{value}</strong>
                      </p>
                  )}
                  decimalScale={2}
                  value={getSubtotalPrice(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded }>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
