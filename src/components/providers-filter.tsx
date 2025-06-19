"use client";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useState } from "react";
import { DiceIcon, LayoutListIcon } from "./shared/icons";

const providers = [
  { value: "all", label: "All Providers" },
  { value: "bgaming", label: "Bgaming" },
  { value: "gamebeat", label: "GameBeat" },
  { value: "pragmatic", label: "Pragmatic Play" },
  { value: "netent", label: "NetEnt" },
];

export default function ProvidersFilter() {
  const [selected, setSelected] = useState("all");

  return (
    <Select value={selected} onValueChange={setSelected}>
      <SelectTrigger className="bg-darkBackground border border-border rounded-lg flex items-center px-4 text-sm font-medium text-secondaryText shadow-none h-10 lg:w-[185px]">
        <LayoutListIcon size={24} />
        <span className="flex-1 text-left text-secondaryText capitalize">
          {selected === "all" ? "Providers" : selected}
        </span>
      </SelectTrigger>
      <SelectContent className="bg-darkBackground border border-border rounded-b-lg ">
        {providers.map(item => (
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
            <DiceIcon size={24} />
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
