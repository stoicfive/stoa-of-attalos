import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Lightbulb, FileText } from "lucide-react";

interface SessionHelpCardProps {
  setupGuideUrl?: string;
  hintsUrl?: string;
  rubricUrl?: string;
}

export function SessionHelpCard({
  setupGuideUrl = "/setup",
  hintsUrl,
  rubricUrl
}: SessionHelpCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Need Help?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Link href={setupGuideUrl}>
          <Button variant="outline" className="w-full">
            <Terminal className="mr-2 h-4 w-4" />
            Setup Guide
          </Button>
        </Link>
        <Button variant="outline" className="w-full" disabled={!hintsUrl}>
          <Lightbulb className="mr-2 h-4 w-4" />
          View Hints
        </Button>
        <Button variant="outline" className="w-full" disabled={!rubricUrl}>
          <FileText className="mr-2 h-4 w-4" />
          View Rubric
        </Button>
      </CardContent>
    </Card>
  );
}
