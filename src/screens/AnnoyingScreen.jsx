/* eslint-disable no-unused-vars */

import React, { useState, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

const AnnoyingScreen = ({ onYes, onChaos }) => {
  const [clickCount, setClickCount] = useState(0);
  const [noStyle, setNoStyle] = useState({
    position: 'absolute',
    bottom: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
  });
  const [noText, setNoText] = useState('Não...');

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const phrases = [
    'TEM CERTEZA?',
    'PENSA BEM...',
    'POR FAVOR!!',
    'SÉRIO ISSO?',
    'ÚLTIMA CHANCE!',
    '💔',
  ];

  const taunts = [
    'Errou! 😜',
    'Tenta de novo! 🏃‍♂️',
    'Quase! 🤏',
    'Lento! 🐢',
    'Ainda não!',
  ];

  const moveNoButton = (e) => {
    if (e?.preventDefault) {
      e.preventDefault();
    }

    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Ativa o Modo Caos após 7 tentativas
    if (newCount >= 7) {
      if (typeof onChaos === 'function') {
        onChaos();
      }

      return;
    }

    setNoText(taunts[Math.floor(Math.random() * taunts.length)]);

    if (!containerRef.current || !cardRef.current) {
      return;
    }

    const container = containerRef.current.getBoundingClientRect();
    const card = cardRef.current.getBoundingClientRect();

    const btnW = 100;
    const btnH = 45;

    let newX = 20;
    let newY = container.height - btnH - 40;
    let overlapping = true;
    let attempts = 0;

    // Evita o card principal
    while (overlapping && attempts < 50) {
      newX = Math.max(20, Math.random() * (container.width - btnW - 20));
      newY = Math.max(80, Math.random() * (container.height - btnH - 80));

      const relativeCardLeft = card.left - container.left;
      const relativeCardTop = card.top - container.top;

      const collides =
        newX < relativeCardLeft + card.width + 20 &&
        newX + btnW > relativeCardLeft - 20 &&
        newY < relativeCardTop + card.height + 20 &&
        newY + btnH > relativeCardTop - 20;

      overlapping = collides;
      attempts += 1;
    }

    setNoStyle({
      position: 'absolute',
      left: `${newX}px`,
      top: `${newY}px`,
      transform: 'none',
      transition: 'all 0.15s ease',
    });
  };

  // Limita o crescimento do botão SIM para não estourar a tela
  const yesScale = Math.min(1 + clickCount * 0.15, 1.5);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-start min-h-full w-full px-6 pt-24 pb-8 overflow-hidden"
    >
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#ff5a36] text-white px-6 py-2 rounded-full font-bold animate-bounce shadow-lg text-lg tracking-wide border-b-4 border-[#c73e22] z-30 flex items-center gap-2 whitespace-nowrap">
        <AlertTriangle size={18} />
        {phrases[clickCount % phrases.length]}
      </div>

      <div ref={cardRef} className="date-card z-20">
        <h1 className="text-white text-[24px] font-bold mb-10 text-center uppercase tracking-wide leading-tight">
          <span className="text-[#ff7eb3]">Tais,</span>
          <br />
          você aceitaria ir a um date comigo?
        </h1>

        <div className="flex w-full justify-center h-20 items-center shrink-0">
          <button
            onClick={onYes}
            style={{ transform: `scale(${yesScale})` }}
            className="primary-btn whitespace-nowrap shadow-[0_0_20px_rgba(255,90,54,0.5)]"
          >
            SIM, EU ACEITO!
          </button>
        </div>
      </div>

      <button
        onMouseEnter={moveNoButton}
        onTouchStart={moveNoButton}
        onClick={moveNoButton}
        style={noStyle}
        className="bg-black/60 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full shadow-lg border-b-4 border-[#2e1009] text-sm z-[100] whitespace-nowrap absolute"
      >
        {noText}
      </button>
    </div>
  );
};

export default AnnoyingScreen;
