import  { useEffect } from 'react';

const ChaosScreen = ({ onNext }) => {
useEffect(() => {
// Tela avança automaticamente após 3.5 segundos
const timer = setTimeout(() => {
onNext();
}, 3500);
return () => clearTimeout(timer);
}, [onNext]);

return (
  <>
    {/* Efeito de Glitch Background */}

    <div className="date-card border-red-500/50 shadow-[0_0_50px_rgba(255,0,0,0.4)] animate-pulse flex flex-col justify-center text-center">
      <h1 className="text-red-500 text-3xl font-black mb-4 uppercase tracking-widest font-mono">
        [ ALERTA ]
      </h1>
      <p className="text-white text-sm font-mono leading-relaxed uppercase">
        Sistema detectou resistência emocional. <br/><br/>
        Bloqueando botão "Não".<br/>
        Recalculando rota para o "SIM".
      </p>

      <div className="mt-8 w-full bg-black/50 h-2 rounded-full overflow-hidden">
        <div className="bg-red-500 h-full animate-[wiggle_3s_ease-in-out_forwards]" style={{width: '100%', transition: 'width 3s linear'}}></div>
      </div>
    </div>
  </>
);
};

export default ChaosScreen;