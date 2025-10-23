import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  CheckCircle2, 
  Terminal, 
  Database, 
  Package, 
  Code2, 
  Container,
  GitBranch,
  ArrowLeft
} from "lucide-react";

export default function SetupGuide() {
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
              <Link href="/setup" className="text-sm hover:text-primary transition-colors">
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

      {/* Header */}
      <section className="border-b border-border bg-accent/5">
        <div className="container-custom py-12">
          <Link href="/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold mb-4">Development Environment Setup</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Follow these steps to install and configure all the tools you&apos;ll need for the course. 
            This should take approximately 30-45 minutes.
          </p>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="border-b border-border">
        <div className="container-custom py-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Prerequisites</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">macOS, Windows, or Linux</span>
                      <p className="text-sm text-muted-foreground">Any modern operating system will work</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">At least 8GB RAM</span>
                      <p className="text-sm text-muted-foreground">16GB recommended for running Docker containers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">10GB free disk space</span>
                      <p className="text-sm text-muted-foreground">For tools, dependencies, and project files</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Basic terminal/command line knowledge</span>
                      <p className="text-sm text-muted-foreground">You&apos;ll be running commands frequently</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="container-custom py-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Installation Steps</h2>
          
          <div className="space-y-8">
            {/* Step 1: Python */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Terminal className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle>1. Install Python 3.12+</CardTitle>
                      <Badge variant="info">Required</Badge>
                    </div>
                    <CardDescription>
                      Python is the primary language for backend development
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">macOS (using Homebrew):</p>
                  <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
                    brew install python@3.12
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Windows:</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Download from <a href="https://www.python.org/downloads/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">python.org</a> or use Windows Store
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Verify installation:</p>
                  <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
                    python3 --version
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Poetry */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Package className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle>2. Install Poetry</CardTitle>
                      <Badge variant="info">Required</Badge>
                    </div>
                    <CardDescription>
                      Python dependency management and packaging tool
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Install via official installer:</p>
                  <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
                    curl -sSL https://install.python-poetry.org | python3 -
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Verify installation:</p>
                  <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
                    poetry --version
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  💡 You may need to restart your terminal after installation
                </p>
              </CardContent>
            </Card>

            {/* Step 3: PostgreSQL */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Database className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle>3. Install PostgreSQL</CardTitle>
                      <Badge variant="info">Required</Badge>
                    </div>
                    <CardDescription>
                      Relational database for storing application data
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">macOS (using Homebrew):</p>
                  <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
                    brew install postgresql@16
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Windows:</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Download from <a href="https://www.postgresql.org/download/windows/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">postgresql.org</a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Start PostgreSQL:</p>
                  <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
                    brew services start postgresql@16
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4: Docker */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg">
                    <Container className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle>4. Install Docker Desktop</CardTitle>
                      <Badge variant="warning">Recommended</Badge>
                    </div>
                    <CardDescription>
                      Containerization platform for consistent environments
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Download Docker Desktop from <a href="https://www.docker.com/products/docker-desktop/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">docker.com</a>
                </p>
                <div>
                  <p className="text-sm font-medium mb-2">Verify installation:</p>
                  <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
                    docker --version
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 5: VS Code */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-400/10 rounded-lg">
                    <Code2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle>5. Install VS Code</CardTitle>
                      <Badge variant="info">Required</Badge>
                    </div>
                    <CardDescription>
                      Code editor with excellent Python support
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Download from <a href="https://code.visualstudio.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a>
                </p>
                <div>
                  <p className="text-sm font-medium mb-2">Recommended extensions:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Python (Microsoft)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Pylance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      SQLTools
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Docker
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 6: Git */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <GitBranch className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle>6. Install Git</CardTitle>
                      <Badge variant="info">Required</Badge>
                    </div>
                    <CardDescription>
                      Version control system for tracking code changes
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">macOS (using Homebrew):</p>
                  <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
                    brew install git
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Windows:</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Download from <a href="https://git-scm.com/download/win" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">git-scm.com</a>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Verify installation:</p>
                  <div className="bg-secondary p-4 rounded-lg font-mono text-sm">
                    git --version
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="border-t border-border bg-accent/5">
        <div className="container-custom py-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-6">
                  Once you&apos;ve installed all the required tools, you&apos;re ready to start Session A1S1 
                  where you&apos;ll configure everything and verify your setup.
                </p>
                <div className="flex gap-4">
                  <Link href="/lessons/a1s1">
                    <Button size="lg">
                      Start Session A1S1
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button size="lg" variant="outline">
                      Back to Dashboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
