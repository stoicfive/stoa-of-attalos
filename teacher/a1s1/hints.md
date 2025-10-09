# A1S1 Hints - Three-Tier System

Try Tier 1 first. Only move to the next tier if you're still stuck after 10 minutes.

## Tier 1: Conceptual Hints 💡

### Trade Type Definition

- Think about what data you need to calculate profit/loss
- Consider using `Date` type for timestamps
- Add optional fields for notes or tags

### Validation Functions

- Use guard clauses for early returns
- Consider what makes a valid stock symbol (length, characters)
- Prices and shares must be positive numbers

### Form Component

- Use `useState` for each form field
- Calculate P&L: `(exitPrice - entryPrice) * shares`
- Show errors only after user interaction (onBlur)

## Tier 2: Implementation Hints 🔧

### Trade Interface

```typescript
export interface Trade {
  id?: string;
  symbol: string;
  entryPrice: number;
  exitPrice: number;
  shares: number;
  date: Date;
  notes?: string;
}
```

### Validation Pattern

```typescript
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateSymbol(symbol: string): boolean {
  // Symbol should be 1-5 uppercase letters
  return /^[A-Z]{1,5}$/.test(symbol);
}
```

### Form State Management

```typescript
const [symbol, setSymbol] = useState('');
const [errors, setErrors] = useState<string[]>([]);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const validation = validateTrade({ symbol, ... });
  if (!validation.isValid) {
    setErrors(validation.errors);
    return;
  }
  // Process valid trade
};
```

## Tier 3: Detailed Solution Guidance 📖

### Complete Validation Function

```typescript
export function validateTrade(trade: Partial<Trade>): ValidationResult {
  const errors: string[] = [];

  if (!trade.symbol || !validateSymbol(trade.symbol)) {
    errors.push('Symbol must be 1-5 uppercase letters');
  }

  if (!trade.entryPrice || trade.entryPrice <= 0) {
    errors.push('Entry price must be positive');
  }

  if (!trade.exitPrice || trade.exitPrice <= 0) {
    errors.push('Exit price must be positive');
  }

  if (!trade.shares || trade.shares <= 0 || !Number.isInteger(trade.shares)) {
    errors.push('Shares must be a positive integer');
  }

  if (!trade.date || isNaN(trade.date.getTime())) {
    errors.push('Valid date is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
```

### Test Structure

```typescript
import { describe, it, expect } from 'vitest';
import { validateSymbol, validateTrade } from '../validators';

describe('validateSymbol', () => {
  it('should accept valid symbols', () => {
    expect(validateSymbol('AAPL')).toBe(true);
    expect(validateSymbol('MSFT')).toBe(true);
  });

  it('should reject lowercase symbols', () => {
    expect(validateSymbol('aapl')).toBe(false);
  });

  it('should reject symbols with numbers', () => {
    expect(validateSymbol('AAPL1')).toBe(false);
  });

  it('should reject empty strings', () => {
    expect(validateSymbol('')).toBe(false);
  });

  it('should reject symbols longer than 5 characters', () => {
    expect(validateSymbol('TOOLONG')).toBe(false);
  });
});
```

### Form Component Structure

```typescript
export function TradeForm() {
  const [formData, setFormData] = useState({
    symbol: '',
    entryPrice: 0,
    exitPrice: 0,
    shares: 0,
    date: new Date(),
  });
  const [errors, setErrors] = useState<string[]>([]);

  const pnl = (formData.exitPrice - formData.entryPrice) * formData.shares;

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors when user types
    setErrors([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateTrade(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Success! Process the trade
    console.log('Valid trade:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      {errors.length > 0 && (
        <div className="errors">
          {errors.map((error, i) => (
            <p key={i}>{error}</p>
          ))}
        </div>
      )}
      <div>P&L: ${pnl.toFixed(2)}</div>
      <button type="submit">Submit Trade</button>
    </form>
  );
}
```

## 🎯 Common Pitfalls

1. **Forgetting to prevent default form submission**
   - Always use `e.preventDefault()` in `handleSubmit`

2. **Not handling edge cases in validation**
   - Test with empty strings, negative numbers, zero, etc.

3. **Mutating state directly**
   - Always use setter functions, never `formData.symbol = 'AAPL'`

4. **Not clearing errors**
   - Clear errors when user starts typing again

5. **Incorrect P&L calculation**
   - Remember: (exit - entry) × shares, not (entry - exit)

## 📚 Additional Resources

- [TypeScript Handbook - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [React Forms Documentation](https://react.dev/reference/react-dom/components/form)
- [Vitest Testing Guide](https://vitest.dev/guide/)

---

**Remember**: These hints are here to help you learn, not to copy-paste. Try to understand each concept before moving forward! 🚀
