"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import * as React from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: "1",
    title: "Slide 1",
    description: "This is the first slide",
    image: "/images/hero/hero_mobile_1.png",
  },
  {
    id: "2",
    title: "Slide 2",
    description: "This is the second slide",
    image: "/images/hero/hero_mobile_1.png",
  },
  {
    id: "3",
    title: "Slide 3",
    description: "This is the third slide",
    image: "/images/hero/hero_mobile_1.png",
  },
  {
    id: "4",
    title: "Slide 4",
    description: "This is the fourth slide",
    image: "/images/hero/hero_mobile_1.png",
  },

  {
    id: "5",
    title: "Slide 1",
    description: "This is the first slide",
    image: "/images/hero/hero_desktop_1.png",
  },
  {
    id: "6",
    title: "Slide 2",
    description: "This is the second slide",
    image: "/images/hero/hero_desktop_2.png",
  },

  {
    id: "7",
    title: "Slide 3",
    description: "This is the third slide",
    image: "/images/hero/hero_desktop_1.png",
  },
  {
    id: "8",
    title: "Slide 4",
    description: "This is the fourth slide",
    image: "/images/hero/hero_desktop_2.png",
  },
];

export default function Hero() {
  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<CarouselApi>();

  const [current, setCurrent] = React.useState(0);
  const filteredSlides = slides.filter(slide =>
    isMobile
      ? slide.image.includes("hero_mobile")
      : slide.image.includes("hero_desktop")
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {filteredSlides.map(slide => (
          <CarouselItem key={slide.id} className="lg:basis-1/2">
            <div className="relative aspect-[16/9] lg:aspect-[2/1] rounded-[3px] overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=" flex justify-center gap-2  mt-2.5">
        {filteredSlides.map((slide, index) => (
          <button
            type="button"
            onClick={() => api?.scrollTo(index)}
            key={slide.id}
            className={cn(
              "lg:h-4 lg:w-10 h-3 w-8 rounded-full border-2 border-blue transition-colors",
              current === index + 1 ? "bg-blue" : "bg-transparent"
            )}
          />
        ))}
      </div>
    </Carousel>
  );
}
