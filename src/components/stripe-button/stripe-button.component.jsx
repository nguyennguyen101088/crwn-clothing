import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButtonComponent = ({ price }) => {
    const priceForStripe = price * 100;
    const publishStripe = 'pk_test_51KWI4fFA9rx6VpjhP5TLLqAeBnK66nD5O913zSc6NWLvXMzY12pJt6MpVXHcoR69zAh4yoeuU2rAEwagWkosyRUs00xwOif1gM';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://scgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishStripe}
            />
    )
};

export default StripeButtonComponent;