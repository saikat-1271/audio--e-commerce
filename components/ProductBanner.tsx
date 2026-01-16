"use client";
import Image from "next/image";

type ProductBannerProps = {
  title: string;
  description: string;
};

export default function ProductBanner({
  title,
  description,
}: ProductBannerProps) {
  return (
    <div className="flex w-full items-center gap-0 p-10 rounded-2xl ">
      {/* LEFT CONTENT */}
      <div className="flex-1 max-w-lg ml-46 pr-16 space-y-4 text-right">
        <h2 className="text-2xl font-bold">{title}</h2>
        <h2 className="text-8xl font-bold font-sans">BEATS</h2>
        <p className="text-gray-600 text-sm">{description}</p>

        <div className="flex items-center gap-4 mt-4 justify-end">
          <button className="rounded-lg border bg-[#93BD57] px-6 py-2 hover:bg-gray-100 transition">
            Explore
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-2">
          Free shipping • 1-year warranty
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex-1 h-[380px] -ml-20">
        {/* Optional colored background behind the image */}
        <div className="absolute inset-0 bg-orange-500 rounded-xl -z-10"></div>

        <Image
          src="/black-headphones-digital-device.png"
          alt={title}
          fill
          className="object-contain scale-137 transition-transform duration-300 max-w-lg"
          // style={{ transform: "rotate(-10deg)" }}
        />
      </div>
    </div>
  );
}
