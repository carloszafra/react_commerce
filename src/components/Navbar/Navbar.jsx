import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/online-store.png";
import useStyles from "./Navbar.styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} className={classes.image} height="25px" alt="Ecommerce" />
                     Ecommerce
                 </Typography>
                    <div className={classes.space} />
                    {location.pathname === "/" && (
                        <div className={classes.button}>
                            <Link to="/cart"></Link>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="primary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;