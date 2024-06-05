import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useCart } from '../Context/CartContext'; 

const stripePromise = loadStripe('pk_test_51PIRUEHET8gjVcjERxINBBtO1iIRRvILpenjH4nkYYg6AT47H4rL8M4XBYOeDUVBnSS8BeL7pSmUxWoAs6qT233d00U8EdMtcn');

export default function AppStripe() {
    const [clientSecret, setClientSecret] = useState('');
    const { cart } = useCart(); 

    useEffect(() => {
        fetch('https://europe-southwest1-clean-result-424717-b2.cloudfunctions.net/stripepayment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items: cart }), // Envía el carrito al backend
        })
        .then(response => response.json())
        .then(data => setClientSecret(data.clientSecret))
        .catch(error => console.error('Error fetching client secret:', error));
    }, [cart]); 
    const options = {
        clientSecret,
    };

    return (
        <div>
            {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}
