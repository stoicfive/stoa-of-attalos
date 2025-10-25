"""
Trading Journal API - Pydantic Schemas
Session A1S3: Request/Response Models

TODO(student): Define Pydantic schemas for API validation
"""

from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional


# TODO(student): Create TradeCreate schema
# This schema is used for POST /api/trades requests
# class TradeCreate(BaseModel):
#     """Schema for creating a new trade."""
#     symbol: str = Field(..., min_length=1, max_length=10, description="Stock symbol (e.g., AAPL)")
#     quantity: int = Field(..., gt=0, description="Number of shares")
#     price: float = Field(..., gt=0, description="Price per share")
#     trade_type: str = Field(..., pattern="^(buy|sell)$", description="Type of trade: buy or sell")
#     notes: Optional[str] = Field(None, max_length=500, description="Optional notes about the trade")
#     
#     class Config:
#         json_schema_extra = {
#             "example": {
#                 "symbol": "AAPL",
#                 "quantity": 10,
#                 "price": 150.50,
#                 "trade_type": "buy",
#                 "notes": "Strong buy signal on technical analysis"
#             }
#         }


# TODO(student): Create TradeUpdate schema
# This schema is used for PUT /api/trades/{id} requests
# class TradeUpdate(BaseModel):
#     """Schema for updating an existing trade."""
#     symbol: Optional[str] = Field(None, min_length=1, max_length=10)
#     quantity: Optional[int] = Field(None, gt=0)
#     price: Optional[float] = Field(None, gt=0)
#     trade_type: Optional[str] = Field(None, pattern="^(buy|sell)$")
#     notes: Optional[str] = Field(None, max_length=500)
#     
#     class Config:
#         json_schema_extra = {
#             "example": {
#                 "quantity": 15,
#                 "price": 152.00
#             }
#         }


# TODO(student): Create TradeResponse schema
# This schema is used for all API responses (GET, POST, PUT)
# class TradeResponse(BaseModel):
#     """Schema for trade responses."""
#     id: int = Field(..., description="Unique trade ID")
#     symbol: str
#     quantity: int
#     price: float
#     trade_type: str
#     notes: Optional[str] = None
#     created_at: datetime = Field(..., description="When the trade was created")
#     updated_at: datetime = Field(..., description="When the trade was last updated")
#     
#     class Config:
#         from_attributes = True  # Allows Pydantic to work with SQLAlchemy models
#         json_schema_extra = {
#             "example": {
#                 "id": 1,
#                 "symbol": "AAPL",
#                 "quantity": 10,
#                 "price": 150.50,
#                 "trade_type": "buy",
#                 "notes": "Strong buy signal on technical analysis",
#                 "created_at": "2024-01-15T10:30:00",
#                 "updated_at": "2024-01-15T10:30:00"
#             }
#         }
