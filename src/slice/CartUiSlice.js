import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    showCart: false,
    data: []
}
const cartSlice = createSlice({
    name: 'get',
    initialState: initialState,
    reducers: {
        loading(state, action) {
            state.loading = action.payload
        },
        showCart(state, action) {
            state.showCart = action.payload
            // console.log('showed');
        },
        addItemToCart(state, action) {
            state.data = action.payload
            // console.log(state.data);
        }
    }
})
export const cartSliceActions = cartSlice.actions
export default cartSlice