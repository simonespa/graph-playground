/**
 * - Time complexity: O(2^n)
 * - Space complexity: O(n)
 *
 * @param n the nth element in the Fibonacci sequence.
 */
function recursiveFibonacci(n: number): number {
  if (n <= 2) return 1;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 *
 * @param n the nth element in the Fibonacci sequence.
 * @param buffer buffer object used for memoisation.
 */
function memoisedFibonacci(n: number, buffer: object = {}): number {
  if (n in buffer) return buffer[n];
  if (n <= 2) return 1;

  buffer[n] = memoisedFibonacci(n - 1, buffer) + memoisedFibonacci(n - 2, buffer);
  return buffer[n];
}

/**
 * @param n the nth element in the Fibonacci sequence.
 * @param memoised true to optimise the recursive function by caching the intermediate responses.
 */
export interface FibonacciParameters {
  n: number;
  memoised?: boolean;
}

/**
 * Return the nth element of the Fibonacci sequence.
 */
export default function fibonacci(parameters: FibonacciParameters): number {
  const { n, memoised } = parameters;

  if (memoised) {
    return memoisedFibonacci(n);
  }

  return recursiveFibonacci(n);
}
