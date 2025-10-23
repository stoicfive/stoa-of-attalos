"""
Pytest fixtures for database testing

TODO(student): Create test database fixtures
"""

import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
# TODO(student): Import Base from trade_model
# from ..trade_model import Base

# TODO(student): Define test database URL
# Hint: Use a separate test database to avoid affecting dev data
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
    # TODO(student): Create engine for test database
    # Hint: engine = create_engine(TEST_DATABASE_URL)
    
    # TODO(student): Create all tables
    # Hint: Base.metadata.create_all(bind=engine)
    
    # TODO(student): Yield engine
    # Hint: yield engine
    
    # TODO(student): Drop all tables after tests
    # Hint: Base.metadata.drop_all(bind=engine)
    
    pass


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
    # TODO(student): Create connection
    # Hint: connection = engine.connect()
    
    # TODO(student): Begin transaction
    # Hint: transaction = connection.begin()
    
    # TODO(student): Create session
    # Hint: session = sessionmaker(bind=connection)()
    
    # TODO(student): Yield session
    # Hint: yield session
    
    # TODO(student): Cleanup (close session, rollback, close connection)
    # Hint: session.close()
    # Hint: transaction.rollback()
    # Hint: connection.close()
    
    pass
