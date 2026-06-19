
import 'react';

const foods = [
  { id: 'podrao', icon: '🍔', label: 'Podrão' },
  { id: 'chique', icon: '🍷', label: 'Chique' },
  { id: 'pizza', icon: '🍕', label: 'Pizza' },
  { id: 'sushi', icon: '🍣', label: 'Japonês' },
  { id: 'mexicano', icon: '🌮', label: 'Mexicano' },
  { id: 'boteco', icon: '🍟', label: 'Boteco' },
  { id: 'cafe', icon: '☕', label: 'Café' },
  { id: 'surpresa', icon: '🎁', label: 'Surpresa' },
];

const FoodScreen = ({ onNext, food, setFood }) => {
  return (
    <div className="date-card food-card animate-fade-in">
      <div className="food-header">
        <h2 className="food-title">
          O que tá afim? <span>😋</span>
        </h2>

        <p className="food-subtitle">
          O menu é por sua conta
        </p>
      </div>

      <div className="food-grid">
        {foods.map((item) => {
          const selected = food === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFood(item.id)}
              className={`food-option ${selected ? 'selected' : ''}`}
            >
              <span className="food-icon">
                {item.icon}
              </span>

              <span className="food-label">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!food}
        className="primary-btn"
      >
        {food ? 'Continuar 🦋' : 'Escolha primeiro 👆'}
      </button>
    </div>
  );
};

export default FoodScreen;
