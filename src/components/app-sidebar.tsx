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
      </SidebarHeader>

      <SidebarContent className="bg-primary">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex justify-center"
                >
                  <a href={item.url}>
                    <item.icon
                      className="text-secondary p-2  rounded hover:bg-white hover:text-primary"
                      size={45}
                    />
                  </a>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
