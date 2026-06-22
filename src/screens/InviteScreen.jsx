
import React from 'react';

const InviteScreen = ({ onYes, onNo }) => {
  return (
    <div className="date-card invite-card animate-fade-in">
      <div className="invite-emoji">
        🥺
      </div>

      <h1 className="invite-title">
        <span>Tais,</span>
        <br />
        você aceitaria ir a um date comigo?
      </h1>

      <div className="invite-actions">
        <button
          type="button"
          onClick={onYes}
          className="primary-btn"
        >
          SIM
        </button>

        <button
          type="button"
          onClick={onNo}
          className="primary-btn"
        >
          NÃO
        </button>
      </div>
    </div>
  );
};

export default InviteScreen;
