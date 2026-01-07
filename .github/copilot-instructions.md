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

## Design Guide: Yacht Club Nautical Theme

### Color Palette
Defined in `src/index.css` `@theme` directive:
- **Primary Navy**: `#0f3a4d` (deep backgrounds, modals, dark elements)
- **Accent Teal**: `#2a9d8f` (buttons, borders, interactive elements, hover states)
- **Teal Dark**: `#1b7a6f` (button hover state)
- **Seafoam Light**: `#b8e6df` (marked/matched square background)
- **Brass Gold**: `#d4a574` (headings, gold accents, winning line indicator)

**Usage by component**:
- StartScreen: Navy gradient (`from-blue-900 to-slate-900`), gold title, teal button
- GameScreen: Slate-800 header, teal borders/text, gold title
- BingoSquare: Slate-700 unmarked (teal text), seafoam marked, gold when winning
- BingoModal: Navy background, gold heading, teal text

### Typography
Fonts loaded via Google Fonts CDN (see `index.html`):
- **Playfair Display 700** (serif): Headlines, titles (`var(--font-serif)`)
  - Used in: h1 titles, modal "AHOY!", Game Screen title
  - Character: Elegant, refined, nautical luxury
- **Montserrat 400/600** (sans-serif): Body text, buttons, labels (`var(--font-sans)`)
  - Used in: Instructions, prompts, button text
  - Character: Clean, modern, readable at small sizes

**Font application**: Use inline `style={{ fontFamily: 'var(--font-serif)' }}` for Playfair headings; default body uses Montserrat

### Animations
Custom keyframes in `src/index.css`:
- **wave-swell** (0.6s ease-out): Modal entrance animation
  - Scales from 0.9 → 1.0 and translates upward (Y: 20px → 0)
  - Used in: BingoModal
  - Effect: Wave-like emergence from bottom
- **gentle-sway** (unused but available): Subtle boat rocking motion for future features

### Emoji & Icons
Maritime-themed Unicode symbols throughout:
- ⚓ Anchor: Free space label, branded titles
- ⛵ Sailing boat: Win celebration, button actions ("Cast Off", "Keep Sailing")
- 🌊 Wave: Bingo indicator ("AHOY! You got a line!")

### Component Styling Patterns
**Buttons**:
- Default: `bg-accent` (teal)
- Hover: `bg-accent-light` (darker teal)
- Active: `bg-accent-dark` (navy)
- Classes: `font-semibold py-3 px-6 rounded-lg transition-colors`

**Cards/Containers**:
- Dark backgrounds: `bg-slate-800` or `bg-slate-900`
- Borders: `border-teal-600` or inline `borderColor: '#2a9d8f'`
- Shadows: `shadow-lg` or `shadow-xl`

**Text**:
- Light text on dark: `text-slate-200`, `text-teal-300`, `text-teal-400`
- Gold accents: `color: '#d4a574'` (inline for custom colors)

**BingoSquare States**:
- Unmarked: `bg-slate-700 text-teal-300 border-slate-600` with `active:bg-slate-500`
- Marked: `bg-marked border-marked-border text-accent-dark` (seafoam with teal border)
- Winning: `bg-gold text-slate-900 border-gold` (brass with dark text)
- Free space: Same as marked state, disabled button

### When Adding New Features
1. **Colors**: Reference `--color-*` variables from `src/index.css` @theme or use inline hex for custom shades
2. **Fonts**: Use `var(--font-serif)` for headings, `var(--font-sans)` for body
3. **Consistency**: Match existing component patterns (button styles, card borders, text colors)
4. **Animations**: Add keyframes to `src/index.css` if new motion is needed
5. **Theme coherence**: Keep nautical metaphors (sailing, anchoring, boats, waves) in copy and emojis

### Design Files Reference
- Colors & fonts: `src/index.css` (lines 3-19)
- Component styling: `src/components/*.tsx` (className and inline styles)
- Questions/theme: `src/data/questions.ts` (nautical prompts)
- Tailwind config: None—CSS-first via `@theme` directive (Tailwind v4)

## Dev & Deploy
- `npm run dev`: Vite on localhost:5173
- `npm run build`: TypeScript + Vite → auto-deploys to GitHub Pages on main
- **Base path**: `VITE_REPO_NAME` env var (set by GitHub Actions)
