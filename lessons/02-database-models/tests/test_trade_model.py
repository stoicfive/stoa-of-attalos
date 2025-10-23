"""
Tests for Trade model

TODO(student): Implement all test functions
"""

import pytest
from decimal import Decimal
from datetime import datetime
from sqlalchemy.exc import IntegrityError
# TODO(student): Import Trade from trade_model
# from ..trade_model import Trade


def test_create_trade(db_session):
    """Test creating a trade instance"""
    # TODO(student): Create a trade and assert properties
    # Hint: trade = Trade(symbol="AAPL", entry_price=Decimal("150.00"), ...)
    # Hint: db_session.add(trade)
    # Hint: db_session.commit()
    # Hint: assert trade.id is not None
    # Hint: assert trade.symbol == "AAPL"
    pass


def test_pnl_calculation(db_session):
    """Test that P&L is calculated correctly"""
    # TODO(student): Create trade and verify pnl column
    # Hint: Create trade with entry=100, exit=110, shares=50
    # Hint: Expected P&L = (110 - 100) * 50 = 500
    # Hint: assert trade.pnl == Decimal("500.00")
    pass


def test_pnl_loss(db_session):
    """Test P&L calculation for losing trade"""
    # TODO(student): Create losing trade and verify negative pnl
    # Hint: entry_price > exit_price should give negative pnl
    pass


def test_positive_entry_price_constraint(db_session):
    """Test that negative entry prices are rejected"""
    # TODO(student): Try to create trade with negative entry_price
    # Hint: Use pytest.raises(IntegrityError)
    # Hint: trade = Trade(symbol="TSLA", entry_price=Decimal("-100.00"), ...)
    # Hint: db_session.add(trade)
    # Hint: with pytest.raises(IntegrityError): db_session.commit()
    pass


def test_positive_exit_price_constraint(db_session):
    """Test that negative exit prices are rejected"""
    # TODO(student): Try to create trade with negative exit_price
    pass


def test_positive_shares_constraint(db_session):
    """Test that negative shares are rejected"""
    # TODO(student): Try to create trade with negative shares
    pass


def test_zero_shares_constraint(db_session):
    """Test that zero shares are rejected"""
    # TODO(student): Try to create trade with shares=0
    pass


def test_query_by_symbol(db_session):
    """Test querying trades by symbol"""
    # TODO(student): Create multiple trades with different symbols
    # Hint: Create 2 AAPL trades and 1 MSFT trade
    # Hint: Query: aapl_trades = db_session.query(Trade).filter_by(symbol="AAPL").all()
    # Hint: assert len(aapl_trades) == 2
    pass


def test_update_trade(db_session):
    """Test updating a trade"""
    # TODO(student): Create trade, update symbol, verify change
    # Hint: trade.symbol = "MSFT"
    # Hint: db_session.commit()
    # Hint: db_session.refresh(trade)
    # Hint: assert trade.symbol == "MSFT"
    pass


def test_delete_trade(db_session):
    """Test deleting a trade"""
    # TODO(student): Create trade, delete it, verify it's gone
    # Hint: db_session.delete(trade)
    # Hint: db_session.commit()
    # Hint: result = db_session.query(Trade).filter_by(id=trade.id).first()
    # Hint: assert result is None
    pass


def test_trade_repr(db_session):
    """Test string representation of Trade"""
    # TODO(student): Create trade and test __repr__
    # Hint: repr_str = repr(trade)
    # Hint: assert "AAPL" in repr_str
    pass


def test_timestamps(db_session):
    """Test that created_at and updated_at are set"""
    # TODO(student): Create trade and verify timestamps exist
    # Hint: assert trade.created_at is not None
    # Hint: assert isinstance(trade.created_at, datetime)
    pass
