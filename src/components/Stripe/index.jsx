import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useCart } from '../Context/CartContext'; 

// eslint-disable-next-line no-undef
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

export default function AppStripe() {
    const [clientSecret, setClientSecret] = useState('');
    const { cart } = useCart(); 

    useEffect(() => {
        const fetchPaymentIntent = async () => {
            try {
                const response = await fetch('https://europe-southwest1-clean-result-424717-b2.cloudfunctions.net/function-1/create-payment-intent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ items: cart }), 
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error('Error fetching client secret:', error);
            }
        };

        fetchPaymentIntent();
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
