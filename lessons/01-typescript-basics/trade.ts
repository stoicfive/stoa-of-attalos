/**
 * Trade data model for the Trading Journal
 * @module types/trade
 */

// TODO(student): Define the Trade interface
// Should include: id, symbol, entryPrice, exitPrice, shares, date, notes
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Trade {
  // TODO(student): Add properties here
}

// TODO(student): Define a ValidationResult interface
// Should include: isValid (boolean) and errors (string[])
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ValidationResult {
  // TODO(student): Add properties here
}

// TODO(student): Add a helper type for creating new trades (without id)
export type NewTrade = Omit<Trade, 'id'>;
