/**
 * An enumeration that represents the result
 * of the comparison.
 */
export enum Comparison {
  GreaterThan = 1,
  Equal = 0,
  LessThan = -1
}

/**
 * A class that implements this interface must define
 * a way to compare its objects.
 */
export default interface Comparable<T> {
  compare(element: T): Comparison;
}
