import { LayoutGrid, TrendingUp, FileText, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
}

const navItems: NavItem[] = [
  { name: "Dashboard", icon: LayoutGrid, active: true },
  { name: "Analytics", icon: TrendingUp },
  { name: "Reports", icon: FileText },
  { name: "Settings", icon: Settings },
];

export const DashboardSidebar = () => {
  return (
    <aside className="w-72 bg-sidebar-background border-r border-sidebar-border h-screen fixed left-0 top-0 p-6">
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
