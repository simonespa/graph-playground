function recursive(rows: number, columns: number): number {
  if (rows === 0 || columns === 0) return 0;
  if (rows === 1 && columns === 1) return 1;

  return recursive(rows - 1, columns) + recursive(rows, columns - 1);
}

function memoised(rows: number, columns: number, buffer: object = {}): number {
  const key = `${rows}-${columns}`;
  if(key in buffer) return buffer[key];
  if (rows <= 0 || columns <= 0) return 0;
  if (rows === 1 && columns === 1) return 1;

  buffer[key] = memoised(rows - 1, columns, buffer) + memoised(rows, columns - 1, buffer);
  return buffer[key];
}

function memoisedWithoutDuplicates(rows: number, columns: number, buffer: object = {}): number {
  let key = `${rows}-${columns}`;
  if (columns < rows) {
    key = `${columns}-${rows}`;
  }
  if(key in buffer) return buffer[key];
  if (rows <= 0 || columns <= 0) return 0;
  if (rows === 1 && columns === 1) return 1;

  buffer[key] = memoisedWithoutDuplicates(rows - 1, columns, buffer) + memoisedWithoutDuplicates(rows, columns - 1, buffer);
  return buffer[key];
}

/**
 * @param n the nth element of the Fibonacci sequence.
 * @param memoisation an option to enable the memoisation optimisation.
 */
export interface GridTravellerParameters {
  rows: number;
  columns: number;
  memoisation?: boolean;
  dedupe?: boolean;
}

export default function gridTraveller(parameters: GridTravellerParameters): number {
  const { rows, columns, memoisation, dedupe } = parameters;
  if (memoisation) {
    if (dedupe) {
      return memoisedWithoutDuplicates(rows, columns);
    }
    return memoised(rows, columns);
  }

  return recursive(rows, columns);
}

console.log(gridTraveller({ rows: 30, columns: 10, memoisation: true, dedupe: true  }));
