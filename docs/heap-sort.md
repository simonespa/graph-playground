# Heap sort
## Phases
### Build heap
Start from the middle of the array to build the Max heap - O(n/2)

### Extraction
This performs the ascending ordering.

1. Swap the root element with theith element, where i starts from N - 1 until 0. This approach sort the algorithm ascending.
2. Heapify the tree again. Bubble the element downward to restore the heap property again.

## Indexes
parent: (i - 1)/2
left child: 2 * p + 1
right child: 2 * p + 2
