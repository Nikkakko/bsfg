import CollectionsFilter from "@/components/collections-filter";
import GameRow from "@/components/game-row";
import Hero from "@/components/landing/hero";
import Lobby from "@/components/landing/lobby";
import Showcase from "@/components/landing/showcase";
import ProvidersFilter from "@/components/providers-filter";
import ProvidersRow from "@/components/providers-row";
import SearchInput from "@/components/search-input";
import { Shell } from "@/components/ui/shell";
import { CATEGORY_LABELS } from "@/config/data";
import { loadSearchParams } from "@/hooks/params/search-params";
import { fetchGames } from "@/lib/fetch-games";
import { groupByCategory } from "@/lib/group-by-category";
import { notFound } from "next/navigation";
import { SearchParams } from "nuqs";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { search } = await loadSearchParams(searchParams);
  const games = await fetchGames({ search });
  const grouped = groupByCategory(games, Object.keys(CATEGORY_LABELS));

  if (!games) {
    notFound();
  }

  return (
    <Shell className="flex-1 flex flex-col w-full  text-iconColor px-2.5 2xl:px-0 pt-2.5 pb-5 lg:pb-10 lg:pt-[15px]">
      <Hero />
      <Showcase />
      <div className="flex flex-col gap-2.5 mt-[15px]">
        <div className="flex gap-2.5">
          <SearchInput />
          <div className="flex gap-2.5 ">
            <CollectionsFilter />
            <ProvidersFilter />
          </div>
        </div>
        <Lobby />
      </div>

      {/* sections for games */}
      <section className="mt-2.5 lg:mt-[25px] flex flex-col gap-2.5">
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <GameRow key={key} title={label} games={grouped[key] ?? []} />
        ))}
      </section>
      {/* section for providers */}
      <section className="mt-2.5 lg:mt-[25px]">
        <ProvidersRow />
      </section>
    </Shell>
  );
}
