import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [addButtonBump, setAddButtonBump] = useState(false);

    const {items} = cartCtx;

    useEffect(() => {
        if (items.length === 0){
            return
        }
        setAddButtonBump(true);
        const timer = setTimeout(() => {
            setAddButtonBump(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    const numberOfCartItems = items.reduce((cur, item) => {
        return cur + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${addButtonBump ? classes.bump : ""}`

    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;