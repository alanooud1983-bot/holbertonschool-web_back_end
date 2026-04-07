#!/usr/bin/env python3
"""
Module for measuring execution time of async functions.
"""

import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total execution time of wait_n
    and return the average time per coroutine.
    """

    # Record start time
    start_time = time.time()

    # Run the async function
    asyncio.run(wait_n(n, max_delay))

    # Record end time
    end_time = time.time()

    # Calculate total elapsed time
    total_time = end_time - start_time

    # Return average time per task
    return total_time / n#!/usr/bin/env python3
"""
Module for measuring execution time of async functions.
"""

import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total execution time of wait_n
    and return the average time per coroutine.
    """

    # Record start time
    start_time = time.time()

    # Run the async function
    asyncio.run(wait_n(n, max_delay))

    # Record end time
    end_time = time.time()

    # Calculate total elapsed time
    total_time = end_time - start_time

    # Return average time per task
    return total_time / n
