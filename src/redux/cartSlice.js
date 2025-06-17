import { createSlice } from '@reduxjs/toolkit';

const storedCart = localStorage.getItem("cartItems");
const storedLikes = localStorage.getItem("likedItems");

const initialItems = storedCart ? JSON.parse(storedCart) : [];
const initialLikedItems = storedLikes ? JSON.parse(storedLikes) : [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: initialItems,
    likedItems: initialLikedItems,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    toggleLike: (state, action) => {
      const itemId = action.payload;
      const index = state.likedItems.findIndex(item => item === itemId);
      if (index === -1) {
        state.likedItems.push(itemId);
      } else {
        state.likedItems.splice(index, 1);
      }
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((_, index) => index !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromLikedItems: (state, action) => {
      const itemId = action.payload;
      state.likedItems = state.likedItems.filter(id => id !== itemId);
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },
  },
});

export const {
  addToCart,
  toggleLike,
  removeFromCart,
  removeFromLikedItems
} = cartSlice.actions;

export default cartSlice.reducer;
