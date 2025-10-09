# Phase B: Integration

**Goal:** Connect frontend to backend, add authentication

## B1S1: API Integration & State Management

**Duration:** 50 min | **Language:** TypeScript | **Status:** Planned

**Objectives:**
- Connect React to FastAPI backend
- Implement API client with error handling
- Add loading and error states
- Handle async operations
- Implement optimistic updates

**Deliverables:**
- `apps/web/lib/api-client.ts`
- `apps/web/hooks/useTrades.ts`
- `apps/web/components/TradeList.tsx`

**Key Concepts:**
- Fetch API / Axios
- React hooks (useState, useEffect)
- Error boundaries
- Optimistic UI

## B1S2: Authentication with JWT

**Duration:** 50 min | **Language:** Python + TypeScript | **Status:** Planned

**Objectives:**
- Implement JWT authentication
- Add user registration and login
- Protect API routes with middleware
- Store tokens securely (HTTP-only cookies)
- Handle token refresh

**Deliverables:**
- `apps/api/auth/jwt.py`
- `apps/api/routers/auth.py`
- `apps/api/models/user.py`
- `apps/web/contexts/AuthContext.tsx`

**Key Concepts:**
- JWT (JSON Web Tokens)
- Password hashing (bcrypt)
- Protected routes
- Authentication vs Authorization
