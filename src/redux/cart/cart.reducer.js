import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
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
        default:
            return state;
    }
};

export default cartReducer;