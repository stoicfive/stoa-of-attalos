import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  BookOpen, 
  Code, 
  Trophy, 
  Clock
} from "lucide-react";

export default function Dashboard() {
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
              <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="/lessons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Lessons
              </Link>
              <Link href="/progress" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Progress
              </Link>
              <Link href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resources
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Stats Overview - Empty State */}
      <section className="border-b border-border">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">0/3</p>
                    <p className="text-sm text-muted-foreground">Sessions Complete</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Trophy className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">0%</p>
                    <p className="text-sm text-muted-foreground">Course Progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Code className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">0/0</p>
                    <p className="text-sm text-muted-foreground">Tests Passing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">0h</p>
                    <p className="text-sm text-muted-foreground">Time Invested</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* First Session Spotlight & Quick Links */}
      <section className="border-b border-border">
        <div className="container-custom py-12">
          <h3 className="text-2xl font-bold mb-6">Your First Session</h3>
          <Card className="max-w-2xl mb-12">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Session A1S1</CardTitle>
                  <CardDescription>Environment Setup</CardDescription>
                </div>
                <Badge variant="info">Not Started</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Set up your development environment with Python, Poetry, PostgreSQL, Docker, 
                and VS Code. This foundational session prepares you for all future work.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  45 min
                </span>
                <span>•</span>
                <span>5 objectives</span>
                <span>•</span>
                <span>Arc 1: Backend Foundation</span>
              </div>
              <div className="flex gap-3">
                <Link href="/lessons/a1s1">
                  <Button>Begin Session</Button>
                </Link>
                <Link href="/lessons">
                  <Button variant="outline">View All Sessions</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Setup Guide</CardTitle>
                <CardDescription>Installation instructions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Step-by-step guide to install all required tools and dependencies.
                </p>
                <Link href="/setup">
                  <Button variant="outline" className="w-full">
                    View Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resources</CardTitle>
                <CardDescription>Documentation & references</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access documentation, cheat sheets, and external learning resources.
                </p>
                <Link href="/resources">
                  <Button variant="outline" className="w-full">
                    Browse Resources
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Overview</CardTitle>
                <CardDescription>All sessions & arcs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  View the complete course structure with all 24 sessions across 3 arcs.
                </p>
                <Link href="/lessons">
                  <Button variant="outline" className="w-full">
                    View Course
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
