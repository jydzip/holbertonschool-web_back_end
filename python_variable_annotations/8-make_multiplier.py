#!/usr/bin/env python3
"""
    8-make_multiplier.py
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
        Return a function that multiplies a float by a multiplier.
    """
    def fn_multiply(n: float) -> float:
        """
            Return the product of a float and a multiplier.
        """
        return n * multiplier

    return fn_multiply
