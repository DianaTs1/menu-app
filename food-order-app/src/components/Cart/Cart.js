import React, {useContext} from 'react';
import { CartContext } from '../../store/cart-context';
import Modal from '../UI/Modal'
import classes from "./Cart.module.css"
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCntx = useContext(CartContext);

    const totalAmount = `$${cartCntx.totalAmount.toFixed(2)}`;
    const hasItems = cartCntx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCntx.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartCntx.addItem({...item, amount:1})
    }

    const cartItem = <ul className={classes["cart-items"]}>
        {cartCntx.items.map(item => 
            <CartItem 
                key={item.id} 
                name={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}/>
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
