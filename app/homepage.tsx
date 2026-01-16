import Carouselcontent from "@/components/carouselContent";
import FeatureCarousel from "@/components/featureCarousel";
import ItemComponent from "@/components/itemComponent";
import React from "react";

const Homepage = () => {
  return (
    <div className={` bg-[#FFFDE1]`}>
      <Carouselcontent />
      <FeatureCarousel />
      <ItemComponent />
    </div>
  );
};

export default Homepage;
