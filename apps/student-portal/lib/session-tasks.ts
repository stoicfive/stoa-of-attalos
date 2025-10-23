// Trading Journal Session Tasks
// Aligned with teacher/ directory content

export interface SessionTask {
  id: string;
  title: string;
  description: string;
  details: string[];
  codeExample?: string;
  files?: string[];
}

export const SESSION_TASKS: Record<string, SessionTask[]> = {
  "a1s1": [
    {
      id: "create-trade-type",
      title: "Create the Trade Type",
      description: "Define the TypeScript interface for a trade entry",
      details: [
        "Create packages/types/src/trade.ts",
        "Define the Trade interface with all required fields",
        "Add JSDoc comments for documentation",
        "Export the interface properly"
      ],
      files: ["packages/types/src/trade.ts"],
      codeExample: `interface Trade {
  symbol: string;        // Stock ticker (e.g., "AAPL")
  entryPrice: number;    // Entry price
  exitPrice: number;     // Exit price
  shares: number;        // Number of shares
  tradeDate: Date;       // Trade date
  notes?: string;        // Optional notes
}`
    },
    {
      id: "implement-validators",
      title: "Implement Validation Functions",
      description: "Create validation functions for trade data",
      details: [
        "Create packages/types/src/validators.ts",
        "Implement validateSymbol() - uppercase, 1-5 chars",
        "Implement validatePrice() - positive number",
        "Implement validateShares() - positive integer",
        "Implement validateTrade() - validate entire trade object"
      ],
      files: ["packages/types/src/validators.ts"],
      codeExample: `export function validateSymbol(symbol: string): boolean {
  return /^[A-Z]{1,5}$/.test(symbol);
}

export function validatePrice(price: number): boolean {
  return price > 0;
}`
    },
    {
      id: "write-unit-tests",
      title: "Write Unit Tests",
      description: "Test validation functions with 70%+ coverage",
      details: [
        "Create packages/types/src/__tests__/validators.test.ts",
        "Test each validation function",
        "Test edge cases (empty strings, negative numbers, etc.)",
        "Run: npm test",
        "Verify 70%+ coverage: npm run test:coverage"
      ],
      files: ["packages/types/src/__tests__/validators.test.ts"],
      codeExample: `describe('validateSymbol', () => {
  it('should accept valid symbols', () => {
    expect(validateSymbol('AAPL')).toBe(true);
    expect(validateSymbol('MSFT')).toBe(true);
  });
  
  it('should reject invalid symbols', () => {
    expect(validateSymbol('aapl')).toBe(false);
    expect(validateSymbol('TOOLONG')).toBe(false);
  });
});`
    },
    {
      id: "create-trade-form",
      title: "Create TradeForm Component",
      description: "Build a React form for trade entry",
      details: [
        "Create apps/web/src/components/TradeForm.tsx",
        "Use controlled inputs for each field",
        "Display validation errors",
        "Calculate P&L automatically: (exitPrice - entryPrice) * shares",
        "Show P&L in green (profit) or red (loss)"
      ],
      files: ["apps/web/src/components/TradeForm.tsx"]
    },
    {
      id: "add-component-tests",
      title: "Add Component Tests",
      description: "Test the TradeForm component",
      details: [
        "Create apps/web/src/components/__tests__/TradeForm.test.tsx",
        "Test form rendering",
        "Test validation error display",
        "Test P&L calculation",
        "Run: npm test"
      ],
      files: ["apps/web/src/components/__tests__/TradeForm.test.tsx"]
    },
    {
      id: "run-all-checks",
      title: "Run All Checks",
      description: "Verify everything works",
      details: [
        "Run: npm run check:all",
        "Verify all tests pass",
        "Check coverage >= 70%",
        "Fix any ESLint errors",
        "Run: ./scripts/check-a1s1.sh"
      ]
    }
  ],
  
  "a1s2": [
    {
      id: "define-trade-model",
      title: "Define the Trade Model",
      description: "Create SQLAlchemy model for trades",
      details: [
        "Create apps/api/models/trade.py",
        "Set table name to 'trades' and schema to 'trading'",
        "Add all columns with proper types (UUID, VARCHAR, NUMERIC, etc.)",
        "Add CHECK constraints for positive values",
        "Add computed P&L column"
      ],
      files: ["apps/api/models/trade.py"],
      codeExample: `from sqlalchemy import Column, String, Numeric, Integer, DateTime, CheckConstraint
from sqlalchemy.dialects.postgresql import UUID
import uuid

class Trade(Base):
    __tablename__ = "trades"
    __table_args__ = {"schema": "trading"}
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    symbol = Column(String(5), nullable=False)
    entry_price = Column(Numeric(10, 2), nullable=False)
    # ... more columns`
    },
    {
      id: "create-database-connection",
      title: "Create Database Connection",
      description: "Set up SQLAlchemy engine and session",
      details: [
        "Create apps/api/database.py",
        "Configure SQLAlchemy engine with PostgreSQL URL",
        "Create session maker",
        "Add get_db() helper function for dependency injection"
      ],
      files: ["apps/api/database.py"],
      codeExample: `from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://user:pass@localhost/trading"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)`
    },
    {
      id: "create-migration",
      title: "Create Database Migration",
      description: "Use Alembic to create migration",
      details: [
        "Initialize Alembic: poetry run alembic init alembic",
        "Configure alembic.ini with database URL",
        "Generate migration: poetry run alembic revision --autogenerate -m 'create trades table'",
        "Review migration file in alembic/versions/",
        "Apply migration: poetry run alembic upgrade head"
      ]
    },
    {
      id: "write-test-fixtures",
      title: "Write Test Fixtures",
      description: "Create pytest fixtures for testing",
      details: [
        "Create apps/api/tests/conftest.py",
        "Create test database engine",
        "Create session fixture with setup/teardown",
        "Add sample trade fixture for tests"
      ],
      files: ["apps/api/tests/conftest.py"],
      codeExample: `@pytest.fixture
def db_session():
    engine = create_engine("postgresql://test")
    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()
    yield session
    session.close()
    Base.metadata.drop_all(engine)`
    },
    {
      id: "write-model-tests",
      title: "Write Model Tests",
      description: "Test CRUD operations and constraints",
      details: [
        "Create apps/api/tests/test_trade_model.py",
        "Test creating a trade",
        "Test reading trades",
        "Test updating trades",
        "Test deleting trades",
        "Test P&L calculation",
        "Test CHECK constraints",
        "Run: poetry run pytest apps/api/tests/ -v"
      ],
      files: ["apps/api/tests/test_trade_model.py"]
    },
    {
      id: "verify-and-submit",
      title: "Verify and Submit",
      description: "Run validation script",
      details: [
        "Run: ./scripts/check-a1s2.sh",
        "Verify 70%+ coverage",
        "Check all tests pass",
        "Fix any issues"
      ]
    }
  ],
  
  "a1s3": [
    {
      id: "create-trade-router",
      title: "Create Trade Router",
      description: "Set up FastAPI router for trades",
      details: [
        "Create apps/api/routers/trades.py",
        "Import FastAPI router",
        "Set up router with prefix='/api/trades'",
        "Import Trade model and database session"
      ],
      files: ["apps/api/routers/trades.py"]
    },
    {
      id: "create-pydantic-schemas",
      title: "Create Pydantic Schemas",
      description: "Define request/response models",
      details: [
        "Create apps/api/schemas/trade.py",
        "Define TradeCreate schema (for POST requests)",
        "Define TradeUpdate schema (for PUT requests)",
        "Define TradeResponse schema (for responses)",
        "Add validation rules"
      ],
      files: ["apps/api/schemas/trade.py"],
      codeExample: `from pydantic import BaseModel, Field

class TradeCreate(BaseModel):
    symbol: str = Field(..., min_length=1, max_length=5)
    entry_price: float = Field(..., gt=0)
    exit_price: float = Field(..., gt=0)
    shares: int = Field(..., gt=0)`
    },
    {
      id: "implement-post-endpoint",
      title: "Implement POST /api/trades",
      description: "Create endpoint to add new trade",
      details: [
        "Add POST endpoint in trades.py",
        "Accept TradeCreate schema",
        "Validate input",
        "Create Trade model instance",
        "Save to database",
        "Return TradeResponse with 201 status"
      ],
      codeExample: `@router.post("/", response_model=TradeResponse, status_code=201)
def create_trade(trade: TradeCreate, db: Session = Depends(get_db)):
    db_trade = Trade(**trade.dict())
    db.add(db_trade)
    db.commit()
    db.refresh(db_trade)
    return db_trade`
    },
    {
      id: "implement-get-endpoints",
      title: "Implement GET Endpoints",
      description: "Create endpoints to retrieve trades",
      details: [
        "Add GET /api/trades - list all trades",
        "Add GET /api/trades/{id} - get single trade",
        "Handle 404 Not Found for invalid IDs",
        "Return proper error messages"
      ]
    },
    {
      id: "implement-put-delete",
      title: "Implement PUT and DELETE",
      description: "Add update and delete endpoints",
      details: [
        "Add PUT /api/trades/{id} - update trade",
        "Add DELETE /api/trades/{id} - delete trade",
        "Validate updates",
        "Handle 404 for non-existent trades",
        "Return appropriate status codes"
      ]
    },
    {
      id: "write-api-tests",
      title: "Write API Tests",
      description: "Test all endpoints",
      details: [
        "Create apps/api/tests/test_trades_api.py",
        "Use FastAPI TestClient",
        "Test POST endpoint",
        "Test GET endpoints",
        "Test PUT endpoint",
        "Test DELETE endpoint",
        "Test error cases (404, 400)",
        "Run: poetry run pytest apps/api/tests/ -v",
        "Run: ./scripts/check-a1s3.sh"
      ],
      files: ["apps/api/tests/test_trades_api.py"]
    }
  ]
};

export function getSessionTasks(sessionId: string): SessionTask[] {
  return SESSION_TASKS[sessionId] || [];
}
