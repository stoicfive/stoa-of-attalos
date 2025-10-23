import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

interface QuickActionsCardProps {
  sessionId: string;
}

export function QuickActionsCard({ sessionId }: QuickActionsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Link href={`/lessons/${sessionId}/activity`}>
          <Button className="w-full">
            <Play className="mr-2 h-4 w-4" />
            Start Session
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
