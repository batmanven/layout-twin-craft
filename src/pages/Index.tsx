import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StatCard } from "@/components/StatCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { RecentActivity } from "@/components/RecentActivity";
import { TasksList } from "@/components/TasksList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <DashboardSidebar />
      </div>
      
      <main className="lg:ml-72 p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72">
                <DashboardSidebar />
              </SheetContent>
            </Sheet>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Dashboard</h1>
          </div>
          <Avatar className="w-10 h-10 md:w-12 md:h-12">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <StatCard title="Sessions" value="1,986" trend={12} isPositive={true} />
          <StatCard title="Revenue" value="$10,248" trend={20} isPositive={true} />
          <StatCard title="Errors" value="158" trend={5} isPositive={false} />
          <StatCard title="New Users" value="37" trend={7} isPositive={true} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          <RecentActivity />
        </div>

        <TasksList />
      </main>
    </div>
  );
};

export default Index;
