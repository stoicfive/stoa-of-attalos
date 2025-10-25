"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lock } from "lucide-react";
import { SessionDetailModal } from "./session-detail-modal";

interface SessionCardProps {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  objectives: number;
  status: "not-started" | "in-progress" | "complete";
  isLocked: boolean;
  href?: string;
}

export function SessionCard({
  title,
  subtitle,
  description,
  duration,
  objectives,
  status,
  isLocked,
  href,
}: SessionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusConfig = {
    "not-started": { variant: "info" as const, label: "Not Started" },
    "in-progress": { variant: "warning" as const, label: "In Progress" },
    complete: { variant: "success" as const, label: "Complete" },
  };

  const currentStatus = statusConfig[status];

  return (
    <>
      <Card className="hover:border-primary transition-colors flex flex-col h-full">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <Badge variant={currentStatus.variant}>{currentStatus.label}</Badge>
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-1">
          {/* Fixed height description area */}
          <div className="flex-1 mb-4">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm text-blue-500 hover:text-blue-600 hover:underline mt-1 inline-block"
            >
              More
            </button>
          </div>

          {/* Objectives - always in same position */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
            <Target className="h-3 w-3 flex-shrink-0" />
            <span>{objectives} objectives</span>
          </div>

          {/* Button - always at bottom */}
          <div className="mt-auto">
            {isLocked ? (
              <Button className="w-full" size="sm" disabled>
                <Lock className="mr-2 h-3 w-3" />
                Locked
              </Button>
            ) : href ? (
              <Link href={href}>
                <Button className="w-full" size="sm">
                  Start Session
                </Button>
              </Link>
            ) : (
              <Button className="w-full" size="sm" onClick={() => setIsModalOpen(true)}>
                View Details
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <SessionDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        subtitle={subtitle}
        description={description}
        duration={duration}
        objectives={objectives}
        status={status}
        isLocked={isLocked}
        href={href}
      />
    </>
  );
}
