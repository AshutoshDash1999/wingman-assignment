import { Home, Inbox, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "People",
    url: "#",
    icon: Users,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarHeader className="bg-primary flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="company logo"
          height={55}
          width={55}
          quality={100}
          unoptimized={true}
          className="p-1"
        />
        <Separator className="my-6 rounded-lg bg-muted/30 w-12" />
      </SidebarHeader>

      <SidebarContent className="bg-primary">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-6">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex justify-center"
                >
                  <Tooltip>
                    <TooltipTrigger>
                      <a href={item.url}>
                        <item.icon
                          className="text-secondary p-2  rounded-lg hover:bg-white hover:text-primary transition-all duration-300 ease-in-out"
                          size={45}
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="text-primary text-xl bg-white ml-2 font-medium shadow-md"
                    >
                      {item?.title}
                    </TooltipContent>
                  </Tooltip>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
