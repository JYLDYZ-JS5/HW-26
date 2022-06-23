import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/CartUiSlice";

const store = configureStore({
    reducer: {
        get: cartSlice.reducer 
    }
})
export default store
