import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  BookOpen, 
  Clock, 
  Target,
  ArrowLeft,
  Lock,
  CheckCircle2
} from "lucide-react";

export default function Lessons() {
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

      {/* Header */}
      <section className="border-b border-border bg-accent/5">
        <div className="container-custom py-12">
          <Link href="/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold mb-4">Course Overview</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            24 hands-on sessions across 3 arcs. Build a complete Trading Journal SaaS application from scratch.
          </p>
          <div className="flex items-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-muted-foreground">Complete</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-muted-foreground">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-muted-foreground">Not Started</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted rounded-full" />
              <span className="text-muted-foreground">Locked</span>
            </div>
          </div>
        </div>
      </section>

      {/* Arc 1: Backend Foundation */}
      <section className="border-b border-border">
        <div className="container-custom py-12">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Arc 1: Backend Foundation</h2>
                <p className="text-muted-foreground">
                  Master Python backend development with FastAPI and SQLAlchemy
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">0/8</p>
                <p className="text-sm text-muted-foreground">Sessions Complete</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                ~8 hours
              </span>
              <span>•</span>
              <span>Python, FastAPI, SQLAlchemy, PostgreSQL</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* A1S1 */}
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="info">Not Started</Badge>
                  <span className="text-sm text-muted-foreground">45 min</span>
                </div>
                <CardTitle className="text-lg">A1S1</CardTitle>
                <CardDescription>Environment Setup</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Install and configure Python, Poetry, PostgreSQL, Docker, and VS Code.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Target className="h-3 w-3" />
                  <span>5 objectives</span>
                </div>
                <Link href="/lessons/a1s1">
                  <Button className="w-full" size="sm">
                    Start Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* A1S2 */}
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="info">Not Started</Badge>
                  <span className="text-sm text-muted-foreground">60 min</span>
                </div>
                <CardTitle className="text-lg">A1S2</CardTitle>
                <CardDescription>Database Models</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn SQLAlchemy ORM, create models, and set up database migrations.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Target className="h-3 w-3" />
                  <span>4 objectives</span>
                </div>
                <Button className="w-full" size="sm" disabled>
                  <Lock className="mr-2 h-3 w-3" />
                  Locked
                </Button>
              </CardContent>
            </Card>

            {/* A1S3 */}
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="info">Not Started</Badge>
                  <span className="text-sm text-muted-foreground">50 min</span>
                </div>
                <CardTitle className="text-lg">A1S3</CardTitle>
                <CardDescription>FastAPI Endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Create REST API endpoints with request validation and responses.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Target className="h-3 w-3" />
                  <span>4 objectives</span>
                </div>
                <Button className="w-full" size="sm" disabled>
                  <Lock className="mr-2 h-3 w-3" />
                  Locked
                </Button>
              </CardContent>
            </Card>

            {/* A1S4 */}
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="info">Not Started</Badge>
                  <span className="text-sm text-muted-foreground">45 min</span>
                </div>
                <CardTitle className="text-lg">A1S4</CardTitle>
                <CardDescription>Testing & Validation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Write comprehensive tests and achieve high code coverage.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Target className="h-3 w-3" />
                  <span>4 objectives</span>
                </div>
                <Button className="w-full" size="sm" disabled>
                  <Lock className="mr-2 h-3 w-3" />
                  Locked
                </Button>
              </CardContent>
            </Card>

            {/* A1S5 */}
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="info">Not Started</Badge>
                  <span className="text-sm text-muted-foreground">60 min</span>
                </div>
                <CardTitle className="text-lg">A1S5</CardTitle>
                <CardDescription>Authentication</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Implement JWT authentication and secure your API endpoints.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Target className="h-3 w-3" />
                  <span>5 objectives</span>
                </div>
                <Button className="w-full" size="sm" disabled>
                  <Lock className="mr-2 h-3 w-3" />
                  Locked
                </Button>
              </CardContent>
            </Card>

            {/* A1S6 */}
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="info">Not Started</Badge>
                  <span className="text-sm text-muted-foreground">55 min</span>
                </div>
                <CardTitle className="text-lg">A1S6</CardTitle>
                <CardDescription>CRUD Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete Create, Read, Update, Delete operations for all models.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Target className="h-3 w-3" />
                  <span>4 objectives</span>
                </div>
                <Button className="w-full" size="sm" disabled>
                  <Lock className="mr-2 h-3 w-3" />
                  Locked
                </Button>
              </CardContent>
            </Card>

            {/* A1S7 */}
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="info">Not Started</Badge>
                  <span className="text-sm text-muted-foreground">50 min</span>
                </div>
                <CardTitle className="text-lg">A1S7</CardTitle>
                <CardDescription>Error Handling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Implement proper error handling, logging, and validation.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Target className="h-3 w-3" />
                  <span>4 objectives</span>
                </div>
                <Button className="w-full" size="sm" disabled>
                  <Lock className="mr-2 h-3 w-3" />
                  Locked
                </Button>
              </CardContent>
            </Card>

            {/* A1S8 */}
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="info">Not Started</Badge>
                  <span className="text-sm text-muted-foreground">55 min</span>
                </div>
                <CardTitle className="text-lg">A1S8</CardTitle>
                <CardDescription>API Documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Generate interactive API docs and prepare for deployment.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Target className="h-3 w-3" />
                  <span>4 objectives</span>
                </div>
                <Button className="w-full" size="sm" disabled>
                  <Lock className="mr-2 h-3 w-3" />
                  Locked
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Arc 2: Frontend Development */}
      <section className="border-b border-border bg-accent/5">
        <div className="container-custom py-12">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Arc 2: Frontend Development</h2>
                <p className="text-muted-foreground">
                  Build modern React applications with Next.js and TypeScript
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-muted-foreground">Locked</p>
                <p className="text-sm text-muted-foreground">Complete Arc 1</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                ~8 hours
              </span>
              <span>•</span>
              <span>React, Next.js, TypeScript, Tailwind CSS</span>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Arc 2 is Locked</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                  Complete all 8 sessions in Arc 1: Backend Foundation to unlock frontend development.
                </p>
                <Link href="/lessons/a1s1">
                  <Button>
                    Start Arc 1
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Arc 3: Full-Stack Integration */}
      <section className="border-b border-border">
        <div className="container-custom py-12">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Arc 3: Full-Stack Integration</h2>
                <p className="text-muted-foreground">
                  Connect frontend and backend, optimize, and deploy to production
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-muted-foreground">Locked</p>
                <p className="text-sm text-muted-foreground">Complete Arc 2</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                ~8 hours
              </span>
              <span>•</span>
              <span>Integration, Real-time, Performance, Deployment</span>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Arc 3 is Locked</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Complete Arc 1 and Arc 2 to unlock full-stack integration and deployment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
