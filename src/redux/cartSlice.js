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
      const { id, size } = action.payload;

      // Check for same item (by id and size)
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    increaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (item) {
        item.quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
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

    removeFromLikedItems: (state, action) => {
      const itemId = action.payload;
      state.likedItems = state.likedItems.filter(id => id !== itemId);
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleLike,
  removeFromLikedItems
} = cartSlice.actions;

export default cartSlice.reducer;
