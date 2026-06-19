
import React, { useState, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';

import FloatingHearts from './components/FloatingHearts';
import InviteScreen from './screens/InviteScreen';
import AnnoyingScreen from './screens/AnnoyingScreen';
import ChaosScreen from './screens/ChaosScreen';
import AcceptedScreen from './screens/AcceptedScreen';
import ContractScreen from './screens/ContractScreen';
import DateTimeScreen from './screens/DateTimeScreen';
import FoodScreen from './screens/FoodScreen';
import VibeScreen from './screens/VibeScreen';
import FinalScreen from './screens/FinalScreen';

const MUSIC_URL =
  'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3';

export default function App() {
  const [step, setStep] = useState(0);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [food, setFood] = useState('');
  const [vibe, setVibe] = useState('');

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleFirstInteraction = () => {
    if (!audioRef.current || isPlaying) return;

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  return (
    <div className="app-root" onClick={handleFirstInteraction}>
      <audio ref={audioRef} src={MUSIC_URL} loop />

      <div className="app-stage">
        <FloatingHearts />

        <button
          type="button"
          aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
          onClick={(e) => {
            e.stopPropagation();
            toggleMusic();
          }}
          className="music-button"
        >
          {isPlaying ? (
            <Music size={19} className="animate-pulse text-[#ff7eb3]" />
          ) : (
            <Music2 size={19} />
          )}
        </button>

        <main className="screen-stage">
          {step === 0 && (
            <InviteScreen
              onYes={() => setStep(3)}
              onNo={() => setStep(1)}
            />
          )}

          {step === 1 && (
            <AnnoyingScreen
              onYes={() => setStep(3)}
              onChaos={() => setStep(2)}
            />
          )}

          {step === 2 && <ChaosScreen onNext={() => setStep(3)} />}

          {step === 3 && <AcceptedScreen onNext={() => setStep(4)} />}

          {step === 4 && <ContractScreen onNext={() => setStep(5)} />}

          {step === 5 && (
            <DateTimeScreen
              onNext={() => setStep(6)}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
          )}

          {step === 6 && (
            <FoodScreen
              onNext={() => setStep(7)}
              food={food}
              setFood={setFood}
            />
          )}

          {step === 7 && (
            <VibeScreen
              onNext={() => setStep(8)}
              vibe={vibe}
              setVibe={setVibe}
            />
          )}

          {step === 8 && (
            <FinalScreen
              date={date}
              time={time}
              food={food}
              vibe={vibe}
            />
          )}
        </main>
      </div>
    </div>
  );
}

