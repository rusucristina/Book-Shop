import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingBasketSharp } from "@material-ui/icons"
import logo from "../../images/cf8da4916e0c31dd519a6ee9af923674.jpg"
import useStyles from "./NavbarStyles"
import {Link, useLocation} from "react-router-dom"
const Navbar = ({totalItems}) => {
    const classes = useStyles()
    const location= useLocation()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h4" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce" height="75px" className={classes.image} />
                        Your Books or Mine?
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname==="/"&& (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" height="75px" >
                            <Badge badgeContent={totalItems} color="primary" >
                                <ShoppingBasketSharp  />
                            </Badge>
                        </IconButton>
                    </div>
                    )
                }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
