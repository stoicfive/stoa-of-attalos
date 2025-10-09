# Phase B: Integration

---

## Slide 1: Phase B Overview 🔗

**Goal: Connect Everything**

2 sessions to:
- ✅ Connect React to FastAPI
- ✅ Add user authentication
- ✅ Protect routes with JWT

**By the end:** Full-stack app with login!

---

## Slide 2: B1S1 - API Client 📡

**From static forms to live data:**

```typescript
// Before: Hardcoded data
const trades = [...]

// After: Real API calls
const trades = await apiClient.get('/api/trades');
```

**You'll build:**
- API client with error handling
- Loading states
- Error boundaries
- Optimistic updates

---

## Slide 3: B1S1 - React Hooks Magic 🪝

**State management patterns:**

```typescript
const useTrades = () => {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchTrades();
  }, []);
  
  return { trades, loading, error };
};
```

**Reusable, testable, clean!**

---

## Slide 4: B1S1 - Optimistic Updates ⚡

**Make your app feel instant:**

```typescript
// Update UI immediately
setTrades([...trades, newTrade]);

// Then sync with server
try {
  await apiClient.post('/api/trades', newTrade);
} catch (error) {
  // Rollback if it fails
  setTrades(trades);
}
```

**Users love fast UIs!**

---

## Slide 5: B1S2 - JWT Authentication 🔐

**The flow:**

1. User logs in with email/password
2. Server validates credentials
3. Server returns JWT token
4. Client stores token (HTTP-only cookie)
5. Client sends token with every request
6. Server verifies token

**JWT = Digital Passport**

---

## Slide 6: B1S2 - Password Security 🛡️

**Never store plain passwords!**

```python
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"])

# Hash password before saving
hashed = pwd_context.hash("user_password")

# Verify during login
is_valid = pwd_context.verify("user_password", hashed)
```

**bcrypt = One-way paper shredder**

---

## Slide 7: B1S2 - Protected Routes 🚪

**Backend protection:**

```python
@router.get("/api/trades")
async def get_trades(
    current_user: User = Depends(get_current_user)
):
    return current_user.trades
```

**Frontend protection:**

```typescript
<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>
```

---

## Slide 8: Phase B Deliverables 📦

**By the end of Phase B, you'll have:**

✅ React connected to FastAPI  
✅ User registration and login  
✅ JWT authentication working  
✅ Protected API routes  
✅ Auth context in React  

**Ready for Phase C: Advanced Features!**
