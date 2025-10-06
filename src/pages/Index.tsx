import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StatCard } from "@/components/StatCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { RecentActivity } from "@/components/RecentActivity";
import { TasksList } from "@/components/TasksList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <main className="ml-72 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard title="Sessions" value="1,986" trend={12} isPositive={true} />
          <StatCard title="Revenue" value="$10,248" trend={20} isPositive={true} />
          <StatCard title="Errors" value="158" trend={5} isPositive={false} />
          <StatCard title="New Users" value="37" trend={7} isPositive={true} />
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2">
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
