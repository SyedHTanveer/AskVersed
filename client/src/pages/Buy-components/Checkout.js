import axios from 'axios';
import * as React from "react";
import StripeCheckout from 'react-stripe-checkout';
import PAYMENT_SERVER_URL from './constants/server';
import STRIPE_PUBLISHABLE from './constants/stripe';


const CURRENCY = 'USD';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      amount: fromEuroToCent(amount),
      currency: CURRENCY,
      description,
      source: token.id
      
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={amount}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;