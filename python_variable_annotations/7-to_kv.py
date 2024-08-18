#!/usr/bin/env python3
"""
    7-to_kv.py
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
        Return a tuple of a string and a float.
    """
    return (k, v * v)
