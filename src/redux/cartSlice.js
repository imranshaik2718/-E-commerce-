// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load saved state from localStorage
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
      // Save cart to localStorage
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
      // Save liked items to localStorage
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },
  },
});

export const { addToCart, toggleLike } = cartSlice.actions;
export default cartSlice.reducer;
