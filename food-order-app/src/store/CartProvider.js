import { useReducer } from "react";
import {CartContext} from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReucer = (state, action) => {
    if (action.type === "ADD-CART-ITEM"){

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;  
        const existingCartItemIndex = state.items.findIndex
            (item => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
    
        if (existingCartItem) {
            let updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {

            updatedItems = state.items.concat(action.item);

        };
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === "REMOVE-CART-ITEM"){
        const existingCartItemIndex = state.items.findIndex
            (item => item.id === action.id
        ); 
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter
                (item => item.id !== action.id)
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount -- }
            updatedItems = [...state.items];
            updatedItems[existingCartItem] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };   
    };
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


