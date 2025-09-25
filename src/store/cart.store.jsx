import { create } from "zustand";
import { destinations } from '@/utils/destinations';

export const useStoreCart = create((set) => ({
  cartItems: [],

  toggleItem: (hotel) =>
    set((state) => {
      const existing = state.cartItems.find((item) => item.id === hotel.id);
      if (existing) {
        return {
          cartItems: state.cartItems.filter((item) => item.id !== hotel.id),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...hotel, quantity: 1 }],
        };
      }
    }),

  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cartItems: [] }),

  increaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));
  
