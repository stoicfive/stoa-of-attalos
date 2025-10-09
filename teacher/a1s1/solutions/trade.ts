/**
 * SOLUTION: Trade data model
 * This is the reference implementation - students should not see this!
 */

export interface Trade {
  id?: string;
  symbol: string;
  entryPrice: number;
  exitPrice: number;
  shares: number;
  date: Date;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export type NewTrade = Omit<Trade, 'id'>;
