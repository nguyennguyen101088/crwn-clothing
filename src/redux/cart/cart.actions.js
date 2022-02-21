import CartActionTypes from "./cart.types"

export const toogleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_HIDDEN_CART,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
})