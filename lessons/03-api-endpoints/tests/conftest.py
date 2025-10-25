"""
Trading Journal API - Test Configuration
Session A1S3: Pytest fixtures and configuration

This file contains shared test fixtures and configuration.
Students can use these fixtures in their tests.
"""

import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# TODO(student): Import your database models
# from lessons.02-database-models.trade_model import Base


# Test database configuration
SQLALCHEMY_DATABASE_URL = "sqlite:///./test_trades.db"


@pytest.fixture(scope="function")
def test_engine():
    """
    Create a test database engine.
    
    This fixture creates a new SQLite database engine for testing.
    It's scoped to each function, so each test gets a fresh database.
    """
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL,
        connect_args={"check_same_thread": False}
    )
    return engine


@pytest.fixture(scope="function")
def test_db(test_engine):
    """
    Create database tables and provide a session.
    
    TODO(student): Complete this fixture
    - Create all tables: Base.metadata.create_all(bind=test_engine)
    - Create a session factory
    - Yield a database session
    - Clean up: close session and drop all tables
    
    Example:
        Base.metadata.create_all(bind=test_engine)
        SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=test_engine)
        db = SessionLocal()
        try:
            yield db
        finally:
            db.close()
            Base.metadata.drop_all(bind=test_engine)
    """
    pass


@pytest.fixture
def sample_trade_data():
    """
    Provide sample trade data for testing.
    
    Returns a dictionary with valid trade data that can be used
    in POST requests to create trades.
    """
    return {
        "symbol": "AAPL",
        "quantity": 10,
        "price": 150.50,
        "trade_type": "buy",
        "notes": "Test trade for unit testing"
    }


@pytest.fixture
def sample_trade_data_sell():
    """
    Provide sample sell trade data for testing.
    """
    return {
        "symbol": "GOOGL",
        "quantity": 5,
        "price": 2800.00,
        "trade_type": "sell",
        "notes": "Test sell trade"
    }


@pytest.fixture
def invalid_trade_data():
    """
    Provide invalid trade data for testing validation.
    
    Returns a dictionary with invalid data that should fail validation.
    """
    return {
        "symbol": "",  # Empty symbol should fail
        "quantity": -10,  # Negative quantity should fail
        "price": 0,  # Zero price should fail
        "trade_type": "hold",  # Invalid trade type
        "notes": "This trade should fail validation"
    }
