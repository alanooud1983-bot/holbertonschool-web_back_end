#!/usr/bin/env python3

# Import asyncio for asynchronous operations
import asyncio

# Import wait_random from the previous task
wait_random = __import__('0-basic_async_syntax').wait_random


# Define an async function that runs multiple coroutines
async def wait_n(n: int, max_delay: int) -> list[float]:
    # Create a list of coroutines (tasks) to run concurrently
    tasks = [wait_random(max_delay) for _ in range(n)]

    # Initialize an empty list to store results
    delays = []

    # Iterate over tasks as they complete (not in creation order)
    # This ensures results are collected in ascending order naturally
    for task in asyncio.as_completed(tasks):
        # Wait for each completed task and get its result
        result = await task

        # Append the result (delay) to the list
        delays.append(result)

    # Return the list of delays (already sorted by completion time)
    return delays
