// lib/groupByCategory.ts
import { Game } from "@/types/global";

export function groupByCategory(games: Game[], categories: string[]) {
  const result: Record<string, Game[]> = {};

  for (const cat of categories) {
    result[cat] = games.filter(game => game.categories.includes(cat));
  }

  return result;
}
