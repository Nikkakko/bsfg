"use client";
import { cn } from "@/lib/utils";
import {
  LobbyIcon,
  SlotIcon,
  BlackjackIcon,
  RouletteIcon,
  LiveDealerIcon,
  BaccaratIcon,
  CrashIcon,
  DiceIcon,
  VideoPokerIcon,
  CollectionIcon,
} from "../shared/icons";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Shell } from "../ui/shell";
import { categoriesParams } from "@/hooks/params/category-params";
import { useQueryStates } from "nuqs";

const lobbyItems = [
  { label: "Lobby", icon: LobbyIcon },
  { label: "Slots", icon: SlotIcon, value: "slots" },
  { label: "Blackjack", icon: BlackjackIcon, value: "blackjack" },
  { label: "Roulette", icon: RouletteIcon, value: "roulette" },
  { label: "Live", icon: LiveDealerIcon, value: "live" },
  { label: "Baccarat", icon: BaccaratIcon, value: "baccarat" },
  { label: "Crash", icon: CrashIcon, value: "crash" },
  { label: "Dice", icon: DiceIcon, value: "dice" },
  { label: "Video Poker", icon: VideoPokerIcon, value: "video-poker" },
  { label: "Fruits", icon: CollectionIcon, value: "fruits" },
  { label: "Books", icon: CollectionIcon, value: "books" },
  { label: "Bonus Buy", icon: CollectionIcon, value: "bonus-buy" },
];

export default function Lobby() {
  const [lobby, ...carouselItems] = lobbyItems;
  const [{ category: categoryParam }, setCategory] = useQueryStates(
    categoriesParams,
    {
      shallow: false,
      clearOnDefault: true,
    }
  );

  const selected = categoryParam.length > 0 ? categoryParam : [];

  return (
    <Shell className="flex items-center gap-2.5 ">
      <Button
        type="button"
        variant="iconActive"
        className="flex items-center gap-2.5 px-4 py-2 rounded-md bg-darkBackground text-white text-sm font-medium"
      >
        <lobby.icon />
        <span>{lobby.label}</span>
      </Button>
      <Carousel
        className="w-full lg:max-w-[1100px] "
        opts={{
          dragFree: true,
          align: "center",
        }}
      >
        <CarouselContent className=" gap-2.5 w-full ">
          {carouselItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <CarouselItem
                key={item.label}
                className={cn("basis-auto ", i !== 0 && "pl-0")}
                onClick={() => {
                  //multi select
                  if (selected.includes(item.value ?? "")) {
                    setCategory({
                      category: selected.filter(c => c !== item.value),
                    });
                  } else {
                    setCategory({ category: [...selected, item.value ?? ""] });
                  }
                }}
              >
                <Button
                  type="button"
                  variant="icon"
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-2 rounded-md text-white text-sm font-medium",
                    selected.includes(item.value ?? "") && "bg-darkBackground"
                  )}
                >
                  <Icon />
                  <span>{item.label}</span>
                </Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </Shell>
  );
}
