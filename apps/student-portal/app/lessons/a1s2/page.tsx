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
  BookOpen
} from "lucide-react";

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
          <DeliverablesCard deliverables={session.deliverables} />
          <NextSessionCard
            nextSessionId={session.nextSessionId}
            nextSessionTitle={session.nextSessionTitle}
          />
        </>
      }
    >
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
    </SessionOverviewLayout>
  );
}
