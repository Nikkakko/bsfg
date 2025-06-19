import Image from "next/image";
import { ProvidersIcon2 } from "./shared/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const providers = [
  {
    id: "1",
    name: "Provider 1",
    image: "/images/providers/1.png",
  },
  {
    id: "2",
    name: "Provider 2",
    image: "/images/providers/2.png",
  },
  {
    id: "3",
    name: "Provider 3",
    image: "/images/providers/3.png",
  },
  {
    id: "4",
    name: "Provider 4",
    image: "/images/providers/4.png",
  },
  {
    id: "5",
    name: "Provider 5",
    image: "/images/providers/5.png",
  },
  {
    id: "6",
    name: "Provider 6",
    image: "/images/providers/6.png",
  },
  {
    id: "8",
    name: "Provider 8",
    image: "/images/providers/8.png",
  },
  {
    id: "7",
    name: "Provider 7",
    image: "/images/providers/3.png",
  },
];

export default function ProvidersRow() {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2.5 mb-4">
          <ProvidersIcon2 />
          <h2 className="text-xl font-bold ">Providers</h2>
        </div>
        <div className="flex items-center gap-2.5  ">
          <CarouselPrevious className="static top-0 translate-y-0" />
          <CarouselNext className="static top-0 translate-y-0" />
        </div>
      </div>
      <CarouselContent>
        {providers.map(provider => (
          <CarouselItem key={provider.id} className="basis-auto">
            <div className="w-[150px] h-[60px] flex items-center justify-center bg-darkBackground rounded-md">
              <Image
                src={provider.image}
                alt={provider.name}
                width={100}
                height={60}
                className="w-[100px] h-[60px] object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
