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
              Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects 
              that contain both data and behavior. This session will teach you how to design and implement 
              classes, create objects, and use inheritance to build reusable and maintainable code.
            </p>
            <p className="text-muted-foreground">
              By the end of this session, you&apos;ll understand the four pillars of OOP: encapsulation, 
              abstraction, inheritance, and polymorphism. You&apos;ll be able to design class hierarchies 
              and build practical applications using object-oriented principles.
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
                  <p className="font-medium">Classes and Objects</p>
                  <p className="text-sm text-muted-foreground">
                    Create custom classes with attributes and methods, instantiate objects
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Encapsulation</p>
                  <p className="text-sm text-muted-foreground">
                    Use private attributes and properties to control data access
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Inheritance</p>
                  <p className="text-sm text-muted-foreground">
                    Create parent and child classes to reuse code and extend functionality
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Polymorphism</p>
                  <p className="text-sm text-muted-foreground">
                    Override methods and use duck typing for flexible code
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Special Methods</p>
                  <p className="text-sm text-muted-foreground">
                    Implement __init__, __str__, __repr__, and other dunder methods
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Practical Application</p>
                  <p className="text-sm text-muted-foreground">
                    Build a real-world project using OOP principles
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
                Completed Session A1S2: Python Fundamentals
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Understanding of functions and data types
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Comfortable writing Python code
              </li>
            </ul>
          </CardContent>
        </Card>
    </SessionOverviewLayout>
  );
}
