"use client";
import { cn } from "@/lib/utils";
import { InputSearchIcon } from "./shared/icons";
import { Input } from "./ui/input";

import { useQueryStates } from "nuqs";
import { searchParams } from "@/hooks/params/search-params";
import { useDebounce } from "@/hooks/use-debounce";
import React from "react";

export default function SearchInput() {
  const [{ search }, setSearch] = useQueryStates(searchParams, {
    shallow: false,
  });
  const [inputValue, setInputValue] = React.useState(search || "");
  const debouncedValue = useDebounce(inputValue, 300);

  React.useEffect(() => {
    setInputValue(search || "");
  }, [search]);

  React.useEffect(() => {
    setSearch({ search: debouncedValue });
  }, [debouncedValue, setSearch]);

  return (
    <div className={cn("w-full relative max-w-[810px]")}>
      <InputSearchIcon
        className={cn(
          "absolute top-1/2 left-4 text-muted-foreground -translate-y-1/2"
        )}
        size={20}
      />
      <Input
        placeholder="Search your game"
        className={cn(
          "bg-darkBackground border-border pl-12 h-10  rounded-lg text-white hover:text-white"
        )}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
}
