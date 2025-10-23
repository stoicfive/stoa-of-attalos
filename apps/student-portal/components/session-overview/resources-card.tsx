import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Lightbulb, FileText } from "lucide-react";

interface Resource {
  label: string;
  url?: string;
  icon: "setup" | "hints" | "rubric";
}

interface ResourcesCardProps {
  resources?: Resource[];
}

const iconMap = {
  setup: Terminal,
  hints: Lightbulb,
  rubric: FileText
};

export function ResourcesCard({ resources }: ResourcesCardProps) {
  // Default resources if none provided
  const defaultResources: Resource[] = [
    { label: "Setup Guide", url: "/setup", icon: "setup" },
    { label: "View Hints", icon: "hints" },
    { label: "View Rubric", icon: "rubric" }
  ];

  const displayResources = resources || defaultResources;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Resources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {displayResources.map((resource, index) => {
          const Icon = iconMap[resource.icon];
          const button = (
            <Button 
              variant="outline" 
              className="w-full" 
              disabled={!resource.url}
            >
              <Icon className="mr-2 h-4 w-4" />
              {resource.label}
            </Button>
          );

          return resource.url ? (
            <Link key={index} href={resource.url}>
              {button}
            </Link>
          ) : (
            <div key={index}>{button}</div>
          );
        })}
      </CardContent>
    </Card>
  );
}
