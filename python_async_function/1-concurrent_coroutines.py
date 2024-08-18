#!/usr/bin/env python3
"""1-concurrent_coroutines.py"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
        Run `wait_random` `n` times concurrently, with a maximum delay of `max_delay`.
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = []
    
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    
    return delays
