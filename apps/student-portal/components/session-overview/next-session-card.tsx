import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface NextSessionCardProps {
  nextSessionId?: string;
  nextSessionTitle?: string;
}

export function NextSessionCard({ nextSessionId, nextSessionTitle }: NextSessionCardProps) {
  if (!nextSessionId) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Next Session</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          {nextSessionTitle || "Continue your learning journey"}
        </p>
        <Link href={`/lessons/${nextSessionId}`}>
          <Button variant="outline" className="w-full">
            View Next Session
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
