import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

interface ProductType {
  name: string;
  category: string;
  price: number;
  item: string;
}
interface cartItems {
  product: ProductType;
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
    onAdd: (state, action: PayloadAction<cartItems>) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.product === product
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push({ product, quantity });
      }

      state.totalquantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      toast.success(`${quantity} ${product.name} added to the cart`);
      state.quantity = 1;
    },
  },
});
export const { incrementQuantity, decrementQuantity, onAdd } =
  addToCartSlice.actions;
export default addToCartSlice.reducer;
