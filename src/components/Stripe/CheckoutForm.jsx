import React from 'react';
import {ElementsConsumer, PaymentElement} from '@stripe/react-stripe-js';
import PropTypes from 'prop-types'; // Import PropTypes

class CheckoutForm extends React.Component {
  // Add PropTypes validation
  static propTypes = {
    stripe: PropTypes.object.isRequired, // Ensure stripe prop is provided and is an object
    elements: PropTypes.object.isRequired, // Ensure elements prop is provided and is an object
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const {stripe, elements} = this.props;

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      // Redirect logic
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <PaymentElement />
        <button disabled={!this.props.stripe}>Submit</button>
      </form>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  )
}
