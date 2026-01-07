interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Animated background waves */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute w-[200%] h-full"
          style={{
            background: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(42, 157, 143, 0.3) 50px, rgba(42, 157, 143, 0.3) 100px)',
            animation: 'wave-flow 20s linear infinite'
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(42, 157, 143, 0.2) 0%, transparent 70%)'
        }}
      />

      {/* Floating nautical elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute text-6xl opacity-20"
          style={{ 
            top: '10%', 
            left: '10%',
            animation: 'float-bob 8s ease-in-out infinite'
          }}
        >
          ⚓
        </div>
        <div 
          className="absolute text-5xl opacity-15"
          style={{ 
            top: '20%', 
            right: '15%',
            animation: 'float-bob 10s ease-in-out infinite 2s'
          }}
        >
          🧭
        </div>
        <div 
          className="absolute text-4xl opacity-20"
          style={{ 
            bottom: '15%', 
            left: '8%',
            animation: 'float-diagonal 12s ease-in-out infinite 1s'
          }}
        >
          ⛵
        </div>
        <div 
          className="absolute text-5xl opacity-15"
          style={{ 
            bottom: '25%', 
            right: '10%',
            animation: 'float-bob 9s ease-in-out infinite 3s'
          }}
        >
          ⚓
        </div>
        <div 
          className="absolute text-3xl opacity-10"
          style={{ 
            top: '60%', 
            right: '25%',
            animation: 'gentle-sway 6s ease-in-out infinite'
          }}
        >
          🌊
        </div>
        <div 
          className="absolute text-4xl opacity-10"
          style={{ 
            top: '40%', 
            left: '20%',
            animation: 'rotate-slow 30s linear infinite'
          }}
        >
          🧭
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="text-center max-w-5xl w-full">
          {/* Hero title with theatrical entrance */}
          <div style={{ animation: 'wave-swell 0.8s ease-out, scale-in 0.6s ease-out' }}>
            <h1 
              className="text-7xl sm:text-8xl md:text-9xl font-bold mb-4 relative"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                color: '#d4a574',
                textShadow: '0 4px 20px rgba(212, 165, 116, 0.5), 0 0 40px rgba(212, 165, 116, 0.3)'
              }}
            >
              <span className="inline-block" style={{ animation: 'gentle-sway 4s ease-in-out infinite' }}>⚓</span>
              {' '}Yacht Club{' '}
              <span className="inline-block" style={{ animation: 'gentle-sway 4s ease-in-out infinite 2s' }}>⚓</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-12">
              <div 
                className="w-16 h-1 rounded-full"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, #2a9d8f, transparent)',
                  animation: 'shimmer-shift 3s ease-in-out infinite',
                  backgroundSize: '200% 100%'
                }}
              />
              <p 
                className="text-3xl sm:text-4xl md:text-5xl" 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  color: '#b8e6df',
                  animation: 'fade-in-up 1s ease-out 0.4s both'
                }}
              >
                Nautical Bingo
              </p>
              <div 
                className="w-16 h-1 rounded-full"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, #2a9d8f, transparent)',
                  animation: 'shimmer-shift 3s ease-in-out infinite',
                  backgroundSize: '200% 100%'
                }}
              />
            </div>
          </div>

          {/* Game flow showcase cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🎯', title: 'Find Matches', desc: 'Meet sailors who match the questions', delay: '0s' },
              { icon: '✓', title: 'Tap Squares', desc: 'Mark your card when you find a match', delay: '0.2s' },
              { icon: '⛵', title: 'Set Sail!', desc: 'Get 5 in a row and claim victory', delay: '0.4s' }
            ].map((card, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-teal-600/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-teal-400 hover:bg-slate-700/90"
                style={{ 
                  animation: `fade-in-up 0.8s ease-out ${card.delay} both`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div 
                  className="text-5xl mb-4 inline-block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
                  style={{ animation: 'float-bob 4s ease-in-out infinite' }}
                >
                  {card.icon}
                </div>
                <h3 
                  className="text-xl font-bold mb-2 transition-colors"
                  style={{ 
                    color: '#d4a574',
                    fontFamily: 'var(--font-serif)'
                  }}
                >
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced CTA section */}
          <div style={{ animation: 'fade-in-up 1s ease-out 0.6s both' }}>
            <p className="text-slate-300 text-lg mb-6">
              Ready to navigate the social seas? 
              <span className="inline-block ml-2" style={{ animation: 'gentle-sway 2s ease-in-out infinite' }}>🌊</span>
            </p>
            <button
              onClick={onStart}
              className="group relative px-12 py-5 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #2a9d8f 0%, #1b7a6f 100%)',
                boxShadow: '0 10px 30px rgba(42, 157, 143, 0.4)',
                animation: 'pulse-glow 3s ease-in-out infinite'
              }}
            >
              {/* Button shimmer effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  animation: 'shimmer-shift 2s ease-in-out infinite',
                  backgroundSize: '200% 100%'
                }}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="inline-block transition-transform group-hover:translate-x-1">⛵</span>
                Cast Off & Set Sail
                <span className="inline-block transition-transform group-hover:translate-x-1">⛵</span>
              </span>
            </button>

            {/* Supporting copy */}
            <p 
              className="mt-6 text-teal-300/80 text-sm italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              "Fair winds and following seas await thee, sailor."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
