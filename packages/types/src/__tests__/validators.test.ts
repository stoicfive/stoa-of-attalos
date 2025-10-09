import { describe, it, expect } from 'vitest';
import {
  validateSymbol,
  validatePrice,
  validateShares,
  validateTrade,
  calculatePnL,
} from '../validators';

describe('validateSymbol', () => {
  it('should accept valid uppercase symbols', () => {
    // TODO(student): Write test cases for valid symbols
    // Test: AAPL, MSFT, GOOGL, etc.
    expect(validateSymbol('AAPL')).toBe(true);
  });

  it('should reject lowercase symbols', () => {
    // TODO(student): Test lowercase rejection
    expect(validateSymbol('aapl')).toBe(false);
  });

  it('should reject symbols with numbers', () => {
    // TODO(student): Test symbols with numbers
  });

  it('should reject empty strings', () => {
    // TODO(student): Test empty string
  });

  it('should reject symbols longer than 5 characters', () => {
    // TODO(student): Test long symbols
  });
});

describe('validatePrice', () => {
  it('should accept positive prices', () => {
    // TODO(student): Test valid prices
    expect(validatePrice(100.5)).toBe(true);
  });

  it('should reject zero', () => {
    // TODO(student): Test zero
  });

  it('should reject negative prices', () => {
    // TODO(student): Test negative numbers
  });
});

describe('validateShares', () => {
  it('should accept positive integers', () => {
    // TODO(student): Test valid share counts
    expect(validateShares(100)).toBe(true);
  });

  it('should reject zero', () => {
    // TODO(student): Test zero
  });

  it('should reject negative numbers', () => {
    // TODO(student): Test negative numbers
  });

  it('should reject decimal numbers', () => {
    // TODO(student): Test decimal numbers (can't buy 1.5 shares!)
  });
});

describe('validateTrade', () => {
  const validTrade = {
    symbol: 'AAPL',
    entryPrice: 150.0,
    exitPrice: 155.0,
    shares: 100,
    date: new Date('2024-01-01'),
  };

  it('should validate a complete valid trade', () => {
    // TODO(student): Test a fully valid trade
    const result = validateTrade(validTrade);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('should return errors for invalid symbol', () => {
    // TODO(student): Test with invalid symbol
  });

  it('should return errors for invalid prices', () => {
    // TODO(student): Test with invalid prices
  });

  it('should return errors for invalid shares', () => {
    // TODO(student): Test with invalid shares
  });

  it('should return multiple errors for multiple invalid fields', () => {
    // TODO(student): Test with multiple invalid fields
  });
});

describe('calculatePnL', () => {
  it('should calculate profit correctly', () => {
    // TODO(student): Test profit calculation
    const pnl = calculatePnL({
      entryPrice: 100,
      exitPrice: 110,
      shares: 10,
    });
    expect(pnl).toBe(100); // (110 - 100) * 10 = 100
  });

  it('should calculate loss correctly', () => {
    // TODO(student): Test loss calculation (negative P&L)
  });

  it('should handle zero P&L', () => {
    // TODO(student): Test when entry and exit prices are the same
  });
});
