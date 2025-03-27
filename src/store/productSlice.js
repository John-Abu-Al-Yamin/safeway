import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);
  return data !== null ? JSON.parse(data) : defaultValue;
};

const initialState = {
  products: getLocalStorage("products", []),
  totalQuantity: getLocalStorage("totalQuantityproduct", 0),
  totalState: getLocalStorage("totalState", 0),
  totalBefor: getLocalStorage("totalBefor", 0),
  coupon: { code: "ahmed", value: "400" },
  isCoupon: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const newProduct = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newProduct.id
      );

      if (!existingItem) {
        state.products.push({
          ...newProduct,
          amount: 1,
          totalPrice: newProduct.newprice,
        });
      } else {
        existingItem.amount++;
        existingItem.totalPrice = existingItem.amount * newProduct.newprice;
      }

      state.totalQuantity = state.products.length;
      toast.success("Product added to cart");

      localStorage.setItem("products", JSON.stringify(state.products));
      localStorage.setItem(
        "totalQuantityproduct",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalState", JSON.stringify(state.totalState));
      localStorage.setItem("totalBefor", JSON.stringify(state.totalBefor));
    },

    deleteProductFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);

      if (!existingItem) return;

      if (existingItem.amount === 1) {
        state.products = state.products.filter((item) => item.id !== id);
      } else {
        existingItem.amount--;
        existingItem.totalPrice -= existingItem.newprice;
      }

      state.totalQuantity = state.products.length;
      localStorage.setItem("products", JSON.stringify(state.products));
      localStorage.setItem(
        "totalQuantityproduct",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalState", JSON.stringify(state.totalState));
      localStorage.setItem("totalBefor", JSON.stringify(state.totalBefor));
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      toast.success("Product deleted");
      state.totalQuantity = state.products.length;
      localStorage.setItem("products", JSON.stringify(state.products));
      localStorage.setItem(
        "totalQuantityproduct",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalState", JSON.stringify(state.totalState));
      localStorage.setItem("totalBefor", JSON.stringify(state.totalBefor));
    },

    handlePrice: (state, action) => {
      state.totalState = state.products.reduce(
        (acc, item) => acc + item.amount * item.newprice,
        0
      );
      state.totalBefor = state.totalState;

      if (action.payload === state.coupon.code) {
        state.totalState -= parseInt(state.coupon.value);
        state.isCoupon = true;
        toast.success("Coupon applied successfully");
      }

      localStorage.setItem("products", JSON.stringify(state.products));
      localStorage.setItem(
        "totalQuantityproduct",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem("totalState", JSON.stringify(state.totalState));
      localStorage.setItem("totalBefor", JSON.stringify(state.totalBefor));
    },
  },
});

export const {
  addProducts,
  deleteProductFromCart,
  deleteProduct,
  handlePrice,
} = productSlice.actions;
export default productSlice.reducer;