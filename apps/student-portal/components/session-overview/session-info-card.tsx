import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Target, BookOpen } from "lucide-react";

interface SessionInfoCardProps {
  duration: string;
  taskCount: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export function SessionInfoCard({ duration, taskCount, difficulty }: SessionInfoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Session Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Duration</p>
            <p className="text-sm text-muted-foreground">{duration}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Target className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Tasks</p>
            <p className="text-sm text-muted-foreground">{taskCount} hands-on exercises</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Difficulty</p>
            <p className="text-sm text-muted-foreground">{difficulty}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
