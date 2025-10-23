"""
Complete test implementation - Reference Solution

NOTE: Imports assume standard project structure with apps/api/models/
Adjust paths if your structure differs.
"""

from datetime import datetime
from decimal import Decimal

import pytest
from sqlalchemy.exc import IntegrityError

from apps.api.models.trade import Trade


def test_create_trade(db_session):
    """Test creating a trade instance"""
    trade = Trade(
        symbol="AAPL",
        entry_price=Decimal("150.00"),
        exit_price=Decimal("155.00"),
        shares=100
    )
    db_session.add(trade)
    db_session.commit()
    
    assert trade.id is not None
    assert trade.symbol == "AAPL"
    assert trade.entry_price == Decimal("150.00")
    assert trade.exit_price == Decimal("155.00")
    assert trade.shares == 100


def test_pnl_calculation(db_session):
    """Test that P&L is calculated correctly"""
    trade = Trade(
        symbol="MSFT",
        entry_price=Decimal("100.00"),
        exit_price=Decimal("110.00"),
        shares=50
    )
    db_session.add(trade)
    db_session.commit()
    db_session.refresh(trade)
    
    # (110 - 100) * 50 = 500
    assert trade.pnl == Decimal("500.00")


def test_pnl_loss(db_session):
    """Test P&L calculation for losing trade"""
    trade = Trade(
        symbol="TSLA",
        entry_price=Decimal("200.00"),
        exit_price=Decimal("190.00"),
        shares=25
    )
    db_session.add(trade)
    db_session.commit()
    db_session.refresh(trade)
    
    # (190 - 200) * 25 = -250
    assert trade.pnl == Decimal("-250.00")


def test_positive_entry_price_constraint(db_session):
    """Test that negative entry prices are rejected"""
    trade = Trade(
        symbol="TSLA",
        entry_price=Decimal("-100.00"),
        exit_price=Decimal("110.00"),
        shares=50
    )
    db_session.add(trade)
    
    with pytest.raises(IntegrityError):
        db_session.commit()


def test_positive_exit_price_constraint(db_session):
    """Test that negative exit prices are rejected"""
    trade = Trade(
        symbol="NVDA",
        entry_price=Decimal("100.00"),
        exit_price=Decimal("-110.00"),
        shares=50
    )
    db_session.add(trade)
    
    with pytest.raises(IntegrityError):
        db_session.commit()


def test_positive_shares_constraint(db_session):
    """Test that negative shares are rejected"""
    trade = Trade(
        symbol="GOOGL",
        entry_price=Decimal("100.00"),
        exit_price=Decimal("110.00"),
        shares=-50
    )
    db_session.add(trade)
    
    with pytest.raises(IntegrityError):
        db_session.commit()


def test_zero_shares_constraint(db_session):
    """Test that zero shares are rejected"""
    trade = Trade(
        symbol="META",
        entry_price=Decimal("100.00"),
        exit_price=Decimal("110.00"),
        shares=0
    )
    db_session.add(trade)
    
    with pytest.raises(IntegrityError):
        db_session.commit()


def test_query_by_symbol(db_session):
    """Test querying trades by symbol"""
    # Create multiple trades
    trade1 = Trade(symbol="AAPL", entry_price=Decimal("150.00"), exit_price=Decimal("155.00"), shares=100)
    trade2 = Trade(symbol="AAPL", entry_price=Decimal("160.00"), exit_price=Decimal("165.00"), shares=50)
    trade3 = Trade(symbol="MSFT", entry_price=Decimal("300.00"), exit_price=Decimal("310.00"), shares=25)
    
    db_session.add_all([trade1, trade2, trade3])
    db_session.commit()
    
    # Query by symbol
    aapl_trades = db_session.query(Trade).filter_by(symbol="AAPL").all()
    assert len(aapl_trades) == 2
    
    msft_trades = db_session.query(Trade).filter_by(symbol="MSFT").all()
    assert len(msft_trades) == 1


def test_update_trade(db_session):
    """Test updating a trade"""
    trade = Trade(
        symbol="AAPL",
        entry_price=Decimal("150.00"),
        exit_price=Decimal("155.00"),
        shares=100
    )
    db_session.add(trade)
    db_session.commit()
    
    # Update symbol
    trade.symbol = "MSFT"
    db_session.commit()
    db_session.refresh(trade)
    
    assert trade.symbol == "MSFT"


def test_delete_trade(db_session):
    """Test deleting a trade"""
    trade = Trade(
        symbol="AAPL",
        entry_price=Decimal("150.00"),
        exit_price=Decimal("155.00"),
        shares=100
    )
    db_session.add(trade)
    db_session.commit()
    
    trade_id = trade.id
    
    # Delete trade
    db_session.delete(trade)
    db_session.commit()
    
    # Verify it's gone
    result = db_session.query(Trade).filter_by(id=trade_id).first()
    assert result is None


def test_trade_repr(db_session):
    """Test string representation of Trade"""
    trade = Trade(
        symbol="AAPL",
        entry_price=Decimal("150.00"),
        exit_price=Decimal("155.00"),
        shares=100
    )
    db_session.add(trade)
    db_session.commit()
    db_session.refresh(trade)
    
    repr_str = repr(trade)
    assert "AAPL" in repr_str
    assert "Trade" in repr_str


def test_timestamps(db_session):
    """Test that created_at and updated_at are set"""
    trade = Trade(
        symbol="AAPL",
        entry_price=Decimal("150.00"),
        exit_price=Decimal("155.00"),
        shares=100
    )
    db_session.add(trade)
    db_session.commit()
    db_session.refresh(trade)
    
    assert trade.created_at is not None
    assert isinstance(trade.created_at, datetime)
