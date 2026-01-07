# Copilot Instructions - Soc Ops Bingo Game

## Pre-Commit Checklist
- [ ] `npm run lint` passes (ESLint strict mode, no unused imports)
- [ ] `npm run build` succeeds (TypeScript + Vite)
- [ ] `npm test` passes (Vitest with unit tests in bingoLogic.test.ts)

## Overview
React + TypeScript bingo game for mixers. Players match prompts in a 5×5 grid (24 random questions + 1 free center space) to achieve 5-in-a-row. Uses Vite, Tailwind v4, and localStorage persistence.

## Architecture
- **App.tsx**: Routes `StartScreen` ↔ `GameScreen` based on game state
- **useBingoGame**: State orchestration + localStorage persistence (useState, validation)
- **bingoLogic.ts**: Pure functions (generateBoard, toggleSquare, checkBingo) → easy to test
- **types/index.ts**: Centralized types (BingoSquareData, GameState, BingoLine)

**Data flow**: Start game → generateBoard (24 shuffled questions + center free space) → click square → toggleSquare → checkBingo → if win, persist & show modal

## Key Patterns
- **Center square (index 12)**: Pre-marked, isFreeSpace=true for special handling
- **Flat array board**: Not 2D matrix; calculations use array indices directly
- **localStorage**: Schema versioned; strict validation prevents corruption
- **Tailwind v4**: CSS-first via `@tailwindcss/vite`, no config; colors: gray-*, amber-*
- **Strict TypeScript**: types/index.ts used everywhere; functions have explicit return types

## Common Tasks
| Task | File(s) |
|------|---------|
| Add features | `useBingoGame.ts` (state), `GameScreen.tsx` (UI) |
| Fix win logic | `bingoLogic.ts` (+ test in bingoLogic.test.ts) |
| Update prompts | `src/data/questions.ts` |
| Styling | Tailwind classes in component `className` |
| localStorage bugs | `useBingoGame.ts` validateStoredData function |

## Dev & Deploy
- `npm run dev`: Vite on localhost:5173
- `npm run build`: TypeScript + Vite → auto-deploys to GitHub Pages on main
- **Base path**: `VITE_REPO_NAME` env var (set by GitHub Actions)
