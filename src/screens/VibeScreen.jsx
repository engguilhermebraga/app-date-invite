import 'react';

const VibeScreen = ({ onNext, vibe, setVibe }) => {
  const vibes = [
    { id: 'drinks', icon: '🍸', label: 'Drinks' }, { id: 'filminho', icon: '🍿', label: 'Filminho' },
    { id: 'karaoke', icon: '🎤', label: 'Karaoke' }, { id: 'passeio', icon: '🌙', label: 'Passeio' },
    { id: 'jogos', icon: '🎳', label: 'Jogos' }, { id: 'role', icon: '🎲', label: 'Aleatório' },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 animate-fade-in">
      <div className="bg-black/40 backdrop-blur-xl w-full max-w-[340px] p-6 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center max-h-[85vh]">
        <div className="w-full text-center mb-4 shrink-0">
          <h2 className="text-white text-xl font-bold uppercase tracking-wider mb-1">Qual é a vibe? <span className="animate-pulse inline-block">🌟</span></h2>
          <p className="text-white/50 text-[11px] uppercase tracking-widest font-semibold">Pra fechar a noite bem</p>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full mb-6 overflow-y-auto hide-scrollbar py-2 shrink">
          {vibes.map((item) => (
            <button key={item.id} onClick={() => setVibe(item.id)} className={`group flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 active:scale-95 ${vibe === item.id ? 'border-[#ff7eb3] bg-[#ff7eb3]/20 shadow-[0_0_20px_rgba(255,126,179,0.3)]' : 'border-white/5 bg-white/5 hover:bg-white/10'}`}>
              <span className={`text-4xl mb-2 filter transition-transform duration-300 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)] ${vibe === item.id ? 'scale-110 -translate-y-1' : 'group-hover:-translate-y-1'}`}>{item.icon}</span>
              <span className={`text-[11px] font-bold tracking-wide ${vibe === item.id ? 'text-[#ff7eb3]' : 'text-white/80'}`}>{item.label}</span>
            </button>
          ))}
        </div>
        <button onClick={onNext} disabled={!vibe} className={`w-full font-bold py-4 rounded-full shadow-lg uppercase tracking-widest text-sm transition-all duration-300 shrink-0 ${vibe ? 'bg-gradient-to-b from-[#ff5a36] to-[#d63a18] text-white active:scale-95 border-b-4 border-[#8c220f] active:border-b-0 active:translate-y-1' : 'bg-black/50 text-white/30 border-2 border-white/5'}`}>{vibe ? 'Gerar Convite VIP 🦋' : 'Escolha a vibe 👆'}</button>
      </div>
    </div>
  );
};

export default VibeScreen;