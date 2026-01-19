import { getLocalStorage, syncLocalStorage } from "@/app/hooks/localStorage";
import { create } from "zustand";

export const useCart = create((set, get) => ({
  cart: getLocalStorage("cart"),

  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let newcart;

      if (existingItem) {
        // return {
        newcart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : { ...item }
        );
        // };
      }

      //   return {
      else {
        newcart = [...state.cart, { ...product, quantity }];
      }
      //   };
      syncLocalStorage("cart", newcart);
      return { cart: newcart };
    }),

  removeFromCart: (product, isremove) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let newcart;

      if (!existingItem) return { cart: state.cart };

      if (isremove || existingItem.quantity === 1) {
        // return {
        newcart = state.cart.filter((item) => item.id !== product.id);
        // };
      } else {
        newcart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      //   return {
      //   };
      syncLocalStorage("cart", newcart);

      return {
        cart: newcart,
      };
    }),

  getItemQuantity: (id) => {
    const item = get().cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  },
}));
