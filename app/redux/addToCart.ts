import { createSlice } from "@reduxjs/toolkit";
interface Items {
  quantity: number;
}
const initialState: Items = {
  quantity: 1,
};
const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: initialState,
  reducers: {
    incrementQuantity: (state) => {
      state.quantity += 1;
    },
    decrementQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      } else {
        state.quantity = 1;
      }
    },
  },
});
export const { incrementQuantity, decrementQuantity } = addToCartSlice.actions;
export default addToCartSlice.reducer;
