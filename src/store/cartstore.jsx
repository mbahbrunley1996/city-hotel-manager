
// // src/store/cartStore.js
// import { create } from 'zustand';

// const useCartStore = create((set) => ({
//   cart: [],

//   addToCart: (item) =>
//     set((state) => ({
//       cart: [...state.cart, item],
//     })),

//   removeFromCart: (id) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),

//   clearCart: () => set({ cart: [] }),
// }));

// export default useCartStore;
