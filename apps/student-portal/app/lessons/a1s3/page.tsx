import {
  SessionOverviewLayout,
  SessionInfoCard,
  QuickActionsCard,
  NextSessionCard
} from '@/components/session-overview';
import { DeliverablesCard } from '@/components/session-overview';
import { getSessionMetadata } from '@/lib/session-metadata';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle2, BookOpen, Code, FileCode, Server } from "lucide-react";

export default function SessionA1S3() {
  const session = getSessionMetadata('a1s3');
  
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
            In this session, you&apos;ll create a REST API for your Trading Journal using FastAPI. 
            You&apos;ll implement endpoints for creating, reading, updating, and deleting trades, 
            with proper request validation and error handling.
          </p>
          <p className="text-muted-foreground">
            By the end of this session, you&apos;ll have a fully functional API with comprehensive tests, 
            auto-generated documentation, and a solid understanding of REST principles.
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
                <p className="font-medium">Create REST API endpoints with FastAPI</p>
                <p className="text-sm text-muted-foreground">
                  Implement POST, GET, PUT, and DELETE endpoints for trades
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Implement request validation with Pydantic</p>
                <p className="text-sm text-muted-foreground">
                  Define schemas for request/response validation
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Add comprehensive error handling</p>
                <p className="text-sm text-muted-foreground">
                  Handle 404 Not Found, 400 Bad Request, and 500 Server Error
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Write API tests with TestClient</p>
                <p className="text-sm text-muted-foreground">
                  Test all endpoints and error cases with 70%+ coverage
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Understand REST principles</p>
                <p className="text-sm text-muted-foreground">
                  Learn HTTP methods, status codes, and API design patterns
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
              A1S2 complete (SQLAlchemy models)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Understanding of HTTP basics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Familiarity with REST concepts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Python async/await basics (helpful but not required)
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* What You'll Build */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            What You&apos;ll Build
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            A complete REST API with the following endpoints:
          </p>
          <div className="bg-secondary p-4 rounded-lg space-y-2 text-sm font-mono">
            <div><span className="text-green-500">POST</span> /api/trades - Create a new trade</div>
            <div><span className="text-blue-500">GET</span> /api/trades - List all trades</div>
            <div><span className="text-blue-500">GET</span> /api/trades/{'{id}'} - Get a single trade</div>
            <div><span className="text-yellow-500">PUT</span> /api/trades/{'{id}'} - Update a trade</div>
            <div><span className="text-red-500">DELETE</span> /api/trades/{'{id}'} - Delete a trade</div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Plus auto-generated API documentation at <code className="bg-secondary px-1 rounded">/docs</code>
          </p>
        </CardContent>
      </Card>

      {/* Key Concepts */}
      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium mb-2">REST (Representational State Transfer)</p>
            <p className="text-sm text-muted-foreground">
              Architectural style for APIs using HTTP methods (GET, POST, PUT, DELETE) to perform 
              operations on resources. Each endpoint represents a resource and uses appropriate status codes.
            </p>
          </div>
          <div>
            <p className="font-medium mb-2">Pydantic Schemas</p>
            <p className="text-sm text-muted-foreground">
              Data validation using Python type annotations. Automatically validates request data and 
              generates API documentation.
            </p>
          </div>
          <div>
            <p className="font-medium mb-2">HTTP Status Codes</p>
            <p className="text-sm text-muted-foreground">
              <strong>200 OK</strong> - Success, <strong>201 Created</strong> - Resource created, 
              <strong>404 Not Found</strong> - Resource doesn&apos;t exist, 
              <strong>400 Bad Request</strong> - Invalid input
            </p>
          </div>
        </CardContent>
      </Card>
    </SessionOverviewLayout>
  );
}
