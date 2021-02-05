function recursiveCanSum(targetSum: number, numbers: Array<number>): boolean {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let number of numbers) {
    if (recursiveCanSum(targetSum - number, numbers)) return true;
  }

  return false;
}

function recursiveMemoisedCanSum(targetSum: number, numbers: Array<number>): boolean {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let number of numbers) {
    if (recursiveMemoisedCanSum(targetSum - number, numbers)) return true;
  }

  return false;
}

export interface CanSumParameters {
  targetSum: number;
  numbers: Array<number>;
  memoised?: boolean;
}

export default function canSum(parameters: CanSumParameters): boolean {
  const { targetSum, numbers, memoised } = parameters;

  if (memoised) {
    return recursiveMemoisedCanSum(targetSum, numbers);
  }

  return recursiveCanSum(targetSum, numbers);
}
