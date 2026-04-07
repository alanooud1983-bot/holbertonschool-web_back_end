#!/usr/bin/env python3
"""Async generator module."""

import asyncio
import random


async def async_generator():
    """
    Asynchronously generate 10 random numbers between 0 and 10.
    Each number is yielded after waiting 1 second.
    """

    for _ in range(10):
        # Wait asynchronously for 1 second (non-blocking)
        await asyncio.sleep(1)

        # Generate a random float between 0 and 10
        number = random.uniform(0, 10)

        # Yield the number (not return, because it's a generator)
        yield number
