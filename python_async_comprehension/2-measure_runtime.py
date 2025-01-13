#!/usr/bin/env python3
""" 2-measure_runtime: measure the runtime of async_comprehension executed 4 times in parallel """

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """  measure_runtime: measure the runtime of async_comprehension executed 4 times in parallel """
    start_time = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.perf_counter()
