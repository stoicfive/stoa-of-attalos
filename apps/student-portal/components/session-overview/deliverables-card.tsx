import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DeliverablesCardProps {
  deliverables: string[];
}

export function DeliverablesCard({ deliverables }: DeliverablesCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Deliverables</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary">•</span>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
