// Logic thuần của bàn cờ match-3: không import DOM/canvas.

export const DEFAULT_ROWS = 8;
export const DEFAULT_COLS = 8;
export const HERO_TYPES = 5;
export const MIN_MATCH = 3;

export type Board = number[][];
export type Cell = { row: number; col: number };
export type Rng = () => number;

export function createBoard(
  rows: number = DEFAULT_ROWS,
  cols: number = DEFAULT_COLS,
  rng: Rng = Math.random,
): Board {
  const board: Board = [];
  for (let r = 0; r < rows; r++) {
    const line: number[] = [];
    for (let c = 0; c < cols; c++) {
      line.push(Math.min(HERO_TYPES - 1, Math.floor(rng() * HERO_TYPES)));
    }
    board.push(line);
  }
  return board;
}

// Trả về các ô thuộc chuỗi >= MIN_MATCH ô giống nhau theo hàng hoặc cột (không trùng lặp).
export function findMatches(board: Board): Cell[] {
  const seen = new Set<string>();
  const result: Cell[] = [];
  const add = (row: number, col: number) => {
    const key = `${row},${col}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push({ row, col });
    }
  };

  const rows = board.length;
  const cols = rows > 0 ? board[0].length : 0;

  for (let r = 0; r < rows; r++) {
    let start = 0;
    for (let c = 1; c <= cols; c++) {
      if (c < cols && board[r][c] === board[r][start]) continue;
      if (c - start >= MIN_MATCH) for (let k = start; k < c; k++) add(r, k);
      start = c;
    }
  }

  for (let c = 0; c < cols; c++) {
    let start = 0;
    for (let r = 1; r <= rows; r++) {
      if (r < rows && board[r][c] === board[start][c]) continue;
      if (r - start >= MIN_MATCH) for (let k = start; k < r; k++) add(k, c);
      start = r;
    }
  }

  return result;
}
