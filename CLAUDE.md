# hero-match

Game match-3 trên trình duyệt (HTML5 canvas). Dự án thử nghiệm agent swarm.

## Stack
TypeScript + Vite, Vitest, Node/npm. Không backend, không DB.

## Lệnh
- Cài: `npm install`
- Dev: `npm run dev`
- Test: `npm test` (vitest run)
- Build: `npm run build` (tsc --noEmit && vite build, ra `dist/`)

## Cấu trúc
- `src/board.ts` — logic thuần (tạo lưới, phát hiện match), không đụng DOM/canvas
- `src/main.ts` — lấy canvas và render lưới
- `src/board.test.ts` — test Vitest cho board
- `index.html` — trang chứa canvas

## Không được đụng
`package-lock.json`, `vite.config.ts`, `tsconfig.json`, `.github/**` (protected).

## Quy ước
- Logic game đặt ở `board.ts` (thuần, test được); render tách riêng ở `main.ts`.
- Logic mới phải có test trong file `*.test.ts` cạnh nó.
- Commit message bắt đầu bằng mã ticket (vd. `HERO-1: ...`).
