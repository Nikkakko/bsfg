"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface NavMainProps {
  items: {
    title: string;
    items: {
      title: string;
      url: string;
      icon?: LucideIcon;
      isActive?: boolean;
    }[];
  }[];
}

export function NavMain({ items }: NavMainProps) {
  const { open } = useSidebar();
  return (
    <>
      {items.map(group => (
        <SidebarGroup key={group.title} className="">
          <SidebarGroupContent>
            <SidebarMenu className={cn(open && "bg-background rounded-md")}>
              {group.items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-hoverBackground "
                  >
                    <a href={item.url}>
                      {item.icon && (
                        <item.icon className="text-secondaryText " />
                      )}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
}
