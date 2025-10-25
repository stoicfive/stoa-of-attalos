import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, CheckCircle2 } from "lucide-react";

interface DeliverablesCardProps {
  deliverables: string[];
}

export function DeliverablesCard({ deliverables }: DeliverablesCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileCheck className="h-5 w-5" />
          Deliverables
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {deliverables.map((item, index) => {
            // Split on " - " to separate file path from description
            const parts = item.split(' - ');
            const filePath = parts[0];
            const description = parts[1] || '';
            
            return (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <code className="text-sm font-medium bg-secondary px-2 py-0.5 rounded">
                    {filePath}
                  </code>
                  {description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {description}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
