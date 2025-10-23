"""
Trade model for storing trade data

TODO(student): Complete the model definition
- Add __tablename__ and __table_args__
- Add all columns with proper types
- Add constraints (CHECK, NOT NULL)
- Add computed column for P&L
- Add timestamps (created_at, updated_at)
"""

from sqlalchemy import Column, String, Numeric, Integer, DateTime, Text, CheckConstraint, Computed
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
import uuid

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
    
    # TODO(student): Define table name and schema
    # Hint: Use __tablename__ = "trades"
    # Hint: Use __table_args__ = (CheckConstraint(...), {"schema": "trading"})
    
    # TODO(student): Add columns
    # Hint: id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    # Hint: symbol = Column(String(10), nullable=False)
    # Hint: entry_price = Column(Numeric(12, 4), nullable=False)
    # Hint: exit_price = Column(Numeric(12, 4), nullable=False)
    # Hint: shares = Column(Integer, nullable=False)
    # Hint: trade_date = Column(DateTime(timezone=True), nullable=False, default=func.now())
    # Hint: notes = Column(Text)
    # Hint: pnl = Column(Numeric(12, 2), Computed('(exit_price - entry_price) * shares'))
    # Hint: created_at = Column(DateTime(timezone=True), server_default=func.now())
    # Hint: updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    pass
    
    def __repr__(self) -> str:
        """String representation of Trade"""
        # TODO(student): Implement __repr__
        # Hint: return f"<Trade(symbol='{self.symbol}', pnl={self.pnl})>"
        return "<Trade>"
