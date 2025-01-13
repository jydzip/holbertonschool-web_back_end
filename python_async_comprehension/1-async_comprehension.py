#!/usr/bin/env python3
"""Async Generator"""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Return 10 random numbers between 0 and 10."""
    return [number async for number in async_generator()]
