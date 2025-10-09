import type { Trade, ValidationResult } from './trade';

/**
 * Validates a stock symbol
 * @param symbol - The stock ticker symbol to validate
 * @returns true if valid, false otherwise
 *
 * Rules:
 * - Must be 1-5 characters
 * - Must be uppercase letters only
 * - No numbers or special characters
 */
export function validateSymbol(_symbol: string): boolean {
  // TODO(student): Implement symbol validation
  // Hint: Use a regular expression to match 1-5 uppercase letters
  return false;
}

/**
 * Validates a price value
 * @param price - The price to validate
 * @returns true if valid, false otherwise
 *
 * Rules:
 * - Must be a positive number
 * - Must be greater than 0
 */
export function validatePrice(_price: number): boolean {
  // TODO(student): Implement price validation
  return false;
}

/**
 * Validates number of shares
 * @param shares - The number of shares to validate
 * @returns true if valid, false otherwise
 *
 * Rules:
 * - Must be a positive integer
 * - Must be greater than 0
 */
export function validateShares(_shares: number): boolean {
  // TODO(student): Implement shares validation
  // Hint: Check if it's positive AND an integer
  return false;
}

/**
 * Validates a complete trade object
 * @param trade - The trade to validate
 * @returns ValidationResult with isValid flag and error messages
 */
export function validateTrade(_trade: Partial<Trade>): ValidationResult {
  const errors: string[] = [];

  // TODO(student): Validate each field and collect errors
  // Use the helper functions above
  // Add descriptive error messages for each validation failure

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Calculates profit/loss for a trade
 * @param trade - The trade to calculate P&L for
 * @returns The profit or loss amount
 */
export function calculatePnL(
  _trade: Pick<Trade, 'entryPrice' | 'exitPrice' | 'shares'>
): number {
  // TODO(student): Implement P&L calculation
  // Formula: (exitPrice - entryPrice) * shares
  return 0;
}
