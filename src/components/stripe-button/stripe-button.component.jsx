import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_FZugcz0vUVD4Ua6yRuN1gnU700r11EfZc9';

    const onToken = token => {
        console.log(token);
        alert('Payment successfull!')
    }

    return (
        <StripeCheckout
        label= 'Pay now'
        name= 'Zen Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description= {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;