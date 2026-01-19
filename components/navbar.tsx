"use client";

import { useCart } from "@/store/cart";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";

const navItems = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
  { id: 3, name: "Orders", href: "/orders" },
  { id: 4, name: "Profile", href: "/profile" },
  { id: 5, name: <ShoppingCartSharpIcon />, href: "/cart" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const cart = useCart((state) => state.cart);
  console.log("cart", cart);

  return (
    <nav className=" sticky top-0 z-50 w-full border-b bg-[#FBE580]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.id === 5 ? (
                  cart.length > 0 ? (
                    <AddShoppingCartSharpIcon />
                  ) : (
                    <ShoppingCartSharpIcon />
                  )
                ) : (
                  item.name
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col gap-2 px-4 py-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.id === 5 ? (
                    cart.length > 0 ? (
                      <AddShoppingCartSharpIcon />
                    ) : (
                      <ShoppingCartSharpIcon />
                    )
                  ) : (
                    item.name
                  )}
                  {/* item.name === ""?{item.name} */}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
