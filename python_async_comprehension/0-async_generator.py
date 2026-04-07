#!/usr/bin/env python3
"""Async generator module."""

import asyncio
import random


async def async_generator():
    """Yield 10 random numbers between 0 and 10 asynchronously."""

    for _ in range(10):
        # Wait for 1 second asynchronously
        await asyncio.sleep(1)

        # Generate a random number between 0 and 10
        yield random.random() * 10
