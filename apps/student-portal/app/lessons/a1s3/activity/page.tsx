"use client"

import { 
  SessionActivityLayout, 
  TaskCard, 
  CompletionModal,
  SessionProgressCard,
  SessionHelpCard,
  SessionTipsCard,
  IDEActionsCard
} from '@/components/session';
import { useSessionState } from '@/hooks/use-session-state';
import { getSessionTasks } from '@/lib/session-tasks';
import { getSessionMetadata } from '@/lib/session-metadata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Code, Server } from 'lucide-react';

export default function SessionA1S3Activity() {
  const tasks = getSessionTasks('a1s3');
  const session = getSessionMetadata('a1s3');
  const taskIds = tasks.map(t => t.id);
  
  const {
    tasks: taskState,
    expanded,
    sessionCompleted,
    setSessionCompleted,
    toggleTask,
    toggleExpanded,
    completedCount,
    totalTasks,
    allComplete
  } = useSessionState('a1s3', taskIds);

  const showModal = allComplete && !sessionCompleted;

  const tips = [
    "Use Pydantic for automatic validation",
    "Return appropriate HTTP status codes",
    "Test both success and error cases",
    "Use FastAPI's automatic documentation",
    "Keep endpoints focused and simple"
  ];

  return (
    <>
      <SessionActivityLayout
        sessionId="a1s3"
        sessionTitle="Session A1S3: FastAPI Endpoints"
        sessionDescription="Build a REST API for the Trading Journal"
        completedCount={completedCount}
        totalTasks={totalTasks}
        sessionCompleted={sessionCompleted}
        nextSessionUrl="/lessons"
        nextSessionLabel="Back to Lessons"
        sidebar={
          <>
            <SessionProgressCard
              completedCount={completedCount}
              totalTasks={totalTasks}
              estimatedMinutes={50}
            />
            <IDEActionsCard
              sessionId="a1s3"
              ideFiles={session?.ideFiles}
              testCommand={session?.testCommand}
              hintsPath={session?.hintsPath}
              rubricPath={session?.rubricPath}
            />
            <SessionHelpCard />
            <SessionTipsCard tips={tips} />
          </>
        }
      >
        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Introduction to REST APIs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              In this session, you&apos;ll create a REST API for your Trading Journal using FastAPI. 
              You&apos;ll implement endpoints for creating, reading, updating, and deleting trades, 
              with proper validation and error handling.
            </p>
            <div className="flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-500 mb-1">Prerequisites</p>
                <p className="text-muted-foreground">
                  Complete A1S2 (Database Models) first. Make sure PostgreSQL is running and 
                  migrations are applied.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Render all tasks */}
        {tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={`${index + 1}. ${task.title}`}
            description={task.description}
            isCompleted={taskState[task.id]}
            isExpanded={expanded[task.id]}
            onToggleComplete={() => toggleTask(task.id)}
            onToggleExpand={() => toggleExpanded(task.id)}
          >
            <div className="space-y-4">
              {/* Task Details */}
              <div>
                <p className="text-sm font-medium mb-2">Steps:</p>
                <ul className="space-y-2">
                  {task.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Files to Create */}
              {task.files && task.files.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Files to Create:</p>
                  <div className="space-y-1">
                    {task.files.map((file, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Code className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <code className="text-xs bg-secondary px-2 py-1 rounded break-all">{file}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Example */}
              {task.codeExample && (
                <div>
                  <p className="text-sm font-medium mb-2">Example Code:</p>
                  <div className="bg-secondary p-4 rounded-lg overflow-x-auto">
                    <pre className="text-xs font-mono whitespace-pre-wrap">
                      {task.codeExample}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </TaskCard>
        ))}

        {/* API Documentation Card */}
        <Card>
          <CardHeader>
            <CardTitle>API Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              FastAPI automatically generates interactive API documentation. Once your server is running, 
              you can view it at:
            </p>
            <div className="bg-secondary p-4 rounded-lg space-y-2">
              <div>
                <span className="text-sm font-medium">Swagger UI:</span>
                <code className="text-sm font-mono ml-2">http://localhost:8000/docs</code>
              </div>
              <div>
                <span className="text-sm font-medium">ReDoc:</span>
                <code className="text-sm font-mono ml-2">http://localhost:8000/redoc</code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Completion Card */}
        <Card>
          <CardHeader>
            <CardTitle>Ready to Submit?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Once you&apos;ve completed all tasks, run the validation script to check your work:
            </p>
            <div className="bg-secondary p-4 rounded-lg">
              <code className="text-sm font-mono">./scripts/check-a1s3.sh</code>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              This will verify that all endpoints work, tests pass, and coverage is ≥70%.
            </p>
          </CardContent>
        </Card>
      </SessionActivityLayout>

      <CompletionModal
        isOpen={showModal}
        onClose={() => setSessionCompleted(true)}
        sessionTitle="Session A1S3"
        nextSessionUrl="/lessons"
        nextSessionLabel="Back to Lessons"
      />
    </>
  );
}
