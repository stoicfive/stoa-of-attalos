import {
  SessionOverviewLayout,
  SessionInfoCard,
  QuickActionsCard,
  NextSessionCard
} from '@/components/session-overview';
import { DeliverablesCard } from '@/components/session-overview';
import { getSessionMetadata } from '@/lib/session-metadata';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle2, BookOpen, Code, FileCode } from "lucide-react";

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
          
          {/* IDE Files Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileCode className="h-5 w-5" />
                Files to Create
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {session.ideFiles?.map((file, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Code className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <code className="text-xs bg-secondary px-2 py-1 rounded break-all">{file}</code>
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
      {/* Session Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Session Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            In this session, you&apos;ll build the foundation of your Trading Journal SaaS by creating 
            a trade entry form with TypeScript. You&apos;ll learn Test-Driven Development (TDD) principles 
            while implementing data validation and React components.
          </p>
          <p className="text-muted-foreground">
            By the end of this session, you&apos;ll have a working trade entry form with comprehensive 
            validation, unit tests achieving 70%+ coverage, and a solid understanding of the test pyramid.
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
                <p className="font-medium">Set up Next.js project with TypeScript</p>
                <p className="text-sm text-muted-foreground">
                  Configure the project structure and TypeScript settings
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Create a basic data model for trade entries</p>
                <p className="text-sm text-muted-foreground">
                  Define the Trade interface with proper TypeScript types
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Implement validation functions</p>
                <p className="text-sm text-muted-foreground">
                  Create functions to validate symbols, prices, and shares
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Write unit tests with 70%+ coverage</p>
                <p className="text-sm text-muted-foreground">
                  Test validation logic and edge cases using Vitest
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Build a trade entry form component</p>
                <p className="text-sm text-muted-foreground">
                  Create a React form with validation and P&L calculation
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Understand the test pyramid</p>
                <p className="text-sm text-muted-foreground">
                  Learn the 70/25/5 split: unit, integration, and E2E tests
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Deliverables */}
      <DeliverablesCard deliverables={session.deliverables} />

      {/* Prerequisites */}
      <Card>
        <CardHeader>
          <CardTitle>Prerequisites</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Node.js 20+ installed
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Basic understanding of TypeScript
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Familiarity with React concepts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              VS Code or preferred IDE installed
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
            A trade entry form that captures stock trades with the following fields:
          </p>
          <div className="bg-secondary p-4 rounded-lg space-y-2 text-sm font-mono">
            <div>• <span className="text-primary">Symbol</span>: Stock ticker (e.g., &quot;AAPL&quot;)</div>
            <div>• <span className="text-primary">Entry Price</span>: Price at which you entered</div>
            <div>• <span className="text-primary">Exit Price</span>: Price at which you exited</div>
            <div>• <span className="text-primary">Shares</span>: Number of shares traded</div>
            <div>• <span className="text-primary">Date</span>: When the trade occurred</div>
            <div>• <span className="text-primary">P&L</span>: Automatically calculated profit/loss</div>
          </div>
        </CardContent>
      </Card>
    </SessionOverviewLayout>
  );
}
