import {
  ChartPieIcon,
  MapPinIcon,
  PackageIcon,
  PencilRulerIcon,
  RectangleHorizontalIcon,
  TreePineIcon,
  TreesIcon,
  TruckIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

import { CustomTrigger } from "@/features/sidebar/CustomTrigger";

// Não colnsegui por icone de tronco de árvore
// import TbWood from "@/assets/TbWood.png"

const menu_items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ChartPieIcon,
  },
  {
    title: "Carregamentos",
    url: "/carregamentos",
    icon: PackageIcon,
  },
  {
    title: "Pesagens",
    url: "/pesagens",
    icon: PencilRulerIcon,
  },
  {
    title: "Caminhões",
    url: "/caminhoes",
    icon: TruckIcon,
  },
  {
    title: "Madeiras",
    url: "/madeiras",
    icon: TreePineIcon,
  },
  {
    title: "Troncos",
    url: "/troncos",
    icon: RectangleHorizontalIcon,
  },
  {
    title: "Localizações",
    url: "/localizacoes",
    icon: MapPinIcon,
  },
  {
    title: "Reflorestamentos",
    url: "/reflorestamentos",
    icon: TreesIcon,
  },
];

export default function AppSidebar() {
  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarHeader> 
          <div className="m-1">
            <CustomTrigger />
          </div>
          <SidebarContent>
            <SidebarMenu>
              {menu_items.map((item) => (
                <SidebarMenuItem key={item.title} className="hover:border-l hover:border-[#00A03C]">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarHeader>
      </Sidebar>
    </>
  );
}
