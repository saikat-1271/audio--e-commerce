"use client";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import ProductBanner from "./ProductBanner";
import { bannerimages, bannerImg, bannerProducts } from "@/public/imagesurl";

const Carouselcontent = () => {
  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   if (bannerProducts.length <= 1) return;

  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % bannerProducts.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [bannerProducts.length]);

  // {
  //   bannerProducts.map((_, i) => (
  //     <button
  //       key={i}
  //       onClick={() => setCurrent(i)}
  //       className={`h-2 w-2 rounded-full ${
  //         i === current ? "bg-white" : "bg-white/50"
  //       }`}
  //     />
  //   ));
  // }
  // return (
  //   <div
  //     className={` p-4 w-full flex flex-row md:flex-row items-center justify-evenly rounded-2xl `}
  //   >
  //     {/* <div className="flex items-center justify-center">lefttext</div>
  //     <div className="flex items-center justify-center">midtext</div> */}
  //     <div className="flex items-center justify-center w-9/10">
  //       {bannerProducts.map((product) => {
  //         return (
  //           <ProductBanner
  //             key={product.id}
  //             title={product.title}
  //             price={product.price}
  //             current = {current}
  //             description={product.description}
  //             images={product.image}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  // const [current, setCurrent] = useState(0);

  // // Auto slide
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % bannerProducts.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  // const product = bannerProducts[current];

  return (
    <div className="relative top-9 overflow-hidden bg-transparent">
      <ProductBanner
        title={bannerImg.heading}
        description={bannerImg.description}
        image={bannerImg.image}
      />
    </div>
  );
};

export default Carouselcontent;
