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
      "packages/types/src/trade.ts - Trade interface",
      "packages/types/src/validators.ts - Validation functions",
      "packages/types/src/__tests__/validators.test.ts - Unit tests (70%+ coverage)",
      "apps/web/src/components/TradeForm.tsx - React form component",
      "apps/web/src/components/__tests__/TradeForm.test.tsx - Component tests"
    ],
    testCommand: "./scripts/check-a1s1.sh",
    hintsPath: "teacher/a1s1/hints.md",
    rubricPath: "teacher/a1s1/rubric.md",
    ideFiles: [
      "packages/types/src/trade.ts",
      "packages/types/src/validators.ts",
      "apps/web/src/components/TradeForm.tsx"
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
      "apps/api/models/trade.py - SQLAlchemy Trade model",
      "apps/api/database.py - Database connection setup",
      "alembic/versions/*.py - Database migration",
      "apps/api/tests/conftest.py - Test fixtures",
      "apps/api/tests/test_trade_model.py - Model tests (70%+ coverage)"
    ],
    testCommand: "./scripts/check-a1s2.sh",
    hintsPath: "teacher/a1s2/hints.md",
    rubricPath: "teacher/a1s2/rubric.md",
    ideFiles: [
      "apps/api/models/trade.py",
      "apps/api/database.py",
      "apps/api/tests/test_trade_model.py"
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
      "apps/api/routers/trades.py - REST API endpoints",
      "apps/api/schemas/trade.py - Pydantic request/response models",
      "apps/api/tests/test_trades_api.py - API tests (70%+ coverage)",
      "API documentation - Auto-generated with FastAPI"
    ],
    testCommand: "./scripts/check-a1s3.sh",
    hintsPath: "teacher/a1s3/hints.md",
    rubricPath: "teacher/a1s3/rubric.md",
    ideFiles: [
      "apps/api/routers/trades.py",
      "apps/api/schemas/trade.py",
      "apps/api/tests/test_trades_api.py"
    ],
    nextSessionId: "b1s1",
    nextSessionTitle: "Session B1S1: API Integration & State Management"
  }
};

export function getSessionMetadata(sessionId: string): SessionMetadata | undefined {
  return SESSION_METADATA[sessionId];
}
