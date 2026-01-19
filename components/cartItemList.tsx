"use client";

import { calculatePrice } from "@/lib/utils";
import { useCart } from "@/store/cart";
import Button from "@mui/material/Button";
import Image from "next/image";
import noFoundimg from "@/public/noItems.png";
import React from "react";

const CartItemList = () => {
  const cartItems = useCart((state) => state.cart);
  const addToCart = useCart((state) => state.addToCart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const { totalprice, deliveryFees } = calculatePrice(cartItems);

  const addCart = (item) => {
    addToCart(item);
  };
  const removeCart = (item, isremove) => {
    removeFromCart(item, isremove);
  };
  const getItemQuantity = useCart((s) => s.getItemQuantity);
  const quantity = (id) => getItemQuantity(id);

  // if (cartItems.length === 0) {
  //   return <h1>nothing</h1>;
  // }
  return (
    <div className=" bg-transparent min-h-[calc(100vh-4rem)] flex flex-col justify-center p-6">
      {/* <h1>Shopping Cart</h1> */}
      <div className="  grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* CART ITEMS */}
        {cartItems.length > 0 ? (
          <div className="lg:col-span-2 space-y-6 p-3">
            {cartItems.map((item) => {
              const qty = quantity(item.id);

              return (
                <div
                  key={item.id}
                  className="flex items-start gap-4 border-b pb-6"
                >
                  {/* IMAGE */}
                  <div className="relative w-20 h-20 bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.productName}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* CENTER INFO */}
                  <div className="flex-1 space-y-1">
                    <h2 className="font-semibold text-sm">
                      {item.productName}
                    </h2>

                    <p className="text-xs text-gray-500">Ref: {item.id}</p>

                    <div className="flex items-center gap-4 text-xs text-gray-600 mt-1">
                      <span className="text-green-600">✔ Click & Collect</span>
                      <span className="text-green-600">✔ Home Delivery</span>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mt-3 text-sm">
                      <span className="text-gray-500">Qty:</span>

                      <button
                        onClick={() => removeCart(item)}
                        className="border px-2 leading-none"
                      >
                        −
                      </button>

                      <span className="min-w-[16px] text-center">{qty}</span>

                      <button
                        onClick={() => addCart(item)}
                        className="border px-2 leading-none"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* RIGHT PRICE + REMOVE */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeCart(item, true)}
                      className="text-gray-400 hover:text-black"
                    >
                      ✕
                    </button>

                    <div className="text-sm font-semibold">
                      ${item.price * qty}
                    </div>

                    {item.mrp && (
                      <div className="text-xs text-gray-400 line-through">
                        ${item.mrp * qty}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="lg:col-span-2 space-y-6 flex flex-col items-center justify-center min-h-[60vh]">
            <Image
              src={noFoundimg}
              alt="No items in cart"
              width={300}
              height={300}
              className="opacity-80"
            />
            <p className="mt-4 text-sm text-gray-500">Your cart is empty</p>
          </div>
        )}

        {/* ORDER SUMMARY */}
        <div className="border p-6 h-fit">
          <h3 className="text-lg font-bold mb-6">ORDER SUMMARY</h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span>${totalprice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>SHIPPING</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between">
              <span>POSTAGE</span>
              <span>${deliveryFees}</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-bold">
              <span>TOTAL</span>
              <span>${(totalprice + deliveryFees).toFixed(2)}</span>
            </div>
          </div>

          <Button
            className={
              cartItems.length > 0
                ? `w-full mt-6 text-black`
                : `pointer-events-none text-gray cursor-not-allowed w-full mt-6`
            }
          >
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
