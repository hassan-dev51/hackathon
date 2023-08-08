import { createSlice } from "@reduxjs/toolkit";

export interface cartItems {
  id: any;
  user_id: any;
  name: string;
  category: string;
  price: number;
  item: string;
  image: { url: string };
  quantity: number;
}
interface Items {
  quantity: number;
  totalquantity: number;
  totalPrice: number;

  cart: cartItems[];
}

const initialState: Items = {
  quantity: 1,
  totalquantity: 0,
  totalPrice: 0,
  cart: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
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

    CartData: (state, action) => {
      state.cart = action.payload;
      state.totalquantity = state.cart.reduce(
        (total, item) => (total = item.quantity),
        0
      );
      console.log(state.totalquantity, "after function");
      state.totalPrice = state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      state.quantity = 1;
    },

    increaseCartQuantity: (state, action) => {
      let foundProduct = state.cart.find((item) => item.id === action.payload);
      if (foundProduct) {
        foundProduct.quantity += 1;
        state.totalquantity += 1;
        state.totalPrice += foundProduct.price * 1;
      }
    },
    decreaseCartQuantity: (state, action) => {
      let foundProduct = state.cart.find((item) => item.id === action.payload);
      if (foundProduct && foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        state.totalquantity -= 1;
        state.totalPrice -= foundProduct.price;
      }
    },
  },
});
export const {
  incrementQuantity,
  decrementQuantity,
  CartData,
  increaseCartQuantity,
  decreaseCartQuantity,
} = addToCartSlice.actions;

export default addToCartSlice.reducer;
