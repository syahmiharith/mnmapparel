from fastapi import APIRouter, HTTPException
from typing import List
from models.schemas import Product, ProductCreate

router = APIRouter()

_FAKE_PRODUCTS: List[Product] = [
    Product(
        id="PROD_001",
        name="Sublimated Jersey",
        category="Jersey",
        description="Custom sublimated jersey with full-color print.",
        price=59.0,
        currency="MYR",
        is_active=True,
    ),
    Product(
        id="PROD_002",
        name="Training Tee",
        category="Training",
        description="Lightweight training tee with breathable fabric.",
        price=39.0,
        currency="MYR",
        is_active=True,
    ),
]


@router.get("/", response_model=List[Product])
async def list_products() -> List[Product]:
    """List available products (placeholder)."""
    return _FAKE_PRODUCTS


@router.get("/{product_id}", response_model=Product)
async def get_product(product_id: str) -> Product:
    """Fetch a single product by id (placeholder)."""
    for product in _FAKE_PRODUCTS:
        if product.id == product_id:
            return product
    raise HTTPException(status_code=404, detail="Product not found")


@router.post("/", response_model=Product, status_code=201)
async def create_product(payload: ProductCreate) -> Product:
    """Create a product (placeholder, no persistence)."""
    product = Product(
        id=f"PROD_{len(_FAKE_PRODUCTS) + 1:03d}",
        **payload.model_dump(),
    )
    _FAKE_PRODUCTS.append(product)
    return product
