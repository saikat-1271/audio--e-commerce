import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculatePrice = (cartitems) => {
  try {
    let totalprice = 0;

    console.log("cartitems in fn", cartitems);
    if (cartitems.length > 0) {
      cartitems.map((item) => {
        totalprice += item.quantity * item.price;
      });
    }

    const deliveryFees = 20;

    return {
      totalprice: totalprice,
      deliveryFees: deliveryFees,
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
};
