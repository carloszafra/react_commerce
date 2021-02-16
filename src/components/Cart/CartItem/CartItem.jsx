import React from 'react'
import { Card, CardMedia, Typography, Button, CardContent, CardActions } from "@material-ui/core";
import useStyles from "./CartItem.style";

const CartItem = ({ item, handleCartQty, removeFromCart }) => {
    const classes = useStyles();
    return (
      <Card>
          <CardMedia className={classes.media} image={item.media.source} alt={item.name}/>
          <CardContent className={classes.cardContent}>
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
              <div className={classes.buttons}>
                  <Button type="button" size="small" onClick={() => handleCartQty(item.id, item.quantity + 1)}>+</Button>
                  <Typography>{item.quantity}</Typography>
                  <Button type="button" size="small" onClick={() => handleCartQty(item.id, item.quantity - 1)}>-</Button>
              </div>
              <Button variant="contained" type="button" color="secondary" onClick={() => removeFromCart(item.id)} >
                Remove
              </Button>
          </CardActions>
          
      </Card>
    )
}

export default CartItem
