"use client"

import { ReactNode } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, CheckCheck } from "lucide-react";

interface SessionActivityLayoutProps {
  sessionId: string;
  sessionTitle: string;
  sessionDescription: string;
  completedCount: number;
  totalTasks: number;
  sessionCompleted: boolean;
  nextSessionUrl?: string;
  nextSessionLabel?: string;
  children: ReactNode;
  sidebar: ReactNode;
}

export function SessionActivityLayout({
  sessionId,
  sessionTitle,
  sessionDescription,
  completedCount,
  totalTasks,
  sessionCompleted,
  nextSessionUrl,
  nextSessionLabel = "Next Session",
  children,
  sidebar
}: SessionActivityLayoutProps) {
  const progress = Math.round((completedCount / totalTasks) * 100);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container-custom flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
              Stoa of Attalos
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="/lessons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Lessons
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Session Header */}
      <section className="border-b border-border bg-accent/5">
        <div className="container-custom py-8">
          {!sessionCompleted ? (
            <>
              <Link href={`/lessons/${sessionId}`} className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Session Overview
              </Link>
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{sessionTitle}</h1>
                    <Badge variant="warning">In Progress</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {sessionDescription}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="max-w-2xl">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{completedCount}/{totalTasks} tasks ({progress}%)</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCheck className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <div className="flex items-center justify-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{sessionTitle}</h1>
                <Badge variant="success" className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Complete
                </Badge>
              </div>
              <p className="text-muted-foreground mb-6">
                Great job! You&apos;ve completed all tasks for this session.
              </p>
              <div className="flex gap-4 justify-center">
                {nextSessionUrl && (
                  <Link href={nextSessionUrl}>
                    <Button size="lg">
                      {nextSessionLabel}
                    </Button>
                  </Link>
                )}
                <Link href="/dashboard">
                  <Button size="lg" variant="outline">
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
              <div className="mt-6">
                <div className="h-3 bg-secondary rounded-full overflow-hidden max-w-2xl mx-auto">
                  <div className="h-full bg-green-500 transition-all duration-300" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tasks List */}
          <div className="lg:col-span-2 space-y-6">
            {children}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            {sidebar}
          </div>
        </div>
      </div>
    </div>
  );
}
