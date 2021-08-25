import React from 'react';
import classes from "./MealItem.module.css";
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';


const MealItem = (props) => {
    const cartCntx = useContext(CartContext); 
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCntx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.descriptions}>{props.description}</p>
                <h4 className={classes.price}>{price}</h4>
            </div>
            <div>
                <MealItemForm onAddToChart={addToCartHandler}  />
            </div>
        </li>
    )
};

export default MealItem;
