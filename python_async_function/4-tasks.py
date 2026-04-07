#!/usr/bin/env python3
"""Task-based concurrent coroutines module."""

import asyncio
from typing import List

# Import the task version
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn task_wait_random n times and return delays in ascending order.
    """

    # Create a list of tasks (already scheduled coroutines)
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # List to store results
    delays = []

    # Process tasks as they complete (fastest first)
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
