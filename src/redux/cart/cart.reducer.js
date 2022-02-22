import CartActionTypes from "./cart.types";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "./cart.utils";
const INITCARTSTATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITCARTSTATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_HIDDEN_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ... state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default cartReducer;