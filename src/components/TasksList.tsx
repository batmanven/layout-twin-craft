import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [
  { id: "1", title: "Design new dashboard", completed: true },
  { id: "2", title: "Fix UI bugs", completed: false },
];

export const TasksList = () => {
  return (
    <Card className="bg-card border-border p-6">
      <h3 className="text-xl font-semibold text-foreground mb-6">Tasks</h3>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-3">
            <Checkbox 
              id={task.id} 
              checked={task.completed}
              className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label
              htmlFor={task.id}
              className="text-sm text-foreground cursor-pointer"
            >
              {task.title}
            </label>
          </div>
        ))}
      </div>
    </Card>
  );
};
