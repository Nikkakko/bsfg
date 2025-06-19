"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  HomeIcon,
  SearchIcon,
  ChatIcon,
  MenuIcon,
  DepositeMobileIcon,
} from "./shared/icons";
import { Button } from "./ui/button";
import { useSidebar } from "./ui/sidebar";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  icon: React.ElementType;
  isButton: boolean;
  id: "home" | "search" | "deposit" | "chat" | "menu";
};

const navItems: NavItem[] = [
  {
    label: "Home",
    isButton: true,
    icon: HomeIcon,
    id: "home",
  },
  {
    label: "Search",
    icon: SearchIcon,
    isButton: true,
    id: "search",
  },
  {
    label: "Deposit",
    icon: DepositeMobileIcon,
    isButton: true,
    id: "deposit",
  },
  {
    label: "Chat",

    icon: ChatIcon,
    isButton: true,
    id: "chat",
  },
  {
    label: "Menu",
    icon: MenuIcon,
    isButton: true,
    id: "menu",
  },
];

export default function MobileNav() {
  const isMobile = useIsMobile();
  const { toggleSidebar } = useSidebar();

  if (!isMobile) return null;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full  bg-darkBackground  rounded-l-md rounded-r-md  px-10 py-[5px] flex justify-between items-center shadow-lg border-t-1 border-separator">
      <div className="flex justify-between items-center w-full">
        {navItems.map(item => {
          const isActive = item.id === "deposit";
          return (
            <Button
              key={item.label}
              variant={isActive ? "iconActive" : "ghost"}
              size="icon"
              className={cn(
                "flex flex-col items-center",
                isActive && "w-[50px] h-[50px]"
              )}
              onClick={() => item.id === "menu" && toggleSidebar()}
            >
              <item.icon size={24} />

              {!isActive && (
                <span className="text-xs mt-1 text-white">{item.label}</span>
              )}
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
