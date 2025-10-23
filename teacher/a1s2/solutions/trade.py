"""
Complete Trade model implementation - Reference Solution

This is the complete solution for A1S2.
Students should implement this themselves following the hints.

NOTE: This file assumes it's located at apps/api/models/trade.py
If using as reference, ensure imports match your project structure.
"""

import uuid

from sqlalchemy import Column, Computed, DateTime, Integer, Numeric, String, Text, CheckConstraint
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func

Base = declarative_base()


class Trade(Base):
    """
    Trade model representing a single trade transaction
    
    Attributes:
        id: Unique identifier (UUID)
        symbol: Stock ticker symbol (e.g., "AAPL")
        entry_price: Price at which position was entered
        exit_price: Price at which position was exited
        shares: Number of shares traded
        trade_date: Date and time of the trade
        notes: Optional notes about the trade
        pnl: Profit/Loss (computed automatically)
        created_at: Timestamp when record was created
        updated_at: Timestamp when record was last updated
    """
    
    __tablename__ = "trades"
    __table_args__ = (
        CheckConstraint('entry_price > 0', name='check_entry_price_positive'),
        CheckConstraint('exit_price > 0', name='check_exit_price_positive'),
        CheckConstraint('shares > 0', name='check_shares_positive'),
        {"schema": "trading"}
    )
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    symbol = Column(String(10), nullable=False)
    entry_price = Column(Numeric(12, 4), nullable=False)
    exit_price = Column(Numeric(12, 4), nullable=False)
    shares = Column(Integer, nullable=False)
    trade_date = Column(DateTime(timezone=True), nullable=False, default=func.now())
    notes = Column(Text)
    pnl = Column(Numeric(12, 2), Computed('(exit_price - entry_price) * shares'))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    def __repr__(self) -> str:
        """String representation of Trade"""
        return f"<Trade(symbol='{self.symbol}', pnl={self.pnl})>"
