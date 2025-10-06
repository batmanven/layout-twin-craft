import { ArrowUp, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  trend: number;
  isPositive?: boolean;
}

export const StatCard = ({ title, value, trend, isPositive = true }: StatCardProps) => {
  return (
    <Card className="bg-card border-border p-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <ArrowUp className="w-4 h-4 text-success" />
          ) : (
            <ArrowDown className="w-4 h-4 text-destructive" />
          )}
          <span className={cn(
            "text-sm font-medium",
            isPositive ? "text-success" : "text-destructive"
          )}>
            {trend}%
          </span>
        </div>
      </div>
    </Card>
  );
};
