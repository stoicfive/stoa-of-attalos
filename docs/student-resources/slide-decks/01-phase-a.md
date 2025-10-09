# Phase A: Foundation

---

## Slide 1: Phase A Overview 🏗️

**Goal: Build the Core**

3 sessions to create:
- ✅ Data models with TypeScript
- ✅ Database with SQLAlchemy
- ✅ REST API with FastAPI

**By the end:** You'll have a working backend!

---

## Slide 2: A1S1 - TypeScript Validation 📝

**What you'll build:**

```typescript
interface Trade {
  symbol: string;      // AAPL, MSFT
  entryPrice: number;  // 150.00
  exitPrice: number;   // 155.00
  shares: number;      // 100
  date: Date;
}
```

**Plus validation functions:**
- `validateSymbol()` - 1-5 uppercase letters
- `validatePrice()` - Positive numbers only
- `validateShares()` - Positive integers only
- `calculatePnL()` - (exit - entry) × shares

---

## Slide 3: A1S1 - The TDD Flow 🔄

**Red → Green → Refactor**

1. **Red:** Run tests → They fail ❌
2. **Green:** Write code → Tests pass ✅
3. **Refactor:** Improve code quality 🔄

**Watch mode shows results instantly!**

```bash
npm run test:watch
```

---

## Slide 4: A1S2 - Database Models 🗄️

**From TypeScript to PostgreSQL:**

```python
class Trade(Base):
    __tablename__ = "trades"
    __table_args__ = {"schema": "trading"}
    
    id = Column(UUID, primary_key=True)
    symbol = Column(String(5), nullable=False)
    entry_price = Column(Numeric(10, 4))
    exit_price = Column(Numeric(10, 4))
    shares = Column(Integer)
    pnl = Column(Numeric(12, 2), Computed)
```

**Learn:** ORM, Migrations, CRUD operations

---

## Slide 5: A1S2 - Alembic Migrations 🔄

**Version control for your database:**

```bash
# Create migration
alembic revision --autogenerate -m "add trades table"

# Apply migration
alembic upgrade head

# Rollback if needed
alembic downgrade -1
```

**Like Git, but for database schema!**

---

## Slide 6: A1S3 - REST API Endpoints 🌐

**Build 5 endpoints:**

```python
GET    /api/trades          # List all
POST   /api/trades          # Create new
GET    /api/trades/{id}     # Get one
PUT    /api/trades/{id}     # Update
DELETE /api/trades/{id}     # Delete
```

**Test with:**
- Pytest for unit tests
- HTTP client for manual testing
- OpenAPI docs at `/docs`

---

## Slide 7: Phase A Deliverables 📦

**By the end of Phase A, you'll have:**

✅ TypeScript types and validation  
✅ PostgreSQL database with trades table  
✅ FastAPI REST API (full CRUD)  
✅ 70%+ test coverage  
✅ All CI checks passing  

**Ready for Phase B: Integration!**
