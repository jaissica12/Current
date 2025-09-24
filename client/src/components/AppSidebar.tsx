import { Calendar, Plus, BarChart3, CheckSquare, Zap } from "lucide-react";
import { useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Live",
    url: "/",
    icon: Zap,
    testId: "link-live"
  },
  {
    title: "Create Lightning Rod",
    url: "/create",
    icon: Plus,
    testId: "link-create"
  },
  {
    title: "Status",
    url: "/status", 
    icon: BarChart3,
    testId: "link-status"
  },
  {
    title: "Approvals",
    url: "/approvals",
    icon: CheckSquare,
    testId: "link-approvals"
  },
];

export default function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Lightning Rod Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <a href={item.url} data-testid={item.testId}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}