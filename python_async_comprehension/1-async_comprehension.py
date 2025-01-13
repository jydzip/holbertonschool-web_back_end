#!/usr/bin/env python3
"""Async Generator"""

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> list[float]:
    """Return 10 random numbers between 0 and 10."""
    return [i async for i in async_generator()]
