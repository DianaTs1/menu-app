import { useReducer } from "react";
import {CartContext} from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReucer = (state, action) => {
    if (action.type === "ADD-CART-ITEM"){
        const updatedItems = 
            state.items.concat(action.item)

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;  
        
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === "REMOVE-CART-ITEM"){

    }
    return defaultCartState;
}


const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReucer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: "ADD-CART-ITEM",
            item: item
        })
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: "REMOVE-CART-ITEM",
            id: id
        })
    }

    const context = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
        };

    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;


