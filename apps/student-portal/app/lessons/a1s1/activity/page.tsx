"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    AlertCircle,
    ArrowLeft,
    CheckCheck,
    CheckCircle2,
    Circle,
    FileText,
    Lightbulb,
    Terminal
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const STORAGE_KEY = 'a1s1-session-state';

export default function SessionA1S1Activity() {
  // Load initial state from localStorage
  const loadState = () => {
    if (typeof window === 'undefined') return null;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  };

  const savedState = loadState();

  // Track completion of each task
  const [tasks, setTasks] = useState(savedState?.tasks || {
    python: false,
    poetry: false,
    postgresql: false,
    docker: false,
    vscode: false,
    git: false,
  });

  // Track expanded state of each task
  const [expanded, setExpanded] = useState(savedState?.expanded || {
    python: true,
    poetry: true,
    postgresql: true,
    docker: true,
    vscode: true,
    git: true,
  });

  // Track if user has dismissed the completion modal
  const [sessionCompleted, setSessionCompleted] = useState(savedState?.sessionCompleted || false);

  // Ref for modal focus trap
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleTask = (taskId: keyof typeof tasks) => {
    setTasks(prev => {
      const newState = { ...prev, [taskId]: !prev[taskId] };
      // Auto-collapse when completing, auto-expand when uncompleting
      if (newState[taskId]) {
        setExpanded(exp => ({ ...exp, [taskId]: false }));
      } else {
        setExpanded(exp => ({ ...exp, [taskId]: true }));
      }
      return newState;
    });
  };

  const toggleExpanded = (taskId: keyof typeof expanded) => {
    setExpanded(prev => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const completedCount = Object.values(tasks).filter(Boolean).length;
  const totalTasks = Object.keys(tasks).length;
  const progress = Math.round((completedCount / totalTasks) * 100);
  const allComplete = completedCount === totalTasks;

  // Show modal when all tasks complete and user hasn't dismissed it yet
  const showCompletionModal = allComplete && !sessionCompleted;

  const handleCloseModal = () => {
    setSessionCompleted(true);
  };

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        tasks,
        expanded,
        sessionCompleted
      }));
    } catch (error) {
      console.error('Failed to save session state:', error);
    }
  }, [tasks, expanded, sessionCompleted]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showCompletionModal) {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showCompletionModal]);

  // Focus trap and initial focus for modal
  useEffect(() => {
    if (showCompletionModal && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      // Focus first element
      firstElement?.focus();

      // Trap focus within modal
      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTab);
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [showCompletionModal]);

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
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Session Header */}
      <section className="border-b border-border bg-accent/5">
        <div className="container-custom py-8">
          {!sessionCompleted ? (
            <>
              <Link href="/lessons/a1s1" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Session Overview
              </Link>
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">Session A1S1: Environment Setup</h1>
                    <Badge variant="warning">In Progress</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Complete all tasks below to finish this session
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="max-w-2xl">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{completedCount}/{totalTasks} tasks ({progress}%)</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCheck className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <div className="flex items-center justify-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Session A1S1: Environment Setup</h1>
                <Badge variant="success" className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Complete
                </Badge>
              </div>
              <p className="text-muted-foreground mb-6">
                Great job! You&apos;ve completed all tasks for this session.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/lessons/a1s2">
                  <Button size="lg">
                    Next Session: A1S2
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline">
                    Back to Dashboard
                  </Button>
                </Link>
              </div>
              <div className="mt-6">
                <div className="h-3 bg-secondary rounded-full overflow-hidden max-w-2xl mx-auto">
                  <div className="h-full bg-green-500 transition-all duration-300" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tasks List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Welcome to your first session! You&apos;ll be setting up your complete development environment. 
                  Check off each task as you complete it. Click on any task to see detailed instructions.
                </p>
                <div className="flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-500 mb-1">Tip</p>
                    <p className="text-muted-foreground">
                      Take your time with each installation. It&apos;s better to do it right than to rush and have issues later.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Task 1: Python */}
            <Card className={`transition-all duration-300 ${tasks.python ? "border-green-500/50" : ""}`}>
              <CardHeader 
                className="cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => tasks.python && toggleExpanded("python")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTask("python");
                      }}
                      className="mt-1"
                      aria-label={tasks.python ? "Mark Python installation as incomplete" : "Mark Python installation as complete"}
                      aria-pressed={tasks.python}
                    >
                      {tasks.python ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" aria-hidden="true" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">Install Python 3.12+</CardTitle>
                        {tasks.python && !expanded.python && (
                          <Badge variant="success" className="text-xs">Completed</Badge>
                        )}
                      </div>
                      {expanded.python && (
                        <CardDescription>Set up Python environment</CardDescription>
                      )}
                    </div>
                  </div>
                  {expanded.python && <Badge variant="info">Required</Badge>}
                </div>
              </CardHeader>
              {expanded.python && (
                <CardContent className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                <p className="text-sm text-muted-foreground">
                  Python is the primary language for backend development in this course.
                </p>
                
                <div>
                  <p className="text-sm font-medium mb-2">Installation:</p>
                  <div className="bg-secondary p-4 rounded-lg space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">macOS (Homebrew):</p>
                      <code className="text-sm font-mono">brew install python@3.12</code>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Windows:</p>
                      <p className="text-sm">Download from python.org or Windows Store</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Verification:</p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <code className="text-sm font-mono">python3 --version</code>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Should output: Python 3.12.x or higher
                  </p>
                </div>
                </CardContent>
              )}
            </Card>

            {/* Task 2: Poetry */}
            <Card className={`transition-all duration-300 ${tasks.poetry ? "border-green-500/50" : ""}`}>
              <CardHeader 
                className="cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => tasks.poetry && toggleExpanded("poetry")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTask("poetry");
                      }}
                      className="mt-1"
                      aria-label={tasks.poetry ? "Mark Poetry installation as incomplete" : "Mark Poetry installation as complete"}
                      aria-pressed={tasks.poetry}
                    >
                      {tasks.poetry ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" aria-hidden="true" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">Install Poetry</CardTitle>
                        {tasks.poetry && !expanded.poetry && (
                          <Badge variant="success" className="text-xs">Completed</Badge>
                        )}
                      </div>
                      {expanded.poetry && (
                        <CardDescription>Python dependency management</CardDescription>
                      )}
                    </div>
                  </div>
                  {expanded.poetry && <Badge variant="info">Required</Badge>}
                </div>
              </CardHeader>
              {expanded.poetry && (
                <CardContent className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                <p className="text-sm text-muted-foreground">
                  Poetry manages Python dependencies and virtual environments.
                </p>
                
                <div>
                  <p className="text-sm font-medium mb-2">Installation:</p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <code className="text-sm font-mono">
                      curl -sSL https://install.python-poetry.org | python3 -
                    </code>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Verification:</p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <code className="text-sm font-mono">poetry --version</code>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    You may need to restart your terminal after installation
                  </p>
                </div>
                </CardContent>
              )}
            </Card>

            {/* Task 3: PostgreSQL */}
            <Card className={`transition-all duration-300 ${tasks.postgresql ? "border-green-500/50" : ""}`}>
              <CardHeader 
                className="cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => tasks.postgresql && toggleExpanded("postgresql")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTask("postgresql");
                      }}
                      className="mt-1"
                      aria-label={tasks.postgresql ? "Mark PostgreSQL installation as incomplete" : "Mark PostgreSQL installation as complete"}
                      aria-pressed={tasks.postgresql}
                    >
                      {tasks.postgresql ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" aria-hidden="true" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">Install PostgreSQL</CardTitle>
                        {tasks.postgresql && !expanded.postgresql && (
                          <Badge variant="success" className="text-xs">Completed</Badge>
                        )}
                      </div>
                      {expanded.postgresql && (
                        <CardDescription>Relational database</CardDescription>
                      )}
                    </div>
                  </div>
                  {expanded.postgresql && <Badge variant="info">Required</Badge>}
                </div>
              </CardHeader>
              {expanded.postgresql && (
                <CardContent className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                <p className="text-sm text-muted-foreground">
                  PostgreSQL is the database system we&apos;ll use throughout the course.
                </p>
                
                <div>
                  <p className="text-sm font-medium mb-2">Installation:</p>
                  <div className="bg-secondary p-4 rounded-lg space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">macOS (Homebrew):</p>
                      <code className="text-sm font-mono">brew install postgresql@16</code>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Windows:</p>
                      <p className="text-sm">Download from postgresql.org</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Start PostgreSQL:</p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <code className="text-sm font-mono">brew services start postgresql@16</code>
                  </div>
                </div>
                </CardContent>
              )}
            </Card>

            {/* Task 4: Docker */}
            <Card className={`transition-all duration-300 ${tasks.docker ? "border-green-500/50" : ""}`}>
              <CardHeader 
                className="cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => tasks.docker && toggleExpanded("docker")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTask("docker");
                      }}
                      className="mt-1"
                      aria-label={tasks.docker ? "Mark Docker installation as incomplete" : "Mark Docker installation as complete"}
                      aria-pressed={tasks.docker}
                    >
                      {tasks.docker ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" aria-hidden="true" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">Install Docker Desktop</CardTitle>
                        {tasks.docker && !expanded.docker && (
                          <Badge variant="success" className="text-xs">Completed</Badge>
                        )}
                      </div>
                      {expanded.docker && (
                        <CardDescription>Containerization platform</CardDescription>
                      )}
                    </div>
                  </div>
                  {expanded.docker && <Badge variant="warning">Recommended</Badge>}
                </div>
              </CardHeader>
              {expanded.docker && (
                <CardContent className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                <p className="text-sm text-muted-foreground">
                  Docker provides consistent development environments.
                </p>
                
                <div>
                  <p className="text-sm font-medium mb-2">Installation:</p>
                  <p className="text-sm text-muted-foreground">
                    Download Docker Desktop from docker.com
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Verification:</p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <code className="text-sm font-mono">docker --version</code>
                  </div>
                </div>
                </CardContent>
              )}
            </Card>

            {/* Task 5: VS Code */}
            <Card className={`transition-all duration-300 ${tasks.vscode ? "border-green-500/50" : ""}`}>
              <CardHeader 
                className="cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => tasks.vscode && toggleExpanded("vscode")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTask("vscode");
                      }}
                      className="mt-1"
                      aria-label={tasks.vscode ? "Mark VS Code installation as incomplete" : "Mark VS Code installation as complete"}
                      aria-pressed={tasks.vscode}
                    >
                      {tasks.vscode ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" aria-hidden="true" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">Install VS Code</CardTitle>
                        {tasks.vscode && !expanded.vscode && (
                          <Badge variant="success" className="text-xs">Completed</Badge>
                        )}
                      </div>
                      {expanded.vscode && (
                        <CardDescription>Code editor with Python support</CardDescription>
                      )}
                    </div>
                  </div>
                  {expanded.vscode && <Badge variant="info">Required</Badge>}
                </div>
              </CardHeader>
              {expanded.vscode && (
                <CardContent className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                <p className="text-sm text-muted-foreground">
                  VS Code is the recommended editor for this course.
                </p>
                
                <div>
                  <p className="text-sm font-medium mb-2">Installation:</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Download from code.visualstudio.com
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Required Extensions:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Python (Microsoft)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      Pylance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3" />
                      SQLTools
                    </li>
                  </ul>
                </div>
                </CardContent>
              )}
            </Card>

            {/* Task 6: Git */}
            <Card className={`transition-all duration-300 ${tasks.git ? "border-green-500/50" : ""}`}>
              <CardHeader 
                className="cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => tasks.git && toggleExpanded("git")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTask("git");
                      }}
                      className="mt-1"
                      aria-label={tasks.git ? "Mark Git installation as incomplete" : "Mark Git installation as complete"}
                      aria-pressed={tasks.git}
                    >
                      {tasks.git ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" aria-hidden="true" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">Install Git</CardTitle>
                        {tasks.git && !expanded.git && (
                          <Badge variant="success" className="text-xs">Completed</Badge>
                        )}
                      </div>
                      {expanded.git && (
                        <CardDescription>Version control system</CardDescription>
                      )}
                    </div>
                  </div>
                  {expanded.git && <Badge variant="info">Required</Badge>}
                </div>
              </CardHeader>
              {expanded.git && (
                <CardContent className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                <p className="text-sm text-muted-foreground">
                  Git is essential for version control and collaboration.
                </p>
                
                <div>
                  <p className="text-sm font-medium mb-2">Installation:</p>
                  <div className="bg-secondary p-4 rounded-lg space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">macOS (Homebrew):</p>
                      <code className="text-sm font-mono">brew install git</code>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Windows:</p>
                      <p className="text-sm">Download from git-scm.com</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Verification:</p>
                  <div className="bg-secondary p-4 rounded-lg">
                    <code className="text-sm font-mono">git --version</code>
                  </div>
                </div>
                </CardContent>
              )}
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Session Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-medium">{completedCount}/{totalTasks}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Estimated time remaining:</p>
                  <p className="text-2xl font-bold">{45 - Math.round(completedCount * 7.5)} min</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/setup">
                  <Button variant="outline" className="w-full">
                    <Terminal className="mr-2 h-4 w-4" />
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

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <p>Test each installation before moving to the next</p>
                </div>
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <p>Keep your terminal open to verify commands</p>
                </div>
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <p>Restart your terminal after installing new tools</p>
                </div>
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <p>Take screenshots of successful installations</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      {showCompletionModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal();
            }
          }}
        >
          <Card 
            ref={modalRef}
            className="max-w-md w-full border-green-500 animate-in zoom-in-95 duration-300"
          >
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <CheckCheck className="h-16 w-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
                <h3 id="modal-title" className="text-2xl font-bold mb-2">Session Complete!</h3>
                <p className="text-muted-foreground mb-6">
                  Great job! You&apos;ve completed all tasks for this session.
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    size="lg" 
                    onClick={handleCloseModal}
                    aria-label="Continue to completion summary"
                  >
                    Continue
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Press Escape or click outside to close
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
