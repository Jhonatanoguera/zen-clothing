export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItemToAdd.id === cartItem.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItemToAdd.id === cartItem.id ?
            { ...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}