"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Share2, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { bannerimages } from "@/public/imagesurl";

export default function ItemDetails({ product }) {
  const [activeImage, setActiveImage] = useState(bannerimages[0]);
  console.log("product", product);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-transparent top-2.50 p-6 lg:p-12 ">
      {/* LEFT: IMAGE GALLERY */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-3">
          {product.bannerimages.map(
            (url, index) => (
              <Card
                key={index}
                onClick={() => setActiveImage(url)}
                className={cn(
                  "w-20 h-24 overflow-hidden bg-transparent cursor-pointer border transition-all",
                  activeImage === url
                    ? "border-black ring-2 ring-black"
                    : "hover:border-black"
                )}
              >
                <Image
                  src={url}
                  alt={`thumbnail-${index}`}
                  width={80}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </Card>
            )
          )}
        </div>
        <div className="relative flex-1 rounded-xl overflow-hidden bg-transparent hover:zoom-in-50 transition-transform">
          <Image
            src={activeImage}
            alt="product"
            fill
            className="object-cover"
          />

          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Button size="icon" variant="secondary">
              <Share2 size={18} />
            </Button>
            <Button size="icon" variant="secondary">
              <Heart size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT: PRODUCT INFO */}
      <div className="space-y-6">
        {/* Title */}
        <div>
          {/* <p className="text-sm text-muted-foreground">John Lewis ANYDAY</p> */}
          <h1 className="text-3xl font-semibold">{product.productName}</h1>
        </div>

        {/* Price + Rating */}
        <div className="flex items-center gap-4">
          <span className="text-xl line-through text-muted-foreground">
            $80
          </span>
          <span className="text-3xl font-bold">{product.price}</span>

          <div className="flex items-center gap-1 ml-4">
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <span className="font-medium">4.5</span>
            <span className="text-muted-foreground text-sm">(1,238 sold)</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold mb-2">Description</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
           {product.description}
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-4 pt-4 flex-row justify-end w-80">
          <Button className="flex-1 h-12 text-base">Add to Cart</Button>
          <Button variant="outline" className="flex-1 h-12 text-base">
            Checkout Now
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">Delivery 7–8 days</p>
      </div>
    </div>
  );
}
