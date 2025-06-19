import { cn } from "@/lib/utils";
import { InputSearchIcon } from "./shared/icons";
import { Input } from "./ui/input";

export default function SearchInput() {
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
      />
    </div>
  );
}
