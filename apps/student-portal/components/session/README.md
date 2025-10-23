# Session Activity Components

Reusable components for building interactive session activity pages.

## Components

### SessionActivityLayout
Main layout wrapper with navigation, header, and sticky sidebar.

```tsx
import { SessionActivityLayout } from '@/components/session';

<SessionActivityLayout
  sessionId="a1s1"
  sessionTitle="Session A1S1: Environment Setup"
  sessionDescription="Complete all tasks below to finish this session"
  completedCount={3}
  totalTasks={6}
  sessionCompleted={false}
  nextSessionUrl="/lessons/a1s2"
  nextSessionLabel="Next Session: A1S2"
  sidebar={<>Sidebar content</>}
>
  {/* Task cards go here */}
</SessionActivityLayout>
```

### TaskCard
Collapsible task card with checkbox and content.

```tsx
import { TaskCard } from '@/components/session';

<TaskCard
  id="python"
  title="Install Python 3.12+"
  description="Set up Python environment"
  isCompleted={tasks.python}
  isExpanded={expanded.python}
  isRequired={true}
  onToggleComplete={() => toggleTask('python')}
  onToggleExpand={() => toggleExpanded('python')}
>
  {/* Task content goes here */}
  <p>Installation instructions...</p>
</TaskCard>
```

### CompletionModal
Modal that appears when all tasks are complete.

```tsx
import { CompletionModal } from '@/components/session';

<CompletionModal
  isOpen={showModal}
  onClose={handleClose}
  sessionTitle="Session A1S1"
  nextSessionUrl="/lessons/a1s2"
  nextSessionLabel="Next Session: A1S2"
/>
```

### SessionProgressCard
Shows completion progress and time estimate.

```tsx
import { SessionProgressCard } from '@/components/session';

<SessionProgressCard
  completedCount={3}
  totalTasks={6}
  estimatedMinutes={45}
/>
```

### SessionHelpCard
Quick action buttons for help resources.

```tsx
import { SessionHelpCard } from '@/components/session';

<SessionHelpCard
  setupGuideUrl="/setup"
  hintsUrl="/lessons/a1s1/hints"
  rubricUrl="/lessons/a1s1/rubric"
/>
```

### SessionTipsCard
Displays pro tips for the session.

```tsx
import { SessionTipsCard } from '@/components/session';

<SessionTipsCard
  tips={[
    "Test each installation before moving to the next",
    "Keep your terminal open to verify commands",
    "Restart your terminal after installing new tools"
  ]}
/>
```

## Hook

### useSessionState
Manages task state with localStorage persistence.

```tsx
import { useSessionState } from '@/hooks/use-session-state';

const {
  tasks,
  expanded,
  sessionCompleted,
  setSessionCompleted,
  toggleTask,
  toggleExpanded,
  completedCount,
  totalTasks,
  progress,
  allComplete
} = useSessionState('a1s1', ['python', 'poetry', 'postgresql', 'docker', 'vscode', 'git']);
```

## Complete Example

```tsx
"use client"

import { 
  SessionActivityLayout, 
  TaskCard, 
  CompletionModal,
  SessionProgressCard,
  SessionHelpCard,
  SessionTipsCard
} from '@/components/session';
import { useSessionState } from '@/hooks/use-session-state';

export default function SessionActivity() {
  const taskIds = ['task1', 'task2', 'task3'];
  
  const {
    tasks,
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

  return (
    <>
      <SessionActivityLayout
        sessionId="a1s1"
        sessionTitle="Session A1S1: Environment Setup"
        sessionDescription="Complete all tasks below"
        completedCount={completedCount}
        totalTasks={totalTasks}
        sessionCompleted={sessionCompleted}
        nextSessionUrl="/lessons/a1s2"
        sidebar={
          <>
            <SessionProgressCard
              completedCount={completedCount}
              totalTasks={totalTasks}
            />
            <SessionHelpCard />
            <SessionTipsCard tips={["Tip 1", "Tip 2"]} />
          </>
        }
      >
        {taskIds.map(id => (
          <TaskCard
            key={id}
            id={id}
            title={`Task ${id}`}
            isCompleted={tasks[id]}
            isExpanded={expanded[id]}
            onToggleComplete={() => toggleTask(id)}
            onToggleExpand={() => toggleExpanded(id)}
          >
            Task content here
          </TaskCard>
        ))}
      </SessionActivityLayout>

      <CompletionModal
        isOpen={showModal}
        onClose={() => setSessionCompleted(true)}
        sessionTitle="Session A1S1"
      />
    </>
  );
}
```

## Features

- ✅ Sticky sidebar on desktop
- ✅ localStorage persistence
- ✅ Smooth animations (expand/collapse, modal enter/exit)
- ✅ Full accessibility (ARIA labels, keyboard navigation, focus trap)
- ✅ Responsive design
- ✅ Auto-scroll to top on completion
- ✅ Progress tracking
- ✅ Time estimation
