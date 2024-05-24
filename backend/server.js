/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const stripe = Stripe('sk_test_51PIRUEHET8gjVcjEjVeOm0FwheqWCGglPeAUrPRyM9ljiLOXByfajw6YFWV5kzZ4yjIXBbmb8KJ3UINoPaFJlt4C00vS5uFzgX'); // Reemplaza con tu clave secreta de Stripe

app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;

  // Calcula el total del monto
  const amount = calculateOrderAmount(items);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'eur',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

const calculateOrderAmount = (items) => {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0) * 100; 
};

app.listen(4242, () => console.log('Node server listening on port 4242!'));
