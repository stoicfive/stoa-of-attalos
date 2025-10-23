export interface SessionMetadata {
  id: string;
  title: string;
  description: string;
  duration: string;
  taskCount: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  arc: string;
  language: string;
  deliverables: string[];
  nextSessionId?: string;
  nextSessionTitle?: string;
  testCommand?: string;
  hintsPath?: string;
  rubricPath?: string;
  ideFiles?: string[];
}

export const SESSION_METADATA: Record<string, SessionMetadata> = {
  "a1s1": {
    id: "a1s1",
    title: "Session A1S1: Trading Journal - Project Setup & First Entry",
    description: "Build a trade entry form with TypeScript, validation functions, and unit tests. Learn TDD principles while creating the foundation of your Trading Journal SaaS.",
    duration: "~50 minutes",
    taskCount: 6,
    difficulty: "Beginner",
    arc: "Phase A: Foundation",
    language: "TypeScript",
    deliverables: [
      "lessons/01-typescript-basics/trade.ts - Trade interface",
      "lessons/01-typescript-basics/validators.ts - Validation functions",
      "lessons/01-typescript-basics/tests/validators.test.ts - Unit tests (70%+ coverage)",
      "lessons/01-typescript-basics/TradeForm.tsx - React form component",
      "lessons/01-typescript-basics/tests/TradeForm.test.tsx - Component tests"
    ],
    testCommand: "./scripts/check-a1s1.sh",
    hintsPath: "teacher/a1s1/hints.md",
    rubricPath: "teacher/a1s1/rubric.md",
    ideFiles: [
      "lessons/01-typescript-basics/trade.ts",
      "lessons/01-typescript-basics/validators.ts",
      "lessons/01-typescript-basics/tests/validators.test.ts"
    ],
    nextSessionId: "a1s2",
    nextSessionTitle: "Session A1S2: Database Models with SQLAlchemy"
  },
  "a1s2": {
    id: "a1s2",
    title: "Session A1S2: Database Models with SQLAlchemy",
    description: "Define SQLAlchemy models, create database migrations with Alembic, and implement CRUD operations for the Trade model. Learn ORM concepts and database testing.",
    duration: "~50 minutes",
    taskCount: 6,
    difficulty: "Beginner",
    arc: "Phase A: Foundation",
    language: "Python",
    deliverables: [
      "lessons/02-database-models/trade_model.py - SQLAlchemy Trade model",
      "lessons/02-database-models/database.py - Database connection setup",
      "alembic/versions/*_create_trades_table.py - Migration file",
      "lessons/02-database-models/tests/conftest.py - Pytest fixtures",
      "lessons/02-database-models/tests/test_trade_model.py - Model tests (70%+ coverage)"
    ],
    testCommand: "./scripts/check-a1s2.sh",
    hintsPath: "teacher/a1s2/hints.md",
    rubricPath: "teacher/a1s2/rubric.md",
    ideFiles: [
      "lessons/02-database-models/trade_model.py",
      "lessons/02-database-models/database.py",
      "lessons/02-database-models/tests/test_trade_model.py"
    ],
    nextSessionId: "a1s3",
    nextSessionTitle: "Session A1S3: FastAPI Endpoints"
  },
  "a1s3": {
    id: "a1s3",
    title: "Session A1S3: FastAPI Endpoints",
    description: "Create REST API endpoints for trades with FastAPI. Implement request validation, error handling, and comprehensive API tests.",
    duration: "~50 minutes",
    taskCount: 6,
    difficulty: "Intermediate",
    arc: "Phase A: Foundation",
    language: "Python",
    deliverables: [
      "lessons/03-api-endpoints/trades_router.py - REST API endpoints",
      "lessons/03-api-endpoints/trade_schema.py - Pydantic request/response models",
      "lessons/03-api-endpoints/tests/test_trades_api.py - API tests (70%+ coverage)",
      "API documentation - Auto-generated with FastAPI"
    ],
    testCommand: "./scripts/check-a1s3.sh",
    hintsPath: "teacher/a1s3/hints.md",
    rubricPath: "teacher/a1s3/rubric.md",
    ideFiles: [
      "lessons/03-api-endpoints/trades_router.py",
      "lessons/03-api-endpoints/trade_schema.py",
      "lessons/03-api-endpoints/tests/test_trades_api.py"
    ],
    nextSessionId: "b1s1",
    nextSessionTitle: "Session B1S1: API Integration & State Management"
  }
};

export function getSessionMetadata(sessionId: string): SessionMetadata | undefined {
  return SESSION_METADATA[sessionId];
}
