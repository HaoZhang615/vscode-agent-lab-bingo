interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="rounded-xl p-8 max-w-xs w-full text-center shadow-xl" style={{ backgroundColor: '#0f3a4d', animation: 'wave-swell 0.6s ease-out' }}>
        <div className="text-6xl mb-4">⛵</div>
        <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)', color: '#d4a574' }}>AHOY!</h2>
        <p className="text-teal-300 mb-6 text-lg">You completed a line! 🌊</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 px-6 rounded-lg active:bg-accent-dark transition-colors"
        >
          Keep Sailing
        </button>
      </div>
    </div>
  );
}
