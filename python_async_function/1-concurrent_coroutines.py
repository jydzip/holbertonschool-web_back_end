#!/usr/bin/env python3
"""1-concurrent_coroutines.py"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> list[float]:
    """
        Run `wait_random` `n` times concurrently, with a maximum delay of `max_delay`.
    """
    tasks = await asyncio.gather(
        [await wait_random(max_delay) for _ in range(n)]
    )
    return sorted(tasks)
