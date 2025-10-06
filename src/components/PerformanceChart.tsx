import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { date: "01 Jan", value1: 100, value2: 80 },
  { date: "02 Jan", value1: 150, value2: 120 },
  { date: "03 Jan", value1: 250, value2: 180 },
  { date: "04 Jan", value1: 200, value2: 150 },
  { date: "05 Jan", value1: 250, value2: 120 },
  { date: "05 Jan", value1: 200, value2: 90 },
  { date: "07 Jan", value1: 400, value2: 280 },
  { date: "07 Jan", value1: 200, value2: 180 },
];

export const PerformanceChart = () => {
  return (
    <Card className="bg-card border-border p-6">
      <h3 className="text-xl font-semibold text-foreground mb-6">Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            axisLine={{ stroke: "hsl(var(--border))" }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            axisLine={{ stroke: "hsl(var(--border))" }}
          />
          <Line 
            type="monotone" 
            dataKey="value1" 
            stroke="hsl(var(--chart-1))" 
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="value2" 
            stroke="hsl(var(--chart-2))" 
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-3 h-3 rounded-full bg-chart-1"></div>
        <span className="text-sm text-muted-foreground">Sales</span>
      </div>
    </Card>
  );
};
