#!/usr/bin/env python3
"""Module that provides a function returning a tuple with a string and a
squared number.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple where the second element is the square of v."""
    return (k, float(v ** 2))
