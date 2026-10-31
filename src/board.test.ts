import { describe, expect, it } from 'vitest';
import { createBoard, findMatches } from './board';

describe('createBoard', () => {
  it('tạo lưới đúng kích thước', () => {
    const b = createBoard(6, 4);
    expect(b).toHaveLength(6);
    expect(b.every((row) => row.length === 4)).toBe(true);
  });

  it('mặc định 8x8, loại hero trong khoảng hợp lệ', () => {
    const b = createBoard();
    expect(b).toHaveLength(8);
    expect(b.flat().every((v) => v >= 0 && v < 5)).toBe(true);
  });
});

describe('findMatches', () => {
  it('phát hiện match ngang', () => {
    const b = [
      [0, 0, 0, 1],
      [1, 2, 3, 4],
    ];
    expect(findMatches(b)).toEqual([
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
    ]);
  });

  it('phát hiện match dọc', () => {
    const b = [
      [2, 0],
      [2, 1],
      [2, 3],
    ];
    expect(findMatches(b)).toEqual([
      { row: 0, col: 0 },
      { row: 1, col: 0 },
      { row: 2, col: 0 },
    ]);
  });

  it('không match khi chỉ có 2 ô liền nhau', () => {
    const b = [
      [0, 0, 1],
      [1, 2, 0],
    ];
    expect(findMatches(b)).toEqual([]);
  });
});
