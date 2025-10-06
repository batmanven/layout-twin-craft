import { Card } from "@/components/ui/card";

interface Activity {
  title: string;
  date: string;
  color: string;
}

const activities: Activity[] = [
  { title: "New user registered", date: "02 Mar", color: "bg-teal-500" },
  { title: "Order #10456", date: "23 Feb", color: "bg-blue-500" },
  { title: "Invoice #2324", date: "25 Feb", color: "bg-red-500" },
  { title: "Payment completed", date: "25 Feb", color: "bg-purple-500" },
];

export const RecentActivity = () => {
  return (
    <Card className="bg-card border-border p-6">
      <h3 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full ${activity.color} mt-2`}></div>
            <div className="flex-1">
              <p className="text-sm text-foreground">{activity.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
