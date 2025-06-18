"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  PromotionsIcon,
  StarIcon,
  TrophyIcon,
  SlotIcon,
  RouletteIcon,
  BlackjackIcon,
  RecentIcon,
  CollectionIcon,
  ProvidersIcon,
  SupportIcon,
  LanguageIcon,
  BaccaratIcon,
  LiveDealerIcon,
  CrashIcon,
  DiceIcon,
  VideoPokerIcon,
  FavoriteIcon,
} from "@/components/shared/icons";

import { NavMain } from "@/components/nav-main";

const data = {
  navMain: [
    {
      title: "Promotions & VIP",
      items: [
        {
          title: "Promotions",
          url: "/promotions",
          icon: PromotionsIcon,
        },
        {
          title: "VIP Club",
          url: "/vip-club",
          icon: StarIcon,
        },
        {
          title: "Tournaments",
          url: "/tournaments",
          icon: TrophyIcon,
        },
      ],
    },
    {
      title: "Games",
      items: [
        {
          title: "Slots",
          url: "/slots",
          icon: SlotIcon,
        },
        {
          title: "Blackjack",
          url: "/blackjack",
          icon: BlackjackIcon,
        },
        {
          title: "Roulette",
          url: "/roulette",
          icon: RouletteIcon,
        },
        {
          title: "Baccarat",
          url: "/baccarat",
          icon: BaccaratIcon,
        },
        {
          title: "Live Dealer",
          url: "/live-dealer",
          icon: LiveDealerIcon,
        },
        {
          title: "Crash",
          url: "/crash",
          icon: CrashIcon,
        },
        {
          title: "Dice",
          url: "/dice",
          icon: DiceIcon,
        },
        {
          title: "Video Poker",
          url: "/video-poker",
          icon: VideoPokerIcon,
        },
      ],
    },

    {
      title: "Favorites and Recent",
      items: [
        {
          title: "Favorites",
          url: "/favorites",
          icon: FavoriteIcon,
        },
        {
          title: "Recent",
          url: "/recent",
          icon: RecentIcon,
        },
      ],
    },

    {
      title: "Collections and Providers",
      items: [
        {
          title: "Collections",
          url: "/collections",
          icon: CollectionIcon,
        },
        {
          title: "Providers",
          url: "/providers",
          icon: ProvidersIcon,
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Support",
          url: "/support",
          icon: SupportIcon,
        },
        {
          title: "English",
          url: "/language",
          icon: LanguageIcon,
        },
      ],
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-3">
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
