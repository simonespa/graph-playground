/**
 * - Time complexity: O(n^m * m)
 * - Space complexity: O(m)
 *
 * where "m" is the target sum and "n" the size of the array of numbers.
 *
 * @param targetSum the target sum to match.
 * @param numbers the array of numbers to combine.
 */
function recursiveHowSum(targetSum: number, numbers: Array<number>): Array<number> | null {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    const remainder = targetSum - number;
    const result = recursiveHowSum(remainder, numbers);
    if (result != null) {
      return [...result, number];
    }
  }

  return null;
}

/**
 * - Time complexity: O(n * m^2)
 * - Space complexity: O(m^2)
 *
 * where "m" is the target sum and "n" the size of the array of numbers.
 *
 * @param targetSum the target sum to match.
 * @param numbers the array of numbers to combine.
 * @param buffer the buffer used for memoisation.
 */
function memoisedHowSum(targetSum: number, numbers: Array<number>, buffer: object = {}): Array<number> | null {
  if (targetSum in buffer) return buffer[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let number of numbers) {
    const remainder = targetSum - number;
    const result = memoisedHowSum(remainder, numbers, buffer);
    if (result != null) {
      buffer[targetSum] = [...result, number];
      return buffer[targetSum];
    }
  }

  buffer[targetSum] = null;
  return buffer[targetSum];
}

/**
 * @param targetSum the target sum number.
 * @param numbers the array of numbers to combine.
 * @param memoised true to optimise the recursive function by caching the intermediate responses.
 */
export interface HowSumParameters {
  targetSum: number;
  numbers: Array<number>;
  memoised?: boolean;
}

/**
 * Returns a list of elements taken from the array of numbers such that
 * the sum is equal to the target sum. It returns null otherwise.
 *
 * Every element can be used an arbitrary number of times.
 */
export default function howSum(parameters: HowSumParameters): Array<number> | null{
  const { targetSum, numbers, memoised } = parameters;

  if (memoised) {
    return memoisedHowSum(targetSum, numbers);
  }

  return recursiveHowSum(targetSum, numbers);
}
