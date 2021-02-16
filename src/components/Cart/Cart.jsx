import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./Cart.styles";
import CardItem from "./CartItem/CartItem"

const Cart = ({ cart, handleCartQty, removeFromCart, handleEmptyCart }) => { 
    const classes = useStyles();

    const EmptyCart = () => (

        <Typography variant="subtitle1">You have no items in your shopping cart. Start adding!</Typography>

    )

    const FullCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CardItem item = {item} handleCartQty = {handleCartQty} removeFromCart = {removeFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4" gutterBottom>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button
                        className={classes.emptyButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={handleEmptyCart}
                    >
                        Empty cart
                    </Button>
                    <Button
                        className={classes.checkOutButton}
                        component = {Link}
                        to="/checkout"
                        size="large"
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        Checkout
                    </Button>

                </div>
            </div>
        </>
    )

    if(!cart.line_items) return "loading";

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your shopping cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FullCart />}
        </Container>
    )
}

export default Cart;


