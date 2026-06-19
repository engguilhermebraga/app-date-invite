import { useState } from 'react';
import { HeartPulse } from 'lucide-react';

const ElegantBackground = () => {
 
  // O React executa essa função apenas na primeira vez que o componente carrega.
  const [particles] = useState(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 15,
      animationDelay: Math.random() * 5,
      size: 0.5 + Math.random() * 1.5,
      opacity: 0.1 + Math.random() * 0.4,
    }));
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-gradient-to-br from-[#2a0816] via-[#1a040b] to-[#0f0206]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-slow"
          style={{
            left: `${p.left}%`,
            bottom: '-10%',
            animationDuration: `${p.animationDuration}s`,
            animationDelay: `${p.animationDelay}s`,
            opacity: p.opacity,
          }}
        >
          <HeartPulse size={p.size * 16} color="#ff7eb3" strokeWidth={1.5} />
        </div>
      ))}
      <style>{`
        @keyframes float-slow {
          0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0; }
          20% { opacity: var(--tw-bg-opacity, 0.4); }
          80% { opacity: var(--tw-bg-opacity, 0.4); }
          100% { transform: translateY(-120vh) scale(1.5) rotate(45deg); opacity: 0; }
        }
        .animate-float-slow {
          animation: float-slow linear infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }
        .elegant-button {
          background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
          box-shadow: 0 4px 15px rgba(255, 65, 108, 0.4);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .elegant-button:hover {
          box-shadow: 0 6px 20px rgba(255, 65, 108, 0.6);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default ElegantBackground;