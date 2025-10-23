import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  BookOpen, 
  Video, 
  FileText, 
  ExternalLink, 
  Code2,
  Database,
  Zap,
  Palette,
  ArrowLeft,
  Search
} from "lucide-react";

export default function Resources() {
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
              <Link href="/setup" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Setup
              </Link>
              <Link href="/resources" className="text-sm hover:text-primary transition-colors">
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
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Documentation, tutorials, cheat sheets, and external references to support your learning journey.
          </p>
        </div>
      </section>

      {/* Search - Coming Soon */}
      <section className="border-b border-border">
        <div className="container-custom py-8">
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources... (Coming soon)"
                disabled
                className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Official Documentation */}
      <section className="border-b border-border">
        <div className="container-custom py-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Official Documentation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Code2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <Badge variant="info">Backend</Badge>
                </div>
                <CardTitle>Python</CardTitle>
                <CardDescription>Official Python documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete reference for Python 3.12+ including standard library and language features.
                </p>
                <a 
                  href="https://docs.python.org/3/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Documentation
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Zap className="h-5 w-5 text-green-500" />
                  </div>
                  <Badge variant="info">Backend</Badge>
                </div>
                <CardTitle>FastAPI</CardTitle>
                <CardDescription>Modern web framework for APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  High-performance framework for building APIs with Python, featuring automatic docs.
                </p>
                <a 
                  href="https://fastapi.tiangolo.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Documentation
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Database className="h-5 w-5 text-cyan-500" />
                  </div>
                  <Badge variant="info">Backend</Badge>
                </div>
                <CardTitle>SQLAlchemy</CardTitle>
                <CardDescription>Python SQL toolkit and ORM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive database toolkit for Python with powerful ORM capabilities.
                </p>
                <a 
                  href="https://docs.sqlalchemy.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Documentation
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-blue-600/10 rounded-lg">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <Badge variant="info">Database</Badge>
                </div>
                <CardTitle>PostgreSQL</CardTitle>
                <CardDescription>Powerful relational database</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Official documentation for PostgreSQL database system and SQL reference.
                </p>
                <a 
                  href="https://www.postgresql.org/docs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Documentation
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-blue-400/10 rounded-lg">
                    <Code2 className="h-5 w-5 text-blue-400" />
                  </div>
                  <Badge variant="success">Frontend</Badge>
                </div>
                <CardTitle>React</CardTitle>
                <CardDescription>JavaScript library for UIs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn React fundamentals, hooks, and modern patterns for building interfaces.
                </p>
                <a 
                  href="https://react.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Documentation
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-black/10 dark:bg-white/10 rounded-lg">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <Badge variant="success">Frontend</Badge>
                </div>
                <CardTitle>Next.js</CardTitle>
                <CardDescription>React framework for production</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Full-featured React framework with server-side rendering and routing.
                </p>
                <a 
                  href="https://nextjs.org/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Documentation
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-cyan-400/10 rounded-lg">
                    <Palette className="h-5 w-5 text-cyan-400" />
                  </div>
                  <Badge variant="success">Frontend</Badge>
                </div>
                <CardTitle>Tailwind CSS</CardTitle>
                <CardDescription>Utility-first CSS framework</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Rapidly build modern websites with utility classes and responsive design.
                </p>
                <a 
                  href="https://tailwindcss.com/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Documentation
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Code2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <Badge variant="success">Frontend</Badge>
                </div>
                <CardTitle>TypeScript</CardTitle>
                <CardDescription>Typed JavaScript superset</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Add static typing to JavaScript for better tooling and fewer bugs.
                </p>
                <a 
                  href="https://www.typescriptlang.org/docs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Documentation
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="border-b border-border bg-accent/5">
        <div className="container-custom py-12">
          <div className="flex items-center gap-3 mb-6">
            <Video className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Video Tutorials</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Video tutorials and walkthroughs will be added as the course progresses.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cheat Sheets */}
      <section className="border-b border-border">
        <div className="container-custom py-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Cheat Sheets & Quick References</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Python Quick Reference</CardTitle>
                <CardDescription>Common syntax and patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick reference for Python syntax, data structures, and common operations.
                </p>
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SQL Commands</CardTitle>
                <CardDescription>PostgreSQL & SQLAlchemy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Essential SQL queries and SQLAlchemy ORM patterns for database operations.
                </p>
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Git Commands</CardTitle>
                <CardDescription>Version control essentials</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Most commonly used Git commands for version control and collaboration.
                </p>
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Docker Commands</CardTitle>
                <CardDescription>Container management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Essential Docker commands for building, running, and managing containers.
                </p>
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Utilities */}
      <section className="container-custom py-12">
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Development Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Postman</CardTitle>
              <CardDescription>API testing tool</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Test and debug your API endpoints with this powerful HTTP client.
              </p>
              <a 
                href="https://www.postman.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Site
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>pgAdmin</CardTitle>
              <CardDescription>PostgreSQL GUI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Visual database management tool for PostgreSQL databases.
              </p>
              <a 
                href="https://www.pgadmin.org/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Site
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GitHub</CardTitle>
              <CardDescription>Code hosting platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Host your code, collaborate with others, and track your progress.
              </p>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Site
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
