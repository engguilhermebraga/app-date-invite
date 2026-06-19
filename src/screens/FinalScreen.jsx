import  { useState } from 'react';
import { CalendarHeart, Clock, Instagram, Copy } from 'lucide-react';

const FinalScreen = ({ date, time, food, vibe }) => {
  const [copied, setCopied] = useState(false);
  
  const formatExtensiveDate = (d) => {
    if (!d) return '';
    const [y, m, day] = d.split('-'); 
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${day} de ${months[parseInt(m, 10) - 1]}, ${y}`;
  };
  
  const foodData = { 'podrao': { i: '🍔', l: 'Podrão' }, 'chique': { i: '🍷', l: 'Jantar Chique' }, 'pizza': { i: '🍕', l: 'Pizza' }, 'sushi': { i: '🍣', l: 'Japonês' }, 'mexicano': { i: '🌮', l: 'Mexicano' }, 'boteco': { i: '🍟', l: 'Boteco' }, 'cafe': { i: '☕', l: 'Café' }, 'surpresa': { i: '🎁', l: 'Surpresa' } }[food] || { i: '🍽️', l: food };
  const vibeData = { 'drinks': { i: '🍸', l: 'Drinks' }, 'filminho': { i: '🍿', l: 'Filminho' }, 'karaoke': { i: '🎤', l: 'Karaoke' }, 'passeio': { i: '🌙', l: 'Passeio' }, 'jogos': { i: '🎳', l: 'Jogos' }, 'role': { i: '🎲', l: 'Aleatório' } }[vibe] || { i: '✨', l: vibe };

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    // eslint-disable-next-line no-unused-vars
    try { document.execCommand('copy'); } catch (err) { /* empty */ }
    document.body.removeChild(textArea);
  };

  const handleInstagramSend = () => {
    const msg = `Oii! Confirmei o nosso date VIP! 🥰\n\n🗓️ *Data:* ${formatExtensiveDate(date)}\n⏰ *Hora:* ${time}\n🍽️ *Menu:* ${foodData.l}\n✨ *Vibe:* ${vibeData.l}\n\nO plano tá perfeito. Só vem! 🍷`;
    
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(msg).then(triggerRedirect);
    } else {
      fallbackCopyTextToClipboard(msg);
      triggerRedirect();
    }
  };

  const triggerRedirect = () => {
    setCopied(true);
    const instagramUser = "engguilhermebr"; // COLOQUE SEU INSTAGRAM AQUI
    setTimeout(() => { 
      window.open(`https://www.instagram.com/${instagramUser}/`, '_blank'); 
      setCopied(false); 
    }, 2000);
  };

  return (
    <div className="date-screen animate-fade-in">
      <div className="flex flex-col items-center justify-center w-full max-w-[340px]">
        
        <div className="relative w-32 h-32 mb-4 flex items-center justify-center shrink-0">
          <div className="absolute inset-0 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="bg-black/40 backdrop-blur-md w-28 h-28 rounded-full flex items-center justify-center relative z-10 border border-white/20">
            <span className="text-6xl absolute z-10 transform -translate-x-2 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]">🐧</span>
            <span className="text-4xl absolute z-20 top-4 right-4 transform rotate-12 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]">🕶️</span>
            <span className="text-4xl absolute z-30 bottom-2 -left-2 transform -rotate-12 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]">🌹</span>
          </div>
        </div>

        <div className="date-card overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"></div>
          
          <h2 className="text-white text-xl font-bold mb-1 text-center leading-tight">Ta marcado.<br/>Só vem. 🍷</h2>
          <p className="text-[#ff7eb3] text-[10px] font-bold mb-6 mt-2 text-center uppercase tracking-widest">Convite VIP Confirmado</p>
          
          <div className="w-full bg-black/40 rounded-2xl p-4 border border-white/5 flex flex-col gap-3 mb-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-2"><div className="flex items-center gap-2"><CalendarHeart size={14} className="text-[#ff7eb3]"/><span className="text-white/60 text-[10px] uppercase tracking-wider font-bold">Data</span></div><span className="text-white font-bold text-xs">{formatExtensiveDate(date)}</span></div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2"><div className="flex items-center gap-2"><Clock size={14} className="text-[#ff7eb3]"/><span className="text-white/60 text-[10px] uppercase tracking-wider font-bold">Hora</span></div><span className="text-white font-bold text-xs">{time}</span></div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2"><div className="flex items-center gap-2"><span className="text-sm">{foodData.i}</span><span className="text-white/60 text-[10px] uppercase tracking-wider font-bold">Menu</span></div><span className="text-white font-bold text-xs">{foodData.l}</span></div>
            <div className="flex justify-between items-center"><div className="flex items-center gap-2"><span className="text-sm">{vibeData.i}</span><span className="text-white/60 text-[10px] uppercase tracking-wider font-bold">Vibe</span></div><span className="text-white font-bold text-xs">{vibeData.l}</span></div>
          </div>

          <button onClick={handleInstagramSend} className="primary-btn">
            {copied ? <><Copy size={16}/> COPIADO!</> : <><Instagram size={16}/> MANDAR NO INSTA</>}
          </button>
          {copied && <p className="text-[10px] text-white/60 mt-3 text-center font-semibold">Cole no meu direct! Abrindo Instagram...</p>}
        </div>
      </div>
    </div>
  );
};

export default FinalScreen;
