import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom"
import useStyles from "./CheckoutStyles"
import AdressForm from '../AdressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../library/commerce'

const steps = ["Shipping address", "Payment details"]
const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const classes = useStyles()
    const history = useHistory()
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: "cart" })
                setCheckoutToken(token)
            }
            catch (error) {
                history.push(`/`)
            }
        }
        generateToken();
    }, [cart])

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, 3000);
    }

    const Form = () => activeStep === 0
        ? <AdressForm
            checkoutToken={checkoutToken}
            next={next}
        />
        : <PaymentForm
            shippingData={shippingData}
            checkoutToken={checkoutToken}
            backStep={backStep}
            nextStep={nextStep}
            onCaptureCheckout={onCaptureCheckout}
            timeout={timeout}
        />

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5" style={{color:"#6676bb"}}>Thank you for your purchase, {order.customer.lastname} {order.customer.firstname} !</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to home</Button>
        </>
    ) : isFinished ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase</Typography>
                <Divider className={classes.divider} />
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to home</Button>
        </>
    ) : (
        <div className={classes.spiner}>
            <CircularProgress />
        </div>
    )

    if (error) {
        <>
            <Typography variant="h5">{error}</Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to home</Button>
        </>
    }

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" align="center" style={{color:"#6676bb"}}>
                                    Checkout
                        </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                    </Paper>
                </main>
            </div>
        </>
    )
}

export default Checkout
