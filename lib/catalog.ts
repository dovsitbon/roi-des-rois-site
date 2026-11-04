import data from "@/data/location.json";
import type { Localized } from "@/lib/i18n";

export type RentalItem = {
  id: string;
  category: string;
  image: string;
  focus: string;
  name: Localized;
  desc: Localized;
  price: number | null;
  unit: Localized;
};
export type RentalCategory = { id: string; name: Localized };

export const rentalItems = data.items as RentalItem[];
export const rentalCategories = data.categories as RentalCategory[];
export const getItem = (id: string) => rentalItems.find((i) => i.id === id);
