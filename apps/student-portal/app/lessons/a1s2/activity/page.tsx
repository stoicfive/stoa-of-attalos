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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function SessionA1S2Activity() {
  const taskIds = ['variables', 'data-types', 'functions', 'conditionals', 'loops'];
  
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
  } = useSessionState('a1s2', taskIds);

  const showModal = allComplete && !sessionCompleted;

  const tips = [
    "Practice each concept in the Python REPL before moving on",
    "Run your code frequently to catch errors early",
    "Use meaningful variable names to make code readable",
    "Comment your code to explain complex logic",
    "Don't worry about perfection - focus on understanding"
  ];

  return (
    <>
      <SessionActivityLayout
        sessionId="a1s2"
        sessionTitle="Session A1S2: Python Fundamentals"
        sessionDescription="Learn the core concepts of Python programming"
        completedCount={completedCount}
        totalTasks={totalTasks}
        sessionCompleted={sessionCompleted}
        nextSessionUrl="/lessons/a1s3"
        nextSessionLabel="Next Session: A1S3"
        sidebar={
          <>
            <SessionProgressCard
              completedCount={completedCount}
              totalTasks={totalTasks}
              estimatedMinutes={60}
            />
            <SessionHelpCard />
            <SessionTipsCard tips={tips} />
          </>
        }
      >
        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle>Getting Started with Python</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              In this session, you&apos;ll learn the fundamental building blocks of Python programming. 
              Complete each task by writing and running the code examples.
            </p>
            <div className="flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-500 mb-1">Tip</p>
                <p className="text-muted-foreground">
                  Open your terminal and type <code className="bg-secondary px-1 rounded">python3</code> to start the Python REPL for interactive practice.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Task 1: Variables */}
        <TaskCard
          id="variables"
          title="Variables and Assignment"
          description="Learn how to store and manipulate data"
          isCompleted={tasks.variables}
          isExpanded={expanded.variables}
          onToggleComplete={() => toggleTask('variables')}
          onToggleExpand={() => toggleExpanded('variables')}
        >
          <p className="text-sm text-muted-foreground">
            Variables are containers for storing data values. In Python, you don&apos;t need to declare variable types.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">Examples:</p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Basic assignment:</p>
                <code className="text-sm font-mono block">
                  name = &quot;Alice&quot;<br />
                  age = 25<br />
                  height = 5.6
                </code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Multiple assignment:</p>
                <code className="text-sm font-mono block">
                  x, y, z = 1, 2, 3
                </code>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Practice Exercise:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Create variables for your name, age, and favorite programming language. Print them out.
              </p>
              <code className="text-sm font-mono block text-muted-foreground">
                # Your code here<br />
                my_name = &quot;...&quot;<br />
                my_age = ...<br />
                favorite_lang = &quot;...&quot;
              </code>
            </div>
          </div>
        </TaskCard>

        {/* Task 2: Data Types */}
        <TaskCard
          id="data-types"
          title="Data Types"
          description="Understand Python's built-in data types"
          isCompleted={tasks['data-types']}
          isExpanded={expanded['data-types']}
          onToggleComplete={() => toggleTask('data-types')}
          onToggleExpand={() => toggleExpanded('data-types')}
        >
          <p className="text-sm text-muted-foreground">
            Python has several built-in data types: strings, integers, floats, booleans, lists, tuples, and dictionaries.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">Common Data Types:</p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Strings (text):</p>
                <code className="text-sm font-mono block">message = &quot;Hello, World!&quot;</code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Integers (whole numbers):</p>
                <code className="text-sm font-mono block">count = 42</code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Floats (decimals):</p>
                <code className="text-sm font-mono block">price = 19.99</code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Booleans (True/False):</p>
                <code className="text-sm font-mono block">is_active = True</code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Lists (ordered collections):</p>
                <code className="text-sm font-mono block">fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]</code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Dictionaries (key-value pairs):</p>
                <code className="text-sm font-mono block">person = {'{'}&#34;name&#34;: &#34;Alice&#34;, &#34;age&#34;: 25{'}'}</code>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Type Checking:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <code className="text-sm font-mono block">
                type(42)        # &lt;class &apos;int&apos;&gt;<br />
                type(3.14)      # &lt;class &apos;float&apos;&gt;<br />
                type(&quot;hello&quot;)   # &lt;class &apos;str&apos;&gt;
              </code>
            </div>
          </div>
        </TaskCard>

        {/* Task 3: Functions */}
        <TaskCard
          id="functions"
          title="Functions"
          description="Create reusable blocks of code"
          isCompleted={tasks.functions}
          isExpanded={expanded.functions}
          onToggleComplete={() => toggleTask('functions')}
          onToggleExpand={() => toggleExpanded('functions')}
        >
          <p className="text-sm text-muted-foreground">
            Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">Function Syntax:</p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Basic function:</p>
                <code className="text-sm font-mono block">
                  def greet():<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(&quot;Hello!&quot;)
                </code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Function with parameters:</p>
                <code className="text-sm font-mono block">
                  def greet(name):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(f&quot;Hello, {'{name}'}!&quot;)
                </code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Function with return value:</p>
                <code className="text-sm font-mono block">
                  def add(a, b):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return a + b<br />
                  <br />
                  result = add(5, 3)  # result = 8
                </code>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Practice Exercise:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Create a function that takes a temperature in Celsius and returns it in Fahrenheit.
              </p>
              <code className="text-sm font-mono block text-muted-foreground">
                def celsius_to_fahrenheit(celsius):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;# Formula: (C × 9/5) + 32<br />
                &nbsp;&nbsp;&nbsp;&nbsp;return ...
              </code>
            </div>
          </div>
        </TaskCard>

        {/* Task 4: Conditionals */}
        <TaskCard
          id="conditionals"
          title="Conditional Statements"
          description="Make decisions in your code"
          isCompleted={tasks.conditionals}
          isExpanded={expanded.conditionals}
          onToggleComplete={() => toggleTask('conditionals')}
          onToggleExpand={() => toggleExpanded('conditionals')}
        >
          <p className="text-sm text-muted-foreground">
            Conditional statements allow your program to make decisions and execute different code based on conditions.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">If/Elif/Else:</p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Basic if statement:</p>
                <code className="text-sm font-mono block">
                  age = 18<br />
                  if age &gt;= 18:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(&quot;You are an adult&quot;)
                </code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">If-else:</p>
                <code className="text-sm font-mono block">
                  if age &gt;= 18:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(&quot;Adult&quot;)<br />
                  else:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(&quot;Minor&quot;)
                </code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">If-elif-else:</p>
                <code className="text-sm font-mono block">
                  score = 85<br />
                  if score &gt;= 90:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;grade = &quot;A&quot;<br />
                  elif score &gt;= 80:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;grade = &quot;B&quot;<br />
                  elif score &gt;= 70:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;grade = &quot;C&quot;<br />
                  else:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;grade = &quot;F&quot;
                </code>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Comparison Operators:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <code className="text-sm font-mono block">
                ==  # Equal to<br />
                !=  # Not equal to<br />
                &gt;   # Greater than<br />
                &lt;   # Less than<br />
                &gt;=  # Greater than or equal to<br />
                &lt;=  # Less than or equal to
              </code>
            </div>
          </div>
        </TaskCard>

        {/* Task 5: Loops */}
        <TaskCard
          id="loops"
          title="Loops"
          description="Repeat code efficiently"
          isCompleted={tasks.loops}
          isExpanded={expanded.loops}
          onToggleComplete={() => toggleTask('loops')}
          onToggleExpand={() => toggleExpanded('loops')}
        >
          <p className="text-sm text-muted-foreground">
            Loops allow you to repeat code multiple times without writing it over and over.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">For Loops:</p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Loop through a list:</p>
                <code className="text-sm font-mono block">
                  fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]<br />
                  for fruit in fruits:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(fruit)
                </code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Loop with range:</p>
                <code className="text-sm font-mono block">
                  for i in range(5):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;print(i)  # Prints 0, 1, 2, 3, 4
                </code>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">While Loops:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <code className="text-sm font-mono block">
                count = 0<br />
                while count &lt; 5:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;print(count)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;count += 1
              </code>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Practice Exercise:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Write a loop that prints all even numbers from 1 to 10.
              </p>
              <code className="text-sm font-mono block text-muted-foreground">
                for i in range(1, 11):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;if ...:  # Check if even<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(i)
              </code>
            </div>
          </div>
        </TaskCard>
      </SessionActivityLayout>

      <CompletionModal
        isOpen={showModal}
        onClose={() => setSessionCompleted(true)}
        sessionTitle="Session A1S2"
        nextSessionUrl="/lessons/a1s3"
        nextSessionLabel="Next Session: A1S3"
      />
    </>
  );
}
