import React from "react";

const ItemCards = ({ item }) => {
  return (
    <div className="w-100 m-4 hover:-translate-y-1 transition-transform duration-300 bg-transparent rounded-lg">
      <div className="bg-neutral-primary-soft flex flex-col max-w-sm p-6 border-default rounded-base ">
        {/* Image with overlays */}
        <a
          href="#"
          className="relative block w-full aspect-square overflow-hidden rounded-lg"
        >
          {/* Image */}
          <img
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:rounded-3xl"
            src={item.image}
            alt={item.title}
          />

          {/* Title overlay */}
          <div className="flex w-full flex-row absolute bottom-0 left-0 p-2">
            <h3 className="absolute w-60 bottom-2 h-auto  bg-black/20 backdrop-blur-sm text-white text-wrap text-lg p-2 rounded font-serif line-clamp-1">
              {item.productName}
            </h3>
            <button className="absolute bottom-3 right-2  bg-green-50 text-white font-semibold text-2xl px-3 py-1 rounded-lg shadow-md hover:bg-[#93BD57] hover:scale-105 transition-all duration-300">
              🛒
            </button>

            {/* Add to Cart button */}
          </div>
        </a>
      </div>
    </div>
  );
};

export default ItemCards;
