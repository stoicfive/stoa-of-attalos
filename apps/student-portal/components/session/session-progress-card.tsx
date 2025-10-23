import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SessionProgressCardProps {
  completedCount: number;
  totalTasks: number;
  estimatedMinutes?: number;
}

export function SessionProgressCard({
  completedCount,
  totalTasks,
  estimatedMinutes = 45
}: SessionProgressCardProps) {
  const progress = Math.round((completedCount / totalTasks) * 100);
  const remainingMinutes = Math.max(0, estimatedMinutes - Math.round(completedCount * (estimatedMinutes / totalTasks)));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Session Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Completed</span>
            <span className="font-medium">{completedCount}/{totalTasks}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">Estimated time remaining:</p>
          <p className="text-2xl font-bold">{remainingMinutes} min</p>
        </div>
      </CardContent>
    </Card>
  );
}
