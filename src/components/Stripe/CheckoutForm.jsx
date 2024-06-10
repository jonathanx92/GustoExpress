import React, { useState} from 'react';
import { PaymentElement, useStripe, useElements, LinkAuthenticationElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext'; 
import './FormCheckout.css';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { dispatch } = useCart(); 
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
                
                return_url: '/success',
            },
        });

        if (error) {
            setMessage(error.message);
            navigate('/cancel'); 
        } else {
            setMessage('Payment successful!');
            dispatch({ type: 'CLEAR_CART' }); 
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
            {message && <div id="payment-message">{message}</div>}
        </form>
    )
};

export default CheckoutForm;
