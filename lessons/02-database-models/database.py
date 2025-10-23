"""
Database connection and session management

TODO(student): Configure SQLAlchemy engine and session
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os

# TODO(student): Get database URL from environment
# Hint: Use os.getenv() with a default value
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://postgres:postgres@localhost:5432/trading_journal"
)

# TODO(student): Create engine
# Hint: engine = create_engine(DATABASE_URL, echo=True)
# engine = ...

# TODO(student): Create SessionLocal
# Hint: SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# SessionLocal = ...


def get_db():
    """
    Get database session
    
    Yields:
        Session: SQLAlchemy database session
        
    Example:
        >>> for db in get_db():
        ...     trade = db.query(Trade).first()
    """
    # TODO(student): Implement get_db function
    # Hint: Create session, yield it, then close in finally block
    # db = SessionLocal()
    # try:
    #     yield db
    # finally:
    #     db.close()
    pass
