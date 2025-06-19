"use client";

import Image from "next/image";
import { Shell } from "../ui/shell";

const showcase = [
  {
    id: "1",
    title: "Showcase 1",
    description: "This is the first showcase",
    image: "/images/hero/feature_mobile_1.png",
    imageDesktop: "/images/hero/feature_desktop_1.png",
    isLarge: true,
  },
  {
    id: "2",
    title: "Showcase 2",
    description: "This is the second showcase",
    image: "/images/hero/feature_mobile_2.png",
    imageDesktop: "/images/hero/feature_desktop_2.png",
    isLarge: true,
  },
  {
    id: "3",
    title: "Showcase 3",
    description: "This is the third showcase",
    image: "/images/hero/feature_mobile_3.png",
    imageDesktop: "/images/hero/feature_desktop_3.png",
  },
  {
    id: "4",
    title: "Showcase 4",
    description: "This is the fourth showcase",
    image: "/images/hero/feature_mobile_4.png",
    imageDesktop: "/images/hero/feature_desktop_4.png",
  },
  {
    id: "5",
    title: "Showcase 5",
    description: "This is the fifth showcase",
    image: "/images/hero/feature_mobile_5.png",
    imageDesktop: "/images/hero/feature_desktop_5.png",
  },
  {
    id: "6",
    title: "Showcase 6",
    description: "This is the sixth showcase",
    image: "/images/hero/feature_mobile_6.png",
    imageDesktop: "/images/hero/feature_desktop_6.png",
  },
];

export default function Showcase() {
  return (
    <Shell className="w-full mt-2.5">
      {/* Mobile Layout */}
      <div className="grid grid-cols-1 gap-[5px] lg:hidden">
        {/* Top row: 2 large cards */}
        <div className="grid grid-cols-2 gap-[5px]">
          {showcase
            .filter(item => item.isLarge)
            .map(item => (
              <div
                key={item.id}
                className="rounded-[3px] relative overflow-hidden w-full aspect-[1.75/1]"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="w-full object-cover"
                />
              </div>
            ))}
        </div>
        {/* Second row: 4 small cards */}
        <div className="grid grid-cols-4 gap-[5px]">
          {showcase
            .filter(item => !item.isLarge)
            .map(item => (
              <div
                key={item.id}
                className="rounded-[3px] relative overflow-hidden w-full aspect-[1/1]"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="w-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-[10px]">
        {/* Left side: 2 large cards */}
        <div className="flex gap-[10px]">
          {showcase
            .filter(item => item.isLarge)
            .map(item => (
              <div
                key={item.id}
                className="rounded-[3px] relative overflow-hidden w-[400px] h-[250px] flex-shrink-0"
              >
                <Image
                  src={item.imageDesktop || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="w-full object-cover"
                />
              </div>
            ))}
        </div>

        {/* Right side: 4 small cards in 2x2 grid */}
        <div className="grid grid-cols-2 gap-[10px]">
          {showcase
            .filter(item => !item.isLarge)
            .map(item => (
              <div
                key={item.id}
                className="rounded-[3px] relative overflow-hidden w-[185px] h-[120px]"
              >
                <Image
                  src={item.imageDesktop || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="w-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </Shell>
  );
}
