/**
 * SOLUTION: Validation functions
 * This is the reference implementation - students should not see this!
 */

import type { Trade, ValidationResult } from './trade';

export function validateSymbol(symbol: string): boolean {
  return /^[A-Z]{1,5}$/.test(symbol);
}

export function validatePrice(price: number): boolean {
  return typeof price === 'number' && price > 0 && isFinite(price);
}

export function validateShares(shares: number): boolean {
  return typeof shares === 'number' && shares > 0 && Number.isInteger(shares);
}

export function validateTrade(trade: Partial<Trade>): ValidationResult {
  const errors: string[] = [];

  if (!trade.symbol || !validateSymbol(trade.symbol)) {
    errors.push('Symbol must be 1-5 uppercase letters');
  }

  if (trade.entryPrice === undefined || !validatePrice(trade.entryPrice)) {
    errors.push('Entry price must be a positive number');
  }

  if (trade.exitPrice === undefined || !validatePrice(trade.exitPrice)) {
    errors.push('Exit price must be a positive number');
  }

  if (trade.shares === undefined || !validateShares(trade.shares)) {
    errors.push('Shares must be a positive integer');
  }

  if (
    !trade.date ||
    !(trade.date instanceof Date) ||
    isNaN(trade.date.getTime())
  ) {
    errors.push('Valid date is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function calculatePnL(
  trade: Pick<Trade, 'entryPrice' | 'exitPrice' | 'shares'>
): number {
  return (trade.exitPrice - trade.entryPrice) * trade.shares;
}
