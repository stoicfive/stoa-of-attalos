"""Database models for Trading Journal"""

try:
    from .trade import Trade, Base
    __all__ = ["Trade", "Base"]
except ImportError:
    # Models not yet implemented by student
    __all__ = []
