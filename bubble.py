def bubble(elems, is_sorted, step):
    if step is 1 or is_sorted:
        # base case: elems is already sorted or we pass through the list len(elems) times
        return elems
    else:
        is_swapped = False
        for i in range(len(elems) - 1):
            # compares each pair of adjacent items and swaps them if they are in the wrong order
            if elems[i] > elems[i + 1]:
                is_swapped = True
                elems[i], elems[i + 1] = elems[i + 1], elems[i]
        # if is_swapped is True, the algorithm needs to pass through the list again
        return bubble(elems, not is_swapped, step - 1)

print(bubble(range(10,0,-1), False, len(range(10,0,-1))))
print(bubble([5,6,5,3,3], False, len([5,6,5,3,3])))
