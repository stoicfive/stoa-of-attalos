import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { BookOpen, Code, Trophy, Clock, Target, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container-custom flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Stoa of Attalos</h1>
            <div className="hidden md:flex gap-6">
              <a href="/" className="text-sm hover:text-primary transition-colors">
                Dashboard
              </a>
              <a href="/lessons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Lessons
              </a>
              <a href="/progress" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Progress
              </a>
              <a href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resources
              </a>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border bg-accent/5">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Your Learning Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Build production-ready applications through hands-on sessions. 
              Master SQLAlchemy, FastAPI, React, and modern development practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Continue Learning
              </Button>
              <Button size="lg" variant="outline">
                View Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
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
                    <p className="text-2xl font-bold">2/8</p>
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
                    <p className="text-2xl font-bold">25%</p>
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
                    <p className="text-2xl font-bold">12/12</p>
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
                    <p className="text-2xl font-bold">3.5h</p>
                    <p className="text-sm text-muted-foreground">Time Invested</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Session */}
      <section className="border-b border-border">
        <div className="container-custom py-12">
          <h3 className="text-2xl font-bold mb-6">Continue Where You Left Off</h3>
          <Card className="max-w-2xl">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">Session A1S2</CardTitle>
                  <CardDescription>Database Models with SQLAlchemy</CardDescription>
                </div>
                <Badge variant="warning">In Progress</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn SQLAlchemy ORM basics, create database models, implement CRUD operations, 
                and set up database migrations with Alembic.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[65%]" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  60 min
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Target className="h-4 w-4" />
                  4 objectives
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  12/12 tests
                </span>
              </div>
              <div className="flex gap-3">
                <Button>Continue Session</Button>
                <Button variant="outline">View Hints</Button>
                <Button variant="ghost">View Rubric</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="container-custom py-12">
        <h3 className="text-2xl font-bold mb-6">Up Next</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="info">Not Started</Badge>
                <span className="text-sm text-muted-foreground">50 min</span>
              </div>
              <CardTitle>Session A1S3</CardTitle>
              <CardDescription>FastAPI Endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Create REST API endpoints, implement request validation, and handle responses.
              </p>
              <Button variant="outline" className="w-full">
                Start Session
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="info">Not Started</Badge>
                <span className="text-sm text-muted-foreground">45 min</span>
              </div>
              <CardTitle>Session A1S4</CardTitle>
              <CardDescription>Testing & Validation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Write comprehensive tests, achieve high coverage, and validate your implementation.
              </p>
              <Button variant="outline" className="w-full" disabled>
                Locked
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="info">Not Started</Badge>
                <span className="text-sm text-muted-foreground">60 min</span>
              </div>
              <CardTitle>Session A1S5</CardTitle>
              <CardDescription>Authentication & Security</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Implement JWT authentication, password hashing, and secure your API endpoints.
              </p>
              <Button variant="outline" className="w-full" disabled>
                Locked
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
