import React from 'react'
import useStyles from "./CartItemStyles"
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core"

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles()
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">
                    {item.name}
                </Typography>
                <Typography variant="h4">
                    {item.line_total.formated_with_symbol}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity-1)} >-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity+1)}>+</Button>
                </div>
                <Button type="button" style={{backgroundColor:"#9a579d", color:"white"}} variant="contained" onClick={()=>onRemoveFromCart(item.id)}> Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
