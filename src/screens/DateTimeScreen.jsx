import 'react';

const DateTimeScreen = ({ onNext, date, setDate, time, setTime }) => (
  <div className="flex flex-col items-center justify-center h-full w-full px-6 animate-fade-in">
    <div className="bg-black/40 backdrop-blur-md w-full max-w-[320px] p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center">
      <div className="text-5xl mb-4 filter drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]">📅</div>
      <h2 className="text-white text-xl font-bold uppercase tracking-wider mb-6 text-center">Quando você tá livre?</h2>
      <div className="w-full mb-4">
        <label className="text-[#ff7eb3] font-bold text-[10px] uppercase mb-1 block pl-2">Data</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-black/60 border border-white/10 text-white rounded-2xl py-3 px-4 focus:outline-none focus:border-[#ff7eb3] text-center uppercase font-bold" />
      </div>
      <div className="w-full mb-8">
        <label className="text-[#ff7eb3] font-bold text-[10px] uppercase mb-1 block pl-2">Horário</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-black/60 border border-white/10 text-white rounded-2xl py-3 px-4 focus:outline-none focus:border-[#ff7eb3] text-center font-bold" />
      </div>
      <button onClick={onNext} disabled={!date} className={`w-full font-bold py-3 rounded-full shadow-lg uppercase tracking-widest text-sm transition-all ${date ? 'bg-gradient-to-b from-[#ff5a36] to-[#d63a18] border-b-4 border-[#8c220f] active:border-b-0 active:translate-y-1 text-white' : 'bg-black/50 text-white/30 border-2 border-white/5'}`}>{date ? 'Continuar 🦋' : 'Escolha a data 👆'}</button>
    </div>
  </div>
);

export default DateTimeScreen;
