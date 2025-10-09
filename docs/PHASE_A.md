# Phase A: Foundation

**Goal:** Build core data models, validation, and CRUD operations

## A1S1: Project Setup & First Entry ⭐

**Duration:** 50 min | **Language:** TypeScript | **Status:** Ready

**Objectives:**
- Create `Trade` interface with proper types
- Implement validation functions (symbol, price, shares)
- Write unit tests (70% coverage)
- Build React trade entry form

**Deliverables:**
- `packages/types/src/trade.ts`
- `packages/types/src/validators.ts`
- `packages/types/src/__tests__/validators.test.ts`

**Check:** `./scripts/check-a1s1.sh`

## A1S2: Database Models with SQLAlchemy

**Duration:** 50 min | **Language:** Python | **Status:** Planned

**Objectives:**
- Define `Trade` model with SQLAlchemy
- Create Alembic migrations
- Write model tests with Pytest
- Implement CRUD operations

**Deliverables:**
- `apps/api/models/trade.py`
- `apps/api/tests/test_trade_model.py`
- `alembic/versions/001_initial.py`

## A1S3: FastAPI Endpoints

**Duration:** 50 min | **Language:** Python | **Status:** Planned

**Objectives:**
- Create REST API (GET, POST, PUT, DELETE)
- Implement Pydantic validation
- Add error handling
- Write API integration tests

**Deliverables:**
- `apps/api/routers/trades.py`
- `apps/api/schemas/trade.py`
- `apps/api/tests/test_trades_api.py`

**Endpoints:** `/api/trades`, `/api/trades/{id}`
