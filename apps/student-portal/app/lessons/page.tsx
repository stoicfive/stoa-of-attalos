import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { SessionCard } from "@/components/lessons/session-card";
import { 
  Clock, 
  ArrowLeft,
  Lock
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
            Build a complete Trading Journal SaaS application from scratch. Start with Phase A: Foundation (3 sessions).
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

      {/* Phase A: Foundation */}
      <section className="border-b border-border">
        <div className="container-custom py-12">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Phase A: Foundation</h2>
                <p className="text-muted-foreground">
                  Master TypeScript, Python backend with FastAPI and SQLAlchemy
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">0/3</p>
                <p className="text-sm text-muted-foreground">Sessions Complete</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                ~2.5 hours
              </span>
              <span>•</span>
              <span>TypeScript, Python, FastAPI, SQLAlchemy, PostgreSQL</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SessionCard
              title="A1S1"
              subtitle="Environment Setup"
              description="Install and configure Python, Poetry, PostgreSQL, Docker, and VS Code."
              duration="45 min"
              objectives={5}
              status="not-started"
              isLocked={false}
              href="/lessons/a1s1"
            />

            <SessionCard
              title="A1S2"
              subtitle="Database Models"
              description="Learn SQLAlchemy ORM, create models, and set up database migrations."
              duration="60 min"
              objectives={4}
              status="not-started"
              isLocked={true}
            />

            <SessionCard
              title="A1S3"
              subtitle="FastAPI Endpoints"
              description="Create REST API endpoints with request validation and responses."
              duration="50 min"
              objectives={4}
              status="not-started"
              isLocked={true}
            />

            <SessionCard
              title="A1S4"
              subtitle="Testing & Validation"
              description="Write comprehensive tests and achieve high code coverage."
              duration="45 min"
              objectives={4}
              status="not-started"
              isLocked={true}
            />

            <SessionCard
              title="A1S5"
              subtitle="Authentication"
              description="Implement JWT authentication and secure your API endpoints."
              duration="60 min"
              objectives={5}
              status="not-started"
              isLocked={true}
            />

            <SessionCard
              title="A1S6"
              subtitle="CRUD Operations"
              description="Complete Create, Read, Update, Delete operations for all models."
              duration="55 min"
              objectives={4}
              status="not-started"
              isLocked={true}
            />

            <SessionCard
              title="A1S7"
              subtitle="Error Handling"
              description="Implement proper error handling, logging, and validation."
              duration="50 min"
              objectives={4}
              status="not-started"
              isLocked={true}
            />

            <SessionCard
              title="A1S8"
              subtitle="API Documentation"
              description="Generate interactive API docs and prepare for deployment."
              duration="55 min"
              objectives={4}
              status="not-started"
              isLocked={true}
            />
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
                <p className="text-sm text-muted-foreground">Complete Phase A</p>
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
                  Complete all 3 sessions in Phase A: Foundation to unlock frontend development.
                </p>
                <Link href="/lessons/a1s1">
                  <Button>
                    Start Phase A
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
                  Complete Phase A and Arc 2 to unlock full-stack integration and deployment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
