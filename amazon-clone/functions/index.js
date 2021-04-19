const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
// const env = require('./.env')
const stripe = require('stripe')('sk_test_51IfxRPAbWefmBUYCw9k9URK0xBlEmIRh3Tthj1ApgcVc1ykInveK9XpxAt6O2kO7miuQZRO1ZJQB8jm7IjjnTEP1008BvOLfZs');

//API

//App config
const app = express();

//middlewares
app.use(cors({origin: true}));
app.use(express.json());

//api route
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment request recieved >>>>', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.trunc(+total),
    currency: "usd"
  })
  //okay- created
  console.log(paymentIntent.client_secret)
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

//listen 
exports.api = functions.https.onRequest(app)