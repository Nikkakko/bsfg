import CasinoDescription from "@/components/casino-description";
import CollectionsFilter from "@/components/collections-filter";
import GameRow from "@/components/game-row";
import Hero from "@/components/landing/hero";
import Lobby from "@/components/landing/lobby";
import Showcase from "@/components/landing/showcase";
import { ClientPaginationControls } from "@/components/page-controls";
import PaymentMethods from "@/components/payment-methods";
import ProvidersFilter from "@/components/providers-filter";
import ProvidersRow from "@/components/providers-row";
import SearchInput from "@/components/search-input";
import { Shell } from "@/components/ui/shell";
import { CATEGORY_LABELS } from "@/config/data";
import { loadCategoriesParams } from "@/hooks/params/category-params";
import { loadProvidersParams } from "@/hooks/params/providers-params";
import { loadSearchParams } from "@/hooks/params/search-params";
import { loadPaginationParams } from "@/hooks/params/search-params-pagination";
import { fetchGames } from "@/lib/fetch-games";
import { groupByCategory } from "@/lib/group-by-category";
import { SearchParams } from "nuqs";

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { search } = await loadSearchParams(searchParams);
  const { providers } = await loadProvidersParams(searchParams);
  const { category } = await loadCategoriesParams(searchParams);
  const { page, per_page } = await loadPaginationParams(searchParams);

  const games = await fetchGames({
    search,
    providers,
    category,
    page,
    per_page,
  });
  const grouped = groupByCategory(games.games, Object.keys(CATEGORY_LABELS));

  return (
    <Shell className="flex-1 flex flex-col w-full  text-iconColor px-2.5 2xl:px-0 pt-2.5 pb-5 lg:pb-10 lg:pt-[15px]">
      <Hero />
      <Showcase />
      <div className="flex flex-col gap-2.5 mt-[15px]">
        <div className="flex flex-col lg:flex-row gap-2.5">
          <SearchInput />
          <div className="flex gap-2.5 ">
            <CollectionsFilter />
            <ProvidersFilter />
          </div>
        </div>
        <Lobby />
      </div>
      {games.games.length === 0 && (
        <div className="flex flex-col gap-2.5 mt-2.5 lg:mt-[25px] text-center">
          <p className="text-secondaryText text-sm">No games found</p>
        </div>
      )}
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
      <section className="mt-2.5 lg:mt-[25px] flex flex-col gap-2.5">
        <PaymentMethods />
        <CasinoDescription />
      </section>
      {games.pagination.total_pages > 1 && (
        <ClientPaginationControls
          numPages={games.pagination.total_pages || 1}
        />
      )}
    </Shell>
  );
}
