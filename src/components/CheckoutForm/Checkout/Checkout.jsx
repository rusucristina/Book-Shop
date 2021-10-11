import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, divider, Button } from "@material-ui/core"
import useStyles from "./CheckoutStyles"
import AdressForm from '../AdressForm'
import PaymentForm from '../PaymentForm'
const steps = ["Shipping address", "Payment details"]
const Checkout = () => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const Form = () => activeStep === 0
        ? <AdressForm />
        : <PaymentForm />
    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )
    return (
        <>
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center">
                            Checkout
                        </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.lenght ? <Confirmation /> : <Form />}
                    </Paper>
                </main>

            </div>
        </>
    )
}

export default Checkout
