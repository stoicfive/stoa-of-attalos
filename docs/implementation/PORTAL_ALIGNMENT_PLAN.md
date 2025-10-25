# Portal Alignment Plan: Trading Journal SaaS Learning System

## 🎯 Current Situation

### **What We Have:**

1. **Student Portal** - Beautiful, accessible web portal with:
   - Session overview pages
   - Interactive task cards
   - Progress tracking
   - localStorage persistence
2. **Portal Content (MISALIGNED):**
   - A1S1: Generic "Environment Setup"
   - A1S2: Generic "Python Fundamentals"
   - A1S3: Generic "Object-Oriented Programming"
3. **Actual Project (IN IDE):**
   - A1S1: Trading Journal - Project Setup & First Entry (TypeScript)
   - A1S2: Database Models with SQLAlchemy (Python)
   - A1S3: FastAPI Endpoints (Python) - PLANNED

### **The Problem:**

- Portal shows generic programming exercises
- Actual project is building a Trading Journal SaaS
- No connection between portal tasks and IDE work
- No automated test integration
- No grade posting back to portal

---

## 🎯 Goal: Unified Learning Experience

### **Student Journey Should Be:**

1. **Portal** → View session overview, objectives, deliverables
2. **IDE** → Complete actual coding tasks with TDD
3. **Tests** → Run automated validation (`./scripts/check-a1s1.sh`)
4. **Portal** → See grade/completion status updated automatically

---

## 📋 Implementation Plan

### **Phase 1: Align Portal Content with Real Sessions** ✅ PRIORITY

#### **Task 1.1: Refactor A1S1 Portal Content**

**Current:** Generic environment setup (Python, Poetry, PostgreSQL, Docker, VS Code, Git)
**Should Be:** Trading Journal - Project Setup & First Entry

**Portal Tasks Should Match:**

```typescript
// From teacher/a1s1/README.md
1. Create Trade Type (TypeScript interface)
   - Define Trade interface in packages/types/src/trade.ts
   - Add JSDoc comments
   - Export properly

2. Implement Validation Functions
   - validateSymbol(symbol: string): boolean
   - validatePrice(price: number): boolean
   - validateShares(shares: number): boolean
   - validateTrade(trade: Trade): ValidationResult

3. Write Unit Tests (70% coverage)
   - Test each validation function
   - Test edge cases
   - Run: npm test

4. Create TradeForm Component
   - Controlled inputs for each field
   - Display validation errors
   - Calculate P&L automatically

5. Add Component Tests
   - Test form rendering
   - Test validation error display
   - Test P&L calculation

6. Run All Checks
   - npm run check:all
   - Verify 70%+ coverage
   - Fix any ESLint errors
```

**Portal Should Show:**

- Link to open IDE/VS Code
- Link to view `teacher/a1s1/README.md`
- Link to view `teacher/a1s1/hints.md`
- Link to view `teacher/a1s1/rubric.md`
- Button to run `./scripts/check-a1s1.sh`
- Display test results
- Show coverage report

#### **Task 1.2: Refactor A1S2 Portal Content**

**Current:** Generic Python fundamentals
**Should Be:** Database Models with SQLAlchemy

**Portal Tasks Should Match:**

```python
# From teacher/a1s2/README.md
1. Define Trade Model (SQLAlchemy)
   - Create apps/api/models/trade.py
   - Add all columns with proper types
   - Add CHECK constraints
   - Add computed P&L column

2. Create Database Connection
   - Configure SQLAlchemy engine
   - Create session maker
   - Add helper functions

3. Create Migration (Alembic)
   - Initialize Alembic
   - Generate migration
   - Review and apply

4. Write Test Fixtures
   - Create test database engine
   - Create session fixture
   - Add setup/teardown

5. Write Model Tests
   - Test CRUD operations
   - Test P&L calculation
   - Test constraints
   - Aim for 70%+ coverage

6. Run Validation
   - ./scripts/check-a1s2.sh
   - Verify all tests pass
   - Check coverage
```

#### **Task 1.3: Create A1S3 Portal Content**

**Current:** Generic OOP
**Should Be:** FastAPI Endpoints

**Portal Tasks Should Match:**

```python
# From teacher/index.json - A1S3
1. Create REST API Endpoints
   - POST /api/trades - Create trade
   - GET /api/trades - List trades
   - GET /api/trades/{id} - Get trade
   - PUT /api/trades/{id} - Update trade
   - DELETE /api/trades/{id} - Delete trade

2. Implement Request Validation
   - Use Pydantic models
   - Validate required fields
   - Return proper error messages

3. Add Error Handling
   - Handle 404 Not Found
   - Handle 400 Bad Request
   - Handle 500 Server Error
   - Return consistent error format

4. Write API Tests
   - Test each endpoint
   - Test validation
   - Test error cases
   - Use pytest fixtures

5. Run Validation
   - ./scripts/check-a1s3.sh
   - Verify all tests pass
   - Check API documentation
```

---

### **Phase 2: IDE Integration** 🔧

#### **Task 2.1: Add "Open in IDE" Buttons**

```typescript
// In portal task cards
<Button onClick={() => openInIDE('/packages/types/src/trade.ts')}>
  <Code className="mr-2" />
  Open trade.ts in VS Code
</Button>
```

**Implementation:**

- Use VS Code URI scheme: `vscode://file/path/to/file`
- Add to each task card
- Link to specific files students need to edit

#### **Task 2.2: Add "Run Tests" Integration**

```typescript
// In portal
<Button onClick={() => runTests('a1s1')}>
  <Play className="mr-2" />
  Run Tests
</Button>

// Backend endpoint
POST /api/sessions/a1s1/run-tests
Response: {
  passed: true,
  coverage: 85,
  results: [...],
  grade: 95
}
```

**Implementation:**

- Create API endpoint to run test scripts
- Execute `./scripts/check-a1s1.sh`
- Parse test output
- Return structured results
- Display in portal

#### **Task 2.3: Add Test Results Display**

```typescript
// In portal - show real test results
<TestResults>
  <TestSuite name="validators.test.ts">
    <Test name="validateSymbol" status="passed" />
    <Test name="validatePrice" status="passed" />
    <Test name="validateShares" status="failed">
      Expected: true, Received: false
    </Test>
  </TestSuite>
  <Coverage>
    <Line>Statements: 85%</Line>
    <Line>Branches: 80%</Line>
    <Line>Functions: 90%</Line>
  </Coverage>
</TestResults>
```

---

### **Phase 3: Automated Grading** 📊

#### **Task 3.1: Create Grading Service**

```python
# apps/api/services/grading.py
class GradingService:
    def grade_session(self, session_id: str, student_id: str):
        """
        1. Run test script (./scripts/check-{session_id}.sh)
        2. Parse test results
        3. Calculate grade based on rubric
        4. Store in database
        5. Return grade object
        """

    def calculate_grade(self, test_results, rubric):
        """
        Apply rubric to test results:
        - Tests passing: 40 points
        - Coverage >= 70%: 20 points
        - Code quality: 20 points
        - Documentation: 10 points
        - Submission: 10 points
        """
```

#### **Task 3.2: Create Grade Model**

```python
# apps/api/models/grade.py
class Grade(Base):
    __tablename__ = "grades"

    id = Column(UUID, primary_key=True)
    student_id = Column(UUID, ForeignKey("users.id"))
    session_id = Column(String, nullable=False)  # "a1s1", "a1s2", etc.
    score = Column(Integer, nullable=False)  # 0-100
    max_score = Column(Integer, default=100)
    test_results = Column(JSON)  # Full test output
    coverage = Column(Float)  # Test coverage %
    submitted_at = Column(DateTime)
    graded_at = Column(DateTime)
```

#### **Task 3.3: Create Grading API**

```python
# apps/api/routers/grades.py
@router.post("/sessions/{session_id}/submit")
async def submit_session(session_id: str, student_id: str):
    """
    1. Run tests
    2. Calculate grade
    3. Store in database
    4. Return grade
    """

@router.get("/sessions/{session_id}/grade")
async def get_grade(session_id: str, student_id: str):
    """
    Get student's grade for a session
    """

@router.get("/students/{student_id}/grades")
async def get_all_grades(student_id: str):
    """
    Get all grades for a student
    """
```

---

### **Phase 4: Portal Updates** 🎨

#### **Task 4.1: Update Session Metadata**

```typescript
// lib/session-metadata.ts
export const SESSION_METADATA = {
  a1s1: {
    id: 'a1s1',
    title: 'Trading Journal - Project Setup & First Entry',
    description:
      'Build a trade entry form with TypeScript, validation, and tests',
    duration: '~50 minutes',
    taskCount: 6,
    difficulty: 'Beginner',
    language: 'TypeScript',
    deliverables: [
      'packages/types/src/trade.ts',
      'packages/types/src/validators.ts',
      'packages/types/src/__tests__/validators.test.ts',
      'apps/web/src/components/TradeForm.tsx',
    ],
    testCommand: './scripts/check-a1s1.sh',
    hintsPath: 'teacher/a1s1/hints.md',
    rubricPath: 'teacher/a1s1/rubric.md',
    ideFiles: [
      'packages/types/src/trade.ts',
      'packages/types/src/validators.ts',
    ],
  },
};
```

#### **Task 4.2: Add IDE Integration Components**

```typescript
// components/session/ide-integration-card.tsx
export function IDEIntegrationCard({ session }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Development Environment</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => openInVSCode(session.ideFiles[0])}>
          <Code className="mr-2" />
          Open in VS Code
        </Button>

        <Button onClick={() => runTests(session.id)}>
          <Play className="mr-2" />
          Run Tests
        </Button>

        <Button onClick={() => viewHints(session.hintsPath)}>
          <Lightbulb className="mr-2" />
          View Hints
        </Button>

        <Button onClick={() => submitWork(session.id)}>
          <CheckCircle className="mr-2" />
          Submit for Grading
        </Button>
      </CardContent>
    </Card>
  );
}
```

#### **Task 4.3: Add Grade Display**

```typescript
// components/session/grade-card.tsx
export function GradeCard({ sessionId, studentId }) {
  const { data: grade } = useGrade(sessionId, studentId);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Grade</CardTitle>
      </CardHeader>
      <CardContent>
        {grade ? (
          <>
            <div className="text-4xl font-bold">
              {grade.score}/{grade.max_score}
            </div>
            <Progress value={grade.score} max={grade.max_score} />

            <div className="mt-4">
              <p>Tests Passing: {grade.test_results.passed}/{grade.test_results.total}</p>
              <p>Coverage: {grade.coverage}%</p>
              <p>Submitted: {formatDate(grade.submitted_at)}</p>
            </div>
          </>
        ) : (
          <p>Not yet submitted</p>
        )}
      </CardContent>
    </Card>
  );
}
```

---

### **Phase 5: Testing & Validation** ✅

#### **Task 5.1: Test Complete Flow**

1. Student views A1S1 in portal
2. Clicks "Open in VS Code"
3. Completes tasks in IDE
4. Clicks "Run Tests" in portal
5. Sees test results in real-time
6. Clicks "Submit for Grading"
7. Sees grade displayed
8. Grade stored in database

#### **Task 5.2: Create Integration Tests**

```typescript
// tests/e2e/session-flow.spec.ts
test('complete session flow', async ({ page }) => {
  // Navigate to session
  await page.goto('/lessons/a1s1/activity');

  // Open in IDE
  await page.click('text=Open in VS Code');

  // Run tests
  await page.click('text=Run Tests');
  await page.waitForSelector('text=Tests Passed');

  // Submit
  await page.click('text=Submit for Grading');
  await page.waitForSelector('text=Grade: 95/100');
});
```

---

## 📊 Success Metrics

### **Student Experience:**

- ✅ Clear connection between portal and IDE work
- ✅ Real-time test feedback
- ✅ Automated grading
- ✅ Progress tracking
- ✅ Grade history

### **Technical:**

- ✅ Portal tasks match teacher/ content
- ✅ IDE integration working
- ✅ Test execution automated
- ✅ Grades stored in database
- ✅ API endpoints functional

### **Learning:**

- ✅ Students build real Trading Journal app
- ✅ TDD workflow enforced
- ✅ Immediate feedback on code quality
- ✅ Clear rubric-based grading
- ✅ Spaced repetition supported

---

## 🚀 Implementation Order

### **Week 1: Content Alignment**

1. Update A1S1 portal content
2. Update A1S2 portal content
3. Create A1S3 portal content
4. Update session metadata

### **Week 2: IDE Integration**

1. Add "Open in IDE" buttons
2. Add "Run Tests" functionality
3. Display test results
4. Add file links

### **Week 3: Grading System**

1. Create Grade model
2. Create GradingService
3. Create grading API
4. Add grade display to portal

### **Week 4: Testing & Polish**

1. Write integration tests
2. Test complete flow
3. Fix bugs
4. Polish UI
5. Deploy

---

## 📝 Next Steps

**IMMEDIATE:**

1. Review this plan
2. Approve approach
3. Start with A1S1 content alignment
4. Update session metadata

**QUESTIONS TO ANSWER:**

1. Should portal run tests locally or via API?
2. How to handle authentication for grading?
3. Should we store test results in database?
4. How to handle multiple students?
5. Should portal show real-time test output?

---

**This plan aligns the portal with the actual Trading Journal SaaS project and creates a seamless IDE-to-portal learning experience!** 🎯
