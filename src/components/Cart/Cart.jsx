import React from 'react'
import { Container, Typography, Button, Grid } from "@material-ui/core"
import useStyles from './CartStyles';
import CartItem from "./CartItem/CartItem"
import { Link } from "react-router-dom"
const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant="subtitle1">
            <Link to="/" className={classes.link}>Start adding some</Link>!
        </Typography>
    )
    const FilledCart = () => (
        <div >
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem
                            item={item}
                            onUpdateCartQty={handleUpdateCartQty}
                            onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary"
                        onClick={handleEmptyCart}>
                        Empty Cart
                    </Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
    if (!cart.line_items) return "Loading..."
    return (
        <div className={classes.cartContainer}>
            <Container >
                <div className={classes.toolbar} />
                <Typography variant="h3" className={classes.title} gutterBottom>
                    "Wear the old coat and buy the new book."<br/>-Austin Phelps</Typography>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
        </div>

    )
}

export default Cart
