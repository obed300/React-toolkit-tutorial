import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

// useStore items
const initialState = {
  cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
