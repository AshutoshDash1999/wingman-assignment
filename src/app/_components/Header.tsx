"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChartPie, MessageSquare, Tag } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    title: "Summary",
    icon: <ChartPie />,
  },
  {
    title: "Sales",
    icon: <Tag />,
  },
  {
    title: "Chats",
    icon: <MessageSquare />,
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("Summary");

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 border-b-2 border-muted/30 p-6">
      {navItems.map((item) => (
        <Button
          key={item.title}
          variant="ghost"
          onClick={() => setActiveTab(item.title)}
          className={cn(
            "text-sm font-medium transition-colors  rounded-full p-6 hover:bg-secondary hover:text-primary",
            activeTab === item.title
              ? "bg-secondary text-primary"
              : "text-muted-foreground"
          )}
        >
          {item.icon}
          <span className="ml-2 text-xl font-semibold">{item.title}</span>
        </Button>
      ))}
    </nav>
  );
};
export default Header;
