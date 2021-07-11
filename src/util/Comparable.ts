/**
 * A comparable object.
 */
export default interface Comparable<T> {
  compare(item: T): ComparisonOperator;
}

/**
 * An enumeration that represents the comparison operator:
 * - EqualTo: "="
 * - LessThan: "<" (strictly less than)
 * - GreaterThan: ">" (strictly greater than)
 */
export enum ComparisonOperator { EqualTo, LessThan, GreaterThan };

/**
 *
 */
export enum ComparisonType { Max, Min };

/**
 * An enumeration that represents the left and right operands of a comparison.
 */
export enum Operand { Left, Right };

/**
 * Tells which operand wins based on the comparison type (i.e. max or min).
 * @param leftOperand
 * @param rightOperand
 * @param comparisonType
 */
export function whoWins<T extends Comparable<T>>(leftOperand: T, rightOperand: T, comparisonType: ComparisonType): Operand {
  const comparison = rightOperand.compare(leftOperand);

  if (
    comparisonType === ComparisonType.Max && comparison === ComparisonOperator.GreaterThan ||
    comparisonType === ComparisonType.Min && comparison === ComparisonOperator.LessThan
  ) {
    return Operand.Right;
  }

  return Operand.Left;
}
