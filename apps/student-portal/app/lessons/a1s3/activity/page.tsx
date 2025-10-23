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

export default function SessionA1S3Activity() {
  const taskIds = ['classes-objects', 'encapsulation', 'inheritance', 'polymorphism', 'special-methods', 'oop-project'];
  
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
  } = useSessionState('a1s3', taskIds);

  const showModal = allComplete && !sessionCompleted;

  const tips = [
    "Think about real-world objects when designing classes",
    "Start with simple classes before adding complexity",
    "Use meaningful class and method names",
    "Test each class method individually",
    "Remember: inheritance models 'is-a' relationships"
  ];

  return (
    <>
      <SessionActivityLayout
        sessionId="a1s3"
        sessionTitle="Session A1S3: Object-Oriented Programming"
        sessionDescription="Master OOP concepts in Python"
        completedCount={completedCount}
        totalTasks={totalTasks}
        sessionCompleted={sessionCompleted}
        nextSessionUrl="/lessons/a1s4"
        nextSessionLabel="Next Session: A1S4"
        sidebar={
          <>
            <SessionProgressCard
              completedCount={completedCount}
              totalTasks={totalTasks}
              estimatedMinutes={75}
            />
            <SessionHelpCard />
            <SessionTipsCard tips={tips} />
          </>
        }
      >
        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle>Introduction to OOP</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Object-Oriented Programming helps you organize code by grouping related data and behavior together. 
              You&apos;ll learn to create classes (blueprints) and objects (instances) to build modular, reusable code.
            </p>
            <div className="flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-500 mb-1">Tip</p>
                <p className="text-muted-foreground">
                  Create a new Python file for this session: <code className="bg-secondary px-1 rounded">oop_practice.py</code>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Task 1: Classes and Objects */}
        <TaskCard
          id="classes-objects"
          title="Classes and Objects"
          description="Learn to create classes and instantiate objects"
          isCompleted={tasks['classes-objects']}
          isExpanded={expanded['classes-objects']}
          onToggleComplete={() => toggleTask('classes-objects')}
          onToggleExpand={() => toggleExpanded('classes-objects')}
        >
          <p className="text-sm text-muted-foreground">
            A class is a blueprint for creating objects. Objects are instances of classes that contain data (attributes) and behavior (methods).
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">Basic Class Syntax:</p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <code className="text-sm font-mono block">
                class Dog:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, name, age):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = name<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.age = age<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def bark(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f&quot;{'{self.name}'} says Woof!&quot;<br />
                <br />
                # Create an object<br />
                my_dog = Dog(&quot;Buddy&quot;, 3)<br />
                print(my_dog.bark())  # Buddy says Woof!
              </code>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Practice Exercise:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Create a <code>Person</code> class with name and age attributes, and a <code>greet()</code> method.
              </p>
              <code className="text-sm font-mono block text-muted-foreground">
                class Person:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, name, age):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Your code here<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def greet(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Return a greeting message
              </code>
            </div>
          </div>
        </TaskCard>

        {/* Task 2: Encapsulation */}
        <TaskCard
          id="encapsulation"
          title="Encapsulation"
          description="Control access to data with private attributes"
          isCompleted={tasks.encapsulation}
          isExpanded={expanded.encapsulation}
          onToggleComplete={() => toggleTask('encapsulation')}
          onToggleExpand={() => toggleExpanded('encapsulation')}
        >
          <p className="text-sm text-muted-foreground">
            Encapsulation means hiding internal data and providing controlled access through methods. Use underscore prefix for private attributes.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">Private Attributes:</p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <code className="text-sm font-mono block">
                class BankAccount:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, balance):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._balance = balance  # Private<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def deposit(self, amount):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if amount &gt; 0:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._balance += amount<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def get_balance(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self._balance
              </code>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Properties (Getters/Setters):</p>
            <div className="bg-secondary p-4 rounded-lg">
              <code className="text-sm font-mono block">
                class Temperature:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, celsius):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._celsius = celsius<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;@property<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def fahrenheit(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (self._celsius * 9/5) + 32<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;@fahrenheit.setter<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def fahrenheit(self, value):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._celsius = (value - 32) * 5/9
              </code>
            </div>
          </div>
        </TaskCard>

        {/* Task 3: Inheritance */}
        <TaskCard
          id="inheritance"
          title="Inheritance"
          description="Create parent and child classes"
          isCompleted={tasks.inheritance}
          isExpanded={expanded.inheritance}
          onToggleComplete={() => toggleTask('inheritance')}
          onToggleExpand={() => toggleExpanded('inheritance')}
        >
          <p className="text-sm text-muted-foreground">
            Inheritance allows a class to inherit attributes and methods from another class, promoting code reuse.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">Basic Inheritance:</p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <code className="text-sm font-mono block">
                class Animal:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, name):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = name<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def speak(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass<br />
                <br />
                class Cat(Animal):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def speak(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f&quot;{'{self.name}'} says Meow!&quot;<br />
                <br />
                class Dog(Animal):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def speak(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f&quot;{'{self.name}'} says Woof!&quot;
              </code>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Using super():</p>
            <div className="bg-secondary p-4 rounded-lg">
              <code className="text-sm font-mono block">
                class Vehicle:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, brand):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.brand = brand<br />
                <br />
                class Car(Vehicle):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, brand, model):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(brand)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.model = model
              </code>
            </div>
          </div>
        </TaskCard>

        {/* Task 4: Polymorphism */}
        <TaskCard
          id="polymorphism"
          title="Polymorphism"
          description="Use the same interface for different types"
          isCompleted={tasks.polymorphism}
          isExpanded={expanded.polymorphism}
          onToggleComplete={() => toggleTask('polymorphism')}
          onToggleExpand={() => toggleExpanded('polymorphism')}
        >
          <p className="text-sm text-muted-foreground">
            Polymorphism allows objects of different classes to be treated as objects of a common parent class.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">Method Overriding:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <code className="text-sm font-mono block">
                class Shape:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def area(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass<br />
                <br />
                class Circle(Shape):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, radius):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.radius = radius<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def area(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 3.14 * self.radius ** 2<br />
                <br />
                class Rectangle(Shape):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, width, height):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.width = width<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.height = height<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def area(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self.width * self.height<br />
                <br />
                # Polymorphism in action<br />
                shapes = [Circle(5), Rectangle(4, 6)]<br />
                for shape in shapes:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;print(shape.area())
              </code>
            </div>
          </div>
        </TaskCard>

        {/* Task 5: Special Methods */}
        <TaskCard
          id="special-methods"
          title="Special Methods (Dunder Methods)"
          description="Implement magic methods for custom behavior"
          isCompleted={tasks['special-methods']}
          isExpanded={expanded['special-methods']}
          onToggleComplete={() => toggleTask('special-methods')}
          onToggleExpand={() => toggleExpanded('special-methods')}
        >
          <p className="text-sm text-muted-foreground">
            Special methods (dunder methods) allow you to define how objects behave with built-in operations.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">Common Special Methods:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <code className="text-sm font-mono block">
                class Book:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, title, author):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.title = title<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.author = author<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __str__(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f&quot;{'{self.title}'} by {'{self.author}'}&quot;<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __repr__(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f&quot;Book({'{self.title!r}'}, {'{self.author!r}'})&quot;<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __len__(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return len(self.title)<br />
                <br />
                book = Book(&quot;1984&quot;, &quot;George Orwell&quot;)<br />
                print(str(book))  # 1984 by George Orwell<br />
                print(len(book))  # 4
              </code>
            </div>
          </div>
        </TaskCard>

        {/* Task 6: OOP Project */}
        <TaskCard
          id="oop-project"
          title="Build an OOP Project"
          description="Create a library management system"
          isCompleted={tasks['oop-project']}
          isExpanded={expanded['oop-project']}
          onToggleComplete={() => toggleTask('oop-project')}
          onToggleExpand={() => toggleExpanded('oop-project')}
        >
          <p className="text-sm text-muted-foreground">
            Apply everything you&apos;ve learned to build a simple library management system.
          </p>
          
          <div>
            <p className="text-sm font-medium mb-2">Project Requirements:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <ul className="text-sm space-y-2">
                <li>• Create a <code>Book</code> class with title, author, and ISBN</li>
                <li>• Create a <code>Library</code> class that manages a collection of books</li>
                <li>• Implement methods to add, remove, and search for books</li>
                <li>• Use encapsulation to protect the book collection</li>
                <li>• Add a <code>Member</code> class for library members</li>
                <li>• Implement a checkout system</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Starter Code:</p>
            <div className="bg-secondary p-4 rounded-lg">
              <code className="text-sm font-mono block text-muted-foreground">
                class Book:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, title, author, isbn):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Your code here<br />
                <br />
                class Library:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._books = []<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def add_book(self, book):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Your code here<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def find_book(self, title):<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Your code here
              </code>
            </div>
          </div>
        </TaskCard>
      </SessionActivityLayout>

      <CompletionModal
        isOpen={showModal}
        onClose={() => setSessionCompleted(true)}
        sessionTitle="Session A1S3"
        nextSessionUrl="/lessons/a1s4"
        nextSessionLabel="Next Session: A1S4"
      />
    </>
  );
}
