// components/GameCard.tsx
import { Game } from "@/types/global";
import Image from "next/image";

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="cursor-pointer group">
      <Image
        src={game.image}
        alt={game.name}
        width={150}
        height={200}
        className="rounded-lg w-[150px] h-[200px] object-cover group-hover:scale-105 transition-all duration-300"
      />
      <div className="mt-1 text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="font-semibold text-secondaryText">{game.name}</p>
        <p className="text-xs text-gray">{game.provider}</p>
      </div>
    </div>
  );
}
