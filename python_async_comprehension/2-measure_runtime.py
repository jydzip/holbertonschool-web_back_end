#!/usr/bin/env python3
""" 2-measure_runtime: measure the runtime of async_comprehension executed 4 times in parallel """

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """  measure_runtime: measure the runtime of async_comprehension executed 4 times in parallel """
    import asyncio
    import time
    start = time.time()
    await asyncio.gather(async_comprehension(), async_comprehension(), async_comprehension(), async_comprehension())
    return time.time() - start
