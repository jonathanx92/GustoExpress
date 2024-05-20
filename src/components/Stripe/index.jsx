import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51PIBs3P5j8NatTwEGczbhJKlZq32TZRK9sJPUiO4ZrIibVLBpyDUJcX4AfkiOhwAbkHXBTVVpQe5EHu77slrkLew007EO5InnK');

export default function AppStripe() {
    stripePromise.then((data)=>console.log(data))
    const options = {
        clientSecret: 'acct_1PIBnxDILDaEdCfO_secret_sk_test_51PIBs3P5j8NatTwEpm6OVWVTcyVHSP1dfjzMI162GCRb8hypSnz8h9n3z5BKhoEoXyT8oEr7d1udVCdVSvhm3MC10004iW3DPQ', 
      };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}