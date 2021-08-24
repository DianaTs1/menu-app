import React, {useContext} from 'react';
import { CartContext } from '../../store/cart-context';
import Modal from '../UI/Modal'
import classes from "./Cart.module.css"

const Cart = (props) => {
    const cartCntx = useContext(CartContext);

    const totalAmount = `$${cartCntx.totalAmount}`;
    const hasItems = cartCntx.items.length > 0;

    const cartItem = <ul className={classes["cart-items"]}>
        {cartCntx.items.map(item => 
            <li>{item.name}</li>
            )}
        </ul>

    return (
        <Modal onClick={props.onCloseCart}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes["button--alt"]}>
                <button onClick={props.onCloseCart}>Close</button>
                {hasItems && <button>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
