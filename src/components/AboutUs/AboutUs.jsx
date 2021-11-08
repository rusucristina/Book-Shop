import React from "react";
import { Container, Grid, Typography, CssBaseline } from "@material-ui/core"
import img1 from "../../images/0df3b12e44de000bb6cdc4f332da121d.png-2.webp"
import img2 from "../../images/4fd7dbe4666e6c93179914ffdae97117.png-2.webp"
import useStyles from './AboutUsStyles';


const AboutUs = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Grid container spacing={0} className={classes.aboutUsGrid}>
                <Grid item xs={12} md={6} className={classes.imgGrid}>
                    <img src={img1} className={classes.headerImg}/>
                </Grid>
                <Grid item xs={12} md={6} className={classes.textGrid}>
                    <h2 className={classes.headerText}>
                       <span> Be</span><span> Smart </span>
                    </h2>
                </Grid>

            </Grid>
        </>
    )
}

export default AboutUs
