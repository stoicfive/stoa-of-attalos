# 🏛️ Welcome to Stoa of Attalos!

**Your Trading Journal SaaS Learning Journey Starts Here**

---

## 📍 You Are Here: `lessons/`

This is your workspace! All your coding work happens in this directory.

---

## 🎯 How It Works

### **1. Choose Your Lesson**

Lessons are numbered in order. Start with `01` and work your way up:

```
lessons/
├── 01-typescript-basics/    ← Start here!
├── 02-database-models/      ← Then this
└── 03-api-endpoints/        ← Finally this
```

### **2. Open the Lesson Folder**

Each lesson has everything you need:

```
01-typescript-basics/
├── README.md           # 📖 Lesson instructions
├── trade.ts            # 💻 Your code goes here
├── validators.ts       # 💻 Your code goes here
└── tests/              # 🧪 Complete these tests
    └── validators.test.ts
```

### **3. Read the README**

Every lesson has a `README.md` with:
- ✅ What you'll build
- ✅ Learning objectives
- ✅ Step-by-step instructions
- ✅ Hints and tips

### **4. Write Your Code**

Follow the `TODO(student):` comments in each file:

```typescript
// TODO(student): Define the Trade interface
export interface Trade {
  // Your code here
}
```

### **5. Complete the Tests**

Tests have `TODO(student):` markers too:

```typescript
it('should accept valid symbols', () => {
  // TODO(student): Implement test
  // Hint: expect(validateSymbol('AAPL')).toBe(true);
});
```

### **6. Run Validation**

Check your work:

```bash
# From project root
npm run check:a1s1    # For lesson 01
npm run check:a1s2    # For lesson 02
npm run check:a1s3    # For lesson 03
```

---

## 📚 The Three Lessons

### **Lesson 01: TypeScript Basics**
**Time:** ~50 minutes  
**What You'll Build:** Trade entry form with validation  
**Skills:** TypeScript, React, Testing

**Files You'll Work On:**
- `trade.ts` - Define data types
- `validators.ts` - Implement validation
- `TradeForm.tsx` - Build the form
- `tests/` - Write tests

---

### **Lesson 02: Database Models**
**Time:** ~50 minutes  
**What You'll Build:** Database layer with SQLAlchemy  
**Skills:** Python, SQL, ORM, Migrations

**Files You'll Work On:**
- `trade_model.py` - Define database model
- `database.py` - Setup connection
- `tests/` - Test CRUD operations

---

### **Lesson 03: API Endpoints**
**Time:** ~50 minutes  
**What You'll Build:** REST API with FastAPI  
**Skills:** Python, REST, API Design

**Files You'll Work On:**
- `trades_router.py` - Create endpoints
- `trade_schema.py` - Define schemas
- `tests/` - Test API

---

## 🚀 Quick Start

1. **Open Lesson 01:**
   ```bash
   cd lessons/01-typescript-basics
   code README.md
   ```

2. **Read the instructions**

3. **Start coding!**

4. **Run checks:**
   ```bash
   cd ../..  # Back to project root
   npm run check:a1s1
   ```

---

## 💡 Tips

### **Getting Stuck?**
- Read the `TODO(student):` comments carefully
- Check the hints in the code
- Look at the test file to see what's expected
- Review the lesson README

### **Tests Failing?**
- Read the error messages - they tell you what's wrong
- Check the test file to see what it's testing
- Make sure you implemented all required functions
- Verify your types match what's expected

### **Need Help?**
- Check `teacher/` directory for detailed guides
- Look at hints: `teacher/a1s1/hints.md`
- Review rubric: `teacher/a1s1/rubric.md`

---

## 📊 Progress Tracking

After each lesson, you should have:

✅ All tests passing  
✅ Coverage >= 70%  
✅ No linting errors  
✅ Code formatted properly  

Run the validation command to check!

---

## 🎓 Learning Approach

This course uses **Test-Driven Development (TDD)**:

1. **Tests exist** with TODO markers
2. **You implement** the production code
3. **You complete** the test implementations
4. **Tests pass** when everything works

This teaches you to:
- Write testable code
- Think about edge cases
- Verify your work automatically

---

## 🗺️ Your Journey

```
Lesson 01 (TypeScript)
    ↓
Lesson 02 (Database)
    ↓
Lesson 03 (API)
    ↓
🎉 Complete Trading Journal SaaS!
```

---

## 🏁 Ready to Start?

```bash
cd 01-typescript-basics
cat README.md
```

**Good luck! You've got this!** 💪

---

**Questions?** Check the main project `README.md` or teacher materials in `teacher/`
