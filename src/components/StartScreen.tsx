interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden">
      {/* Layered Background with Radial Gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-slate-800/50 via-slate-900 to-[#0f3a4d]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#2a9d8f]/10 via-transparent to-transparent" style={{ backgroundPosition: '70% 30%' }}></div>
      
      {/* Subtle Wave Pattern SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50 Q 25 40, 50 50 T 100 50" fill="none" stroke="#2a9d8f" strokeWidth="0.5"/>
            <path d="M0 60 Q 25 50, 50 60 T 100 60" fill="none" stroke="#2a9d8f" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>

      {/* Animated Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20" style={{ animation: 'gentle-sway 4s ease-in-out infinite' }}>⚓</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20" style={{ animation: 'gentle-sway 5s ease-in-out infinite 0.5s' }}>⛵</div>
      <div className="absolute top-1/3 right-20 text-5xl opacity-15" style={{ animation: 'gentle-sway 6s ease-in-out infinite 1s' }}>🌊</div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        {/* Hero Section */}
        <div style={{ animation: 'wave-swell 0.6s ease-out' }}>
          <h1 className="text-7xl md:text-8xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)', color: '#d4a574', textShadow: '0 4px 20px rgba(212, 165, 116, 0.3)' }}>
            ⚓ Yacht Club
          </h1>
          <p className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-serif)', color: '#b8e6df' }}>
            Nautical Bingo
          </p>
          <p className="text-lg md:text-xl text-teal-300 mb-12 italic">
            Network like never before—one question at a time
          </p>
        </div>

        {/* 3-Step Game Flow Teaser */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {/* Step 1 */}
          <div 
            className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-teal-600/40 hover:border-teal-600 transition-all hover:scale-105"
            style={{ animation: 'fade-in 0.6s ease-out' }}
          >
            <div className="text-5xl mb-3">💬</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#d4a574', fontFamily: 'var(--font-serif)' }}>
              Ask
            </h3>
            <p className="text-slate-300 text-sm">
              Find fellow sailors who match the prompts
            </p>
          </div>

          {/* Step 2 */}
          <div 
            className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-teal-600/40 hover:border-teal-600 transition-all hover:scale-105"
            style={{ animation: 'fade-in 0.6s ease-out 0.2s', animationFillMode: 'both' }}
          >
            <div className="text-5xl mb-3">✓</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#d4a574', fontFamily: 'var(--font-serif)' }}>
              Match
            </h3>
            <p className="text-slate-300 text-sm">
              Tap squares as you discover connections
            </p>
          </div>

          {/* Step 3 */}
          <div 
            className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-teal-600/40 hover:border-teal-600 transition-all hover:scale-105"
            style={{ animation: 'fade-in 0.6s ease-out 0.4s', animationFillMode: 'both' }}
          >
            <div className="text-5xl mb-3">🏆</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#d4a574', fontFamily: 'var(--font-serif)' }}>
              Score
            </h3>
            <p className="text-slate-300 text-sm">
              Get 5 in a row to claim victory!
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div 
          className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-left md:text-center"
          style={{ animation: 'fade-in 0.6s ease-out 0.6s', animationFillMode: 'both' }}
        >
          <div className="flex items-start md:items-center md:flex-col gap-3">
            <span className="text-4xl">⛵</span>
            <div>
              <h4 className="font-semibold text-teal-300 mb-1">Break the Ice</h4>
              <p className="text-slate-400 text-sm">Start conversations naturally</p>
            </div>
          </div>
          <div className="flex items-start md:items-center md:flex-col gap-3">
            <span className="text-4xl">🌊</span>
            <div>
              <h4 className="font-semibold text-teal-300 mb-1">Have Fun</h4>
              <p className="text-slate-400 text-sm">Turn networking into a game</p>
            </div>
          </div>
          <div className="flex items-start md:items-center md:flex-col gap-3">
            <span className="text-4xl">⚓</span>
            <div>
              <h4 className="font-semibold text-teal-300 mb-1">Remember Connections</h4>
              <p className="text-slate-400 text-sm">Create memorable moments</p>
            </div>
          </div>
        </div>

        {/* Enhanced Call-to-Action */}
        <div 
          className="max-w-md mx-auto"
          style={{ animation: 'fade-in 0.6s ease-out 0.8s', animationFillMode: 'both' }}
        >
          <p className="text-teal-300 mb-4 text-lg font-semibold">
            Ready to set sail?
          </p>
          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white font-bold py-5 px-10 rounded-xl text-xl shadow-2xl active:scale-95 transition-all hover:shadow-accent/50"
            style={{ 
              boxShadow: '0 10px 40px rgba(42, 157, 143, 0.3)',
            }}
          >
            ⛵ Cast Off
          </button>
        </div>
      </div>
    </div>
  );
}
