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
import { AlertCircle, Code } from 'lucide-react';

export default function SessionA1S1Activity() {
  const tasks = getSessionTasks('a1s1');
  const session = getSessionMetadata('a1s1');
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
  } = useSessionState('a1s1', taskIds);

  const showModal = allComplete && !sessionCompleted;

  const tips = [
    "Start with tests first (TDD approach)",
    "Run tests in watch mode: npm run test:watch",
    "Use TypeScript strict mode for better type safety",
    "Keep functions small and focused",
    "Commit after each passing test"
  ];

  return (
    <>
      <SessionActivityLayout
        sessionId="a1s1"
        sessionTitle="Session A1S1: Trading Journal - Project Setup & First Entry"
        sessionDescription="Build a trade entry form with TypeScript and TDD"
        completedCount={completedCount}
        totalTasks={totalTasks}
        sessionCompleted={sessionCompleted}
        nextSessionUrl="/lessons/a1s2"
        nextSessionLabel="Next: A1S2 - Database Models"
        sidebar={
          <>
            <SessionProgressCard
              completedCount={completedCount}
              totalTasks={totalTasks}
              estimatedMinutes={50}
            />
            <IDEActionsCard
              sessionId="a1s1"
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
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Welcome to your first session! You&apos;ll build the foundation of your Trading Journal 
              by creating a trade entry form with TypeScript. Follow the Test-Driven Development (TDD) 
              approach: write tests first, then implement the code to make them pass.
            </p>
            <div className="flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-500 mb-1">Before You Start</p>
                <p className="text-muted-foreground">
                  Make sure you have Node.js 20+ installed and the project repository cloned. 
                  Run <code className="bg-secondary px-1 rounded">npm install</code> to install dependencies.
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
              <code className="text-sm font-mono">./scripts/check-a1s1.sh</code>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              This will verify that all tests pass, coverage is ≥70%, and code quality standards are met.
            </p>
          </CardContent>
        </Card>
      </SessionActivityLayout>

      <CompletionModal
        isOpen={showModal}
        onClose={() => setSessionCompleted(true)}
        sessionTitle="Session A1S1"
        nextSessionUrl="/lessons/a1s2"
        nextSessionLabel="Next: A1S2 - Database Models"
      />
    </>
  );
}
