import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingBasketSharp } from "@material-ui/icons"
import logo from "../../images/cf8da4916e0c31dd519a6ee9af923674.jpg"
import useStyles from "./NavbarStyles"
const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce" height="65px" className={classes.image} />
                        Book Shop
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit" >
                            <Badge badgeContent={2} color="primary" >
                                <ShoppingBasketSharp />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
