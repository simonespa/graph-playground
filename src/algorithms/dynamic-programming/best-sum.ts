/**
 * - Time complexity: O(n^m * m)
 * - Space complexity: O(m^2)
 *
 * where "m" is the target sum and "n" the size of the array of numbers.
 *
 * @param targetSum the target sum to match.
 * @param numbers the array of numbers to combine.
 */
function bruteForceBestSum(targetSum: number, numbers: Array<number>): Array<number> | null {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let min: null | Array<number> = null;

  for (let number of numbers) {
    const remainder = targetSum - number;
    const bestSumResult = bruteForceBestSum(remainder, numbers);
    if (bestSumResult !== null) {
      const result = [...bestSumResult, number];
      if (min === null || result.length < min.length) {
        min = result;
      }
    }
  }

  return min;
}

/**
 * - Time complexity: O(m^2 * n)
 * - Space complexity: O(m^2)
 *
 * where "m" is the target sum and "n" the size of the array of numbers.
 *
 * @param targetSum the target sum to match.
 * @param numbers the array of numbers to combine.
 * @param buffer the buffer used for memoisation.
 */
function memoisedBestSum(targetSum: number, numbers: Array<number>, buffer: Object = {}): Array<number> | null {
  if (targetSum in buffer) return buffer[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let min: null | Array<number> = null;

  for (let number of numbers) {
    const remainder = targetSum - number;
    const bestSumResult = memoisedBestSum(remainder, numbers, buffer);
    if (bestSumResult !== null) {
      const result = [...bestSumResult, number];
      if (min === null || result.length < min.length) {
        min = result;
      }
    }
  }

  buffer[targetSum] = min;
  return min;
}

/**
 * @param targetSum the target sum number.
 * @param numbers the array of numbers to combine.
 * @param memoised true to optimise the recursive function by caching the intermediate responses.
 */
export interface BestSumParameters {
  targetSum: number;
  numbers: Array<number>;
  memoised?: boolean;
}

/**
 * Returns the shortest list of elements taken from the array of numbers such that
 * the sum is equal to the target sum. It returns null otherwise.
 *
 * Every element can be used an arbitrary number of times.
 */
export default function bestSum(parameters: BestSumParameters): Array<number> | null{
  const { targetSum, numbers, memoised } = parameters;

  if (memoised) {
    return memoisedBestSum(targetSum, numbers);
  }

  return bruteForceBestSum(targetSum, numbers);
}
