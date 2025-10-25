"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Clock, Target, Lock } from "lucide-react";

interface SessionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  objectives: number;
  status: "not-started" | "in-progress" | "complete";
  isLocked: boolean;
  href?: string;
}

export function SessionDetailModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  duration,
  objectives,
  status,
  isLocked,
  href,
}: SessionDetailModalProps) {
  if (!isOpen) return null;

  const statusConfig = {
    "not-started": { variant: "info" as const, label: "Not Started" },
    "in-progress": { variant: "warning" as const, label: "In Progress" },
    complete: { variant: "success" as const, label: "Complete" },
  };

  const currentStatus = statusConfig[status];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg mx-4 bg-card border rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              <Badge variant={currentStatus.variant}>{currentStatus.label}</Badge>
            </div>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Overview</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="h-4 w-4" />
              <span>{objectives} objectives</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 p-6 border-t bg-accent/5">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Close
          </Button>
          {isLocked ? (
            <Button disabled className="flex-1">
              <Lock className="mr-2 h-4 w-4" />
              Locked
            </Button>
          ) : href ? (
            <Link href={href} className="flex-1">
              <Button className="w-full">Start Session</Button>
            </Link>
          ) : (
            <Button disabled className="flex-1">
              Coming Soon
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
