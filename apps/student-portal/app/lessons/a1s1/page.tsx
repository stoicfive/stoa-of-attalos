import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  ArrowLeft,
  Clock,
  Target,
  CheckCircle2,
  BookOpen,
  FileText,
  Lightbulb,
  Play,
  ExternalLink
} from "lucide-react";

export default function SessionA1S1() {
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
              <Link href="/setup" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Setup
              </Link>
              <Link href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resources
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
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold">Session A1S1</h1>
                <Badge variant="info">Not Started</Badge>
              </div>
              <h2 className="text-2xl text-muted-foreground mb-4">Environment Setup</h2>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  45 minutes
                </span>
                <span className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  5 objectives
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Arc 1: Backend Foundation
                </span>
              </div>
            </div>
            <Link href="/lessons/a1s1/activity">
              <Button size="lg">
                <Play className="mr-2 h-5 w-5" />
                Start Session
              </Button>
            </Link>
          </div>

          <p className="text-lg max-w-3xl">
            Set up your complete development environment with Python, Poetry, PostgreSQL, Docker, and VS Code. 
            This foundational session prepares you for all future work in the course.
          </p>
        </div>
      </section>

      {/* Session Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Objectives */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  <CardTitle>Learning Objectives</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Install Python 3.12+</p>
                      <p className="text-sm text-muted-foreground">Set up Python environment with proper version</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Configure Poetry</p>
                      <p className="text-sm text-muted-foreground">Install and configure Python dependency management</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Set up PostgreSQL</p>
                      <p className="text-sm text-muted-foreground">Install database and create initial databases</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Install Docker Desktop</p>
                      <p className="text-sm text-muted-foreground">Set up containerization platform</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Configure VS Code</p>
                      <p className="text-sm text-muted-foreground">Install editor and essential extensions</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Basic command line/terminal knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Computer with at least 8GB RAM (16GB recommended)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>10GB free disk space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>macOS, Windows, or Linux operating system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* What You'll Build */}
            <Card>
              <CardHeader>
                <CardTitle>What You&apos;ll Build</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  In this session, you&apos;ll set up a complete development environment that will be used 
                  throughout the entire course. You&apos;ll verify each installation and ensure everything 
                  works together properly.
                </p>
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm font-mono">
                    ✓ Python 3.12+ installed and verified<br />
                    ✓ Poetry configured for dependency management<br />
                    ✓ PostgreSQL running locally<br />
                    ✓ Docker Desktop installed<br />
                    ✓ VS Code with Python extensions<br />
                    ✓ Git configured with your identity
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Deliverables */}
            <Card>
              <CardHeader>
                <CardTitle>Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Screenshot of successful Python version check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Screenshot of Poetry installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>PostgreSQL connection test output</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Docker version verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/lessons/a1s1/activity">
                  <Button className="w-full" size="lg">
                    <Play className="mr-2 h-4 w-4" />
                    Start Session
                  </Button>
                </Link>
                <Link href="/setup">
                  <Button variant="outline" className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Setup Guide
                  </Button>
                </Link>
                <Button variant="outline" className="w-full" disabled>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  View Hints
                </Button>
                <Button variant="outline" className="w-full" disabled>
                  <FileText className="mr-2 h-4 w-4" />
                  View Rubric
                </Button>
              </CardContent>
            </Card>

            {/* Session Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Session Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Duration</p>
                  <p className="font-medium">45 minutes</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Difficulty</p>
                  <Badge variant="success">Beginner</Badge>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Arc</p>
                  <p className="font-medium">Arc 1: Backend Foundation</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Language</p>
                  <p className="font-medium">Python</p>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="https://docs.python.org/3/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <span className="text-sm">Python Docs</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <a 
                  href="https://python-poetry.org/docs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <span className="text-sm">Poetry Docs</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <a 
                  href="https://www.postgresql.org/docs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <span className="text-sm">PostgreSQL Docs</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </CardContent>
            </Card>

            {/* Next Session */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Next Session</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  After completing this session, you&apos;ll move on to:
                </p>
                <div className="p-3 rounded-lg border border-border">
                  <p className="font-medium mb-1">A1S2: Database Models</p>
                  <p className="text-sm text-muted-foreground">
                    Learn SQLAlchemy ORM and create database models
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
