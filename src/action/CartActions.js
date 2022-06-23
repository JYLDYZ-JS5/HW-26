import { cartSliceActions } from "../slice/CartUiSlice"

export const cartActions = () => {
    return async (dispatch) => {
        dispatch(cartSliceActions.loading(true))
        fetch('https://testmode-83df9-default-rtdb.firebaseio.com/cart.json')
            .then(response => response.json())
            .then(data => {
                // console.log(data.items);
                dispatch(cartSliceActions.addItemToCart(data.items))
            })
        dispatch(cartSliceActions.loading(false))
        // dispatch(cartSliceActions.showCart(true))
    }
}