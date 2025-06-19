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

const lobbyItems = [
  { label: "Lobby", icon: LobbyIcon },
  { label: "Slots", icon: SlotIcon },
  { label: "Blackjack", icon: BlackjackIcon },
  { label: "Roulette", icon: RouletteIcon },
  { label: "Live", icon: LiveDealerIcon },
  { label: "Baccarat", icon: BaccaratIcon },
  { label: "Crash", icon: CrashIcon },
  { label: "Dice", icon: DiceIcon },
  { label: "Video Poker", icon: VideoPokerIcon },
  { label: "Fruits", icon: CollectionIcon },
  { label: "Books", icon: CollectionIcon },
  { label: "Bonus Buy", icon: CollectionIcon },
];

export default function Lobby() {
  const [lobby, ...carouselItems] = lobbyItems;
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
              >
                <Button
                  type="button"
                  variant="icon"
                  className="flex items-center gap-2.5 px-4 py-2 rounded-md bg-hoverBackground text-white text-sm font-medium"
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
