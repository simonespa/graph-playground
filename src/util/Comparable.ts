/**
 * An enumeration that represents the result
 * of the comparison.
 */
export enum Comparison {
  EqualTo = 1,
  LessThan = 2,
  GreaterThan = 4,
  LessThanOrEqualTo = 3,
  GreaterThanOrEqualTo = 5
}

/**
 * A class that implements this interface must define
 * a way to compare its objects.
 */
export default interface Comparable<T> {
  compare(element: T): Comparison;
}
