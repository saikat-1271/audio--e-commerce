"use client";
import ItemDetails from "@/components/ItemDetails";
import { bannerProducts } from "@/public/imagesurl";
import React, { useEffect } from "react";
import { useState } from "react";

const ProductMainPage = ({ params }) => {
  const { id } = React.use(params);
  const [prouct, setProduct] = useState(null);

  useEffect(() => {
    setProduct(() =>
      bannerProducts.find((product) => product.id.toString() === id)
    );
  }, [id]);

  console.log(prouct);
  //   useEffect(() => {
  //     //fetch product by id from params.id
  //   }, [params.id]);

  if (prouct == null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="bg-transparent h-screen">
        <ItemDetails product={prouct} />
      </div>
    );
  }
};

export default ProductMainPage;
