# A1S2 Progressive Hints

Use these hints if you get stuck. Start with Tier 1 and only move to the next tier if needed.

---

## Tier 1: Conceptual Hints (No Code)

### Defining the Model
- Think about how database tables map to Python classes
- Each column becomes a class attribute
- The ORM handles SQL generation for you
- Constraints ensure data integrity at the database level

### Computed Columns
- P&L can be calculated automatically by the database
- Use a formula: (exit_price - entry_price) × shares
- The database keeps it in sync automatically

### Migrations
- Migrations are like Git commits for your database schema
- Alembic can auto-generate migrations by comparing models to database
- Always review auto-generated migrations before applying

### Testing
- Test databases should be separate from development databases
- Fixtures set up and tear down test data automatically
- Each test should be independent (no shared state)

---

## Tier 2: Implementation Guidance (Patterns)

### Model Structure
```python
class Trade(Base):
    __tablename__ = "trades"
    __table_args__ = (
        # Add CHECK constraints here
        {"schema": "trading"}
    )
    
    # Define columns with Column()
    # Use proper types: UUID, String, Numeric, Integer, DateTime
    # Add nullable=False where appropriate
```

### Column Types
- **UUID**: `Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)`
- **String**: `Column(String(10), nullable=False)`
- **Numeric**: `Column(Numeric(12, 4), nullable=False)` for prices
- **Integer**: `Column(Integer, nullable=False)` for shares
- **DateTime**: `Column(DateTime(timezone=True), default=func.now())`
- **Computed**: `Column(Numeric(12, 2), Computed('formula'))`

### Constraints
```python
CheckConstraint('entry_price > 0', name='check_entry_price_positive')
CheckConstraint('exit_price > 0', name='check_exit_price_positive')
CheckConstraint('shares > 0', name='check_shares_positive')
```

### Database Connection
```python
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

### Test Fixtures
```python
@pytest.fixture(scope="session")
def engine():
    # Create engine, create tables, yield, drop tables
    pass

@pytest.fixture(scope="function")
def db_session(engine):
    # Create connection, transaction, session
    # Yield session
    # Rollback and close
    pass
```

### CRUD Operations
```python
# Create
trade = Trade(symbol="AAPL", ...)
session.add(trade)
session.commit()

# Read
trade = session.query(Trade).filter_by(id=trade_id).first()

# Update
trade.symbol = "MSFT"
session.commit()

# Delete
session.delete(trade)
session.commit()
```

### Alembic Commands
```bash
# Initialize (first time only)
alembic init alembic

# Create migration
alembic revision --autogenerate -m "add trades table"

# Apply migration
alembic upgrade head

# Rollback
alembic downgrade -1
```

---

## Tier 3: Detailed Code (Near-Solution)

### Key Imports and Structure
```python
from sqlalchemy import Column, String, Numeric, Integer, DateTime, Text, CheckConstraint, Computed
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
import uuid

Base = declarative_base()
```

### Model Example
```python
class Trade(Base):
    __tablename__ = "trades"
    __table_args__ = (
        CheckConstraint('entry_price > 0', name='check_entry_price_positive'),
        {"schema": "trading"}
    )
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    symbol = Column(String(10), nullable=False)
    entry_price = Column(Numeric(12, 4), nullable=False)
    # ... add remaining columns
    pnl = Column(Numeric(12, 2), Computed('(exit_price - entry_price) * shares'))
```

### Test Example
```python
def test_create_trade(db_session):
    trade = Trade(
        symbol="AAPL",
        entry_price=Decimal("150.00"),
        exit_price=Decimal("155.00"),
        shares=100
    )
    db_session.add(trade)
    db_session.commit()
    
    assert trade.id is not None
    assert trade.pnl == Decimal("500.00")
```

**Need complete solutions?** Check `teacher/a1s2/solutions/` folder for full implementations.

---

## 🎯 Common Issues & Solutions

### Issue: "Can't connect to database"
**Solution:** Make sure PostgreSQL is running:
```bash
docker-compose -f .devcontainer/docker-compose.yml ps
```

### Issue: "Module not found"
**Solution:** Make sure you're in the poetry environment:
```bash
poetry shell
# or
poetry run pytest
```

### Issue: "Migration not detected"
**Solution:** Make sure your model imports Base and is imported in alembic/env.py

### Issue: "Tests fail with constraint violations"
**Solution:** Use `pytest.raises(IntegrityError)` to test constraints

### Issue: "Computed column not working"
**Solution:** Make sure to commit() after add() so the database calculates it

---

## 💡 Pro Tips

1. **Use Decimal for money** - Avoids floating point errors
2. **Always review migrations** - Auto-generate is helpful but not perfect
3. **Test constraints** - Verify database enforces rules
4. **Isolate tests** - Use transactions that rollback
5. **Use repr** - Makes debugging easier

---

**Still stuck?** Check the solutions folder or ask for help!
