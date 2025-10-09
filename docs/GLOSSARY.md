# Trading Journal SaaS - Learning Glossary

A comprehensive glossary of terms used throughout the course, organized by learning phase.

## Phase A: Foundation (A1→A3)

### A1: Core Concepts

**Trade**
> A single buy-sell transaction. Think of it like a receipt for a purchase and sale.
- Example: Bought 100 shares of AAPL at $150, sold at $155

**Symbol (Ticker)**
> The unique identifier for a stock. Like a license plate for a company.
- Format: 1-5 uppercase letters (e.g., AAPL, MSFT, GOOGL)

**Entry Price**
> The price you paid when buying. Your "cost basis."
- Must be positive, typically has 2-4 decimal places

**Exit Price**
> The price you received when selling. Your "sale price."
- Must be positive, determines your profit or loss

**Shares**
> The quantity you traded. Must be a whole number.
- Example: 100 shares, not 100.5 shares

**P&L (Profit & Loss)**
> Your gain or loss on a trade. Simple math: (Exit - Entry) × Shares
- Formula: `pnl = (exit_price - entry_price) * shares`
- Positive = profit, Negative = loss

**Validation**
> Checking if data meets rules before saving. Like a bouncer at a club.
- Client-side: Fast feedback for users
- Server-side: Security and data integrity

**Type Safety**
> Using TypeScript to catch errors before runtime. Like spell-check for code.
- Prevents: `trade.symbol = 123` (should be string)

### A2: Database Concepts

**ORM (Object-Relational Mapping)**
> Translates between code objects and database tables. Like a translator between Python and SQL.
- Tool: SQLAlchemy
- Benefit: Write Python, get SQL automatically

**Migration**
> A versioned change to database structure. Like Git commits for your schema.
- Tool: Alembic
- Example: Adding a new column to trades table

**Model**
> A Python class representing a database table. Blueprint for data.
```python
class Trade(Base):
    __tablename__ = "trades"
    id = Column(UUID, primary_key=True)
```

**CRUD**
> Create, Read, Update, Delete. The four basic operations.
- Create: Add new trade
- Read: Fetch trades
- Update: Modify existing trade
- Delete: Remove trade

**Primary Key**
> Unique identifier for each row. Like a social security number.
- Type: UUID (universally unique identifier)

**Foreign Key**
> Links two tables together. Like a reference in a book.
- Example: `user_id` in trades table points to users table

### A3: API Concepts

**REST API**
> A way for frontend and backend to talk. Like a waiter taking orders.
- GET: Fetch data
- POST: Create new data
- PUT/PATCH: Update data
- DELETE: Remove data

**Endpoint**
> A specific URL path for an API operation. Like a phone extension.
- Example: `GET /api/trades` - fetch all trades
- Example: `POST /api/trades` - create new trade

**Request/Response**
> The conversation between client and server.
- Request: What you ask for
- Response: What you get back

**Status Code**
> HTTP code indicating success or failure. Traffic lights for APIs.
- 200: Success
- 201: Created
- 400: Bad request (client error)
- 404: Not found
- 500: Server error

**Validation Error**
> When request data doesn't meet requirements. Like a form with missing fields.
- Returns: 422 Unprocessable Entity

## Phase B: Integration (B1→B2)

### B1: Frontend-Backend Integration

**API Client**
> Code that makes HTTP requests. Like a phone app for calling APIs.
- Tool: fetch, axios
- Handles: Authentication, error handling, retries

**State Management**
> Keeping track of data in your app. Like short-term memory.
- Local state: Component-specific (useState)
- Global state: App-wide (Context, Redux)

**Loading State**
> Showing users that something is happening. Like a progress bar.
- States: idle, loading, success, error

**Error Boundary**
> Catches errors in React components. Safety net for your UI.
- Prevents: Entire app crashing from one error

**Optimistic Update**
> Update UI before server confirms. Feels instant.
- Example: Like button turns blue immediately, syncs later

### B2: Authentication & Security

**JWT (JSON Web Token)**
> A secure way to prove identity. Like a digital passport.
- Contains: User ID, expiration, signature
- Stored: localStorage or httpOnly cookie

**Authentication**
> Proving who you are. Like showing ID at airport.
- Methods: Email/password, OAuth, magic links

**Authorization**
> Checking what you're allowed to do. Like access levels.
- Example: Only owner can delete their trades

**Hash**
> One-way encryption for passwords. Like a paper shredder.
- Tool: bcrypt
- Never store plain passwords!

**Salt**
> Random data added before hashing. Makes each hash unique.
- Prevents: Rainbow table attacks

**CORS (Cross-Origin Resource Sharing)**
> Browser security for API calls. Like customs at border.
- Allows: Frontend on localhost:3000 to call API on localhost:8000

## Phase C: Advanced Features (C1→C2)

### C1: Analytics & Visualization

**Equity Curve**
> Graph of account balance over time. Your trading report card.
- X-axis: Time
- Y-axis: Account value

**Win Rate**
> Percentage of profitable trades. Batting average for trading.
- Formula: `winning_trades / total_trades * 100`

**Expectancy**
> Average profit per trade. Your edge.
- Formula: `(win_rate * avg_win) - (loss_rate * avg_loss)`

**R-Multiple**
> Profit relative to risk. How many times your risk you made.
- Example: Risk $100, make $300 = 3R

**Drawdown**
> Decline from peak to trough. How much you lost from your high.
- Max drawdown: Worst losing streak

**Sharpe Ratio**
> Risk-adjusted return. Quality of returns vs volatility.
- Higher = better risk-adjusted performance

### C2: Payments & Production

**Webhook**
> Server-to-server notification. Like a doorbell for APIs.
- Use: Stripe notifies your app of payment events

**Idempotency**
> Same request = same result. Prevents duplicate charges.
- Key: Unique ID for each payment attempt

**Subscription**
> Recurring payment. Like Netflix billing.
- Tiers: Free, Pro, Enterprise

**Stripe**
> Payment processing platform. Like a cash register for the internet.
- Handles: Credit cards, compliance, fraud

**Environment Variable**
> Configuration stored outside code. Secrets management.
- Example: API keys, database URLs
- Never commit to Git!

**Deployment**
> Publishing your app to production. Going live.
- Platforms: Vercel (frontend), Railway (backend)

## Testing Terminology

**Unit Test**
> Tests a single function in isolation. Like testing a single gear.
- Fast, focused, 70% of tests

**Integration Test**
> Tests multiple components together. Like testing a whole machine.
- Slower, broader, 25% of tests

**E2E Test (End-to-End)**
> Tests entire user flow. Like a customer using your product.
- Slowest, most realistic, 5% of tests

**Mock**
> Fake version of a dependency. Like a stunt double.
- Use: Test without hitting real database/API

**Fixture**
> Predefined test data. Like props on a movie set.
- Ensures: Consistent, reproducible tests

**Coverage**
> Percentage of code tested. How much is protected.
- Target: ≥70% for this course

**TDD (Test-Driven Development)**
> Write test first, then code. Red → Green → Refactor.
- Benefits: Better design, fewer bugs

## Development Tools

**Dev Container**
> Dockerized development environment. Everyone has identical setup.
- Includes: Node.js, Python, PostgreSQL

**CI/CD**
> Continuous Integration/Deployment. Automated testing and deployment.
- Tool: GitHub Actions
- Runs: On every push and PR

**Linter**
> Tool that checks code style. Grammar checker for code.
- JS/TS: ESLint
- Python: Ruff

**Formatter**
> Tool that auto-formats code. Auto-correct for code.
- JS/TS: Prettier
- Python: Ruff/Black

**Type Checker**
> Verifies types are used correctly. Catches type errors.
- TypeScript: tsc
- Python: MyPy

## Learning Science Terms

**Chunking**
> Breaking learning into small pieces. Bite-sized sessions.
- Our approach: 50-minute sessions

**Active Recall**
> Testing yourself to remember. More effective than re-reading.
- Our approach: Pre-session quizzes

**Spaced Repetition**
> Reviewing at increasing intervals. Fights forgetting curve.
- Our approach: 24h and 7d reviews

**Interleaving**
> Mixing different topics. Prevents illusion of competence.
- Our approach: Rotate TS → Python → SQL

**Deliberate Practice**
> Focused practice with feedback. Not just repetition.
- Our approach: TDD with failing tests

---

## Quick Reference

### Common Abbreviations

- **API**: Application Programming Interface
- **CRUD**: Create, Read, Update, Delete
- **CSV**: Comma-Separated Values
- **DB**: Database
- **DoD**: Definition of Done
- **E2E**: End-to-End
- **JWT**: JSON Web Token
- **ORM**: Object-Relational Mapping
- **P&L**: Profit & Loss
- **PR**: Pull Request
- **REST**: Representational State Transfer
- **SQL**: Structured Query Language
- **TDD**: Test-Driven Development
- **TS**: TypeScript
- **UI**: User Interface
- **UUID**: Universally Unique Identifier

### Metaphor Index

- **Validation** = Bouncer at a club
- **ORM** = Translator between languages
- **Migration** = Git commits for database
- **REST API** = Waiter taking orders
- **Status Code** = Traffic lights
- **JWT** = Digital passport
- **Hash** = Paper shredder
- **Webhook** = Doorbell for APIs
- **Mock** = Stunt double
- **Fixture** = Movie props
- **Linter** = Grammar checker
- **Dev Container** = Identical workspaces for everyone

---

**Pro Tip**: When you encounter a new term, add it to this glossary with your own metaphor. Teaching others is the best way to learn!
