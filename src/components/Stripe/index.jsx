import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useCart } from '../Context/CartContext'; 
import config from "../../config";

const stripePromise = loadStripe(config.stripePublic);

export default function AppStripe() {
    const [clientSecret, setClientSecret] = useState('');
    const { cart } = useCart(); 

    useEffect(() => {
        fetch('https://europe-southwest1-clean-result-424717-b2.cloudfunctions.net/stripepayment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items: cart }), 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
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
