"""
Complete pytest fixtures implementation - Reference Solution

NOTE: Imports assume apps/api/models/trade.py exists
Adjust import path if your structure differs.
"""

import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from apps.api.models.trade import Base

TEST_DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/trading_journal_test"


@pytest.fixture(scope="session")
def engine():
    """
    Create test database engine
    
    This fixture:
    1. Creates an engine for the test database
    2. Creates all tables before tests
    3. Yields the engine for use in tests
    4. Drops all tables after tests complete
    
    Scope: session (runs once for all tests)
    """
    engine = create_engine(TEST_DATABASE_URL)
    Base.metadata.create_all(bind=engine)
    yield engine
    Base.metadata.drop_all(bind=engine)


@pytest.fixture(scope="function")
def db_session(engine):
    """
    Create a test database session
    
    This fixture:
    1. Creates a connection to the database
    2. Begins a transaction
    3. Creates a session bound to the transaction
    4. Yields the session for use in tests
    5. Rolls back the transaction (no data persists)
    6. Closes the connection
    
    Scope: function (runs for each test, ensures isolation)
    """
    connection = engine.connect()
    transaction = connection.begin()
    session = sessionmaker(bind=connection)()
    
    yield session
    
    session.close()
    transaction.rollback()
    connection.close()
