import  { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

const ContractScreen = ({ onNext }) => {
const [checks, setChecks] = useState({ c1: false, c2: false, c3: false });
const allChecked = checks.c1 && checks.c2 && checks.c3;

const toggleCheck = (key) => setChecks(prev => ({ ...prev, [key]: !prev[key] }));

return (
  <div className="flex flex-col items-center p-6">
    <h1 className="text-2xl font-bold mb-2">Contrato do Date 📜</h1>
    <p className="text-sm text-white/70 mb-6">Leia os termos e condições</p>

    <div className="w-full flex flex-col gap-4 mb-8">
      <button onClick={() => toggleCheck('c1')} className="flex items-start gap-3 text-left group">
        <div className="mt-1">{checks.c1 ? <CheckSquare className="text-[#ff7eb3]" size={20}/> : <Square className="text-white/50 group-hover:text-white" size={20}/>}</div>
        <p className={`text-sm transition-colors ${checks.c1 ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>Prometo não sumir depois de confirmar.</p>
      </button>
      
      <button onClick={() => toggleCheck('c2')} className="flex items-start gap-3 text-left group">
        <div className="mt-1">{checks.c2 ? <CheckSquare className="text-[#ff7eb3]" size={20}/> : <Square className="text-white/50 group-hover:text-white" size={20}/>}</div>
        <p className={`text-sm transition-colors ${checks.c2 ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>Aceito rir de pelo menos uma piada ruim sua.</p>
      </button>

      <button onClick={() => toggleCheck('c3')} className="flex items-start gap-3 text-left group">
        <div className="mt-1">{checks.c3 ? <CheckSquare className="text-[#ff7eb3]" size={20}/> : <Square className="text-white/50 group-hover:text-white" size={20}/>}</div>
        <p className={`text-sm transition-colors ${checks.c3 ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>Declaro estar ciente do alto risco de gostar do date.</p>
      </button>
    </div>
    
    <button onClick={onNext} disabled={!allChecked} className="primary-btn">
      {allChecked ? 'ASSINAR E CONTINUAR ✍️' : 'ACEITE OS TERMOS 👆'}
    </button>
  </div>
);
};

export default ContractScreen;