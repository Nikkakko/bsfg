import CollectionsFilter from "@/components/collections-filter";
import Hero from "@/components/landing/hero";
import Lobby from "@/components/landing/lobby";
import Showcase from "@/components/landing/showcase";
import ProvidersFilter from "@/components/providers-filter";
import SearchInput from "@/components/search-input";
import { Shell } from "@/components/ui/shell";

export default function Home() {
  return (
    <Shell className="flex-1 flex flex-col  text-iconColor px-2.5 2xl:px-0 pt-2.5 pb-5 lg:pb-10 lg:pt-[15px]">
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
    </Shell>
  );
}
