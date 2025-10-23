import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, Play } from "lucide-react";

interface SessionOverviewLayoutProps {
  sessionId: string;
  sessionTitle: string;
  sessionDescription: string;
  status?: "Not Started" | "In Progress" | "Completed";
  children: ReactNode;
  sidebar: ReactNode;
}

export function SessionOverviewLayout({
  sessionId,
  sessionTitle,
  sessionDescription,
  status = "Not Started",
  children,
  sidebar
}: SessionOverviewLayoutProps) {
  const statusVariant = 
    status === "Completed" ? "success" : 
    status === "In Progress" ? "warning" : 
    "warning";

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
              <Link href="/lessons" className="text-sm hover:text-primary transition-colors">
                Lessons
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Session Header */}
      <section className="border-b border-border bg-accent/5">
        <div className="container-custom py-12">
          <Link href="/lessons" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Lessons
          </Link>
          
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{sessionTitle}</h1>
                <Badge variant={statusVariant}>{status}</Badge>
              </div>
              <p className="text-xl text-muted-foreground">
                {sessionDescription}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href={`/lessons/${sessionId}/activity`}>
              <Button size="lg">
                <Play className="mr-2 h-5 w-5" />
                Start Session
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {children}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {sidebar}
          </div>
        </div>
      </div>
    </div>
  );
}
