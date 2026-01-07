interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-blue-900 to-slate-900">
      <div className="text-center max-w-lg animate-[wave-swell_0.6s_ease-out] space-y-12">
        {/* Typography-first hero section */}
        <div className="space-y-4">
          <h1 
            className="text-7xl font-bold leading-tight tracking-tight" 
            style={{ fontFamily: 'var(--font-serif)', color: '#d4a574' }}
          >
            ⚓ Yacht Club
          </h1>
          <p 
            className="text-3xl leading-snug tracking-wide" 
            style={{ fontFamily: 'var(--font-serif)', color: '#b8e6df' }}
          >
            Nautical Bingo
          </p>
          <p 
            className="text-lg text-slate-300 leading-relaxed mt-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Network with grace. Play with purpose.
          </p>
        </div>
        
        {/* Enhanced "How to Play" card */}
        <div className="bg-slate-800/90 rounded-xl p-8 shadow-2xl border border-slate-700">
          <h2 
            className="text-2xl font-semibold mb-6 tracking-wide" 
            style={{ color: '#d4a574', fontFamily: 'var(--font-serif)' }}
          >
            How to Play
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 text-left">
              <span className="text-2xl text-teal-400 flex-shrink-0">1</span>
              <p className="text-slate-200 text-base leading-relaxed">
                Find fellow sailors who match the questions
              </p>
            </div>
            <div className="h-px bg-slate-700"></div>
            <div className="flex items-start gap-4 text-left">
              <span className="text-2xl text-teal-400 flex-shrink-0">2</span>
              <p className="text-slate-200 text-base leading-relaxed">
                Tap a square when you find a match
              </p>
            </div>
            <div className="h-px bg-slate-700"></div>
            <div className="flex items-start gap-4 text-left">
              <span className="text-2xl text-teal-400 flex-shrink-0">3</span>
              <p className="text-slate-200 text-base leading-relaxed">
                Get 5 in a row to set sail! ⛵
              </p>
            </div>
          </div>
        </div>

        {/* Elevated call-to-action */}
        <div className="space-y-3">
          <p 
            className="text-sm text-slate-400 tracking-wide uppercase"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Ready to begin?
          </p>
          <button
            onClick={onStart}
            className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-5 px-10 rounded-lg text-xl shadow-xl hover:shadow-2xl active:bg-accent-dark transition-all duration-300 ease-out"
          >
            ⛵ Cast Off
          </button>
        </div>
      </div>
    </div>
  );
}
