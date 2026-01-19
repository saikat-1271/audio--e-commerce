"use client";

import { useCart } from "@/store/cart";
import Link from "next/link";
import React from "react";

const ItemCards = ({ item }) => {
  const addToCart = useCart((state) => state.addToCart);
  const cart = useCart((state) => state.cart);

  const cartOperation = (item) => {
    addToCart(item);
  };

  console.log(cart);

  return (
    <div className="w-100 m-4 hover:-translate-y-1 transition-transform duration-300 bg-transparent rounded-lg">
      <div className="bg-neutral-primary-soft max-w-sm p-4 border-default rounded-base">
        {/* IMAGE CONTAINER */}
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          <Link href={"/products/" + item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* TITLE OVERLAY */}
            <h3 className="absolute bottom-2 left-2 right-14 bg-black/40 backdrop-blur-sm text-white text-lg px-3 py-1 rounded font-serif line-clamp-1">
              {item.productName}
            </h3>

            {/* CART BUTTON */}
          </Link>
            <button
              onClick={() => cartOperation(item)}
              className="absolute bottom-2 right-2 bg-[#93BD57] text-white text-xl w-10 h-10 flex items-center justify-center rounded-lg shadow-md hover:scale-110 transition"
            >
              🛒
            </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
