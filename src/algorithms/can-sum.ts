/**
 * - Time complexity: O(n^m)
 * - Space complexity: O(m)
 *
 * where "m" is the target sum and "n" the size of the array of numbers.
 *
 * @param targetSum the target sum to match.
 * @param numbers the array of numbers to combine.
 */
function recursiveCanSum(targetSum: number, numbers: Array<number>): boolean {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let number of numbers) {
    if (recursiveCanSum(targetSum - number, numbers)) return true;
  }

  return false;
}

/**
 * - Time complexity: O(n * m)
 * - Space complexity: O(m)
 *
 * where "m" is the target sum and "n" the size of the array of numbers.
 *
 * @param targetSum the target sum to match.
 * @param numbers the array of numbers to combine.
 * @param buffer the buffer used for memoisation.
 */
function memoisedCanSum(targetSum: number, numbers: Array<number>, buffer: Object = {}): boolean {
  if (targetSum in buffer) return buffer[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let number of numbers) {
    if (memoisedCanSum(targetSum - number, numbers, buffer)) {
      buffer[targetSum] = true;
      return true;
    }
  }

  buffer[targetSum] = false;
  return false;
}

/**
 * @param targetSum the target sum number.
 * @param numbers the array of numbers to combine.
 * @param memoised true to optimise the recursive function by caching the intermediate responses.
 */
export interface CanSumParameters {
  targetSum: number;
  numbers: Array<number>;
  memoised?: boolean;
}

/**
 * Tests whether the target sum can be achieved by combining the sum
 * of the elements in the array.
 *
 * Every element can be used an arbitrary number of times.
 */
export default function canSum(parameters: CanSumParameters): boolean {
  const { targetSum, numbers, memoised } = parameters;

  if (memoised) {
    return memoisedCanSum(targetSum, numbers);
  }

  return recursiveCanSum(targetSum, numbers);
}
