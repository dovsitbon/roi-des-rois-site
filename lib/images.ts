import sizes from "@/data/images.json";

// Dimensions réelles (générées par `npm run media`) pour que next/image réserve la place exacte.
export function img(src: string) {
  const [width, height] = (sizes as Record<string, number[]>)[src] ?? [1200, 1500];
  return { src, width, height };
}
