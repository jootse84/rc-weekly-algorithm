def bubble(l_elems, is_sorted, step):
    if step is 1 or is_sorted:
        return l_elems
    else:
        is_swapped = False
        for i in range(len(l_elems)):
            if i < len(l_elems) - 1 and l_elems[i] > l_elems[i + 1]:
                is_swapped = True
                l_elems[i], l_elems[i + 1] = l_elems[i + 1], l_elems[i]
        return bubble(l_elems, not is_swapped, step - 1)

print(bubble(range(10,0,-1), False, len(range(10,0,-1))))
print(bubble([5,6,5,3,3], False, len([5,6,5,3,3])))
