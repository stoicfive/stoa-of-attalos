export interface SessionMetadata {
  id: string;
  title: string;
  description: string;
  duration: string;
  taskCount: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  arc: string;
  deliverables: string[];
  nextSessionId?: string;
  nextSessionTitle?: string;
}

export const SESSION_METADATA: Record<string, SessionMetadata> = {
  "a1s1": {
    id: "a1s1",
    title: "Session A1S1: Environment Setup",
    description: "Set up your complete development environment with Python, Poetry, PostgreSQL, Docker, and VS Code. This foundational session prepares you for all future work in the course.",
    duration: "~45 minutes",
    taskCount: 6,
    difficulty: "Beginner",
    arc: "Arc 1: Backend Foundation",
    deliverables: [
      "Python 3.12+ installed and verified",
      "Poetry configured for dependency management",
      "PostgreSQL database running locally",
      "Docker Desktop installed and running",
      "VS Code with recommended extensions",
      "Git configured with your credentials"
    ],
    nextSessionId: "a1s2",
    nextSessionTitle: "Session A1S2: Python Fundamentals"
  },
  "a1s2": {
    id: "a1s2",
    title: "Session A1S2: Python Fundamentals",
    description: "Learn the core concepts of Python programming including variables, data types, functions, conditionals, and loops.",
    duration: "~60 minutes",
    taskCount: 5,
    difficulty: "Beginner",
    arc: "Arc 1: Backend Foundation",
    deliverables: [
      "Complete all 5 coding exercises",
      "Practice examples in Python REPL",
      "Understand core Python concepts"
    ],
    nextSessionId: "a1s3",
    nextSessionTitle: "Session A1S3: Advanced Python"
  }
};

export function getSessionMetadata(sessionId: string): SessionMetadata | undefined {
  return SESSION_METADATA[sessionId];
}
