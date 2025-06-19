"use client";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { CollectionIcon, DiceIcon } from "./shared/icons";

const collections = [
  { value: "all", label: "All Collections" },
  { value: "featured", label: "Featured" },
  { value: "popular", label: "Popular" },
  { value: "bonus-buy", label: "Bonus Buy" },
  { value: "fruits", label: "Fruits" },
];

export default function CollectionsFilter() {
  const [selected, setSelected] = useState("all");

  return (
    <Select value={selected} onValueChange={setSelected}>
      <SelectTrigger className="bg-darkBackground border border-border rounded-lg flex items-center px-4 text-sm font-medium text-secondaryText shadow-none h-10 lg:w-[185px]">
        <CollectionIcon size={24} />
        {/* <SelectValue placeholder="Collections" /> */}
        <span className="flex-1 text-left text-secondaryText capitalize">
          {selected === "all" ? "Collections" : selected}
        </span>
      </SelectTrigger>
      <SelectContent className="bg-darkBackground border border-border rounded-b-lg ">
        {collections.map(item => (
          <SelectItem
            key={item.value}
            value={item.value}
            className={`flex items-center px-4 py-3 text-base text-white cursor-pointer
              ${
                selected === item.value
                  ? "bg-darkBackground border-l-4 border-blue"
                  : "border-l-4 border-transparent"
              }
              hover:bg-secondaryBackground transition-colors`}
          >
            <div className="flex items-center gap-2">
              <DiceIcon size={24} />
              {item.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
