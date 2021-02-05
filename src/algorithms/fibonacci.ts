/**
 * Return the nth element of the Fibonacci sequence.
 *
 * - Time complexity: O(2^n)
 * - Space complexity: O(n)
 *
 * @param n the nth fibonacci elementh in the sequence
 */
function recursiveFibonacci(n: number): number {
  if (n <= 2) return 1;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

/**
 * Return the nth element of the Fibonacci sequence.
 *
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 *
 * @param n the nth fibonacci elementh in the sequence
 */
function recursiveMemoisedFibonacci(n: number, buffer: object = {}): number {
  if (n in buffer) return buffer[n];
  if (n <= 2) return 1;
  buffer[n] = recursiveMemoisedFibonacci(n - 1, buffer) + recursiveMemoisedFibonacci(n - 2, buffer);
  return buffer[n];
}

/**
 * @param n the nth element of the Fibonacci sequence.
 * @param memoisation an option to enable the memoisation optimisation.
 */
export interface FibonacciParameters {
  n: number;
  memoisation?: boolean;
}

export default function fibonacci(parameters: FibonacciParameters): number {
  const { n, memoisation } = parameters;
  if (memoisation) {
    return recursiveMemoisedFibonacci(n);
  }

  return recursiveFibonacci(n);
}
