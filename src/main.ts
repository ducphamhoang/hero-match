import { createBoard } from './board';

const COLORS = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6'];

const canvas = document.getElementById('board') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const board = createBoard();
const rows = board.length;
const cols = board[0].length;
const cw = canvas.width / cols;
const ch = canvas.height / rows;

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    ctx.fillStyle = COLORS[board[r][c]];
    ctx.fillRect(c * cw + 1, r * ch + 1, cw - 2, ch - 2);
  }
}
