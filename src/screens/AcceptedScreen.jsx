import 'react';
import { CheckCircle2 } from 'lucide-react';

const AcceptedScreen = ({ onNext }) => (
  <div className="flex flex-col items-center justify-center h-full w-full px-6 animate-fade-in">
    <div className="text-[100px] mb-8 animate-bounce filter drop-shadow-2xl">😏<span className="absolute -bottom-2 -left-4 text-5xl">🌹</span></div>
    <div className="bg-black/40 backdrop-blur-md w-full max-w-[320px] p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center text-center">
      <h2 className="text-[#ff7eb3] text-xl font-bold uppercase tracking-wider mb-2 flex items-center gap-2">Sábia Decisão! <CheckCircle2 size={20} /></h2>
      <p className="text-white/70 text-xs font-medium mb-8">Eu já sabia, mas obrigado por confirmar kkkk</p>
      <button onClick={onNext} className="bg-gradient-to-b from-[#ff5a36] to-[#d63a18] text-white font-bold py-3 w-full rounded-full shadow-lg border-b-4 border-[#8c220f] active:border-b-0 active:translate-y-1 uppercase tracking-widest text-sm transition-all">PRÓXIMO 🦋</button>
    </div>
  </div>
);

export default AcceptedScreen;
