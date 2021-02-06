/**
 * - Time complexity: O(2^n+m)
 * - Space complexity: O(n+m)
 *
 * where "n" is the number of rows and "m" the number of columns.
 *
 * @param rows the number of rows of the grid.
 * @param columns the number of columns of the grid.
 */
function bruteForceGridTraveller(rows: number, columns: number): number {
  if (rows === 0 || columns === 0) return 0;
  if (rows === 1 && columns === 1) return 1;

  return bruteForceGridTraveller(rows - 1, columns) + bruteForceGridTraveller(rows, columns - 1);
}

/**
 * - Time complexity: O(n+m)
 * - Space complexity: O(n+m)
 *
 * where "n" is the number of rows and "m" the number of columns.
 *
 * @param rows the number of rows of the grid.
 * @param columns the number of columns of the grid.
 * @param buffer buffer object used for memoisation.
 */
function memoisedGridTraveller(rows: number, columns: number, buffer: object = {}): number {
  const key = `${rows}-${columns}`;
  if(key in buffer) return buffer[key];
  if (rows <= 0 || columns <= 0) return 0;
  if (rows === 1 && columns === 1) return 1;

  buffer[key] = memoisedGridTraveller(rows - 1, columns, buffer) + memoisedGridTraveller(rows, columns - 1, buffer);
  return buffer[key];
}

/**
 *
 */
function dedupedGridTraveller(rows: number, columns: number, buffer: object = {}): number {
  let key = `${rows}-${columns}`;
  if (columns < rows) {
    key = `${columns}-${rows}`;
  }
  if(key in buffer) return buffer[key];
  if (rows <= 0 || columns <= 0) return 0;
  if (rows === 1 && columns === 1) return 1;

  buffer[key] = dedupedGridTraveller(rows - 1, columns, buffer) + dedupedGridTraveller(rows, columns - 1, buffer);
  return buffer[key];
}

/**
 * @param rows the number of rows of the grid.
 * @param columns the number of columns of the grid.
 * @param memoised true to optimise the recursive function by caching the intermediate responses.
 * @param deduped true to optimise the recursive function by removing duplicate branch in the tree.
 */
export interface GridTravellerParameters {
  rows: number;
  columns: number;
  memoised?: boolean;
  deduped?: boolean;
}

/**
 * Returns the number of path reachable from the top left corner to the bottom right one in a N x M grid.
 */
export default function gridTraveller(parameters: GridTravellerParameters): number {
  const { rows, columns, memoised, deduped } = parameters;

  if (deduped) {
    return dedupedGridTraveller(rows, columns);
  }

  if (memoised) {
    return memoisedGridTraveller(rows, columns);
  }

  return bruteForceGridTraveller(rows, columns);
}
