"""
Trading Journal API - API Tests
Session A1S3: FastAPI Endpoint Tests

TODO(student): Complete the test implementations below
Replace 'pass' statements with actual test code
"""

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# TODO(student): Import your FastAPI app and database dependencies
# from your_app import app, get_db
# from lessons.02-database-models.trade_model import Trade, Base


# Test database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./test_trades.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


@pytest.fixture
def test_db():
    """
    Create a fresh database for each test.
    
    TODO(student): Implement this fixture
    - Create all tables using Base.metadata.create_all(bind=engine)
    - Yield a database session
    - Clean up by dropping all tables after the test
    """
    pass


@pytest.fixture
def client(test_db):
    """
    Create a test client with the test database.
    
    TODO(student): Implement this fixture
    - Override the get_db dependency to use test_db
    - Create and return a TestClient instance
    """
    pass


def test_create_trade(client):
    """
    Test POST /api/trades endpoint.
    
    TODO(student): Implement this test
    - Send a POST request with valid trade data
    - Assert response status code is 201
    - Assert response contains the created trade with an ID
    - Assert all fields match the input data
    
    Example trade data:
    {
        "symbol": "AAPL",
        "quantity": 10,
        "price": 150.50,
        "trade_type": "buy",
        "notes": "Test trade"
    }
    """
    pass


def test_create_trade_invalid_data(client):
    """
    Test POST /api/trades with invalid data.
    
    TODO(student): Implement this test
    - Send a POST request with invalid trade data (e.g., negative quantity)
    - Assert response status code is 422 (Unprocessable Entity)
    - Assert response contains validation error details
    """
    pass


def test_list_trades(client):
    """
    Test GET /api/trades endpoint.
    
    TODO(student): Implement this test
    - Create 2-3 trades using POST requests
    - Send a GET request to /api/trades
    - Assert response status code is 200
    - Assert response is a list
    - Assert list contains all created trades
    """
    pass


def test_get_trade_by_id(client):
    """
    Test GET /api/trades/{id} endpoint.
    
    TODO(student): Implement this test
    - Create a trade using POST
    - Send a GET request to /api/trades/{id}
    - Assert response status code is 200
    - Assert response contains the correct trade data
    """
    pass


def test_get_trade_not_found(client):
    """
    Test GET /api/trades/{id} with non-existent ID.
    
    TODO(student): Implement this test
    - Send a GET request to /api/trades/99999
    - Assert response status code is 404
    - Assert response contains appropriate error message
    """
    pass


def test_update_trade(client):
    """
    Test PUT /api/trades/{id} endpoint.
    
    TODO(student): Implement this test
    - Create a trade using POST
    - Send a PUT request to update the trade (e.g., change quantity)
    - Assert response status code is 200
    - Assert response contains updated trade data
    - Verify the changes were applied
    """
    pass


def test_update_trade_not_found(client):
    """
    Test PUT /api/trades/{id} with non-existent ID.
    
    TODO(student): Implement this test
    - Send a PUT request to /api/trades/99999
    - Assert response status code is 404
    - Assert response contains appropriate error message
    """
    pass


def test_delete_trade(client):
    """
    Test DELETE /api/trades/{id} endpoint.
    
    TODO(student): Implement this test
    - Create a trade using POST
    - Send a DELETE request to /api/trades/{id}
    - Assert response status code is 204 (No Content)
    - Verify the trade no longer exists (GET should return 404)
    """
    pass


def test_delete_trade_not_found(client):
    """
    Test DELETE /api/trades/{id} with non-existent ID.
    
    TODO(student): Implement this test
    - Send a DELETE request to /api/trades/99999
    - Assert response status code is 404
    - Assert response contains appropriate error message
    """
    pass


def test_trade_validation_symbol(client):
    """
    Test trade validation for symbol field.
    
    TODO(student): Implement this test
    - Test empty symbol (should fail)
    - Test symbol too long (should fail)
    - Test valid symbol (should pass)
    """
    pass


def test_trade_validation_quantity(client):
    """
    Test trade validation for quantity field.
    
    TODO(student): Implement this test
    - Test zero quantity (should fail)
    - Test negative quantity (should fail)
    - Test positive quantity (should pass)
    """
    pass


def test_trade_validation_price(client):
    """
    Test trade validation for price field.
    
    TODO(student): Implement this test
    - Test zero price (should fail)
    - Test negative price (should fail)
    - Test positive price (should pass)
    """
    pass


def test_trade_validation_type(client):
    """
    Test trade validation for trade_type field.
    
    TODO(student): Implement this test
    - Test invalid trade type like "hold" (should fail)
    - Test "buy" (should pass)
    - Test "sell" (should pass)
    """
    pass
