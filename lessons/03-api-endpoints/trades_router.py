"""
Trading Journal API - Trades Router
Session A1S3: FastAPI Endpoints

TODO(student): Implement REST API endpoints for trades
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

# TODO(student): Import your Trade model from lesson 02
# from lessons.02-database-models.trade_model import Trade

# TODO(student): Import your database session dependency
# You'll need to create a get_db() function that yields a database session

# TODO(student): Import Pydantic schemas (create these in trade_schema.py)
# from .trade_schema import TradeCreate, TradeUpdate, TradeResponse


# Create the router
router = APIRouter(
    prefix="/api/trades",
    tags=["trades"]
)


# TODO(student): Implement POST /api/trades
# @router.post("/", response_model=TradeResponse, status_code=status.HTTP_201_CREATED)
# def create_trade(trade: TradeCreate, db: Session = Depends(get_db)):
#     """
#     Create a new trade.
#     
#     Args:
#         trade: Trade data from request body
#         db: Database session
#     
#     Returns:
#         TradeResponse: Created trade with ID
#     """
#     pass


# TODO(student): Implement GET /api/trades
# @router.get("/", response_model=List[TradeResponse])
# def list_trades(db: Session = Depends(get_db)):
#     """
#     Get all trades.
#     
#     Args:
#         db: Database session
#     
#     Returns:
#         List[TradeResponse]: All trades in the database
#     """
#     pass


# TODO(student): Implement GET /api/trades/{trade_id}
# @router.get("/{trade_id}", response_model=TradeResponse)
# def get_trade(trade_id: int, db: Session = Depends(get_db)):
#     """
#     Get a single trade by ID.
#     
#     Args:
#         trade_id: ID of the trade to retrieve
#         db: Database session
#     
#     Returns:
#         TradeResponse: The requested trade
#     
#     Raises:
#         HTTPException: 404 if trade not found
#     """
#     pass


# TODO(student): Implement PUT /api/trades/{trade_id}
# @router.put("/{trade_id}", response_model=TradeResponse)
# def update_trade(trade_id: int, trade_update: TradeUpdate, db: Session = Depends(get_db)):
#     """
#     Update an existing trade.
#     
#     Args:
#         trade_id: ID of the trade to update
#         trade_update: Updated trade data
#         db: Database session
#     
#     Returns:
#         TradeResponse: Updated trade
#     
#     Raises:
#         HTTPException: 404 if trade not found
#     """
#     pass


# TODO(student): Implement DELETE /api/trades/{trade_id}
# @router.delete("/{trade_id}", status_code=status.HTTP_204_NO_CONTENT)
# def delete_trade(trade_id: int, db: Session = Depends(get_db)):
#     """
#     Delete a trade.
#     
#     Args:
#         trade_id: ID of the trade to delete
#         db: Database session
#     
#     Raises:
#         HTTPException: 404 if trade not found
#     """
#     pass
