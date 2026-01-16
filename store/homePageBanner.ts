// store/useHomePageBanner.ts
import { create } from "zustand";

type HomePageBannerState = {
  productid: number;
  setproductid: (id: number) => void;
};

export const useHomePageBanner = create<HomePageBannerState>((set) => ({
  productid: 0,
  setproductid: (id) => set({ productid: id }),
}));
