/**
 * - Time complexity: O(n^m)
 * - Space complexity: O(m^2)
 *
 * where "m" is the length of the target word and "n" is the length of the substrings array.
 *
 * @param targetWord the target word to match.
 * @param substrings the array of substrings to combine.
 */
function bruteForceCanConstruct(targetWord: string, substrings: Array<string>): boolean {
  if (targetWord.length === 0) return true;

  for (let substring of substrings) {
    if (targetWord.startsWith(substring)) {
      const newTargetWord = targetWord.slice(substring.length);
      if (bruteForceCanConstruct(newTargetWord, substrings)) return true;
    }
  }

  return false;
}

function memoisedCanConstruct(targetWord: string, substrings: Array<string>, buffer: object = {}): boolean {
  if (targetWord in buffer) return buffer[targetWord];
  if (targetWord.length === 0) return true;

  for (let substring of substrings) {
    if (targetWord.startsWith(substring)) {
      const newTargetWord = targetWord.slice(substring.length);
      if (memoisedCanConstruct(newTargetWord, substrings, buffer)) {
        buffer[targetWord] = true;
        return true;
      }
    }
  }

  buffer[targetWord] = false
  return false;
}

/**
 * @param word the target word to match.
 * @param substrings the array of substrings to combine.
 * @param memoised true to optimise the recursive function by caching the intermediate responses.
 */
export interface CanConstructParameters {
  word: string,
  substrings: Array<string>;
  memoised?: boolean;
}

/**
 * Tests whether the target string can be matched by combining the elements
 * of the substrings array.
 *
 * Every element can be used an arbitrary number of times.
 */
export default function canConstruct(parameters: CanConstructParameters): boolean {
  const { word, substrings, memoised } = parameters;

  if (memoised) {
    return memoisedCanConstruct(word, substrings);
  }

  return bruteForceCanConstruct(word, substrings);
}
