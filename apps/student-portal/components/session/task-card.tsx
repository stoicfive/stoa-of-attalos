"use client"

import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";

interface TaskCardProps {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  isExpanded: boolean;
  isRequired?: boolean;
  onToggleComplete: () => void;
  onToggleExpand: () => void;
  children: ReactNode;
}

export function TaskCard({
  id,
  title,
  description,
  isCompleted,
  isExpanded,
  isRequired = true,
  onToggleComplete,
  onToggleExpand,
  children
}: TaskCardProps) {
  return (
    <Card className={`transition-all duration-300 ${isCompleted ? "border-green-500/50" : ""}`}>
      <CardHeader 
        className="cursor-pointer hover:bg-accent/50 transition-colors"
        onClick={() => isCompleted && onToggleExpand()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleComplete();
              }}
              className="mt-1"
              aria-label={isCompleted ? `Mark ${title} as incomplete` : `Mark ${title} as complete`}
              aria-pressed={isCompleted}
            >
              {isCompleted ? (
                <CheckCircle2 className="h-6 w-6 text-green-500" aria-hidden="true" />
              ) : (
                <Circle className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              )}
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">{title}</CardTitle>
                {isCompleted && !isExpanded && (
                  <Badge variant="success" className="text-xs">Completed</Badge>
                )}
              </div>
              {isExpanded && description && (
                <CardDescription>{description}</CardDescription>
              )}
            </div>
          </div>
          {isExpanded && (
            <Badge variant={isRequired ? "info" : "warning"}>
              {isRequired ? "Required" : "Recommended"}
            </Badge>
          )}
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-4 slide-in-from-top-2">
          {children}
        </CardContent>
      )}
    </Card>
  );
}
