import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { BookOpen, Code2, Rocket, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container-custom flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            Stoa of Attalos
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Your
            <br />
            Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Build production-ready applications through hands-on sessions. 
            Master modern development with SQLAlchemy, FastAPI, React, and industry best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8">
                <Rocket className="mr-2 h-5 w-5" />
                Go to Dashboard
              </Button>
            </Link>
            <Link href="/lessons">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Course
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="border-t border-border bg-accent/5">
        <div className="container-custom py-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">What You&apos;ll Build</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete Trading Journal SaaS application from scratch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>Python, FastAPI & SQLAlchemy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Database models and migrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>REST API endpoints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Authentication & security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Testing & validation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>React, Next.js & TypeScript</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Modern React patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Component architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>State management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>API integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle>Production Ready</CardTitle>
                <CardDescription>DevOps & Best Practices</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Docker containerization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>CI/CD pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Deployment strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monitoring & logging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="border-t border-border">
        <div className="container-custom py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Your Learning Path</h3>
              <p className="text-lg text-muted-foreground">
                Structured sessions that build on each other
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Arc 1: Backend Foundation</CardTitle>
                      <CardDescription>8 sessions • ~8 hours</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      0/8 complete
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Master Python backend development with FastAPI, SQLAlchemy, and PostgreSQL. 
                    Build a complete REST API with authentication, testing, and deployment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Arc 2: Frontend Development</CardTitle>
                      <CardDescription>8 sessions • ~8 hours</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Locked
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Build modern React applications with Next.js, TypeScript, and Tailwind CSS. 
                    Create responsive UIs and integrate with your backend API.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Arc 3: Full-Stack Integration</CardTitle>
                      <CardDescription>8 sessions • ~8 hours</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Locked
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Connect frontend and backend, implement real-time features, optimize performance, 
                    and prepare for production deployment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link href="/lessons/a1s1">
                <Button size="lg" className="text-lg px-8">
                  Begin Arc 1: Session 1
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                Start with environment setup • Estimated time: 45 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Stoa of Attalos. Built for learners, by learners.</p>
            <div className="flex gap-6">
              <Link href="/setup" className="hover:text-foreground transition-colors">
                Setup Guide
              </Link>
              <Link href="/resources" className="hover:text-foreground transition-colors">
                Resources
              </Link>
              <a 
                href="https://github.com/stoicfive/stoa-of-attalos" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
