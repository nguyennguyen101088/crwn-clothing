import CartActionTypes from "./cart.types";
const INITCARTSTATE = {
    hidden: true
};

const cartReducer = (state = INITCARTSTATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_HIDDEN_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};

export default cartReducer;