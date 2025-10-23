# Lesson 03: API Endpoints with FastAPI

**Session A1S3: Building a REST API**

---

## 🎯 What You'll Build

A complete REST API for the Trading Journal with:
- POST /api/trades - Create a new trade
- GET /api/trades - List all trades
- GET /api/trades/{id} - Get a single trade
- PUT /api/trades/{id} - Update a trade
- DELETE /api/trades/{id} - Delete a trade

---

## 📚 Learning Objectives

- Create REST API endpoints with FastAPI
- Implement request validation with Pydantic
- Add comprehensive error handling
- Write API tests with TestClient
- Understand REST principles

---

## 📋 Steps

### 1. Create Trade Router (`trades_router.py`)
- Set up FastAPI router
- Import Trade model and database session
- Configure router with prefix='/api/trades'

### 2. Create Pydantic Schemas (`trade_schema.py`)
- Define TradeCreate schema (for POST requests)
- Define TradeUpdate schema (for PUT requests)
- Define TradeResponse schema (for responses)
- Add validation rules

### 3. Implement POST /api/trades
- Accept TradeCreate schema
- Validate input
- Create Trade model instance
- Save to database
- Return TradeResponse with 201 status

### 4. Implement GET Endpoints
- GET /api/trades - list all trades
- GET /api/trades/{id} - get single trade
- Handle 404 Not Found for invalid IDs
- Return proper error messages

### 5. Implement PUT and DELETE
- PUT /api/trades/{id} - update trade
- DELETE /api/trades/{id} - delete trade
- Validate updates
- Handle 404 for non-existent trades
- Return appropriate status codes

### 6. Complete API Tests (`tests/test_trades_api.py`)
- Test file already exists with TODO(student) markers
- Find test functions with `pass` statements
- Replace `pass` with actual test implementations
- Use FastAPI TestClient to test endpoints
- Test POST, GET, PUT, DELETE endpoints
- Test error cases (404 Not Found, 400 Bad Request)

---

## ✅ Definition of Done

- [ ] All API endpoints implemented
- [ ] Request validation works
- [ ] Error handling implemented
- [ ] All tests pass
- [ ] Code coverage ≥70%
- [ ] No linting errors
- [ ] API documentation auto-generated

---

## 🧪 Run Validation

```bash
# From project root
npm run check:a1s3
```

---

## 💡 Key Concepts

### REST (Representational State Transfer)
Architectural style for APIs using HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources.

### Pydantic Schemas
Data validation using Python type annotations. Automatically validates request data and generates API documentation.

### HTTP Status Codes
- **200 OK** - Success
- **201 Created** - Resource created
- **404 Not Found** - Resource doesn't exist
- **400 Bad Request** - Invalid input

---

## 📊 Success Metrics

- All tests green ✅
- Coverage report shows ≥70%
- API documentation available at `/docs`
- All endpoints work correctly

---

## 🎓 Recall Quiz

Before you start, answer these questions:

1. What are the main HTTP methods and what do they do?
2. What's the difference between 200 OK and 201 Created?
3. Why do we validate input data?
4. What is Pydantic used for?

---

**Ready? Let's build an API!** 🚀
