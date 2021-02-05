import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100
    const publishableKey = 'pk_test_51IHNuPIxkfjeGYHYvLM0K8HtliDEB7YeZFiUn2h82sPXl5KiqByKCmFaSdU7bZIhP8GcqIofIC96lbqmeRaCn6p7005F5FfLHE'

   const onToken = token => {
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
    )
}
export default StripeCheckoutButton