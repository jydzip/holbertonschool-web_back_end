#!/usr/bin/env python3
"""
    9-element_length.py
"""
from typing import Iterable, Callable, List


def element_length(lst: Iterable, fn: Callable = len) -> List[int]:
    """
        Return a list of integers representing the lengths of elements in lst.
    """
    return [fn(element) for element in lst]
