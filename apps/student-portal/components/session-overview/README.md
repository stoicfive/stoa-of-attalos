# Session Overview Components

Reusable components for building consistent session overview pages (the pages before starting the activity).

## Components

### SessionOverviewLayout
Main layout wrapper with navigation, header, and sidebar structure.

### SessionInfoCard
Displays session metadata: duration, task count, difficulty level.

### QuickActionsCard
Primary action button to start the session.

### DeliverablesCard
Lists what students will complete in the session.

### ResourcesCard
Links to helpful resources (Setup Guide, Hints, Rubric).

### NextSessionCard
Shows the next session in the learning path (optional).

## Usage

### 1. Define Session Metadata

Add your session to `/lib/session-metadata.ts`:

```typescript
export const SESSION_METADATA: Record<string, SessionMetadata> = {
  "a1s3": {
    id: "a1s3",
    title: "Session A1S3: Advanced Python",
    description: "Master advanced Python concepts",
    duration: "~90 minutes",
    taskCount: 7,
    difficulty: "Intermediate",
    arc: "Arc 1: Backend Foundation",
    deliverables: [
      "Understand OOP concepts",
      "Work with decorators",
      "Handle exceptions properly"
    ],
    nextSessionId: "a2s1",
    nextSessionTitle: "Session A2S1: FastAPI Basics"
  }
};
```

### 2. Create Session Overview Page

```tsx
import {
  SessionOverviewLayout,
  SessionInfoCard,
  QuickActionsCard,
  DeliverablesCard,
  ResourcesCard,
  NextSessionCard
} from '@/components/session-overview';
import { getSessionMetadata } from '@/lib/session-metadata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Target, CheckCircle2 } from 'lucide-react';

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
          <ResourcesCard />
          <NextSessionCard
            nextSessionId={session.nextSessionId}
            nextSessionTitle={session.nextSessionTitle}
          />
        </>
      }
    >
      {/* Main content: Overview, Learning Objectives, Prerequisites */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Session Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Your session overview content here...
          </p>
        </CardContent>
      </Card>

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
                <p className="font-medium">Objective 1</p>
                <p className="text-sm text-muted-foreground">Description</p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </SessionOverviewLayout>
  );
}
```

## Benefits

✅ **Consistent UI** - All session overview pages look the same
✅ **Centralized Data** - Session metadata in one place
✅ **Easy Updates** - Change card layout once, applies everywhere
✅ **Type Safety** - TypeScript ensures correct data structure
✅ **Flexible** - Customize content while maintaining structure
✅ **Maintainable** - Easy to add new sessions

## Sidebar Cards Order

Recommended order for sidebar cards:

1. **SessionInfoCard** - Quick facts about the session
2. **QuickActionsCard** - Primary CTA to start
3. **DeliverablesCard** - What students will complete
4. **ResourcesCard** - Helpful links
5. **NextSessionCard** - Continue learning path (optional)

## Customization

### Custom Resources

```tsx
<ResourcesCard
  resources={[
    { label: "Setup Guide", url: "/setup", icon: "setup" },
    { label: "View Hints", url: "/lessons/a1s3/hints", icon: "hints" },
    { label: "View Rubric", url: "/lessons/a1s3/rubric", icon: "rubric" }
  ]}
/>
```

### Custom Status

```tsx
<SessionOverviewLayout
  status="In Progress" // or "Completed"
  // ...
/>
```

## File Structure

```
components/session-overview/
├── session-overview-layout.tsx  # Main layout
├── session-info-card.tsx        # Duration, tasks, difficulty
├── quick-actions-card.tsx       # Start button
├── deliverables-card.tsx        # Deliverables list
├── resources-card.tsx           # Resource links
├── next-session-card.tsx        # Next session link
├── index.ts                     # Exports
└── README.md                    # Documentation

lib/
└── session-metadata.ts          # Session data
```
