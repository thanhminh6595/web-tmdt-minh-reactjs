import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { products: null, showPopup: false, showLiveChat: false },
  reducers: {
    // hàm thêm sản phẩm
    addProduct: function (state, action) {
      return { ...state, products: action.payload };
    },
    // Hàm hiển thị popup
    show: function (state) {
      return { ...state, showPopup: !state.showPopup };
    },
    // hàm hiển thị livechát
    showLiveChat: function (state) {
      return { ...state, showLiveChat: !state.showLiveChat };
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
