import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements, LinkAuthenticationElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import './FormCheckout.css';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Return URL where Stripe will redirect the user after payment is successful
                return_url: 'http://localhost:3000/success',
            },
        });

        if (error) {
            setMessage(error.message);
            navigate('/cancel'); // Redirige a /cancel en caso de error
        } else {
            setMessage('Payment successful!');
        }

        setIsLoading(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <LinkAuthenticationElement id="link-authentication-element"
                // Access the email value like so:
                // onChange={(event) => {
                //  setEmail(event.value.email);
                // }}
                //
                // Prefill the email field like so:
                // options={{defaultValues: {email: 'foo@bar.com'}}}
            />
            <PaymentElement id="payment-element" />
            <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "PAGAR"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    )
};

export default CheckoutForm;
