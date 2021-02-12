import SortingOrder from '../../util/SortingOrder';

interface Split {
  left: Array<number>,
  right: Array<number>
}

function split(input: Array<number>): Split {
  const pivot = Math.floor(input.length / 2);
  return {
    left: input.slice(0, pivot),
    right: input.slice(pivot)
  }
}

enum Operand {
  Left = 0,
  Right = 1
}

function whoGoesFirst(x: number, y: number, order: SortingOrder): Operand {
  if (order === SortingOrder.Ascending && x <= y) {
    return Operand.Left;
  } else if (order === SortingOrder.Ascending && x > y) {
    return Operand.Right;
  } else if (order === SortingOrder.Descending && x <= y) {
    return Operand.Right;
  } else {
    return Operand.Left;
  }
}

function merge(left: Array<number>, right: Array<number>, order: SortingOrder): Array<number> {
  let leftIndex = 0;
  let rightIndex = 0;

  const sortedArray: Array<number> = [];

  // while the left index or the right index are not out of bound
  while (leftIndex < left.length || rightIndex < right.length) {
    if (leftIndex < left.length && rightIndex < right.length) {
      if (whoGoesFirst(left[leftIndex], right[rightIndex], order) === Operand.Left) {
        sortedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        sortedArray.push(right[rightIndex]);
        rightIndex++;
      }
    } else if (leftIndex < left.length && rightIndex >= right.length) {
      sortedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArray;
}

/**
 * Sort the array of numbers in either ascending or descending order, applying the merge sort algorithm.
 *
 * - Time complexity: O(N log(N)) where N is the size of the array.
 *
 * @param input the array of numbers to sort.
 * @param order specify the order of sorting: ascending or descending.
 */
export default function mergeSort(input: Array<number>, order: SortingOrder): Array<number> {
  if (input.length <= 1) return input;

  const splitInput: Split = split(input);

  const sortedLeft = mergeSort(splitInput.left, order);
  const sortedRight = mergeSort(splitInput.right, order);

  return merge(sortedLeft, sortedRight, order);
}
