#!/usr/bin/env python3
"""Async Generator"""

async def async_comprehension() -> list[float]:
    """Return 10 random numbers between 0 and 10."""
    import random

    return [random.uniform(0, 10) async for _ in range(10)]
