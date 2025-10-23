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
      id: "complete-unit-tests",
      title: "Complete Unit Tests",
      description: "Fill in test implementations (tests already exist with TODO markers)",
      details: [
        "Open packages/types/src/__tests__/validators.test.ts",
        "Find test functions with TODO(student) comments",
        "Replace 'pass' statements with actual test code",
        "Test each validation function with edge cases",
        "Run: npm test",
        "Verify 70%+ coverage: npm run test:coverage"
      ],
      files: ["packages/types/src/__tests__/validators.test.ts"],
      codeExample: `// Test file already exists with this structure:
describe('validateSymbol', () => {
  it('should accept valid symbols', () => {
    // TODO(student): Implement test
    // Hint: expect(validateSymbol('AAPL')).toBe(true);
  });
  
  it('should reject invalid symbols', () => {
    // TODO(student): Implement test
    // Hint: expect(validateSymbol('aapl')).toBe(false);
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
      id: "complete-component-tests",
      title: "Complete Component Tests",
      description: "Fill in component test implementations (tests already exist with TODO markers)",
      details: [
        "Open apps/web/src/components/__tests__/TradeForm.test.tsx",
        "Find test functions with TODO(student) comments",
        "Replace 'pass' statements with actual test code",
        "Test form rendering",
        "Test validation error display",
        "Test P&L calculation",
        "Run: npm test"
      ],
      files: ["apps/web/src/components/__tests__/TradeForm.test.tsx"],
      codeExample: `// Test file already exists with this structure:
describe('TradeForm', () => {
  it('should render all form fields', () => {
    // TODO(student): Render component and assert fields exist
    // Hint: render(<TradeForm />);
    // Hint: expect(screen.getByLabelText('Symbol')).toBeInTheDocument();
  });
});`
    },
    {
      id: "run-all-checks",
      title: "Run All Checks",
      description: "Verify everything works",
      details: [
        "Navigate to project root directory",
        "Run: npm run check:all",
        "Verify all tests pass",
        "Check coverage >= 70%",
        "Fix any ESLint errors",
        "Run validation: ./scripts/check-a1s1.sh"
      ],
      codeExample: `# From project root directory:
cd /path/to/stoa-of-attalos

# Run all checks
npm run check:all

# Run session validation
./scripts/check-a1s1.sh`
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
      id: "complete-model-tests",
      title: "Complete Model Tests",
      description: "Fill in test implementations (tests already exist with TODO markers)",
      details: [
        "Open apps/api/tests/test_trade_model.py",
        "Find test functions with TODO(student) comments",
        "Replace 'pass' statements with actual test code",
        "Test CRUD operations (create, read, update, delete)",
        "Test P&L calculation",
        "Test CHECK constraints (negative prices should fail)",
        "Run: poetry run pytest apps/api/tests/ -v",
        "Verify 70%+ coverage"
      ],
      files: ["apps/api/tests/test_trade_model.py"],
      codeExample: `# Test file already exists with this structure:
def test_create_trade(db_session):
    """Test creating a trade instance"""
    # TODO(student): Create a trade and assert properties
    # Hint: trade = Trade(symbol="AAPL", entry_price=Decimal("150.00"), ...)
    # Hint: db_session.add(trade)
    # Hint: db_session.commit()
    # Hint: assert trade.id is not None
    pass  # Replace this with your implementation`
    },
    {
      id: "verify-and-submit",
      title: "Verify and Submit",
      description: "Run validation script",
      details: [
        "Navigate to project root directory",
        "Run: ./scripts/check-a1s2.sh",
        "Verify 70%+ coverage",
        "Check all tests pass",
        "Fix any issues"
      ],
      codeExample: `# From project root directory:
cd /path/to/stoa-of-attalos

# Run session validation
./scripts/check-a1s2.sh

# If tests fail, run individually:
poetry run pytest apps/api/tests/ -v`
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
      id: "complete-api-tests",
      title: "Complete API Tests",
      description: "Fill in test implementations (tests already exist with TODO markers)",
      details: [
        "Open apps/api/tests/test_trades_api.py",
        "Find test functions with TODO(student) comments",
        "Replace 'pass' statements with actual test code",
        "Use FastAPI TestClient to test endpoints",
        "Test POST, GET, PUT, DELETE endpoints",
        "Test error cases (404 Not Found, 400 Bad Request)",
        "Navigate to project root directory",
        "Run: poetry run pytest apps/api/tests/ -v",
        "Run validation: ./scripts/check-a1s3.sh",
        "Verify 70%+ coverage"
      ],
      files: ["apps/api/tests/test_trades_api.py"],
      codeExample: `# Test file already exists with this structure:
def test_create_trade(client):
    """Test POST /api/trades"""
    # TODO(student): Send POST request and verify response
    # Hint: response = client.post("/api/trades", json={...})
    # Hint: assert response.status_code == 201
    # Hint: assert response.json()["symbol"] == "AAPL"
    pass  # Replace this with your implementation

# From project root directory:
cd /path/to/stoa-of-attalos

# Run tests
poetry run pytest apps/api/tests/ -v

# Run validation
./scripts/check-a1s3.sh`
    }
  ]
};

export function getSessionTasks(sessionId: string): SessionTask[] {
  return SESSION_TASKS[sessionId] || [];
}
