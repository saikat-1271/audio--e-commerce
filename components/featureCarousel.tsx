"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import BluetoothAudioIcon from "@mui/icons-material/BluetoothAudio";
import SpatialTrackingIcon from "@mui/icons-material/SpatialTracking";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";

const features = [
  { icon: <GraphicEqIcon sx={{ fontSize: 64 }} />, label: "Surround Audio" },
  {
    icon: <BluetoothAudioIcon sx={{ fontSize: 64 }} />,
    label: "Bluetooth 5.2",
  },
  { icon: <SpatialTrackingIcon sx={{ fontSize: 64 }} />, label: "Best ANC" },
  {
    icon: <BatteryChargingFullIcon sx={{ fontSize: 64 }} />,
    label: "Lasting Battery",
  },
  { icon: <GraphicEqIcon sx={{ fontSize: 64 }} />, label: "Surround Audio" },
  {
    icon: <BluetoothAudioIcon sx={{ fontSize: 64 }} />,
    label: "Bluetooth 5.2",
  },
  { icon: <SpatialTrackingIcon sx={{ fontSize: 64 }} />, label: "Best ANC" },
  {
    icon: <BatteryChargingFullIcon sx={{ fontSize: 64 }} />,
    label: "Lasting Battery",
  },
];

export default function FeatureCarousel() {
  const [api, setApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Optimized scroll listener
  const onSelect = useCallback((api: any) => {
    // setSelectedIndex((selectedIndex + 1) % features.length);
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const centerIndex = (selectedIndex + 1) % features.length;

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const snap = api.selectedScrollSnap();
      setSelectedIndex(snap % features.length);
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    onSelect();

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center", // Keeps the active item in the middle
          loop: true, // Enables circular sliding
          skipSnaps: false,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">
          {features.map((feature, index) => {
            const middleIndex = selectedIndex + 1;
            const isMiddle = index === middleIndex;

            return (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={`
          flex flex-col items-center justify-center h-44 rounded-2xl
          transition-all duration-700 ease-in-out`}
                >
                  {feature.icon}
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wider">
                    {feature.label}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div> 
  );
}
