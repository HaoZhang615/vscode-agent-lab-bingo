import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-slate-900">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-slate-800 border-b border-teal-600">
        <button
          onClick={onReset}
          className="text-teal-400 text-sm px-3 py-1.5 rounded hover:bg-slate-700 active:bg-slate-600"
        >
          ← Back
        </button>
        <h1 className="font-bold" style={{ fontFamily: 'var(--font-serif)', color: '#d4a574' }}>⚓ Yacht Club</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-teal-300 text-sm py-2 px-4">
        Find sailors who match these questions.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="text-white text-center py-2 font-semibold text-sm border-b-2" style={{ backgroundColor: '#2a9d8f', borderColor: '#d4a574' }}>
          ⛵ AHOY! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
