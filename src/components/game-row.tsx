// components/GameRow.tsx
import { Game } from "@/types/global";
import GameCard from "./cards/game-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  BonusBuyIcon,
  FeaturedGamesIcon,
  HotGamesIcon,
  LiveGamesIcon,
  NewReleasesIcon,
} from "./shared/icons";

export default function GameRow({
  title,
  games,
}: {
  title: string;
  games: Game[];
}) {
  const RenderIcon = () => {
    switch (title) {
      case "Bonus Buy":
        return <BonusBuyIcon />;
      case "Live Games":
        return <LiveGamesIcon />;
      case "New Releases":
        return <NewReleasesIcon />;
      case "Featured Games":
        return <FeaturedGamesIcon />;
      case "Hot Games":
        return <HotGamesIcon />;
      default:
        return null;
    }
  };

  if (games.length === 0) return null;

  return (
    <Carousel className="w-full max-w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2.5 mb-4">
          <RenderIcon />
          <h2 className="text-xl font-bold ">{title}</h2>
        </div>
        <div className="flex items-center gap-2.5">
          <CarouselPrevious className="static top-0 translate-y-0" />
          <CarouselNext className="static top-0 translate-y-0" />
        </div>
      </div>
      <CarouselContent>
        {games.map(game => (
          <CarouselItem key={game.id} className="basis-auto">
            <GameCard game={game} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
