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
  Play
} from "lucide-react";

export default function SessionA1S2() {
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
                <h1 className="text-4xl font-bold">Session A1S2: Python Fundamentals</h1>
                <Badge variant="warning">Not Started</Badge>
              </div>
              <p className="text-xl text-muted-foreground">
                Learn the core concepts of Python programming
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/lessons/a1s2/activity">
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
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Session Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  This session introduces you to the fundamental building blocks of Python programming. 
                  You&apos;ll learn how to work with variables, understand different data types, create functions, 
                  use conditional statements, and implement loops.
                </p>
                <p className="text-muted-foreground">
                  By the end of this session, you&apos;ll be able to write basic Python programs that can 
                  store data, make decisions, and repeat actions efficiently.
                </p>
              </CardContent>
            </Card>

            {/* Learning Objectives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Variables and Assignment</p>
                      <p className="text-sm text-muted-foreground">
                        Understand how to create and use variables to store data
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Data Types</p>
                      <p className="text-sm text-muted-foreground">
                        Learn about strings, integers, floats, booleans, lists, and dictionaries
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Functions</p>
                      <p className="text-sm text-muted-foreground">
                        Create reusable blocks of code with parameters and return values
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Conditional Statements</p>
                      <p className="text-sm text-muted-foreground">
                        Use if/elif/else to make decisions in your code
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Loops</p>
                      <p className="text-sm text-muted-foreground">
                        Implement for and while loops to repeat code efficiently
                      </p>
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
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Completed Session A1S1: Environment Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Python 3.12+ installed and working
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Basic familiarity with terminal/command line
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Session Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Session Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">~60 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Tasks</p>
                    <p className="text-sm text-muted-foreground">5 hands-on exercises</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Difficulty</p>
                    <p className="text-sm text-muted-foreground">Beginner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/lessons/a1s2/activity">
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Start Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Deliverables */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Complete all 5 coding exercises
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Practice examples in Python REPL
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Understand core Python concepts
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
