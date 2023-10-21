import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, actions) => {
            const isAvailable = state.find((value) => value.name === actions.payload.name); // tìm kiếm sản phẩm trong giỏ hàng
            if (isAvailable) {
                isAvailable.quantity++; // nếu có sẵn trong giỏ hàng thì tăng số lượng lên 1
            }
            else {
                state.push({ ...actions.payload, quantity: 1 }) // không có sẵn thì thêm vào giỏ hàng với số lượng là 1
            }
        },
        removeFromCart: (state, actions) => {
            const newList = state.filter((value) => value.name != actions.payload.name);
            return (state = newList);
        },
        inCrementQuantity: (state, actions) => {
            const isAvailable = state.find((value) => value.name === actions.payload.name);
            if (isAvailable) {
                isAvailable.quantity++;
            }
            else {
                console.log("Product not available!"); // nếu có sẵn trong giỏ hàng không có sẵn thì thông báo
            }
        },
        deCrementQuantity: (state, actions) => {
            const isAvailable = state.find((value) => value.name === actions.payload.name);
            if (isAvailable.quantity == 1) {
                isAvailable.quantity = 1; // số lượng ít nhất là 1
            }
            else {
                isAvailable.quantity--;
            }
        }
    }
})

export const { addToCart, removeFromCart, inCrementQuantity, deCrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;