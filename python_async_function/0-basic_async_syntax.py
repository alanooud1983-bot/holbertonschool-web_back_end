#!/usr/bin/env python3

# Import asyncio for asynchronous operations
import asyncio

# Import random to generate random numbers
import random


# Define an asynchronous function (coroutine)
# max_delay is the maximum number of seconds to wait (default = 10)
async def wait_random(max_delay: int = 10) -> float:
    # Generate a random float between 0 and max_delay
    delay = random.uniform(0, max_delay)

    # Asynchronously wait for 'delay' seconds (non-blocking)
    # This allows other tasks to run while waiting
    await asyncio.sleep(delay)

    # Return the delay value after waiting
    return delay
