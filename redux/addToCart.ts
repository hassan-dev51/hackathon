import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

interface ProductType {
  _id: any;
  name: string;
  category: string;
  price: number;
  item: string;
  image: string;
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
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product._id === product._id
      );

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += quantity;
      } else {
        state.cart.push({ product, quantity });
      }

      state.totalquantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cart.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );

      toast.success(`${quantity} ${product.name} added to the cart`);
      state.quantity = 1;
    },

    onRemove: (state, action: PayloadAction<cartItems>) => {
      const { product } = action.payload;

      let foundProduct = state.cart.find(
        (item) => item.product._id === product._id
      );

      const newProductItem = state.cart.filter(
        (item) => item.product._id !== product._id
      );

      if (foundProduct) {
        state.totalquantity = state.totalquantity - foundProduct?.quantity;
        state.totalPrice =
          state.totalPrice -
          foundProduct?.product.price * foundProduct?.quantity;
      }
      state.cart = newProductItem;
      toast.success(`${product.name} has been removed`);
    },
    increaseCartQuantity: (state, action: PayloadAction<cartItems>) => {
      const { product } = action.payload;
      let foundProduct = state.cart.find(
        (item) => item.product._id === product._id
      );
      if (foundProduct) {
        foundProduct.quantity += 1;
        state.totalquantity += 1;
        state.totalPrice += foundProduct.product.price * 1;
      }
    },
    decreaseCartQuantity: (state, action: PayloadAction<cartItems>) => {
      const { product } = action.payload;

      let foundProduct = state.cart.find(
        (item) => item.product._id === product._id
      );
      if (foundProduct && foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        state.totalquantity -= 1;
        state.totalPrice -= foundProduct.product.price;
      }
    },
  },
});
export const {
  incrementQuantity,
  decrementQuantity,
  onAdd,
  onRemove,
  increaseCartQuantity,
  decreaseCartQuantity,
} = addToCartSlice.actions;
export default addToCartSlice.reducer;
