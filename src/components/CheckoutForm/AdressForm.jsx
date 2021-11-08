import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core"
import FormInput from './CustomTextField'
import { useForm, FormProvider } from "react-hook-form"
import {Link} from "react-router-dom"
import { commerce } from "../../library/commerce"

const AdressForm = ({ checkoutToken, next, nextStep }) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState("")
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState("")
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState("")

    const methods = useForm();

    const fetchShippingCountries = async (checkoutTokenId) => {
        const countries = await commerce.services.localeListShippingCountries(checkoutTokenId)
        setShippingCountries(countries.countries
        )
        setShippingCountry(Object.keys(countries)[0])
    }
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })
        setShippingOptions(options)
        setShippingOption(options[0].id)
    }
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description}-(${sO.price.formatted_with_symbol})` }))

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
        if (shippingCountry)
            fetchSubdivisions(shippingCountry)
    }, [shippingCountry])

    useEffect(() => {
        if (shippingSubdivision)
            fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])

    return (
        <>
            <Typography variant="h6" gutterBottom align="center" style={{color:"#6676bb"}}> Shipping Adress</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data)=> next({...data, shippingCountry, shippingSubdivision, shippingOption}))}>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First name" />
                        <FormInput required name="lastName" label="Last name" />
                        <FormInput required name="address1" label="Address " />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="Postal code" />

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth
                                onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubdivision} fullWidth
                                onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth
                                onChange={(e) => setShippingOption(e.target.value)}>
                                {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button variant="outlined" component={Link} to="/cart" style={{backgroundColor:"#6676bb", color:"white"}}>
                            Back to card
                        </Button>
                        <Button type="submit" variant="contained" style={{backgroundColor:"#6676bb", color:"white"}}>
                            Next step
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AdressForm
