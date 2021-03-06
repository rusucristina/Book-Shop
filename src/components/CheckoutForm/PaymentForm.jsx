import React from 'react'
import { Typography, Button, Divider } from "@material-ui/core"
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Review from './Review'

const stripePromise = loadStripe('pk_test_51Js9jhC09i34REsfW0jlU2Zws0Sg3clAP2NzidjaNNgk7VfHwmVLS7ERP9WBwYvwPYdnVDs6juGP84GC84tISgWF00NIta7tq9')

const PaymentForm = ({ checkoutToken, backStep, onCaptureCheckout, nextStep, shippingData, timeout }) => {
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault()
        if (!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement)
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: cardElement })
        if (error) {
            console.log(error)
        }
        else {
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id,
                    },
                },
            };
            onCaptureCheckout(checkoutToken.id, orderData);
            timeout()
            nextStep();
        }
    }
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: "20px 0" ,color:"#6676bb"}}>Payment method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /> <br />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button onClick={backStep} variant="outlined" style={{backgroundColor:"#6676bb", color:"white"}}>Back</Button>
                                <Button type="submit" variant="contained" disabled={!stripe} color="primary" style={{backgroundColor:"#6676bb"}}>
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm
