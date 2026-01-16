import React from "react";
import ItemCards from "./ItemCards";
import { bannerProducts } from "@/public/imagesurl";

const ItemComponent = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 p-4 bg-transparent">
      {bannerProducts.map((item) => (
        <ItemCards key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemComponent;
