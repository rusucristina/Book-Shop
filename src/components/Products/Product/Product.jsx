import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core"
import { AddShoppingCart } from "@material-ui/icons"
import useStyles from "./ProductStyles"
function Product({ product, onAddToCart }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom className={classes.bookTitle}>
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography
                        dangerouslySetInnerHTML={{ __html: product.description }}
                        variant="body2" color="textSecondary" />
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Card" onClick={()=>onAddToCart(product.id, 1) }>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}
export default Product
