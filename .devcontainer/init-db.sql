-- Initialize Trading Journal Database
-- This script runs automatically when the database container starts

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create schemas
CREATE SCHEMA IF NOT EXISTS trading;
CREATE SCHEMA IF NOT EXISTS analytics;

-- Set search path
SET search_path TO trading, public;

-- Create trades table (seed data)
CREATE TABLE IF NOT EXISTS trading.trades (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    symbol VARCHAR(10) NOT NULL,
    entry_price DECIMAL(12, 4) NOT NULL CHECK (entry_price > 0),
    exit_price DECIMAL(12, 4) NOT NULL CHECK (exit_price > 0),
    shares INTEGER NOT NULL CHECK (shares > 0),
    trade_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    notes TEXT,
    pnl DECIMAL(12, 2) GENERATED ALWAYS AS ((exit_price - entry_price) * shares) STORED,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_trades_symbol ON trading.trades(symbol);
CREATE INDEX IF NOT EXISTS idx_trades_date ON trading.trades(trade_date DESC);
CREATE INDEX IF NOT EXISTS idx_trades_pnl ON trading.trades(pnl DESC);

-- Insert seed data for testing
INSERT INTO trading.trades (symbol, entry_price, exit_price, shares, trade_date, notes) VALUES
    ('AAPL', 150.00, 155.00, 100, '2024-01-15 09:30:00-05', 'Breakout trade'),
    ('MSFT', 380.00, 375.00, 50, '2024-01-16 10:00:00-05', 'Failed support'),
    ('GOOGL', 140.00, 145.00, 75, '2024-01-17 11:30:00-05', 'Earnings play'),
    ('TSLA', 200.00, 210.00, 25, '2024-01-18 14:00:00-05', 'Momentum trade'),
    ('NVDA', 500.00, 490.00, 20, '2024-01-19 09:45:00-05', 'Profit taking')
ON CONFLICT DO NOTHING;

-- Create analytics views
CREATE OR REPLACE VIEW analytics.daily_pnl AS
SELECT 
    DATE(trade_date) as trade_day,
    COUNT(*) as num_trades,
    SUM(pnl) as total_pnl,
    AVG(pnl) as avg_pnl,
    SUM(CASE WHEN pnl > 0 THEN 1 ELSE 0 END) as winning_trades,
    SUM(CASE WHEN pnl < 0 THEN 1 ELSE 0 END) as losing_trades
FROM trading.trades
GROUP BY DATE(trade_date)
ORDER BY trade_day DESC;

-- Grant permissions
GRANT ALL PRIVILEGES ON SCHEMA trading TO postgres;
GRANT ALL PRIVILEGES ON SCHEMA analytics TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA trading TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA analytics TO postgres;

-- Log completion
DO $$
BEGIN
    RAISE NOTICE 'Database initialized successfully with % seed trades', (SELECT COUNT(*) FROM trading.trades);
END $$;
