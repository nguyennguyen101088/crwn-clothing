import CartActionTypes from "./cart.types"

export const toogleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_HIDDEN_CART,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});

export const clearItem = id => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: id,
});

export const removeItem = id => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: id
});