import React from 'react';
import { Card,CardMedia, CardContent, CardActions, Typography, IconBotton, CallMissedSharp} from '@material-ui/icons';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={ classes.media} image='' title={product.name} /> 
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="hS" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant="hS">
                        {product.price}
                    </Typography>

                </div>

                <Typography variant="h2" color="textSecondary">
                      {product.description}
                </Typography>
            </CardContent>
            < CardActions disableSpacing className={classes.cardActions}>
                   <IconBotton aria-label="Add to Cart">
                       <AddShoppingCart />
                   </IconBotton>
            </CardActions>
        </Card>
    )
}

export default Product
