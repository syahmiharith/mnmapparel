from pydantic import BaseModel, Field
from typing import Optional


class ProductBase(BaseModel):
    name: str = Field(..., description="Product name")
    category: str = Field(..., description="Product category")
    description: Optional[str] = Field(None, description="Short description")
    price: float = Field(..., ge=0, description="Unit price")
    currency: str = Field("MYR", description="Currency code")
    is_active: bool = Field(True, description="Availability status")


class ProductCreate(ProductBase):
    pass


class Product(ProductBase):
    id: str = Field(..., description="Product identifier")
