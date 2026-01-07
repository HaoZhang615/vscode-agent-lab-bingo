interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-blue-900 to-slate-900">
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)', color: '#d4a574' }}>⚓ Yacht Club</h1>
        <p className="text-2xl mb-8" style={{ fontFamily: 'var(--font-serif)', color: '#b8e6df' }}>Nautical Bingo</p>
        
        <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-teal-600 mb-8">
          <h2 className="font-semibold mb-3" style={{ color: '#d4a574', fontFamily: 'var(--font-serif)' }}>How to Play</h2>
          <ul className="text-left text-slate-200 text-sm space-y-2">
            <li>• Find fellow sailors who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to set sail! ⛵</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-lg text-lg active:bg-accent-dark transition-colors"
        >
          ⛵ Cast Off
        </button>
      </div>
    </div>
  );
}
