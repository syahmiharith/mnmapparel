from dataclasses import dataclass
from typing import Optional


@dataclass
class ProductModel:
    """Placeholder domain model for products."""

    id: str
    name: str
    category: str
    description: Optional[str]
    price: float
    currency: str = "MYR"
    is_active: bool = True
