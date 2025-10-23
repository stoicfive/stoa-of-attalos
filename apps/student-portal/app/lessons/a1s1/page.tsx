import {
  SessionOverviewLayout,
  SessionInfoCard,
  QuickActionsCard,
  DeliverablesCard,
  NextSessionCard
} from '@/components/session-overview';
import { getSessionMetadata } from '@/lib/session-metadata';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target,
  CheckCircle2,
  BookOpen,
  Code
} from "lucide-react";

export default function SessionA1S1() {
  const session = getSessionMetadata('a1s1');
  
  if (!session) return <div>Session not found</div>;

  return (
    <SessionOverviewLayout
      sessionId={session.id}
      sessionTitle={session.title}
      sessionDescription={session.description}
      status="Not Started"
      sidebar={
        <>
          <SessionInfoCard
            duration={session.duration}
            taskCount={session.taskCount}
            difficulty={session.difficulty}
          />
          <QuickActionsCard sessionId={session.id} />
          <DeliverablesCard deliverables={session.deliverables} />
          
          {/* IDE Files Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Files to Create</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {session.ideFiles?.map((file, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Code className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <code className="text-xs bg-secondary px-2 py-1 rounded">{file}</code>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <NextSessionCard
            nextSessionId={session.nextSessionId}
            nextSessionTitle={session.nextSessionTitle}
          />
        </>
      }
    >
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
