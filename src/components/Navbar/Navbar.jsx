import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/online-store.png";
import useStyles from "./Navbar.styles";

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
             <Toolbar>
                 <Typography variant="h6" className={classes.title} color="inherit">
                     <img src={logo} className={classes.image} height="25px" alt="Ecommerce"/>
                     Ecommerce
                 </Typography>
                 <div className={classes.space}/>
                 <div className={classes.button}>
                     <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCart />
                        </Badge>
                     </IconButton>
                 </div>
             </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar;