#!/usr/bin/env python3

async def async_generator():
    """Yield a random number between 0 and 10 every 1 second."""
    import asyncio
    import random

    for _ in range(10):
        await asyncio.sleep(1)
        yield random.random(0, 10)
