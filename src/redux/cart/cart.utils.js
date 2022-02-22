export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if(existingItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +  1}
            : cartItem
        );
    } 

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const clearItemFromCart = ( cartItems, cartItemIdNeedToRemove) => {
    return removeItem(cartItems, cartItemIdNeedToRemove);
}

export const removeItemFromCart = (cartItems, cartItemIdToRemove) => {
    const existingItem = cartItems.find(item => item.id === cartItemIdToRemove);

    if(existingItem && existingItem.quantity === 1) {
        return removeItem(cartItems, cartItemIdToRemove);
    }

    return cartItems.map(
        item => item.id === cartItemIdToRemove
        ? 
        { ... item, quantity: item.quantity - 1 }
        :
        item
    );
}

const removeItem = (cartItems, id) => {
    return cartItems.filter(item => item.id !== id);
}