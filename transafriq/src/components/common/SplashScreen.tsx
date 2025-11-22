import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onLoadingComplete: () => void;
}

export default function SplashScreen({ onLoadingComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-[#1a1d2e] to-[#2a2d3e] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo Container */}
      <div className="mb-16">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#f9a825] opacity-20 blur-3xl rounded-full animate-pulse"></div>

          {/* Logo */}
          <img
            src="/logor.png"
            alt="TransAfriq"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain relative z-10 drop-shadow-2xl"
          />
        </div>

        {/* Brand Name */}
        <div className="text-center mt-6">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">TRANS</span>
            <span className="text-[#f9a825]">AFRIQ</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Achetez à l'international et recevez en Afrique
          </p>
        </div>
      </div>

      {/* iOS-style Spinner */}
      <div className="flex flex-col items-center gap-4">
        <div className="ios-spinner">
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
          <div className="spinner-bar"></div>
        </div>

        <p className="text-gray-400 text-sm">Chargement...</p>
      </div>

      {/* Partner Logos at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          width: '100%',
          paddingLeft: '2rem',
          paddingRight: '2rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            maxWidth: '42rem',
            margin: '0 auto'
          }}
        >
          {[
            { num: 1, ext: 'svg' },
            { num: 2, ext: 'png' },
            { num: 3, ext: 'png' },
            { num: 4, ext: 'png' }
          ].map((logo) => (
            <div
              key={logo.num}
              style={{
                opacity: 0.8,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.8';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={`/pat${logo.num}.${logo.ext}`}
                alt={`Partner ${logo.num}`}
                style={{
                  height: '3rem',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ios-spinner {
          position: relative;
          width: 40px;
          height: 40px;
        }

        .spinner-bar {
          position: absolute;
          width: 3px;
          height: 10px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 3px;
          left: 50%;
          top: 50%;
          transform-origin: 50% 150%;
          animation: spinner-fade 1.2s linear infinite;
        }

        .spinner-bar:nth-child(1) {
          transform: rotate(0deg) translate(-50%, -50%);
          animation-delay: -1.1s;
        }

        .spinner-bar:nth-child(2) {
          transform: rotate(30deg) translate(-50%, -50%);
          animation-delay: -1s;
        }

        .spinner-bar:nth-child(3) {
          transform: rotate(60deg) translate(-50%, -50%);
          animation-delay: -0.9s;
        }

        .spinner-bar:nth-child(4) {
          transform: rotate(90deg) translate(-50%, -50%);
          animation-delay: -0.8s;
        }

        .spinner-bar:nth-child(5) {
          transform: rotate(120deg) translate(-50%, -50%);
          animation-delay: -0.7s;
        }

        .spinner-bar:nth-child(6) {
          transform: rotate(150deg) translate(-50%, -50%);
          animation-delay: -0.6s;
        }

        .spinner-bar:nth-child(7) {
          transform: rotate(180deg) translate(-50%, -50%);
          animation-delay: -0.5s;
        }

        .spinner-bar:nth-child(8) {
          transform: rotate(210deg) translate(-50%, -50%);
          animation-delay: -0.4s;
        }

        .spinner-bar:nth-child(9) {
          transform: rotate(240deg) translate(-50%, -50%);
          animation-delay: -0.3s;
        }

        .spinner-bar:nth-child(10) {
          transform: rotate(270deg) translate(-50%, -50%);
          animation-delay: -0.2s;
        }

        .spinner-bar:nth-child(11) {
          transform: rotate(300deg) translate(-50%, -50%);
          animation-delay: -0.1s;
        }

        .spinner-bar:nth-child(12) {
          transform: rotate(330deg) translate(-50%, -50%);
          animation-delay: 0s;
        }

        @keyframes spinner-fade {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
