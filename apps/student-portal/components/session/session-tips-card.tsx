import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface SessionTipsCardProps {
  tips: string[];
}

export function SessionTipsCard({ tips }: SessionTipsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Pro Tips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-2">
            <Lightbulb className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <p>{tip}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
