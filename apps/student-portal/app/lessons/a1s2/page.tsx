import {
  SessionOverviewLayout,
  SessionInfoCard,
  QuickActionsCard,
  NextSessionCard
} from '@/components/session-overview';
import { DeliverablesCard } from '@/components/session-overview';
import { getSessionMetadata } from '@/lib/session-metadata';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle2, BookOpen, Code, FileCode, Database } from "lucide-react";

export default function SessionA1S2() {
  const session = getSessionMetadata('a1s2');
  
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
            In this session, you&apos;ll create the database layer for your Trading Journal by defining 
            SQLAlchemy models and creating migrations with Alembic. You&apos;ll learn Object-Relational 
            Mapping (ORM) concepts and how to test database operations.
          </p>
          <p className="text-muted-foreground">
            By the end of this session, you&apos;ll have a fully functional Trade model with CRUD operations, 
            database migrations, and comprehensive tests achieving 70%+ coverage.
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
                <p className="font-medium">Define SQLAlchemy models with proper types</p>
                <p className="text-sm text-muted-foreground">
                  Create the Trade model with all required columns and constraints
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Create database migrations using Alembic</p>
                <p className="text-sm text-muted-foreground">
                  Generate and apply migrations to manage schema changes
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Write model tests with Pytest fixtures</p>
                <p className="text-sm text-muted-foreground">
                  Create reusable test fixtures for database testing
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Implement CRUD operations</p>
                <p className="text-sm text-muted-foreground">
                  Create, Read, Update, and Delete trades in the database
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Understand ORM concepts</p>
                <p className="text-sm text-muted-foreground">
                  Learn how Python objects map to database tables
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
              Python 3.12+ installed
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Poetry installed
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              PostgreSQL running (Docker Compose)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              A1S1 complete (TypeScript validation)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Basic SQL knowledge
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* What You'll Build */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            What You&apos;ll Build
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            A SQLAlchemy model that maps to the <code className="bg-secondary px-1 rounded">trading.trades</code> table:
          </p>
          <div className="bg-secondary p-4 rounded-lg space-y-2 text-sm font-mono">
            <div>• <span className="text-primary">id</span>: UUID primary key</div>
            <div>• <span className="text-primary">symbol</span>: Stock ticker (VARCHAR)</div>
            <div>• <span className="text-primary">entry_price</span>: Entry price (NUMERIC)</div>
            <div>• <span className="text-primary">exit_price</span>: Exit price (NUMERIC)</div>
            <div>• <span className="text-primary">shares</span>: Number of shares (INTEGER)</div>
            <div>• <span className="text-primary">trade_date</span>: Trade date (TIMESTAMP)</div>
            <div>• <span className="text-primary">notes</span>: Optional notes (TEXT)</div>
            <div>• <span className="text-primary">pnl</span>: Computed profit/loss (NUMERIC)</div>
            <div>• <span className="text-primary">created_at</span>: Record creation time</div>
            <div>• <span className="text-primary">updated_at</span>: Last update time</div>
          </div>
        </CardContent>
      </Card>

      {/* Key Concepts */}
      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium mb-2">ORM (Object-Relational Mapping)</p>
            <p className="text-sm text-muted-foreground">
              <strong>Metaphor:</strong> &quot;Translator between Python and SQL&quot; - Maps Python classes to database 
              tables and handles SQL generation automatically.
            </p>
          </div>
          <div>
            <p className="font-medium mb-2">Migrations</p>
            <p className="text-sm text-muted-foreground">
              <strong>Metaphor:</strong> &quot;Version control for your database&quot; - Track schema changes over time, 
              apply/rollback changes safely, and share updates with your team.
            </p>
          </div>
          <div>
            <p className="font-medium mb-2">Fixtures</p>
            <p className="text-sm text-muted-foreground">
              <strong>Metaphor:</strong> &quot;Test setup helpers&quot; - Reusable test data and connections with 
              automatic setup and teardown that isolate tests from each other.
            </p>
          </div>
        </CardContent>
      </Card>
    </SessionOverviewLayout>
  );
}
