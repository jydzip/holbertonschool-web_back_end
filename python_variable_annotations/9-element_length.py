#!/usr/bin/env python3
"""
    9-element_length.py
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
        Return a list of integers representing the lengths of elements in lst.
    """
    return [(i, len(i)) for i in lst]
