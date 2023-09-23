//helper function for price decimals
export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}


export const updateCart = (state) => {

    //Calculate items price
    // the accumolator=0 initially  
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

    //Calculate Shipping price, if order is over $100 then free, else $10 for shipping
    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

    //Calculate tax price (15% tax)
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));




    //Calculate total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    //Saving items to localStorage
    localStorage.setItem('cart', JSON.stringify(state))

    return state;
}